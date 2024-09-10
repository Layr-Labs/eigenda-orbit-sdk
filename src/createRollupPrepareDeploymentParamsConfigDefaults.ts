import { parseEther, zeroAddress } from 'viem';

export const wasmModuleRoot: `0x${string}` =
  '0x59e9a1ea4ae5fa88d6cee2f257bd7b717b0b5b51c2b96c4289ce371843c3e914';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
