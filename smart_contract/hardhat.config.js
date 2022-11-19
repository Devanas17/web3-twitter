require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
