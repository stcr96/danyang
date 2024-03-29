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
    Mumbai: {
      url: `${API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    // Fuji: {
    //   url: "https://avalanche-fuji.infura.io/v3/f8a865fe5daa45d29b538c8cc0d4ebe4",
    //   accounts: [""]
    // },
  },
  paths: {
    artifacts: '../frontend/src'
  },
};
