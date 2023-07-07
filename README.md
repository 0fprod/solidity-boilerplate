![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)
![Hardhat](./readme-images/hardhat.png)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=flat-square&logo=solidity&logoColor=white)
![Mocha](https://img.shields.io/badge/mocha-white?style=flat-square&logo=mocha)
![Chai](https://img.shields.io/badge/chai-blue?style=flat-square&logo=chai&color=%231f2328)

# Solidity boilerplate

This repository comes with some basic stuffs configured so you can start directly writing Solidity code and unit tests with typescript.

## Coding

Its configured with Hardhat Toolbox so a couple of things are already there:

- [x] Typesafe with Typescript and [TypeChain](https://github.com/dethcrypto/TypeChain/)
- [x] Tests with mocha, chai, [hardhat-chai-matchers](https://hardhat.org/hardhat-chai-matchers/docs/overview), and [hardhat-watcher](https://www.npmjs.com/package/hardhat-watcher).
- [x] [Hardhat coverage](https://github.com/sc-forks/solidity-coverage).
- [x] [Gas reporter](https://github.com/cgewecke/hardhat-gas-reporter). Enable/disable from `hardhat.config.ts`

## Scripts

- `npm run compile` Generates bytecode, abi and types
- `npm run dev` Compiles and watches `.sol` files
- `npm run test` Run tests
- `npm run watch` Watch tests
- `npm run coverage` Run tests with coverage
- `npm run deploy` Deploys to localhost
- `npm run deploy:goerli` Deployes to göerli testnet
