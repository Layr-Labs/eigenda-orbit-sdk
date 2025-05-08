import { defineChain } from 'viem';
import { arbitrumSepolia, holesky } from 'viem/chains';

/**
 * The address of the v1.2 EigenDA token bridge creator contract 
 */
export const tokenBridgeCreatorAddress: Record<number, `0x${string}`> = {
  // Arbitrum Sepolia
  [arbitrumSepolia.id]: '0xF5FfA95e80cc886000255b5C0c055F9b00d33aD2',
  // Holesky
  [holesky.id]: '0xF5FFa95e80Cc886000255b5C0C055f9B00D33Ad2',
} as const;

export const tokenBridgeCreatorABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "inbox",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "router",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "customGateway",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "multicall",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "wethGateway",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "proxyAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "beaconProxyFactory",
        "type": "address"
      }
    ],
    "name": "TokenBridgeDeployed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "inbox",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1CustomTokenGatewayTemplate",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1WethGatewayTemplate",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1GatewayRouterTemplate",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1WethAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1Multicall",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1ProxyAdmin",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1BeaconProxyFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2ProxyAdmin",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxSubmissionCost",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "useProxies",
        "type": "bool"
      }
    ],
    "name": "createTokenBridge",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "inbox",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1CustomTokenGatewayAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1WethGatewayAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1GatewayRouterAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1WethAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l1ProxyAdmin",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2CustomTokenGatewayAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2WethGatewayAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2GatewayRouterAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2WethAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2ProxyAdmin",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "l2BeaconProxyFactory",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxSubmissionCost",
        "type": "uint256"
      }
    ],
    "name": "updateBridge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
] as const;