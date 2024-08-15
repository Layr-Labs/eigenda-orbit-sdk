import { zeroAddress, parseGwei } from 'viem';

export const defaults = {
  nativeToken: zeroAddress,
  deployFactoriesToL2: true,
  maxFeePerGasForRetryables: parseGwei(String('0.1')),
  // Zero address leads to a dummy manager being created in the constructor
  eigenDARollupManager: zeroAddress,
};
