/* TEMPORARILY EDITED TO ADD EIGENDA
 * Generation file has been updated such that once we publish a new docker image
 * of nitro-eigenda, we can update the nitro-node-tag in the .env file and the
 * generation file will update the nitro-node-tag in the help output.
 */

/** Nitro node configuration options */
export type NodeConfig = {
  'auth'?: {
    /** AUTH-RPC server listening interface (default "127.0.0.1") */
    addr?: string;
    /** APIs offered over the AUTH-RPC interface (default [validation]) */
    api?: string[];
    /** Path to file holding JWT secret (32B hex) */
    jwtsecret?: string;
    /** Origins from which to accept AUTH requests (default [localhost]) */
    origins?: string[];
    /** AUTH-RPC server listening port (default 8549) */
    port?: number;
  };
  'blocks-reexecutor'?: {
    /** minimum number of blocks to execute per thread. When mode is random this acts as the size of random block range sample (default 10000) */
    'blocks-per-thread'?: number;
    /** enables re-execution of a range of blocks against historic state */
    'enable'?: boolean;
    /** last block number of the block range for re-execution */
    'end-block'?: number;
    /** mode to run the blocks-reexecutor on. Valid modes full and random. full - execute all the blocks in the given range. random - execute a random sample range of blocks with in a given range (default "random") */
    'mode'?: string;
    /** number of threads to parallelize blocks re-execution (default 12) */
    'room'?: number;
    /** first block number of the block range for re-execution */
    'start-block'?: number;
  };
  'chain'?: {
    'dev-wallet'?: {
      /** account to use (default is first account in keystore) */
      'account'?: string;
      /** if true, creates new key then exits */
      'only-create-key'?: boolean;
      /** wallet passphrase (default "PASSWORD_NOT_SET") */
      'password'?: string;
      /** pathname for wallet */
      'pathname'?: string;
      /** private key for wallet */
      'private-key'?: string;
    };
    /** L2 chain ID (determines Arbitrum network) */
    'id'?: number;
    /** L2 chain info json files */
    'info-files'?: string[];
    /** path to save temp downloaded file (default "/tmp/") */
    'info-ipfs-download-path'?: string;
    /** url to download chain info file */
    'info-ipfs-url'?: string;
    /** L2 chain info in json string format */
    'info-json'?: string;
    /** L2 chain name (determines Arbitrum network) */
    'name'?: string;
  };
  'conf'?: {
    /** print out currently active configuration file */
    'dump'?: boolean;
    /** environment variables with given prefix will be loaded as configuration values */
    'env-prefix'?: string;
    /** name of configuration file */
    'file'?: string[];
    /** how often to reload configuration (0=disable periodic reloading) */
    'reload-interval'?: string;
    's3'?: {
      /** S3 access key */
      'access-key'?: string;
      /** S3 bucket */
      'bucket'?: string;
      /** S3 object key */
      'object-key'?: string;
      /** S3 region */
      'region'?: string;
      /** S3 secret key */
      'secret-key'?: string;
    };
    /** configuration as JSON string */
    'string'?: string;
  };
  'execution'?: {
    'caching'?: {
      /** retain past block state */
      'archive'?: boolean;
      /** minimum age of recent blocks to keep in memory (default 30m0s) */
      'block-age'?: string;
      /** minimum number of recent blocks to keep in memory (default 128) */
      'block-count'?: number;
      /** amount of memory in megabytes to cache database contents with (default 2048) */
      'database-cache'?: number;
      /** maximum amount of gas in blocks to skip saving state to Persistent storage (archive node only) -- warning: this option seems to cause issues */
      'max-amount-of-gas-to-skip-state-saving'?: number;
      /** maximum number of blocks to skip state saving to persistent storage (archive node only) -- warning: this option seems to cause issues */
      'max-number-of-blocks-to-skip-state-saving'?: number;
      /** amount of memory in megabytes to cache state snapshots with (default 400) */
      'snapshot-cache'?: number;
      /** maximum gas rolled back to recover snapshot (default 300000000000) */
      'snapshot-restore-gas-limit'?: number;
      /** amount of memory in megabytes to cache unchanged state trie nodes with (default 600) */
      'trie-clean-cache'?: number;
      /** amount of memory in megabytes to cache state diffs against disk with (larger cache lowers database growth) (default 1024) */
      'trie-dirty-cache'?: number;
      /** maximum block processing time before trie is written to hard-disk (default 1h0m0s) */
      'trie-time-limit'?: string;
    };
    'dangerous'?: {
      /** DANGEROUS! forces a reorg to an old block height. To be used for testing only. -1 to disable (default -1) */
      'reorg-to-block'?: number;
    };
    /** enable prefetching of blocks (default true) */
    'enable-prefetch-block'?: boolean;
    'forwarder'?: {
      /** total time to wait before cancelling connection (default 30s) */
      'connection-timeout'?: string;
      /** time until idle connections are closed (default 15s) */
      'idle-connection-timeout'?: string;
      /** maximum number of idle connections to keep open (default 1) */
      'max-idle-connections'?: number;
      /** the Redis URL to recomend target via */
      'redis-url'?: string;
      /** minimal time between update retries (default 100ms) */
      'retry-interval'?: string;
      /** forwarding target update interval (default 1s) */
      'update-interval'?: string;
    };
    /** transaction forwarding target URL, or "null" to disable forwarding (iff not sequencer) */
    'forwarding-target'?: string;
    'parent-chain-reader'?: {
      'dangerous'?: {
        /** Dangerous! only meant to be used by system tests */
        'wait-for-tx-approval-safe-poll'?: string;
      };
      /** enable reader connection (default true) */
      'enable'?: boolean;
      /** warns if the latest l1 block is at least this old (default 5m0s) */
      'old-header-timeout'?: string;
      /** interval when polling endpoint (default 15s) */
      'poll-interval'?: string;
      /** do not attempt to subscribe to header events */
      'poll-only'?: boolean;
      /** interval for subscribe error (default 5m0s) */
      'subscribe-err-interval'?: string;
      /** timeout when waiting for a transaction (default 5m0s) */
      'tx-timeout'?: string;
      /** use l1 data about finalized/safe blocks (default true) */
      'use-finality-data'?: boolean;
    };
    'recording-database'?: {
      /** like trie-clean-cache for the separate, recording database (used for validation) (default 16) */
      'trie-clean-cache'?: number;
      /** like trie-dirty-cache for the separate, recording database (used for validation) (default 1024) */
      'trie-dirty-cache'?: number;
    };
    'rpc'?: {
      /** list of whitelisted rpc methods */
      'allow-method'?: string[];
      'arbdebug'?: {
        /** bounds the number of blocks arbdebug calls may return (default 256) */
        'block-range-bound'?: number;
        /** bounds the length of timeout queues arbdebug calls may return (default 512) */
        'timeout-queue-bound'?: number;
      };
      /** number of blocks a single bloom bit section vector holds (default 16384) */
      'bloom-bits-blocks'?: number;
      /** number of confirmation blocks before a bloom section is considered final (default 256) */
      'bloom-confirms'?: number;
      /** url to redirect classic requests, use "error:[CODE:]MESSAGE" to return specified error instead of redirecting */
      'classic-redirect'?: string;
      /** timeout for forwarded classic requests, where 0 = no timeout */
      'classic-redirect-timeout'?: string;
      /** timeout used for eth_call (0=infinite) (default 5s) */
      'evm-timeout'?: string;
      /** max number of blocks a fee history request may cover (default 1024) */
      'feehistory-max-block-count'?: number;
      /** log filter system maximum number of cached blocks (default 32) */
      'filter-log-cache-size'?: number;
      /** log filter system maximum time filters stay active (default 5m0s) */
      'filter-timeout'?: string;
      /** cap on computation gas that can be used in eth_call/estimateGas (0=infinite) (default 50000000) */
      'gas-cap'?: number;
      /** maximum depth for recreating state, measured in l2 gas (0=don't recreate state, -1=infinite, -2=use default value for archive or non-archive node (whichever is configured)) (default -2) */
      'max-recreate-state-depth'?: number;
      /** allow transactions that aren't EIP-155 replay protected to be submitted over the RPC (default true) */
      'tx-allow-unprotected'?: boolean;
      /** cap on transaction fee (in ether) that can be sent via the RPC APIs (0 = no cap) (default 1) */
      'tx-fee-cap'?: number;
    };
    /** secondary transaction forwarding target URL */
    'secondary-forwarding-target'?: string[];
    'sequencer'?: {
      /** act and post to l1 as sequencer */
      'enable'?: boolean;
      'forwarder'?: {
        /** total time to wait before cancelling connection (default 30s) */
        'connection-timeout'?: string;
        /** time until idle connections are closed (default 1m0s) */
        'idle-connection-timeout'?: string;
        /** maximum number of idle connections to keep open (default 100) */
        'max-idle-connections'?: number;
        /** the Redis URL to recomend target via */
        'redis-url'?: string;
        /** minimal time between update retries (default 100ms) */
        'retry-interval'?: string;
        /** forwarding target update interval (default 1s) */
        'update-interval'?: string;
      };
      /** maximum acceptable time difference between the local time and the latest L1 block's timestamp (default 1h0m0s) */
      'max-acceptable-timestamp-delta'?: string;
      /** minimum delay between blocks (sets a maximum speed of block production) (default 250ms) */
      'max-block-speed'?: string;
      /** maximum gas executed in a revert for the sequencer to reject the transaction instead of posting it (anti-DOS) (default 31000) */
      'max-revert-gas-reject'?: number;
      /** maximum transaction size the sequencer will accept (default 95000) */
      'max-tx-data-size'?: number;
      /** size of the tx sender nonce cache (default 1024) */
      'nonce-cache-size'?: number;
      /** maximum amount of time to wait for a predecessor before rejecting a tx with nonce too high (default 1s) */
      'nonce-failure-cache-expiry'?: string;
      /** number of transactions with too high of a nonce to keep in memory while waiting for their predecessor (default 1024) */
      'nonce-failure-cache-size'?: number;
      /** size of the pending tx queue (default 1024) */
      'queue-size'?: number;
      /** maximum amount of time transaction can wait in queue (default 12s) */
      'queue-timeout'?: string;
      /** comma separated whitelist of authorized senders (if empty, everyone is allowed) */
      'sender-whitelist'?: string;
    };
    /** retain the ability to lookup transactions by hash for the past N blocks (0 = all blocks) (default 126230400) */
    'tx-lookup-limit'?: number;
    'tx-pre-checker'?: {
      /** how long ago should the storage conditions from eth_SendRawTransactionConditional be true, 0 = don't check old state (default 2) */
      'required-state-age'?: number;
      /** maximum number of blocks to look back while looking for the <required-state-age> seconds old state, 0 = don't limit the search (default 4) */
      'required-state-max-blocks'?: number;
      /** how strict to be when checking txs before forwarding them. 0 = accept anything, 10 = should never reject anything that'd succeed, 20 = likely won't reject anything that'd succeed, 30 = full validation which may reject txs that would succeed */
      'strictness'?: number;
    };
  };
  'file-logging'?: {
    /** size of intermediate log records buffer (default 512) */
    'buf-size'?: number;
    /** enable compression of old log files (default true) */
    'compress'?: boolean;
    /** enable logging to file (default true) */
    'enable'?: boolean;
    /** path to log file (default "nitro.log") */
    'file'?: string;
    /** if true: local time will be used in old log filename timestamps */
    'local-time'?: boolean;
    /** maximum number of days to retain old log files based on the timestamp encoded in their filename (0 = no limit) */
    'max-age'?: number;
    /** maximum number of old log files to retain (0 = no limit) (default 20) */
    'max-backups'?: number;
    /** log file size in Mb that will trigger log file rotation (0 = trigger disabled) (default 5) */
    'max-size'?: number;
  };
  'graphql'?: {
    /** Comma separated list of domains from which to accept cross origin requests (browser enforced) */
    corsdomain?: string[];
    /** Enable graphql endpoint on the rpc endpoint */
    enable?: boolean;
    /** Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard (default [localhost]) */
    vhosts?: string[];
  };
  'http'?: {
    /** HTTP-RPC server listening interface */
    'addr'?: string;
    /** APIs offered over the HTTP-RPC interface (default [net,web3,eth,arb]) */
    'api'?: string[];
    /** Comma separated list of domains from which to accept cross origin requests (browser enforced) */
    'corsdomain'?: string[];
    /** HTTP-RPC server listening port (default 8547) */
    'port'?: number;
    /** HTTP path path prefix on which JSON-RPC is served. Use '/' to serve on all paths */
    'rpcprefix'?: string;
    'server-timeouts'?: {
      /** the maximum amount of time to wait for the next request when keep-alives are enabled (http.Server.IdleTimeout) (default 2m0s) */
      'idle-timeout'?: string;
      /** the amount of time allowed to read the request headers (http.Server.ReadHeaderTimeout) (default 30s) */
      'read-header-timeout'?: string;
      /** the maximum duration for reading the entire request (http.Server.ReadTimeout) (default 30s) */
      'read-timeout'?: string;
      /** the maximum duration before timing out writes of the response (http.Server.WriteTimeout) (default 30s) */
      'write-timeout'?: string;
    };
    /** Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard (default [localhost]) */
    'vhosts'?: string[];
  };
  'init'?: {
    /** during init - sync database every X accounts. Lower value for low-memory systems. 0 disables. (default 100000) */
    'accounts-per-sync'?: number;
    /** init with dev data (1 account with balance) instead of file import */
    'dev-init'?: boolean;
    /** Address of dev-account. Leave empty to use the dev-wallet. */
    'dev-init-address'?: string;
    /** Number of preinit blocks. Must exist in ancient database. */
    'dev-init-blocknum'?: number;
    /** path to save temp downloaded file (default "/tmp/") */
    'download-path'?: string;
    /** how long to wait between polling attempts (default 1m0s) */
    'download-poll'?: string;
    /** init with empty state */
    'empty'?: boolean;
    /** if true: in case database exists init code will be reexecuted and genesis block compared to database */
    'force'?: boolean;
    /** path for json data to import */
    'import-file'?: string;
    /** pruning for a given use: "full" for full nodes serving RPC requests, or "validator" for validators */
    'prune'?: string;
    /** the amount of memory in megabytes to use for the pruning bloom filter (higher values prune better) (default 2048) */
    'prune-bloom-size'?: number;
    /** block number to start recreating missing states from (0 = disabled) */
    'recreate-missing-state-from'?: number;
    /** forces a reset to an old message height. Also set max-reorg-resequence-depth=0 to force re-reading messages (default -1) */
    'reset-to-message'?: number;
    /** quit after init is done */
    'then-quit'?: boolean;
    /** url to download initializtion data - will poll if download fails */
    'url'?: string;
  };
  'ipc'?: {
    /** Requested location to place the IPC endpoint. An empty path disables IPC. */
    path?: string;
  };
  /** log level (default 3) */
  'log-level'?: number;
  /** log type (plaintext or json) (default "plaintext") */
  'log-type'?: string;
  /** enable metrics */
  'metrics'?: boolean;
  'metrics-server'?: {
    /** metrics server address (default "127.0.0.1") */
    'addr'?: string;
    /** metrics server port (default 6070) */
    'port'?: number;
    /** metrics server update interval (default 3s) */
    'update-interval'?: string;
  };
  'node'?: {
    'batch-poster'?: {
      /** batch compression level (default 11) */
      'compression-level'?: number;
      /** In AnyTrust mode, the period which DASes are requested to retain the stored batches. (default 360h0m0s) */
      'das-retention-period'?: string;
      'data-poster'?: {
        /** if true, don't put transactions in the mempool that spend a total greater than the batch poster's balance (default true) */
        'allocate-mempool-balance'?: boolean;
        /** comma-separated list of durations since first posting a blob transaction to attempt a replace-by-fee (default "5m,10m,30m,1h,4h,8h,16h,22h") */
        'blob-tx-replacement-times'?: string;
        'dangerous'?: {
          /** clear database storage */
          'clear-dbstorage'?: boolean;
        };
        /** unit to measure the time elapsed since creation of transaction used for maximum fee cap calculation (default 10m0s) */
        'elapsed-time-base'?: string;
        /** weight given to the units of time elapsed used for maximum fee cap calculation (default 10) */
        'elapsed-time-importance'?: number;
        'external-signer'?: {
          /** external signer address */
          'address'?: string;
          /** rpc client cert */
          'client-cert'?: string;
          /** rpc client private key */
          'client-private-key'?: string;
          /** external signer method (default "eth_signTransaction") */
          'method'?: string;
          /** external signer root CA */
          'root-ca'?: string;
          /** external signer url */
          'url'?: string;
        };
        /** encodes items in a legacy way (as it was before dropping generics) */
        'legacy-storage-encoding'?: boolean;
        /** the maximum tip cap to post EIP-4844 blob carrying transactions at (default 1) */
        'max-blob-tx-tip-cap-gwei'?: number;
        /** the maximum multiple of the current price to bid for a transaction's fees (may be exceeded due to min rbf increase, 0 = unlimited) (default 100000) */
        'max-fee-bid-multiple-bips'?: number;
        /** mathematical formula to calculate maximum fee cap gwei the result of which would be float64. This expression is expected to be evaluated please refer https://github.com/Knetic/govaluate/blob/master/MANUAL.md to find all available mathematical operators. Currently available variables to construct the formula are BacklogOfBatches, UrgencyGWei, ElapsedTime, ElapsedTimeBase, ElapsedTimeImportance, and TargetPriceGWei (default "((BacklogOfBatches * UrgencyGWei) ** 2) + ((ElapsedTime/ElapsedTimeBase) ** 2) * ElapsedTimeImportance + TargetPriceGWei") */
        'max-fee-cap-formula'?: string;
        /** the maximum number of transactions to have queued in the mempool at once (0 = unlimited) (default 18) */
        'max-mempool-transactions'?: number;
        /** the maximum number of weight (weight = min(1, tx.blobs)) to have queued in the mempool at once (0 = unlimited) (default 18) */
        'max-mempool-weight'?: number;
        /** the maximum number of unconfirmed transactions to track at once (0 = unlimited) */
        'max-queued-transactions'?: number;
        /** the maximum tip cap to post transactions at (default 5) */
        'max-tip-cap-gwei'?: number;
        /** the minimum tip cap to post EIP-4844 blob carrying transactions at (default 1) */
        'min-blob-tx-tip-cap-gwei'?: number;
        /** the minimum tip cap to post transactions at (default 0.05) */
        'min-tip-cap-gwei'?: number;
        /** the maximum probable reorg depth, used to determine when a transaction will no longer likely need replaced-by-fee (default 1) */
        'nonce-rbf-soft-confs'?: number;
        'redis-signer'?: {
          'dangerous'?: {
            /** disable message signature verification */
            'disable-signature-verification'?: boolean;
          };
          /** a fallback key used for message verification */
          'fallback-verification-key'?: string;
          /** a 32-byte (64-character) hex string used to sign messages, or a path to a file containing it */
          'signing-key'?: string;
        };
        /** comma-separated list of durations since first posting to attempt a replace-by-fee (default "5m,10m,20m,30m,1h,2h,4h,6h,8h,12h,16h,18h,20h,22h") */
        'replacement-times'?: string;
        /** the target price to use for maximum fee cap calculation (default 60) */
        'target-price-gwei'?: number;
        /** the urgency to use for maximum fee cap calculation (default 2) */
        'urgency-gwei'?: number;
        /** uses database storage when enabled (default true) */
        'use-db-storage'?: boolean;
        /** uses noop storage, it doesn't store anything */
        'use-noop-storage'?: boolean;
        /** only treat a transaction as confirmed after L1 finality has been achieved (recommended) (default true) */
        'wait-for-l1-finality'?: boolean;
      };
      /** If unable to batch to DAS, disable fallback storing data on chain */
      'disable-das-fallback-store-data-on-chain'?: boolean;
      /** enable posting batches to l1 */
      'enable'?: boolean;
      /** how long to delay after error posting batch (default 10s) */
      'error-delay'?: string;
      /** use this much more gas than estimation says is necessary to post batches (default 50000) */
      'extra-batch-gas'?: number;
      /** for gas estimation, use this multiple of the basefee (measured in basis points) as the max fee per gas (default 15000) */
      'gas-estimate-base-fee-multiple-bips'?: number;
      /** The gas refunder contract address (optional) */
      'gas-refunder-address'?: string;
      /** if the parent chain supports 4844 blobs and ignore-blob-price is true, post 4844 blobs even if it's not price efficient */
      'ignore-blob-price'?: boolean;
      /** only post messages to batches when they're within the max future block/timestamp as of this L1 block tag ("safe", "finalized", "latest", or "ignore" to ignore this check) */
      'l1-block-bound'?: string;
      /** post batches even if not within the layer 1 future bounds if we're within this margin of the max delay (default 1h0m0s) */
      'l1-block-bound-bypass'?: string;
      /** maximum 4844 blob enabled batch size (default 779288) */
      'max-4844-batch-size'?: number;
      /** maximum batch posting delay (default 1h0m0s) */
      'max-delay'?: string;
      /** maximum batch size (default 100000) */
      'max-size'?: number;
      'parent-chain-wallet'?: {
        /** account to use (default is first account in keystore) */
        'account'?: string;
        /** if true, creates new key then exits */
        'only-create-key'?: boolean;
        /** wallet passphrase (default "PASSWORD_NOT_SET") */
        'password'?: string;
        /** pathname for wallet (default "batch-poster-wallet") */
        'pathname'?: string;
        /** private key for wallet */
        'private-key'?: string;
      };
      /** how long to wait after no batches are ready to be posted before checking again (default 10s) */
      'poll-interval'?: string;
      /** if the parent chain supports 4844 blobs and they're well priced, post EIP-4844 blobs */
      'post-4844-blobs'?: boolean;
      'redis-lock'?: {
        /** should node always try grabing lock in background */
        'background-lock'?: boolean;
        /** if false, always treat this as locked and don't write the lock to redis (default true) */
        'enable'?: boolean;
        /** key for lock */
        'key'?: string;
        /** how long lock is held (default 1m0s) */
        'lockout-duration'?: string;
        /** this node's id prefix when acquiring the lock (optional) */
        'my-id'?: string;
        /** how long between consecutive calls to redis (default 10s) */
        'refresh-duration'?: string;
      };
      /** if non-empty, the Redis URL to store queued transactions in */
      'redis-url'?: string;
      /** post batches with access lists to reduce gas usage (disabled for L3s) (default true) */
      'use-access-lists'?: boolean;
      /** wait for the max batch delay, even if the batch is full */
      'wait-for-max-delay'?: boolean;
    };
    'block-validator'?: {
      /** current wasm module root ('current' read from chain, 'latest' from machines/latest dir, or provide hash) (default "current") */
      'current-module-root'?: string;
      'dangerous'?: {
        /** resets block-by-block validation, starting again at genesis */
        'reset-block-validation'?: boolean;
      };
      /** enable block-by-block validation */
      'enable'?: boolean;
      /** failing a validation is treated as a fatal error (default true) */
      'failure-is-fatal'?: boolean;
      /** prepare entries for up to that many blocks ahead of validation (small footprint) (default 1024) */
      'forward-blocks'?: number;
      /** minimum free-memory limit after reaching which the blockvalidator pauses validation. Enabled by default as 1GB, to disable provide empty string (default "default") */
      'memory-free-limit'?: string;
      /** pending upgrade wasm module root to additionally validate (hash, 'latest' or empty) (default "latest") */
      'pending-upgrade-module-root'?: string;
      /** record that many blocks ahead of validation (larger footprint) (default 24) */
      'prerecorded-blocks'?: number;
      /** poll time to check validations (default 1s) */
      'validation-poll'?: string;
      /** array of validation rpc configs given as a json string. time duration should be supplied in number indicating nanoseconds (default "default") */
      'validation-server-configs-list'?: string;
      'validation-server'?: {
        /** limit size of arguments in log entries (default 2048) */
        'arg-log-limit'?: number;
        /** how long to wait for initial connection */
        'connection-wait'?: string;
        /** path to file with jwtsecret for validation - ignored if url is self or self-auth */
        'jwtsecret'?: string;
        /** number of retries in case of failure(0 mean one attempt) (default 3) */
        'retries'?: number;
        /** delay between retries */
        'retry-delay'?: string;
        /** Errors matching this regular expression are automatically retried (default "websocket: close.*|dial tcp .*|.*i/o timeout|.*connection reset by peer|.*connection refused") */
        'retry-errors'?: string;
        /** per-response timeout (0-disabled) */
        'timeout'?: string;
        /** url of server, use self for loopback websocket, self-auth for loopback with authentication (default "self-auth") */
        'url'?: string;
      };
    };
    'dangerous'?: {
      /** DANGEROUS! disables the EIP-4844 blob reader, which is necessary to read batches */
      'disable-blob-reader'?: boolean;
      /** DANGEROUS! disables listening to L1. To be used in test nodes only */
      'no-l1-listener'?: boolean;
      /** DANGEROUS! allows sequencing without sequencer-coordinator */
      'no-sequencer-coordinator'?: boolean;
    };
    'eigen-da'?: {
      /** enable EigenDA */
      enable?: boolean;
      /** RPC URL for EigenDA */
      rpc?: string;
    };
    'data-availability'?: {
      /** enable Anytrust Data Availability mode */
      'enable'?: boolean;
      'ipfs-storage'?: {
        /** enable storage/retrieval of sequencer batch data from IPFS */
        'enable'?: boolean;
        /** list of IPFS peers to connect to, eg /ip4/1.2.3.4/tcp/12345/p2p/abc...xyz */
        'peers'?: string[];
        /** pin sequencer batch data in IPFS (default true) */
        'pin-after-get'?: boolean;
        /** percent of sequencer batch data to pin, as a floating point number in the range 0.0 to 100.0 (default 100) */
        'pin-percentage'?: number;
        /** comma separated list of IPFS profiles to use, see https://docs.ipfs.tech/how-to/default-profile */
        'profiles'?: string;
        /** timeout for IPFS reads, since by default it will wait forever. Treat timeout as not found (default 1m0s) */
        'read-timeout'?: string;
        /** directory to use to store the local IPFS repo */
        'repo-dir'?: string;
      };
      /** whether the Data Availability Service should fail immediately on errors (not recommended) */
      'panic-on-error'?: boolean;
      /** parent chain RPC connection attempts (spaced out at least 1 second per attempt, 0 to retry infinitely), only used in standalone daserver; when running as part of a node that node's parent chain configuration is used (default 15) */
      'parent-chain-connection-attempts'?: number;
      /** URL for parent chain node, only used in standalone daserver; when running as part of a node that node's L1 configuration is used */
      'parent-chain-node-url'?: string;
      /** Data Availability Service timeout duration for Store requests (default 5s) */
      'request-timeout'?: string;
      'rest-aggregator'?: {
        /** enable retrieval of sequencer batch data from a list of remote REST endpoints; if other DAS storage types are enabled, this mode is used as a fallback */
        'enable'?: boolean;
        /** number of stats entries (latency and success rate) to keep for each REST endpoint; controls whether strategy is faster or slower to respond to changing conditions (default 20) */
        'max-per-endpoint-stats'?: number;
        /** a URL to a list of URLs of REST das endpoints that is checked at startup; additive with the url option */
        'online-url-list'?: string;
        /** time interval to periodically fetch url list from online-url-list (default 1h0m0s) */
        'online-url-list-fetch-interval'?: string;
        'simple-explore-exploit-strategy'?: {
          /** number of consecutive GetByHash calls to the aggregator where each call will cause it to select from REST endpoints in order of best latency and success rate, before switching to explore mode (default 1000) */
          'exploit-iterations'?: number;
          /** number of consecutive GetByHash calls to the aggregator where each call will cause it to randomly select from REST endpoints until one returns successfully, before switching to exploit mode (default 20) */
          'explore-iterations'?: number;
        };
        /** strategy to use to determine order and parallelism of calling REST endpoint URLs; valid options are 'simple-explore-exploit' (default "simple-explore-exploit") */
        'strategy'?: string;
        /** how frequently to update the strategy with endpoint latency and error rate data (default 10s) */
        'strategy-update-interval'?: string;
        'sync-to-storage'?: {
          /** check if the data already exists in this DAS's storage. Must be disabled for fast sync with an IPFS backend (default true) */
          'check-already-exists'?: boolean;
          /** time to wait if encountered an error before retrying (default 1s) */
          'delay-on-error'?: string;
          /** eagerly sync batch data to this DAS's storage from the rest endpoints, using L1 as the index of batch data hashes; otherwise only sync lazily */
          'eager'?: boolean;
          /** when eagerly syncing, start indexing forward from this L1 block. Only used if there is no sync state */
          'eager-lower-bound-block'?: number;
          /** log only on failures to write when syncing; otherwise treat it as an error (default true) */
          'ignore-write-errors'?: boolean;
          /** when eagerly syncing, max l1 blocks to read per poll (default 100) */
          'parent-chain-blocks-per-read'?: number;
          /** period to retain synced data (defaults to forever) (default 2562047h47m16.854775807s) */
          'retention-period'?: string;
          /** directory to store the sync state in, ie the block number currently synced up to, so that we don't sync from scratch each time */
          'state-dir'?: string;
        };
        /** list of URLs including 'http://' or 'https://' prefixes and port numbers to REST DAS endpoints; additive with the online-url-list option */
        'urls'?: string[];
        /** time to wait until trying the next set of REST endpoints while waiting for a response; the next set of REST endpoints is determined by the strategy selected (default 2s) */
        'wait-before-try-next'?: string;
      };
      'rpc-aggregator'?: {
        /** Number of assumed honest backends (H). If there are N backends, K=N+1-H valid responses are required to consider an Store request to be successful. */
        'assumed-honest'?: number;
        /** JSON RPC backend configuration */
        'backends'?: string;
        /** enable storage/retrieval of sequencer batch data from a list of RPC endpoints; this should only be used by the batch poster and not in combination with other DAS storage types */
        'enable'?: boolean;
      };
      /** parent chain address of SequencerInbox contract */
      'sequencer-inbox-address'?: string;
    };
    'delayed-sequencer'?: {
      /** enable delayed sequencer */
      'enable'?: boolean;
      /** how many blocks in the past L1 block is considered final (ignored when using Merge finality) (default 20) */
      'finalize-distance'?: number;
      /** whether to wait for full finality before sequencing delayed messages */
      'require-full-finality'?: boolean;
      /** whether to use The Merge's notion of finality before sequencing delayed messages (default true) */
      'use-merge-finality'?: boolean;
    };
    'feed'?: {
      input?: {
        /** enable per message deflate compression support (default true) */
        'enable-compression'?: boolean;
        /** initial duration to wait before reconnect (default 1s) */
        'reconnect-initial-backoff'?: string;
        /** maximum duration to wait before reconnect (default 1m4s) */
        'reconnect-maximum-backoff'?: string;
        /** require chain id to be present on connect */
        'require-chain-id'?: boolean;
        /** require feed version to be present on connect */
        'require-feed-version'?: boolean;
        /** list of secondary URLs of sequencer feed source. Would be started in the order they appear in the list when primary feeds fails */
        'secondary-url'?: string[];
        /** duration to wait before timing out connection to sequencer feed (default 20s) */
        'timeout'?: string;
        /** list of primary URLs of sequencer feed source */
        'url'?: string[];
        'verify'?: {
          /** accept verified message from sequencer (default true) */
          'accept-sequencer'?: boolean;
          /** a list of allowed addresses */
          'allowed-addresses'?: string[];
          'dangerous'?: {
            /** accept empty as valid signature (default true) */
            'accept-missing'?: boolean;
          };
        };
      };
      output?: {
        /** address to bind the relay feed output to */
        'addr'?: string;
        'backlog'?: {
          /** the maximum number of messages each segment within the backlog can contain (default 240) */
          'segment-limit'?: number;
        };
        /** delay the first messages sent to each client by this amount */
        'client-delay'?: string;
        /** duration to wait before timing out connections to client (default 15s) */
        'client-timeout'?: string;
        'connection-limits'?: {
          /** enable broadcaster per-client connection limiting */
          'enable'?: boolean;
          /** limit clients, as identified by IPv4/v6 address, to this many connections to this relay (default 5) */
          'per-ip-limit'?: number;
          /** limit ipv6 clients, as identified by IPv6 address masked with /48, to this many connections to this relay (default 20) */
          'per-ipv6-cidr-48-limit'?: number;
          /** limit ipv6 clients, as identified by IPv6 address masked with /64, to this many connections to this relay (default 10) */
          'per-ipv6-cidr-64-limit'?: number;
          /** time to wait after a relay client disconnects before the disconnect is registered with respect to the limit for this client */
          'reconnect-cooldown-period'?: string;
        };
        /** don't sign feed messages (default true) */
        'disable-signing'?: boolean;
        /** enable broadcaster */
        'enable'?: boolean;
        /** enable per message deflate compression support */
        'enable-compression'?: boolean;
        /** duration to wait before timing out HTTP to WS upgrade (default 1s) */
        'handshake-timeout'?: string;
        /** only supply catchup buffer if requested sequence number is reasonable */
        'limit-catchup'?: boolean;
        /** log every client connect */
        'log-connect'?: boolean;
        /** log every client disconnect */
        'log-disconnect'?: boolean;
        /** the maximum size of the catchup buffer (-1 means unlimited) (default -1) */
        'max-catchup'?: number;
        /** maximum number of messages allowed to accumulate before client is disconnected (default 4096) */
        'max-send-queue'?: number;
        /** duration for ping interval (default 5s) */
        'ping'?: string;
        /** port to bind the relay feed output to (default "9642") */
        'port'?: string;
        /** queue size for HTTP to WS upgrade (default 100) */
        'queue'?: number;
        /** duration to wait before timing out reading data (i.e. pings) from clients (default 1s) */
        'read-timeout'?: string;
        /** require clients to use compression */
        'require-compression'?: boolean;
        /** don't connect if client version not present */
        'require-version'?: boolean;
        /** sign broadcast messages */
        'signed'?: boolean;
        /** number of threads to reserve for HTTP to WS upgrade (default 100) */
        'workers'?: number;
        /** duration to wait before timing out writing data to clients (default 2s) */
        'write-timeout'?: string;
      };
    };
    'inbox-reader'?: {
      /** the maximum time to wait between inbox checks (if not enough new blocks are found) (default 1m0s) */
      'check-delay'?: string;
      /** the default number of blocks to read at once (will vary based on traffic by default) (default 100) */
      'default-blocks-to-read'?: number;
      /** number of latest blocks to ignore to reduce reorgs */
      'delay-blocks'?: number;
      /** erase future transactions in addition to overwriting existing ones on reorg */
      'hard-reorg'?: boolean;
      /** if adjust-blocks-to-read is enabled, the maximum number of blocks to read at once (default 2000) */
      'max-blocks-to-read'?: number;
      /** the minimum number of blocks to read at once (when caught up lowers load on L1) (default 1) */
      'min-blocks-to-read'?: number;
      /** mode to only read latest or safe or finalized L1 blocks. Enabling safe or finalized disables feed input and output. Defaults to latest. Takes string input, valid strings- latest, safe, finalized (default "latest") */
      'read-mode'?: string;
      /** if adjust-blocks-to-read is enabled, the target number of messages to read at once (default 500) */
      'target-messages-read'?: number;
    };
    'maintenance'?: {
      'lock'?: {
        /** should node always try grabing lock in background */
        'background-lock'?: boolean;
        /** if false, always treat this as locked and don't write the lock to redis (default true) */
        'enable'?: boolean;
        /** key for lock */
        'key'?: string;
        /** how long lock is held (default 1m0s) */
        'lockout-duration'?: string;
        /** this node's id prefix when acquiring the lock (optional) */
        'my-id'?: string;
        /** how long between consecutive calls to redis (default 10s) */
        'refresh-duration'?: string;
      };
      /** UTC 24-hour time of day to run maintenance (currently only db compaction) at (e.g. 15:00) */
      'time-of-day'?: string;
    };
    'message-pruner'?: {
      /** enable message pruning (default true) */
      'enable'?: boolean;
      /** min number of batches not pruned (default 2) */
      'min-batches-left'?: number;
      /** interval for running message pruner (default 1m0s) */
      'prune-interval'?: string;
    };
    'parent-chain-reader'?: {
      'dangerous'?: {
        /** Dangerous! only meant to be used by system tests */
        'wait-for-tx-approval-safe-poll'?: string;
      };
      /** enable reader connection (default true) */
      'enable'?: boolean;
      /** warns if the latest l1 block is at least this old (default 5m0s) */
      'old-header-timeout'?: string;
      /** interval when polling endpoint (default 15s) */
      'poll-interval'?: string;
      /** do not attempt to subscribe to header events */
      'poll-only'?: boolean;
      /** interval for subscribe error (default 5m0s) */
      'subscribe-err-interval'?: string;
      /** timeout when waiting for a transaction (default 5m0s) */
      'tx-timeout'?: string;
      /** use l1 data about finalized/safe blocks (default true) */
      'use-finality-data'?: boolean;
    };
    'seq-coordinator'?: {
      /** if non-empty, launch an HTTP service binding to this address that returns status code 200 when chosen and 503 otherwise */
      'chosen-healthcheck-addr'?: string;
      /** enable sequence coordinator */
      'enable'?: boolean;
      /** the maximum amount of time to spend waiting for another sequencer to accept the lockout when handing it off on shutdown or db compaction (default 30s) */
      'handoff-timeout'?: string;
      /** (default 1m0s) */
      'lockout-duration'?: string;
      /** (default 30s) */
      'lockout-spare'?: string;
      /** will only be marked as wanting the lockout if not too far behind (default 2000) */
      'msg-per-poll'?: number;
      /** url for this sequencer if it is the chosen (default "<?INVALID-URL?>") */
      'my-url'?: string;
      /** the Redis URL to coordinate via */
      'redis-url'?: string;
      /** the number of times to retry releasing the wants lockout and chosen one status on shutdown (default 4) */
      'release-retries'?: number;
      /** (default 50ms) */
      'retry-interval'?: string;
      /** if non-zero will add delay after transferring control (default 5s) */
      'safe-shutdown-delay'?: string;
      /** (default 24h0m0s) */
      'seq-num-duration'?: string;
      'signer'?: {
        'ecdsa'?: {
          /** accept verified message from sequencer (default true) */
          'accept-sequencer'?: boolean;
          /** a list of allowed addresses */
          'allowed-addresses'?: string[];
          'dangerous'?: {
            /** accept empty as valid signature (default true) */
            'accept-missing'?: boolean;
          };
        };
        /** if to fall back to symmetric hmac */
        'symmetric-fallback'?: boolean;
        /** if to sign with symmetric hmac */
        'symmetric-sign'?: boolean;
        'symmetric'?: {
          'dangerous'?: {
            /** disable message signature verification */
            'disable-signature-verification'?: boolean;
          };
          /** a fallback key used for message verification */
          'fallback-verification-key'?: string;
          /** a 32-byte (64-character) hex string used to sign messages, or a path to a file containing it */
          'signing-key'?: string;
        };
      };
      /** (default 250ms) */
      'update-interval'?: string;
    };
    /** enable sequencer */
    'sequencer'?: boolean;
    'staker'?: {
      /** confirmation blocks (default 12) */
      'confirmation-blocks'?: number;
      /** validator smart contract wallet public address */
      'contract-wallet-address'?: string;
      'dangerous'?: {
        /** DANGEROUS! make assertions even when the wasm module root is wrong */
        'ignore-rollup-wasm-module-root'?: boolean;
        /** DANGEROUS! allows running an L1 validator without a block validator */
        'without-block-validator'?: boolean;
      };
      'data-poster'?: {
        /** if true, don't put transactions in the mempool that spend a total greater than the batch poster's balance (default true) */
        'allocate-mempool-balance'?: boolean;
        /** comma-separated list of durations since first posting a blob transaction to attempt a replace-by-fee (default "5m,10m,30m,1h,4h,8h,16h,22h") */
        'blob-tx-replacement-times'?: string;
        'dangerous'?: {
          /** clear database storage */
          'clear-dbstorage'?: boolean;
        };
        /** unit to measure the time elapsed since creation of transaction used for maximum fee cap calculation (default 10m0s) */
        'elapsed-time-base'?: string;
        /** weight given to the units of time elapsed used for maximum fee cap calculation (default 10) */
        'elapsed-time-importance'?: number;
        'external-signer'?: {
          /** external signer address */
          'address'?: string;
          /** rpc client cert */
          'client-cert'?: string;
          /** rpc client private key */
          'client-private-key'?: string;
          /** external signer method (default "eth_signTransaction") */
          'method'?: string;
          /** external signer root CA */
          'root-ca'?: string;
          /** external signer url */
          'url'?: string;
        };
        /** encodes items in a legacy way (as it was before dropping generics) */
        'legacy-storage-encoding'?: boolean;
        /** the maximum tip cap to post EIP-4844 blob carrying transactions at (default 1) */
        'max-blob-tx-tip-cap-gwei'?: number;
        /** the maximum multiple of the current price to bid for a transaction's fees (may be exceeded due to min rbf increase, 0 = unlimited) (default 100000) */
        'max-fee-bid-multiple-bips'?: number;
        /** mathematical formula to calculate maximum fee cap gwei the result of which would be float64. This expression is expected to be evaluated please refer https://github.com/Knetic/govaluate/blob/master/MANUAL.md to find all available mathematical operators. Currently available variables to construct the formula are BacklogOfBatches, UrgencyGWei, ElapsedTime, ElapsedTimeBase, ElapsedTimeImportance, and TargetPriceGWei (default "((BacklogOfBatches * UrgencyGWei) ** 2) + ((ElapsedTime/ElapsedTimeBase) ** 2) * ElapsedTimeImportance + TargetPriceGWei") */
        'max-fee-cap-formula'?: string;
        /** the maximum number of transactions to have queued in the mempool at once (0 = unlimited) (default 1) */
        'max-mempool-transactions'?: number;
        /** the maximum number of weight (weight = min(1, tx.blobs)) to have queued in the mempool at once (0 = unlimited) (default 1) */
        'max-mempool-weight'?: number;
        /** the maximum number of unconfirmed transactions to track at once (0 = unlimited) */
        'max-queued-transactions'?: number;
        /** the maximum tip cap to post transactions at (default 5) */
        'max-tip-cap-gwei'?: number;
        /** the minimum tip cap to post EIP-4844 blob carrying transactions at (default 1) */
        'min-blob-tx-tip-cap-gwei'?: number;
        /** the minimum tip cap to post transactions at (default 0.05) */
        'min-tip-cap-gwei'?: number;
        /** the maximum probable reorg depth, used to determine when a transaction will no longer likely need replaced-by-fee (default 1) */
        'nonce-rbf-soft-confs'?: number;
        'redis-signer'?: {
          'dangerous'?: {
            /** disable message signature verification */
            'disable-signature-verification'?: boolean;
          };
          /** a fallback key used for message verification */
          'fallback-verification-key'?: string;
          /** a 32-byte (64-character) hex string used to sign messages, or a path to a file containing it */
          'signing-key'?: string;
        };
        /** comma-separated list of durations since first posting to attempt a replace-by-fee (default "5m,10m,20m,30m,1h,2h,4h,6h,8h,12h,16h,18h,20h,22h") */
        'replacement-times'?: string;
        /** the target price to use for maximum fee cap calculation (default 60) */
        'target-price-gwei'?: number;
        /** the urgency to use for maximum fee cap calculation (default 2) */
        'urgency-gwei'?: number;
        /** uses database storage when enabled (default true) */
        'use-db-storage'?: boolean;
        /** uses noop storage, it doesn't store anything */
        'use-noop-storage'?: boolean;
        /** only treat a transaction as confirmed after L1 finality has been achieved (recommended) (default true) */
        'wait-for-l1-finality'?: boolean;
      };
      /** disable validator challenge */
      'disable-challenge'?: boolean;
      /** enable validator (default true) */
      'enable'?: boolean;
      /** use this much more gas than estimation says is necessary to post transactions (default 50000) */
      'extra-gas'?: number;
      /** The gas refunder contract address (optional) */
      'gas-refunder-address'?: string;
      /** if configured with the makeNodes strategy, how often to create new assertions (bypassed in case of a dispute) (default 1h0m0s) */
      'make-assertion-interval'?: string;
      /** only create smart wallet contract and exit */
      'only-create-wallet-contract'?: boolean;
      'parent-chain-wallet'?: {
        /** account to use (default is first account in keystore) */
        'account'?: string;
        /** if true, creates new key then exits */
        'only-create-key'?: boolean;
        /** wallet passphrase (default "PASSWORD_NOT_SET") */
        'password'?: string;
        /** pathname for wallet (default "validator-wallet") */
        'pathname'?: string;
        /** private key for wallet */
        'private-key'?: string;
      };
      'posting-strategy'?: {
        /** high gas delay blocks */
        'high-gas-delay-blocks'?: number;
        /** high gas threshold */
        'high-gas-threshold'?: number;
      };
      /** redis url for L1 validator */
      'redis-url'?: string;
      /** how often the L1 validator should check the status of the L1 rollup and maybe take action with its stake (default 1m0s) */
      'staker-interval'?: string;
      /** assume staked nodes are valid (default true) */
      'start-validation-from-staked'?: boolean;
      /** L1 validator strategy, either watchtower, defensive, stakeLatest, or makeNodes (default "Watchtower") */
      'strategy'?: string;
      /** use a smart contract wallet instead of an EOA address */
      'use-smart-contract-wallet'?: boolean;
    };
    'sync-monitor'?: {
      /** allowed lag between messages read and blocks built (default 20) */
      'block-build-lag'?: number;
      /** allowed lag between messages read from sequencer inbox and blocks built */
      'block-build-sequencer-inbox-lag'?: number;
      /** allowed lag between local and remote messages (default 15) */
      'coordinator-msg-lag'?: number;
      /** wait for block validator to complete before returning finalized block number */
      'finalized-block-wait-for-block-validator'?: boolean;
      /** wait for block validator to complete before returning safe block number */
      'safe-block-wait-for-block-validator'?: boolean;
    };
    'transaction-streamer'?: {
      /** delay when polling calls to execute messages (default 100ms) */
      'execute-message-loop-delay'?: string;
      /** maximum cache of pending broadcaster messages (default 50000) */
      'max-broadcaster-queue-size'?: number;
      /** maximum number of messages to attempt to resequence on reorg (0 = never resequence, -1 = always resequence) (default 1024) */
      'max-reorg-resequence-depth'?: number;
    };
  };
  'p2p'?: {
    /** P2P bootnodes */
    'bootnodes'?: string[];
    /** P2P bootnodes v5 */
    'bootnodes-v5'?: string[];
    /** P2P discovery v4 */
    'discovery-v4'?: boolean;
    /** P2P discovery v5 */
    'discovery-v5'?: boolean;
    /** P2P listen address */
    'listen-addr'?: string;
    /** P2P max peers (default 50) */
    'max-peers'?: number;
    /** P2P no dial (default true) */
    'no-dial'?: boolean;
    /** P2P no discovery (default true) */
    'no-discovery'?: boolean;
  };
  'parent-chain'?: {
    'blob-client'?: {
      /** Value to send with the HTTP Authorization: header for Beacon REST requests, must include both scheme and scheme parameters */
      'authorization'?: string;
      /** Beacon Chain RPC URL to use for fetching blobs (normally on port 3500) */
      'beacon-url'?: string;
      /** Full path of the directory to save fetched blobs */
      'blob-directory'?: string;
      /** Backup beacon Chain RPC URL to use for fetching blobs (normally on port 3500) when unable to fetch from primary */
      'secondary-beacon-url'?: string;
    };
    'connection'?: {
      /** limit size of arguments in log entries (default 2048) */
      'arg-log-limit'?: number;
      /** how long to wait for initial connection (default 1m0s) */
      'connection-wait'?: string;
      /** path to file with jwtsecret for validation - ignored if url is self or self-auth */
      'jwtsecret'?: string;
      /** number of retries in case of failure(0 mean one attempt) (default 2) */
      'retries'?: number;
      /** delay between retries */
      'retry-delay'?: string;
      /** Errors matching this regular expression are automatically retried */
      'retry-errors'?: string;
      /** per-response timeout (0-disabled) (default 1m0s) */
      'timeout'?: string;
      /** url of server, use self for loopback websocket, self-auth for loopback with authentication */
      'url'?: string;
    };
    /** if set other than 0, will be used to validate database and L1 connection */
    'id'?: number;
    'wallet'?: {
      /** account to use (default is first account in keystore) */
      'account'?: string;
      /** if true, creates new key then exits */
      'only-create-key'?: boolean;
      /** wallet passphrase (default "PASSWORD_NOT_SET") */
      'password'?: string;
      /** pathname for wallet (default "wallet") */
      'pathname'?: string;
      /** private key for wallet */
      'private-key'?: string;
    };
  };
  'persistent'?: {
    /** directory of ancient where the chain freezer can be opened */
    'ancient'?: string;
    /** directory to store chain state */
    'chain'?: string;
    /** backing database implementation to use ('leveldb' or 'pebble') (default "leveldb") */
    'db-engine'?: string;
    /** directory to store global config (default ".arbitrum") */
    'global-config'?: string;
    /** number of file descriptor handles to use for the database (default 512) */
    'handles'?: number;
    /** directory to store log file */
    'log-dir'?: string;
  };
  /** enable pprof */
  'pprof'?: boolean;
  'pprof-cfg'?: {
    /** pprof server address (default "127.0.0.1") */
    addr?: string;
    /** pprof server port (default 6071) */
    port?: number;
  };
  'rpc'?: {
    /** the maximum number of requests in a batch (0 means no limit) (default 1000) */
    'batch-request-limit'?: number;
    /** the maximum response size for a JSON-RPC request measured in bytes (0 means no limit) (default 10000000) */
    'max-batch-response-size'?: number;
  };
  'validation'?: {
    /** validate is an authenticated API (default true) */
    'api-auth'?: boolean;
    /** validate is a public API */
    'api-public'?: boolean;
    'arbitrator'?: {
      /** timeout before discarding execution run (default 15m0s) */
      'execution-run-timeout'?: string;
      'execution'?: {
        /** how many machines to store in cache while working on a challenge (should be even) (default 4) */
        'cached-challenge-machines'?: number;
        /** initial steps between machines (default 100000) */
        'initial-steps'?: number;
      };
      /** path to write machines to (default "./target/output") */
      'output-path'?: string;
      /** number of concurrent validation threads */
      'workers'?: number;
    };
    'jit'?: {
      /** use Cranelift instead of LLVM when validating blocks using the jit-accelerated block validator (default true) */
      'cranelift'?: boolean;
      /** if memory used by a jit wasm exceeds this limit, a warning is logged (default 4294967296) */
      'wasm-memory-usage-limit'?: number;
      /** number of concurrent validation threads */
      'workers'?: number;
    };
    /** use jit for validation (default true) */
    'use-jit'?: boolean;
    'wasm'?: {
      /** list of WASM module roots to check if the on-chain WASM module root belongs to on node startup */
      'allowed-wasm-module-roots'?: string[];
      /** enable check for compatibility of on-chain WASM module root with node (default true) */
      'enable-wasmroots-check'?: boolean;
      /** path to machine folders, each containing wasm files (machine.wavm.br, replay.wasm) */
      'root-path'?: string;
    };
  };
  'ws'?: {
    /** WS-RPC server listening interface */
    'addr'?: string;
    /** APIs offered over the WS-RPC interface (default [net,web3,eth,arb]) */
    'api'?: string[];
    /** expose private api via websocket */
    'expose-all'?: boolean;
    /** Origins from which to accept websockets requests */
    'origins'?: string[];
    /** WS-RPC server listening port (default 8548) */
    'port'?: number;
    /** WS path path prefix on which JSON-RPC is served. Use '/' to serve on all paths */
    'rpcprefix'?: string;
  };
};
