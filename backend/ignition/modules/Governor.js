const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Governor", (m) => {
  const DanyangGovernor = m.contract("DanyangGovernor", ["0x0165878A594ca255338adfa4d48449f69242Eb8F"]);
  return { DanyangGovernor };
})