const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("EightSight", (m) => {
  const EightSight = m.contract("Danyang", ["0x57FFfaC060669188470176037A6f9791640ecBce"]);
  m.call(EightSight, "isOnSale", []);

  return { EightSight };
});
