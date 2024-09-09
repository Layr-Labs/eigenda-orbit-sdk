import { parseEther, zeroAddress } from 'viem';

export const wasmModuleRoot: `0x${string}` =
  '0x58393c4cde154da53d3ed5962bdf68bdba6b3ba4bbf394a751ce46ed05075d2b';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
