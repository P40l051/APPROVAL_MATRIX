const Token = artifacts.require("Token");
const ApprovalMatrix = artifacts.require("ApprovalMatrix");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

    // Deploy ApprovalMatrix
  await deployer.deploy(ApprovalMatrix, token.address);
  const approvalMatrix = await ApprovalMatrix.deployed()

    // Transfer all tokens to EthSwap (1 million)
  await token.transfer(approvalMatrix.address, '1000000000000000000000000')
};