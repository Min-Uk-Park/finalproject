const HashedTimelock = artifacts.require('./contracts/HashedTimelock.sol');
const HashedTimelockERC20 = artifacts.require('./contracts/HashedTimelockERC20.sol');
const HashedTimelockERC721 = artifacts.require('./contracts/HashedTimelockERC721.sol');

module.exports = async function(deployer) {
  await deployer.deploy(HashedTimelock);
  const hashedTimelockInstance = await HashedTimelock.deployed();
  console.log("HashedTimelock Contract Address:", hashedTimelockInstance.address);

  await deployer.deploy(HashedTimelockERC20);
  const hashedTimelockERC20Instance = await HashedTimelockERC20.deployed();
  console.log("HashedTimelockERC20 Contract Address:", hashedTimelockERC20Instance.address);

  await deployer.deploy(HashedTimelockERC721);
  const hashedTimelockERC721Instance = await HashedTimelockERC721.deployed();
  console.log("HashedTimelockERC721 Contract Address:", hashedTimelockERC721Instance.address);
};
