export const sequencerInboxABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxDataSize",
        "type": "uint256"
      },
      {
        "internalType": "contract IReader4844",
        "name": "reader4844_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_isUsingFeeToken",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AlreadyInit",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "AlreadyValidDASKeyset",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BadMaxTimeVariation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BadPostUpgradeInit",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "stored",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "received",
        "type": "uint256"
      }
    ],
    "name": "BadSequencerNumber",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DataBlobsNotSupported",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "dataLength",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxDataLength",
        "type": "uint256"
      }
    ],
    "name": "DataTooLarge",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DelayedBackwards",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DelayedTooFar",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Deprecated",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ForceIncludeBlockTooSoon",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ForceIncludeTimeTooSoon",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "HadZeroInit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "IncorrectMessagePreimage",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "InitParamZero",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "name": "InvalidHeaderFlag",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MissingDataHashes",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NativeTokenMismatch",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "NoSuchKeyset",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotBatchPoster",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "NotBatchPosterManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotForked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotOrigin",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "NotOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RollupNotChanged",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "messageNum",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "InboxMessageDelivered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "messageNum",
        "type": "uint256"
      }
    ],
    "name": "InboxMessageDeliveredFromOrigin",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "keysetHash",
        "type": "bytes32"
      }
    ],
    "name": "InvalidateKeyset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "OwnerFunctionCalled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "batchSequenceNumber",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "SequencerBatchData",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "batchSequenceNumber",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "beforeAcc",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "afterAcc",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "delayedAcc",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "afterDelayedMessagesRead",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "minTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "maxTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "minBlockNumber",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "maxBlockNumber",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct IBridge.TimeBounds",
        "name": "timeBounds",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "enum IBridge.BatchDataLocation",
        "name": "dataLocation",
        "type": "uint8"
      }
    ],
    "name": "SequencerBatchDelivered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "keysetHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "keysetBytes",
        "type": "bytes"
      }
    ],
    "name": "SetValidKeyset",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BROTLI_MESSAGE_HEADER_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DAS_MESSAGE_HEADER_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DATA_AUTHENTICATED_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DATA_BLOB_HEADER_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "EIGENDA_MESSAGE_HEADER_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "HEADER_LENGTH",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TREE_DAS_MESSAGE_HEADER_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ZERO_HEAVY_MESSAGE_HEADER_FLAG",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sequenceNumber",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "afterDelayedMessagesRead",
        "type": "uint256"
      },
      {
        "internalType": "contract IGasRefunder",
        "name": "gasRefunder",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "prevMessageCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newMessageCount",
        "type": "uint256"
      }
    ],
    "name": "addSequencerL2Batch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sequenceNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "afterDelayedMessagesRead",
        "type": "uint256"
      },
      {
        "internalType": "contract IGasRefunder",
        "name": "gasRefunder",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "prevMessageCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newMessageCount",
        "type": "uint256"
      }
    ],
    "name": "addSequencerL2BatchFromBlobs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sequenceNumber",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "batchId",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "blobIndex",
            "type": "uint32"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "blobHeadersRoot",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes",
                    "name": "quorumNumbers",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bytes",
                    "name": "signedStakeForQuorums",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint32",
                    "name": "referenceBlockNumber",
                    "type": "uint32"
                  }
                ],
                "internalType": "struct IEigenDAServiceManager.BatchHeader",
                "name": "batchHeader",
                "type": "tuple"
              },
              {
                "internalType": "bytes32",
                "name": "signatoryRecordHash",
                "type": "bytes32"
              },
              {
                "internalType": "uint32",
                "name": "confirmationBlockNumber",
                "type": "uint32"
              }
            ],
            "internalType": "struct IEigenDAServiceManager.BatchMetadata",
            "name": "batchMetadata",
            "type": "tuple"
          },
          {
            "internalType": "bytes",
            "name": "inclusionProof",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "quorumIndices",
            "type": "bytes"
          }
        ],
        "internalType": "struct EigenDARollupUtils.BlobVerificationProof",
        "name": "blobVerificationProof",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "X",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "Y",
                "type": "uint256"
              }
            ],
            "internalType": "struct BN254.G1Point",
            "name": "commitment",
            "type": "tuple"
          },
          {
            "internalType": "uint32",
            "name": "dataLength",
            "type": "uint32"
          },
          {
            "components": [
              {
                "internalType": "uint8",
                "name": "quorumNumber",
                "type": "uint8"
              },
              {
                "internalType": "uint8",
                "name": "adversaryThresholdPercentage",
                "type": "uint8"
              },
              {
                "internalType": "uint8",
                "name": "confirmationThresholdPercentage",
                "type": "uint8"
              },
              {
                "internalType": "uint32",
                "name": "chunkLength",
                "type": "uint32"
              }
            ],
            "internalType": "struct IEigenDAServiceManager.QuorumBlobParam[]",
            "name": "quorumBlobParams",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct IEigenDAServiceManager.BlobHeader",
        "name": "blobHeader",
        "type": "tuple"
      },
      {
        "internalType": "contract IGasRefunder",
        "name": "gasRefunder",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "afterDelayedMessagesRead",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "prevMessageCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newMessageCount",
        "type": "uint256"
      }
    ],
    "name": "addSequencerL2BatchFromEigenDA",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "contract IGasRefunder",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addSequencerL2BatchFromOrigin",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "sequenceNumber",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "afterDelayedMessagesRead",
        "type": "uint256"
      },
      {
        "internalType": "contract IGasRefunder",
        "name": "gasRefunder",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "prevMessageCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newMessageCount",
        "type": "uint256"
      }
    ],
    "name": "addSequencerL2BatchFromOrigin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "batchCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "batchPosterManager",
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
    "name": "bridge",
    "outputs": [
      {
        "internalType": "contract IBridge",
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "dasKeySetInfo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isValidKeyset",
        "type": "bool"
      },
      {
        "internalType": "uint64",
        "name": "creationBlock",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eigenDARollupManager",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_totalDelayedMessagesRead",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "kind",
        "type": "uint8"
      },
      {
        "internalType": "uint64[2]",
        "name": "l1BlockAndTime",
        "type": "uint64[2]"
      },
      {
        "internalType": "uint256",
        "name": "baseFeeL1",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "messageDataHash",
        "type": "bytes32"
      }
    ],
    "name": "forceInclusion",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ksHash",
        "type": "bytes32"
      }
    ],
    "name": "getKeysetCreationBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "inboxAccs",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IBridge",
        "name": "bridge_",
        "type": "address"
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
        "name": "maxTimeVariation_",
        "type": "tuple"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ksHash",
        "type": "bytes32"
      }
    ],
    "name": "invalidateKeysetHash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isBatchPoster",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isSequencer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isUsingFeeToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ksHash",
        "type": "bytes32"
      }
    ],
    "name": "isValidKeysetHash",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxDataSize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxTimeVariation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "postUpgradeInit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reader4844",
    "outputs": [
      {
        "internalType": "contract IReader4844",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeDelayAfterFork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rollup",
    "outputs": [
      {
        "internalType": "contract IOwnable",
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
        "internalType": "address",
        "name": "newBatchPosterManager",
        "type": "address"
      }
    ],
    "name": "setBatchPosterManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newRollupManager",
        "type": "address"
      }
    ],
    "name": "setEigenDARollupManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isBatchPoster_",
        "type": "bool"
      }
    ],
    "name": "setIsBatchPoster",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isSequencer_",
        "type": "bool"
      }
    ],
    "name": "setIsSequencer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
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
        "name": "maxTimeVariation_",
        "type": "tuple"
      }
    ],
    "name": "setMaxTimeVariation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setRollupAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "keysetBytes",
        "type": "bytes"
      }
    ],
    "name": "setValidKeyset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalDelayedMessagesRead",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "updateRollupAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
