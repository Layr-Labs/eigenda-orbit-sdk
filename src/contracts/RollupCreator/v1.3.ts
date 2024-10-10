//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RollupCreator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x850F050C65B34966895AdA26a4D06923901916DB)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0x1E0921818df948c338380e722C8aE91Bb285763C)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xbcEb6Ac6Aa7a2073813Ad648770b6A5957303BAc)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfbd0b034e6305788007f6e0123cc5eae701a5751)
 * - [__View Contract on Holesky Etherscan__](https://holesky.etherscan.io/address/0x280ca9Cd691841Fed2219F19F8eC2A13F37705Ec)
 */
export const rollupCreatorABI = [
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
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "rollupAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "nativeToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "inboxAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "outbox",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "rollupEventInbox",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "challengeManager",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "adminProxy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sequencerInbox",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "bridge",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "upgradeExecutor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "validatorUtils",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "validatorWalletCreator",
        "type": "address"
      }
    ],
    "name": "RollupCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "TemplatesUpdated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "bridgeCreator",
    "outputs": [
      {
        "internalType": "contract BridgeCreator",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "challengeManagerTemplate",
    "outputs": [
      {
        "internalType": "contract IChallengeManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "confirmPeriodBlocks",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "extraChallengeTimeBlocks",
                "type": "uint64"
              },
              {
                "internalType": "address",
                "name": "stakeToken",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "baseStake",
                "type": "uint256"
              },
              {
                "internalType": "bytes32",
                "name": "wasmModuleRoot",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "loserStakeEscrow",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "chainConfig",
                "type": "string"
              },
              {
                "internalType": "uint64",
                "name": "genesisBlockNum",
                "type": "uint64"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "delayBlocks",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "futureBlocks",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "delaySeconds",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "futureSeconds",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ISequencerInbox.MaxTimeVariation",
                "name": "sequencerInboxMaxTimeVariation",
                "type": "tuple"
              }
            ],
            "internalType": "struct Config",
            "name": "config",
            "type": "tuple"
          },
          {
            "internalType": "address[]",
            "name": "validators",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "maxDataSize",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "nativeToken",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "deployFactoriesToL2",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "maxFeePerGasForRetryables",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "batchPosters",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "batchPosterManager",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "eigenDARollupManager",
            "type": "address"
          }
        ],
        "internalType": "struct RollupCreator.RollupDeploymentParams",
        "name": "deployParams",
        "type": "tuple"
      }
    ],
    "name": "createRollup",
    "outputs": [
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
    "inputs": [],
    "name": "l2FactoriesDeployer",
    "outputs": [
      {
        "internalType": "contract DeployHelper",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "osp",
    "outputs": [
      {
        "internalType": "contract IOneStepProofEntry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rollupAdminLogic",
    "outputs": [
      {
        "internalType": "contract IRollupAdmin",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rollupUserLogic",
    "outputs": [
      {
        "internalType": "contract IRollupUser",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract BridgeCreator",
        "name": "_bridgeCreator",
        "type": "address"
      },
      {
        "internalType": "contract IOneStepProofEntry",
        "name": "_osp",
        "type": "address"
      },
      {
        "internalType": "contract IChallengeManager",
        "name": "_challengeManagerLogic",
        "type": "address"
      },
      {
        "internalType": "contract IRollupAdmin",
        "name": "_rollupAdminLogic",
        "type": "address"
      },
      {
        "internalType": "contract IRollupUser",
        "name": "_rollupUserLogic",
        "type": "address"
      },
      {
        "internalType": "contract IUpgradeExecutor",
        "name": "_upgradeExecutorLogic",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_validatorUtils",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_validatorWalletCreator",
        "type": "address"
      },
      {
        "internalType": "contract DeployHelper",
        "name": "_l2FactoriesDeployer",
        "type": "address"
      }
    ],
    "name": "setTemplates",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "upgradeExecutorLogic",
    "outputs": [
      {
        "internalType": "contract IUpgradeExecutor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "validatorUtils",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "validatorWalletCreator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x850F050C65B34966895AdA26a4D06923901916DB)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0x1E0921818df948c338380e722C8aE91Bb285763C)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xbcEb6Ac6Aa7a2073813Ad648770b6A5957303BAc)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfbd0b034e6305788007f6e0123cc5eae701a5751)
 * - [__View Contract on Holesky Etherscan__](https://holesky.etherscan.io/address/0x280ca9Cd691841Fed2219F19F8eC2A13F37705Ec)
 */
export const rollupCreatorAddress = {
  1: '0x90D68B056c411015eaE3EC0b98AD94E2C91419F1',
  1337: '0x596eAbE0291D4cdAfAC7ef53D16C92Bf6922b5e0',
  8453: '0x850F050C65B34966895AdA26a4D06923901916DB',
  17000: '0xE2364597Ef80042e825AE3D99145998d23ca77a8',
  42161: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
  42170: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
  84532: '0x1E0921818df948c338380e722C8aE91Bb285763C',
  412346: '0x3BaF9f08bAD68869eEdEa90F2Cc546Bd80F1A651',
  421614: '0xbcEb6Ac6Aa7a2073813Ad648770b6A5957303BAc',
  11155111: '0xfBD0B034e6305788007f6e0123cc5EaE701a5751',
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x850F050C65B34966895AdA26a4D06923901916DB)
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0x1E0921818df948c338380e722C8aE91Bb285763C)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xbcEb6Ac6Aa7a2073813Ad648770b6A5957303BAc)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfbd0b034e6305788007f6e0123cc5eae701a5751)
 * - [__View Contract on Holesky Etherscan__](https://holesky.etherscan.io/address/0x280ca9Cd691841Fed2219F19F8eC2A13F37705Ec)
*/
export const rollupCreatorConfig = {
  address: rollupCreatorAddress,
  abi: rollupCreatorABI,
} as const;
