import { it, expect } from 'vitest';
import { createPublicClient, http, zeroAddress } from 'viem';
import { arbitrumSepolia } from 'viem/chains';

import { generateChainId } from './utils';
import { prepareChainConfig } from './prepareChainConfig';
import { createRollupPrepareDeploymentParamsConfig } from './createRollupPrepareDeploymentParamsConfig';
import { createRollupPrepareTransactionRequest } from './createRollupPrepareTransactionRequest';
import { rollupCreatorAddress } from './contracts/RollupCreator';

import { getNitroTestnodePrivateKeyAccounts } from './testHelpers';

const testnodeAccounts = getNitroTestnodePrivateKeyAccounts();
const deployer = testnodeAccounts.deployer;

const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});

it(`fails to prepare transaction request if "params.batchPoster" is set to the zero address`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address },
  });

  // prepare the transaction for deploying the core contracts
  await expect(
    createRollupPrepareTransactionRequest({
      params: {
        config: createRollupPrepareDeploymentParamsConfig(publicClient, {
          chainId: BigInt(chainId),
          owner: deployer.address,
          chainConfig,
        }),
        // set batch poster to the zero address
        batchPosters: [zeroAddress],
        validators: [deployer.address],
        batchPosterManager: deployer.address,
        eigenDACertVerifier: deployer.address,
      },
      account: deployer.address,
      publicClient,
    }),
  ).rejects.toThrowError(`"params.batchPosters" can't include an zero address.`);
});

it(`fails to prepare transaction request if "params.validators" is set to an empty array`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address },
  });

  // prepare the transaction for deploying the core contracts
  await expect(
    createRollupPrepareTransactionRequest({
      params: {
        config: createRollupPrepareDeploymentParamsConfig(publicClient, {
          chainId: BigInt(chainId),
          owner: deployer.address,
          chainConfig,
        }),
        batchPosters: [deployer.address],
        // set validators to an empty array
        validators: [],
        batchPosterManager: deployer.address,
        eigenDACertVerifier: deployer.address,
      },
      account: deployer.address,
      publicClient,
    }),
  ).rejects.toThrowError(`"params.validators" can't be empty or contain the zero address.`);
});

it(`fails to prepare transaction request if "params.validators" includes the zero address`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address },
  });

  // prepare the transaction for deploying the core contracts
  await expect(
    createRollupPrepareTransactionRequest({
      params: {
        config: createRollupPrepareDeploymentParamsConfig(publicClient, {
          chainId: BigInt(chainId),
          owner: deployer.address,
          chainConfig,
        }),
        batchPosters: [deployer.address],
        // set validators to zero address
        validators: [zeroAddress],
        batchPosterManager: deployer.address,
        eigenDACertVerifier: deployer.address,
      },
      account: deployer.address,
      publicClient,
    }),
  ).rejects.toThrowError(`"params.validators" can't be empty or contain the zero address.`);
});

it(`fails to prepare transaction request if "params.nativeToken" is custom and chain is not anytrust`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address },
  });

  chainConfig.arbitrum.EigenDA = false; // ensure it's not EigenDA

  // prepare the transaction for deploying the core contracts
  await expect(
    createRollupPrepareTransactionRequest({
      params: {
        config: createRollupPrepareDeploymentParamsConfig(publicClient, {
          chainId: BigInt(chainId),
          owner: deployer.address,
          chainConfig,
        }),
        batchPosters: [deployer.address],
        validators: [deployer.address],
        // set native token to anything custom
        nativeToken: deployer.address,
        batchPosterManager: deployer.address,
        eigenDACertVerifier: deployer.address,
      },
      account: deployer.address,
      publicClient,
    }),
  ).rejects.toThrowError(
    `"params.nativeToken" can only be used on AnyTrust or EigenDA chains. Set "arbitrum.DataAvailabilityCommittee" to "true" or "arbitrum.EigenDA" to "true" in the chain config.`,
  );
});

it(`fails to prepare transaction request if "params.nativeToken" doesn't use 18 decimals`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address, DataAvailabilityCommittee: true },
  });

  // prepare the transaction for deploying the core contracts
  await expect(
    createRollupPrepareTransactionRequest({
      params: {
        config: createRollupPrepareDeploymentParamsConfig(publicClient, {
          chainId: BigInt(chainId),
          owner: deployer.address,
          chainConfig,
        }),
        batchPosters: [deployer.address],
        validators: [deployer.address],
        // USDC on Arbitrum Sepolia has 6 decimals
        nativeToken: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',

        batchPosterManager: deployer.address,
        eigenDACertVerifier: deployer.address,
      },
      account: deployer.address,
      publicClient,
    }),
  ).rejects.toThrowError(
    `"params.nativeToken" can only be configured with a token that uses 18 decimals.`,
  );
});

it(`successfully prepares a transaction request with the default rollup creator and a gas limit override`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address, DataAvailabilityCommittee: true },
  });

  const txRequest = await createRollupPrepareTransactionRequest({
    params: {
      config: createRollupPrepareDeploymentParamsConfig(publicClient, {
        chainId: BigInt(chainId),
        owner: deployer.address,
        chainConfig,
      }),
      batchPosters: [deployer.address],
      validators: [deployer.address],
      deployFactoriesToL2: true,
      maxFeePerGasForRetryables: BigInt(1000),
      batchPosterManager: deployer.address,
      eigenDACertVerifier: deployer.address,
    },
    account: deployer.address,
    publicClient,
    gasOverrides: { gasLimit: { base: 1_000n } },
  });

  expect(txRequest.account).toEqual(deployer.address);
  expect(txRequest.from).toEqual(deployer.address);
  expect(txRequest.to).toEqual(rollupCreatorAddress[arbitrumSepolia.id]);
  expect(txRequest.chainId).toEqual(arbitrumSepolia.id);
  expect(txRequest.gas).toEqual(1_000n);
});

