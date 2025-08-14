import { parseEther, zeroAddress } from 'viem';

// https://github.com/Layr-Labs/nitro/releases/tag/consensus-eigenda-v32.3
export const wasmModuleRoot: `0x${string}` =
  '0x39a7b951167ada11dc7c81f1707fb06e6710ca8b915b2f49e03c130bf7cd53b1';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
