import { parseEther, zeroAddress } from 'viem';

// https://github.com/Layr-Labs/nitro/releases/tag/consensus-eigenda-v32.1
export const wasmModuleRoot: `0x${string}` =
  '0x04a297cdd13254c4c6c26388915d416286daf22f3a20e3ebee10400a3129dd17';

export const defaults = {
  extraChallengeTimeBlocks: BigInt(0),
  stakeToken: zeroAddress,
  baseStake: parseEther(String(0.1)),
  wasmModuleRoot,
  loserStakeEscrow: zeroAddress,
  genesisBlockNum: BigInt(0),
} as const;
