import { parseEther, zeroAddress } from 'viem';

// https://github.com/Layr-Labs/nitro/releases/tag/consensus-eigenda-v40
export const wasmModuleRoot: `0x${string}` =
  '0x2c9a9d645ae56304c483709fc710a58a0935ed43893179fe4b275e1400503ea7';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
