import { parseEther, zeroAddress } from 'viem';

export const wasmModuleRoot: `0x${string}` =
  // https://github.com/OffchainLabs/nitro/releases/tag/consensus-v20
  '0xb0de9cb89e4d944ae6023a3b62276e54804c242fd8c4c2d8e6cc4450f5fa8b1b';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
