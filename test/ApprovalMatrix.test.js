const Token = artifacts.require("Token");
const ApprovalMatrix = artifacts.require("ApprovalMatrix");

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

contract('ApprovalMatrix', ([deployer, investor]) => {
  let token, approvalMatrix

  before(async () => {
    token = await Token.new()
    approvalMatrix = await ApprovalMatrix.new(token.address)
    // Transfer all tokens to EthSwap (1 million)
    await token.transfer(approvalMatrix.address, tokens('1000000'))
  })

  describe('Token deployment', async () => {
    it('contract has a name', async () => {
      const name = await token.name()
      assert.equal(name, 'DApp Token')
    })
  })

  describe('ApprovalMatrix deployment', async () => {
    it('contract has a name', async () => {
      const name = await approvalMatrix.name()
      assert.equal(name, 'Approval Matrix')
    })

    it('contract has tokens', async () => {
      let balance = await token.balanceOf(approvalMatrix.address)
      assert.equal(balance.toString(), tokens('1000000'))
    })
  })
})
