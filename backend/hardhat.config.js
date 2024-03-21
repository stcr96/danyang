require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: 'Mumbai',
  networks: {
    Mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Q4TLtST-SqQc-Il8qolLi5XQ90figtVd",
      accounts: ["75c62d126b9065b177e18f8feffe0efeed65ea34697765451dfaba936269f4e2"]
    }
  },
  paths: {
    artifacts: '../frontend/src'
  },
};