it(`successfully prepares a transaction request with a custom rollup creator and a gas limit override`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config"
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address, DataAvailabilityCommittee: true },
  });

  const txRequest = await createRollupPrepareTransactionRequest({
    params: {
      config: createRollupPrepareDeploymentParamsConfig(publicClient, {
        chainId: BigInt(chainId),
        owner: deployer.address,
        chainConfig,
      }),
      batchPosters: [deployer.address],
      validators: [deployer.address],
      deployFactoriesToL2: true,
      maxFeePerGasForRetryables: BigInt(1000),
      batchPosterManager: deployer.address,
      eigenDACertVerifier: deployer.address,
    },
    account: deployer.address,
    publicClient,
    gasOverrides: { gasLimit: { base: 1_000n, percentIncrease: 20n } },
    rollupCreatorAddressOverride: '0x31421C442c422BD16aef6ae44D3b11F404eeaBd9',
  });

  expect(txRequest.account).toEqual(deployer.address);
  expect(txRequest.from).toEqual(deployer.address);
  expect(txRequest.to).toEqual('0x31421C442c422BD16aef6ae44D3b11F404eeaBd9');
  expect(txRequest.chainId).toEqual(arbitrumSepolia.id);
  expect(txRequest.gas).toEqual(1_200n);
});

it(`successfully prepares a transaction request with a custom rollup creator, custom gas token, & eigenda enabled`, async () => {
   // generate a random chain id
   const chainId = generateChainId();

   // create the chain config
   const chainConfig = prepareChainConfig({
     chainId,
     arbitrum: { InitialChainOwner: deployer.address, DataAvailabilityCommittee: false, EigenDA: true },
   });
 
   const txRequest = await createRollupPrepareTransactionRequest({
     params: {
       config: createRollupPrepareDeploymentParamsConfig(publicClient, {
         chainId: BigInt(chainId),
         owner: deployer.address,
         chainConfig,
       }),
       batchPosters: [deployer.address],
       validators: [deployer.address],
       deployFactoriesToL2: true,
       maxFeePerGasForRetryables: BigInt(1000),
       nativeToken: '0x1428444eacdc0fd115dd4318fce65b61cd1ef399', // ATH token: https://sepolia.arbiscan.io/token/0x1428444eacdc0fd115dd4318fce65b61cd1ef399
       batchPosterManager: deployer.address,
       eigenDACertVerifier: deployer.address,
     },
     account: deployer.address,
     publicClient,
     gasOverrides: { gasLimit: { base: 1_000n } },
   });
 
   expect(txRequest.account).toEqual(deployer.address);
   expect(txRequest.from).toEqual(deployer.address);
   expect(txRequest.to).toEqual(rollupCreatorAddress[arbitrumSepolia.id]);
   expect(txRequest.chainId).toEqual(arbitrumSepolia.id);
   expect(txRequest.gas).toEqual(1_000n);
});

it(`successfully prepares a transaction request with a custom rollup creator, custom gas token, eigenda, & anytrust enabled`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address, DataAvailabilityCommittee: true, EigenDA: true },
  });

  const txRequest = await createRollupPrepareTransactionRequest({
    params: {
      config: createRollupPrepareDeploymentParamsConfig(publicClient, {
        chainId: BigInt(chainId),
        owner: deployer.address,
        chainConfig,
      }),
      batchPosters: [deployer.address],
      validators: [deployer.address],
      deployFactoriesToL2: true,
      maxFeePerGasForRetryables: BigInt(1000),
      nativeToken: '0x1428444eacdc0fd115dd4318fce65b61cd1ef399', // ATH token: https://sepolia.arbiscan.io/token/0x1428444eacdc0fd115dd4318fce65b61cd1ef399
      batchPosterManager: deployer.address,
      eigenDACertVerifier: deployer.address,
    },
    account: deployer.address,
    publicClient,
    gasOverrides: { gasLimit: { base: 1_000n } },
  });

  expect(txRequest.account).toEqual(deployer.address);
  expect(txRequest.from).toEqual(deployer.address);
  expect(txRequest.to).toEqual(rollupCreatorAddress[arbitrumSepolia.id]);
  expect(txRequest.chainId).toEqual(arbitrumSepolia.id);
  expect(txRequest.gas).toEqual(1_000n);
});

it(`fails to prepare transaction request if "params.nativeToken" is custom and chain is not anytrust nor eigenda`, async () => {
  // generate a random chain id
  const chainId = generateChainId();

  // create the chain config
  const chainConfig = prepareChainConfig({
    chainId,
    arbitrum: { InitialChainOwner: deployer.address, EigenDA: false, DataAvailabilityCommittee: false },
  });

  // prepare the transaction for deploying the core contracts
  await expect(
    createRollupPrepareTransactionRequest({
      params: {
        config: createRollupPrepareDeploymentParamsConfig(publicClient, {
          chainId: BigInt(chainId),
          owner: deployer.address,
          chainConfig,
        }),
        batchPosters: [deployer.address],
        validators: [deployer.address],
        // set native token to anything custom
        nativeToken: '0x1428444eacdc0fd115dd4318fce65b61cd1ef399', // ATH token: https://sepolia.arbiscan.io/token/0x1428444eacdc0fd115dd4318fce65b61cd1ef399
        batchPosterManager: deployer.address,
        eigenDACertVerifier: deployer.address,
      },
      account: deployer.address,
      publicClient,
    }),
  ).rejects.toThrowError(
    `"params.nativeToken" can only be used on AnyTrust or EigenDA chains. Set "arbitrum.DataAvailabilityCommittee" to "true" or "arbitrum.EigenDA" to "true" in the chain config.`,
  );
});
