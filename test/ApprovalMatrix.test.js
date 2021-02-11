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
    
    it('contract rate correct', async () => {
      const rate = await approvalMatrix.rate()
      assert.equal(rate, '100')
    })
    it('contract adress is OK', async () => {
      const address = await approvalMatrix.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('contract has tokens', async () => {
      let balance = await token.balanceOf(approvalMatrix.address)
      assert.equal(balance.toString(), tokens('1000000'))
    })
  })

  describe('addEmployee()', async () => {

    let result, employeeCount

    before(async () => {
      // Test add Employee
      result = await approvalMatrix.AddEmployee('Paolo', 'ssjsj@gmail.com', 'Engineer', { from: investor, value: web3.utils.toWei('1', 'ether')});
      employeeCount = await approvalMatrix.employeeCount()
      console.log(result)
    })

    it('employeeCount is correct', async () => {
      const address = await approvalMatrix.address
      assert.equal(employeeCount, 1)
    })
  })
})