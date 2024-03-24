const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { parseEther } = require('ethers')

module.exports = buildModule("Joincode", (m) => {
  const Joincode = m.contract("Danyang", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);
  m.call(Joincode, "buyNFT", [], {value: parseEther('0.01')});

  return { Joincode };
});
