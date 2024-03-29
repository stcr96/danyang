require("@nomicfoundation/hardhat-toolbox");

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
      url: "https://polygon-mumbai.g.alchemy.com/v2/Q4TLtST-SqQc-Il8qolLi5XQ90figtVd",
      accounts: ["75c62d126b9065b177e18f8feffe0efeed65ea34697765451dfaba936269f4e2"]
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
