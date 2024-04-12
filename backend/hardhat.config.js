require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: 'Mumbai',
  networks: {
    // Mumbai: {
    //   url: `${API_URL}`,
    //   accounts: [`0x${PRIVATE_KEY}`]
    // },
    Fuji: {
      url: `${API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  paths: {
    artifacts: '../frontend/src'
  },
};
