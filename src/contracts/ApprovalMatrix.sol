pragma solidity ^0.5.0;

import "./Token.sol";

contract ApprovalMatrix {
string  public name = "Approval Matrix";

Token public token;
uint public rate = 100;

mapping(uint => EmployeeMatrix) public employee;
// Store employee Count
uint public employeeCount;

struct EmployeeMatrix {
    uint id;
    address account;
    string EmployeeName;
    string EmployeeEmail;
    string EmployeeRole;
    uint EmployeeMaxBaget;
}

/*
event employee(
	    address _account,
	    string _employeeName,
	    string _employeeEmail,
	    string _employeeRole,
	    uint _employeeMaxBaget 

);*/

constructor(Token _token) public {
    token = _token;
    }


function AddEmployee(string storage _employeeName, string storage _employeeEmail, string storage _employeeRole) private {
    // Calculate the number of tokens for Employer
    uint tokenAmount = msg.value * rate;
    
    // Require that ApprovalMatrix has enough tokens
    require(token.balanceOf(address(this)) >= tokenAmount);

    // Transfer tokens to the user
    token.transfer(msg.sender, tokenAmount);

    employeeCount ++;
    employee[employeeCount] = EmployeeMatrix(employeeCount, msg.sender, _employeeName, _employeeEmail, _employeeRole, tokenAmount);
}


}