pragma solidity ^0.5.0;

contract ApprovalMatrix {
string  public name = "ApprovalMatrix";
address public owner;

address[] public EmployeeMatrix;
/*mapping(address => uint) public account;
mapping(address => string) public EmployeeName;
mapping(address => string) public EmployeeEmail;
mapping(address => string) public EmployeeRole;
mapping(address => uint256) public EmployeeMaxBaget; */


/*event AddEmployee(
	    address account,
	    string EmployeeName,
	    string EmployeeEmail,
	    string EmployeeRole,
	    uint maxBagetApprove 

); */

constructor() public {
        owner = msg.sender;
    }


function AddEmployee(uint account, string memory EmployeeName, string memory EmployeeEmail, string memory EmployeeRole) public {
require(owner == msg.sender, "you are not the owner");
/*
	EmployeeMatrix.push(
                account,
                EmployeeName,
                EmployeeEmail,
                EmployeeRole,
                msg.value
            
    ); */
}


}