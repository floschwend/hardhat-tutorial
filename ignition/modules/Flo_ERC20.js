const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("FloTokenModule", (m) => {
  const token = m.contract("FloToken", [1000]);

  return { token };
});

module.exports = TokenModule;