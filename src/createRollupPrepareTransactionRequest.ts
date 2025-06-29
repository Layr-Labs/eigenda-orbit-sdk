import { Address, PublicClient, Transport, Chain, encodeFunctionData, zeroAddress } from 'viem';

import { defaults } from './createRollupDefaults';
import { createRollupGetCallValue } from './createRollupGetCallValue';
import { createRollupGetMaxDataSize } from './createRollupGetMaxDataSize';
import { rollupCreatorABI } from './contracts/RollupCreator';
import { validateParentChain } from './types/ParentChain';
import { isCustomFeeTokenAddress } from './utils/isCustomFeeTokenAddress';
import { ChainConfig } from './types/ChainConfig';
import { isAnyTrustChainConfig } from './utils/isAnyTrustChainConfig';
import { isEigenDAChainConfig } from './utils/isEigenDAChainConfig';
import { getRollupCreatorAddress } from './utils/getters';
import { fetchDecimals } from './utils/erc20';
import { TransactionRequestGasOverrides, applyPercentIncrease } from './utils/gasOverrides';

import { Prettify } from './types/utils';
import {
  CreateRollupFunctionInputs,
  CreateRollupParams,
  WithRollupCreatorAddressOverride,
} from './types/createRollupTypes';

function createRollupEncodeFunctionData(args: CreateRollupFunctionInputs) {
  return encodeFunctionData({
    abi: rollupCreatorABI,
    functionName: 'createRollup',
    args,
  });
}

export type CreateRollupPrepareTransactionRequestParams<TChain extends Chain | undefined> =
  Prettify<
    WithRollupCreatorAddressOverride<{
      params: CreateRollupParams;
      account: Address;
      publicClient: PublicClient<Transport, TChain>;
      gasOverrides?: TransactionRequestGasOverrides;
    }>
  >;

export async function createRollupPrepareTransactionRequest<TChain extends Chain | undefined>({
  params,
  account,
  publicClient,
  gasOverrides,
  rollupCreatorAddressOverride,
}: CreateRollupPrepareTransactionRequestParams<TChain>) {
  const chainId = validateParentChain(publicClient);

  if (params.batchPosters.some((address) => address === zeroAddress)) {
    throw new Error(`"params.batchPosters" can't include an zero address.`);
  }

  if (params.validators.length === 0 || params.validators.includes(zeroAddress)) {
    throw new Error(`"params.validators" can't be empty or contain the zero address.`);
  }

  const chainConfig: ChainConfig = JSON.parse(params.config.chainConfig);

  if (isCustomFeeTokenAddress(params.nativeToken)) {
    // custom fee token is only allowed for anytrust and eigenda chains
    if (!isAnyTrustChainConfig(chainConfig) && !isEigenDAChainConfig(chainConfig)) {
      throw new Error(
        `"params.nativeToken" can only be used on AnyTrust or EigenDA chains. Set "arbitrum.DataAvailabilityCommittee" to "true" or "arbitrum.EigenDA" to "true" in the chain config.`,
      );
    }

    // custom fee token is only allowed to have 18 decimals
    if ((await fetchDecimals({ address: params.nativeToken, publicClient })) !== 18) {
      throw new Error(
        `"params.nativeToken" can only be configured with a token that uses 18 decimals.`,
      );
    }
  }

  const maxDataSize = createRollupGetMaxDataSize(chainId);
  // Set the default batchPosterManager to the deployer account
  const batchPosterManager = !params.batchPosterManager ? account : params.batchPosterManager;
  const paramsWithDefaults = { ...defaults, ...params, maxDataSize, batchPosterManager };

  // @ts-ignore (todo: fix viem type issue)
  const request = await publicClient.prepareTransactionRequest({
    chain: publicClient.chain,
    to: rollupCreatorAddressOverride ?? getRollupCreatorAddress(publicClient),
    data: createRollupEncodeFunctionData([paramsWithDefaults]),
    value: createRollupGetCallValue(paramsWithDefaults),
    account,
    // if the base gas limit override was provided, hardcode gas to 0 to skip estimation
    // we'll set the actual value in the code below
    gas: typeof gasOverrides?.gasLimit?.base !== 'undefined' ? 0n : undefined,
  });

  // potential gas overrides (gas limit)
  if (gasOverrides && gasOverrides.gasLimit) {
    request.gas = applyPercentIncrease({
      // the ! is here because we should let it error in case we don't have the estimated gas
      base: gasOverrides.gasLimit.base ?? request.gas!,
      percentIncrease: gasOverrides.gasLimit.percentIncrease,
    });
  }

  return { ...request, chainId };
}
