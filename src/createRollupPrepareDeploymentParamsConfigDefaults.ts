import { parseEther, zeroAddress } from 'viem';

export const wasmModuleRoot: `0x${string}` =
  '0x951009942c00b5bd0abec233174fe33fadf7cd5013d17b042f9b28b3b00b469c';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
