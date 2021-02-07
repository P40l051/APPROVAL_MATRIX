pragma solidity ^0.5.0;

contract ApprovalMatrix {
string  public name = "ApprovalMatrix";
address public owner;

mapping(uint => EmployeeMatrix) public employee;
// Store employee Count
uint public employeeCount;

struct EmployeeMatrix {
    uint id;
    int account;
    string EmployeeName;
    string EmployeeEmail;
    string EmployeeRole;
    uint EmployeeMaxBaget;
    uint voteCount;
}

/*
event employee(
	    address _account,
	    string _employeeName,
	    string _employeeEmail,
	    string _employeeRole,
	    uint _employeeMaxBaget 

);*/

constructor() public {
        owner = msg.sender;
    }


function AddEmployee(int _account, string storage _employeeName, string storage _employeeEmail, string storage _employeeRole, uint _employeeMaxBaget) private {
    employeeCount ++;
    employee[employeeCount] = EmployeeMatrix(employeeCount, _account, _employeeName, _employeeEmail, _employeeRole, _employeeMaxBaget, 0);
}


}