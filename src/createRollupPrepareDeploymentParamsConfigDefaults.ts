import { parseEther, zeroAddress } from 'viem';

// https://github.com/Layr-Labs/nitro/releases/tag/consensus-eigenda-v32.1
export const wasmModuleRoot: `0x${string}` =
  '0x5ce37f09a3b504c06f8fddc278b00135871676ed9b6cb1fbb55cb57bfcb03e16';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;