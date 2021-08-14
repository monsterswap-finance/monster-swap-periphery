const MonsterRouter = artifacts.require("MonsterRouter");

const { config } = require("./migration-config");

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(
    MonsterRouter,
    config[network].factoryAddress,
    config[network].WBNBAddress
  );
};
