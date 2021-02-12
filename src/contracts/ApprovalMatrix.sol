pragma solidity ^0.5.0;

import "./Token.sol";

contract ApprovalMatrix {
    string  public name = "Approval Matrix";

    Token public token;
    uint public rate = 100;

    mapping(uint => EmployeeMatrix) public employees;
    // Store employee Count
    uint public employeeCount;

    struct EmployeeMatrix {
        uint id;
        address EmployerAdress;
        string EmployeeName;
        string EmployeeEmail;
        string EmployeeRole;
        uint EmployeePower;
    }

    event employeeAdded(
            uint _id,
    	    address _account,
    	    string _employeeName,
    	    string _employeeEmail,
    	    string _employeeRole,
    	    uint _employeePower

    );

    constructor(Token _token) public {
        token = _token;
    }


    function AddEmployee(string memory _employeeName, string memory _employeeEmail, string memory _employeeRole) public payable {
        // Calculate the number of tokens for Employer (i.e.: EmployeePower)
        uint tokenAmount = msg.value * rate;
        
        // Require that ApprovalMatrix has enough tokens
        require(token.balanceOf(address(this)) >= tokenAmount);

        // Transfer tokens to the user
        token.transfer(msg.sender, tokenAmount);

        //increment employees count
        employeeCount ++;

        //Add the employer profile to the contract
        employees[employeeCount] = EmployeeMatrix(employeeCount, msg.sender, _employeeName, _employeeEmail, _employeeRole, tokenAmount);

        // Trigger event
        emit employeeAdded(employeeCount, msg.sender, _employeeName, _employeeEmail, _employeeRole, tokenAmount);
    }
}