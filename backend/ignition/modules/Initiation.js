const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules')

module.exports = buildModule("Initiation", (m) => {
  const Danyang = m.contract("Danyang", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://ipfs.io/ipfs/QmSsMtUA9DVDqin7UibY7NxCPSf7rLrcnWVRJZeYNqP7C1?filename=danyang-metadata.json", "abcd1234"]);
  m.call(Danyang, "", );

  // const DanyangGovernor = m.contract("DanyangGovernor", [Danyang.address], {
  //   after: [Danyang],
  // })
  return { Danyang };
});