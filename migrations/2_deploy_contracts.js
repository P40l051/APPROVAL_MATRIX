const Token = artifacts.require("Token");
const ApprovalMatrix = artifacts.require("ApprovalMatrix");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

    // Deploy ApprovalMatrix
  await deployer.deploy(ApprovalMatrix, token.address);
  const approvalMatrix = await ApprovalMatrix.deployed()

    // Modify this to allocate properly initial token distribution (total Arroval Matrix Tokens are 1 million)
  await token.transfer(approvalMatrix.address, '500000000000000000000000')
  await token.transfer('0xC4c06c58918b0a9F452b95f5BA2d62b0e2310bfD', '500000000000000000000000')
};