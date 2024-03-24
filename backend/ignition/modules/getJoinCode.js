const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');
const { parseEther } = require('ethers');

module.exports = buildModule("getJoinCode", (m) => {
  const Danyang = m.contract("Danyang", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);
  m.call(Danyang, "buyNFT", [], {value: parseEther('0.01')});
  const joinCode = m.call(Danyang, "getJoinCode", [1]);

  return joinCode;
})