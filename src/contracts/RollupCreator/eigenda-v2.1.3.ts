import { defineChain } from 'viem';
import { arbitrumSepolia, holesky } from 'viem/chains';

/**
 * The address of the EigenDA v2.1.3 Rollup creator contracts (production-ready)
 */
export const rollupCreatorAddress: Record<number, `0x${string}`> = {
  // Arbitrum Sepolia
  [arbitrumSepolia.id]: '0x63678725e9feA2469aEA3e69b4A1C76f08A88DC0',
  // Holesky
  [holesky.id]: '0xC3E25f156099B9fC5c6A60cD7CeC69c59C7e68B3',
} as const;

/**
 * The associated EigenDA v2.1.3 Token Bridge creators addresses
 */
export const tokenBridgeCreatorAddress: Record<number, `0x${string}`> = {
  // Arbitrum Sepolia
  [arbitrumSepolia.id]: '0xF5FfA95e80cc886000255b5C0c055F9b00d33aD2',
  // Holesky
  [holesky.id]: '0xF5FFa95e80Cc886000255b5C0C055f9B00D33Ad2',
} as const;