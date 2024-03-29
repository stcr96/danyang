const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules')

module.exports = buildModule("Initiation", (m) => {
  const Danyang = m.contract("Danyang", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);
  m.call(Danyang, "setBaseURI", ["https://ipfs.io/ipfs/QmeExEYoftvbYQvQWhCMdVgua1MARtyQbDUVVP99sUG8dC?filename=%EC%9D%B4%EB%B0%A9%EC%9A%B4_%EB%8F%84%EB%8B%B4%EC%82%BC%EB%B4%89.jpg"]);
  m.call(Danyang, "setJoinCode", ["abcd1234"]);

  // const DanyangGovernor = m.contract("DanyangGovernor", [Danyang.address], {
  //   after: [Danyang],
  // })
  return { Danyang };
});