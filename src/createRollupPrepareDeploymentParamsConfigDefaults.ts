import { parseEther, zeroAddress } from 'viem';

// https://github.com/Layr-Labs/nitro/releases/tag/consensus-eigenda-v32.2
export const wasmModuleRoot: `0x${string}` =
  '0xc723bd1be9fc564796bd8ce5c158c8b2f55d34afb38303a9fb6a8f0fda376edb';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
