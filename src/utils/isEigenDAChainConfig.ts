import { ChainConfig } from '../types/ChainConfig';

export function isEigenDAChainConfig(chainConfig: ChainConfig) {
  return chainConfig.arbitrum.EigenDA;
}
