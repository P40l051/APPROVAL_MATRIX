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
    await token.transfer(approvalMatrix.address, tokens('500000'))
    await token.transfer(investor1, tokens('500000'))
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
    
    it('contract address is OK', async () => {
      const address = await approvalMatrix.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('contract & investor1 have tokens', async () => {
      let balance = await token.balanceOf(approvalMatrix.address)
      let investor1balance =  await token.balanceOf(investor1)
      assert.equal(balance.toString(), tokens('500000'))
      assert.equal(investor1balance.toString(), tokens('500000'))
    })
  })

  describe('TEST addEmployee() function', async () => {

    let result1, employeeCount, approvalMatrixBalance, investor1Balance, investor2Balance

    before(async () => {

      await token.approve(approvalMatrix.address, tokens('5'), {from: investor1} )
      // Test add Employee - Add investor2
      result1 = await approvalMatrix.AddEmployee( investor2,'Paolo', 'paolo.tancredi89@gmail.com','Product Specialist', 'Sales', 'Roma', { from: investor1, value: tokens('5') });
      approvalMatrixBalance = await token.balanceOf(approvalMatrix.address)
      investor1Balance = await token.balanceOf(investor1)
      investor2Balance = await token.balanceOf(investor2)
      employeeCount = await approvalMatrix.employeeCount()
    })
    
    it('employeeCount is correct', async () => {
      assert.equal(employeeCount, 1)
    }) 
    it('Check investor1 balance after added employee', async () => {
      assert.equal(investor1Balance.toString(), tokens('499995'))
    })
    it('Check investor2 balance after added employee', async () => {
      assert.equal(investor2Balance.toString(), tokens('5'))
    }) 
    it('TEST EVENT EMITTED', async () => {
      const event = result1.logs[0].args
      assert.equal(event._id.toString(), 1, 'employee _id is correct')
      assert.equal(event._employerBossAddress, investor1, '_account is correct')
      assert.equal(event._employerAddress, investor2, '_account is correct')
      assert.equal(event._employeeName, 'Paolo','_employeeName is correct' )
      assert.equal(event._employeeEmail, 'paolo.tancredi89@gmail.com', '_employeeEmail is correct')
      assert.equal(event._employeeRole, 'Product Specialist', '_employeeRole is correct')
      assert.equal(event._employeeDivision, 'Sales', '_employeeDivision is correct')
      assert.equal(event._employeeLocation, 'Roma', '_employeeLocation is correct')
      assert.equal(event._employeePower.toString(), tokens('5'), '_employeePower is correct')
    }) 
        //check struct
      it('TEST STRUCT EmployeeMatrix', async () => {
      const employee = await approvalMatrix.employees(employeeCount)
      assert.equal(employee.Id.toString(), employeeCount.toString(), 'id is correct')
      assert.equal(employee.EmployerBossAddress, investor1, 'EmployerBossAddress is correct')
      assert.equal(employee.EmployerAddress, investor2, 'EmployerAddress is correct')
      assert.equal(employee.EmployeeName, 'Paolo','EmployeeName is correct' )
      assert.equal(employee.EmployeeEmail, 'paolo.tancredi89@gmail.com', 'EmployeeEmail is correct')
      assert.equal(employee.EmployeeRole, 'Product Specialist', 'EmployeeRole is correct')
      assert.equal(employee.EmployeeDivision, 'Sales', 'EmployeeRole is correct')
      assert.equal(employee.EmployeeLocation, 'Roma', 'EmployeeRole is correct')
      assert.equal(employee.EmployeePower.toString(), tokens('5'), 'EmployeePower is correct')
    }) 
      it('TEST Add second employee & test full matrix', async () => {

      await token.approve(approvalMatrix.address, tokens('1'), {from: investor1} )
      result2 = await approvalMatrix.AddEmployee( investor2,'Arturo', 'arturo@gmail.com','Product Manager', 'After-Sales', 'Milano', { from: investor1, value: tokens('1') });
      employeeCount = await approvalMatrix.employeeCount()
    }) 
      it('employeeCount is correct', async () => {
      assert.equal(employeeCount, 2)
    }) 
  })
})