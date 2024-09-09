require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: 'AVAX_Fuji',
  networks: {
    // MATIC_Mumbai: {
    //   url: `${API_URL}`,
    //   accounts: [`0x${PRIVATE_KEY}`]
    // },
    AVAX_Fuji: {
      url: `${API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    // STRK_Sepolia: {
    //   url: `${API_URL}`,
    //   accounts: [`0x${PRIVATE_KEY}`]
    // }
  },
  paths: {
    artifacts: '../frontend/src/artifacts'
  },
};
