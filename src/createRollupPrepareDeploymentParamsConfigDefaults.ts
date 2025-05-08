import { parseEther, zeroAddress } from 'viem';

export const wasmModuleRoot: `0x${string}` =
  // EigenDA consensus module root
  '0x5ce37f09a3b504c06f8fddc278b00135871676ed9b6cb1fbb55cb57bfcb03e16';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;