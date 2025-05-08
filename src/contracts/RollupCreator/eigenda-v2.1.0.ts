import { defineChain } from 'viem';
import { arbitrumSepolia, holesky } from 'viem/chains';

/**
 * The address of the EigenDA Rollup creator contracts for v2.1.0
 */
export const rollupCreatorAddress: Record<number, `0x${string}`> = {
  // Arbitrum Sepolia
  [arbitrumSepolia.id]: '0xd66F3594209f3da7b59061b563318430786cF2ce',
  // Holesky
  [holesky.id]: '0xE885D1E3ED4188026116A655127eD58452cc6b2b',
} as const;

/**
 * The associated EigenDA Token Bridge creators addresses
 */
export const tokenBridgeCreatorAddress: Record<number, `0x${string}`> = {
  // Arbitrum Sepolia
  [arbitrumSepolia.id]: '0xF5FfA95e80cc886000255b5C0c055F9b00d33aD2',
  // Holesky
  [holesky.id]: '0xF5FFa95e80Cc886000255b5C0C055f9B00D33Ad2',
} as const;