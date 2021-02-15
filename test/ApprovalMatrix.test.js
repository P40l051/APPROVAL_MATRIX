const Token = artifacts.require("Token");
const ApprovalMatrix = artifacts.require("ApprovalMatrix");

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

contract('ApprovalMatrix', ([deployer, investor1, investor2]) => {
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

  describe('TEST addEmployee() function', async () => {

    let result1, employeeCount, approvalMatrixBalance, employee

    before(async () => {
      // Test add Employee - Add investor2

      result1 = await approvalMatrix.AddEmployee( investor2,'Paolo', 'paolo.tancredi89@gmail.com','Product Specialist', 'Sales', 'Roma', { from: investor1, value: web3.utils.toWei('1', 'ether')});
      approvalMatrixBalance = await token.balanceOf(approvalMatrix.address)
      investor1Balance = await token.balanceOf(investor1)
      investor2Balance = await token.balanceOf(investor2)
      employeeCount = await approvalMatrix.employeeCount()
    })

    it('employeeCount is correct', async () => {
      assert.equal(employeeCount, 1)
    })
    it('Check Approval Matrix balance after added employee', async () => {
      assert.equal(approvalMatrixBalance.toString(), tokens('999900'))
    })
    it('Check investor2 balance after added employee', async () => {
      assert.equal(investor2Balance.toString(), tokens('100'))
    })
    it('TEST EVENT EMITTED', async () => {
      const event = result1.logs[0].args
      assert.equal(event._id.toString(), 1, 'employee _id is correct')
      assert.equal(event._employerBossAdress, investor1, '_account is correct')
      assert.equal(event._employerAdress, investor2, '_account is correct')
      assert.equal(event._employeeName, 'Paolo','_employeeName is correct' )
      assert.equal(event._employeeEmail, 'paolo.tancredi89@gmail.com', '_employeeEmail is correct')
      assert.equal(event._employeeRole, 'Product Specialist', '_employeeRole is correct')
      assert.equal(event._employeeDivision, 'Sales', '_employeeDivision is correct')
      assert.equal(event._employeeLocation, 'Roma', '_employeeLocation is correct')
      assert.equal(event._employeePower.toString(), tokens('100'), '_employeePower is correct')
    })
//check struct
      it('TEST STRUCT EmployeeMatrix', async () => {
      const employee = await approvalMatrix.employees(employeeCount)
      assert.equal(employee.Id.toString(), employeeCount.toString(), 'id is correct')
      assert.equal(employee.EmployerBossAdress, investor1, 'EmployerBossAdress is correct')
      assert.equal(employee.EmployerAdress, investor2, 'EmployerAdress is correct')
      assert.equal(employee.EmployeeName, 'Paolo','EmployeeName is correct' )
      assert.equal(employee.EmployeeEmail, 'paolo.tancredi89@gmail.com', 'EmployeeEmail is correct')
      assert.equal(employee.EmployeeRole, 'Product Specialist', 'EmployeeRole is correct')
      assert.equal(employee.EmployeeDivision, 'Sales', 'EmployeeRole is correct')
      assert.equal(employee.EmployeeLocation, 'Roma', 'EmployeeRole is correct')
      assert.equal(employee.EmployeePower.toString(), tokens('100'), 'EmployeePower is correct')
    })
  })
})