import { parseEther, zeroAddress } from 'viem';

export const wasmModuleRoot: `0x${string}` =
  '0x8729b9f8bca48ca91a8392160e5d5b319a63a267efe33fd145493cd0ca6c6b7b';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
