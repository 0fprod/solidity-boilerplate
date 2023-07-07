import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-watcher'
import dotenv from 'dotenv';

dotenv.config();
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || '';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || '';

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  // networks
  networks: {
    hardhat: {
      chainId: 1337, // Hardhat default
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5, // Goerli default
    },
  },
  // Tests watcher
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
      clearOnStart: true,
      start: 'echo Running my test task now..',
    },
    compilation: {
      tasks: ['compile'],
      files: ['./contracts'],
      ignoredFiles: ['**/.vscode'],
      verbose: true,
      clearOnStart: true,
      start: 'echo Running my compilation task now..',
    },
  },
  // Gas reporter
  gasReporter: {
    currency: 'EUR',
    enabled: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};

export default config;
