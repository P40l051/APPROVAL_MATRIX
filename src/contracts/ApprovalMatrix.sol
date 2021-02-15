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
        uint Id;
        address EmployerBossAdress;
        address EmployerAdress;
        string EmployeeName;
        string EmployeeEmail;
        string EmployeeRole;
        string EmployeeDivision;
        string EmployeeLocation;
        uint EmployeePower;
    }

    event employeeAdded(
            uint _id,
            address _employerBossAdress,
    	    address _employerAdress,
    	    string _employeeName,
    	    string _employeeEmail,
            string _employeeRole,
    	    string _employeeDivision,
            string _employeeLocation,
    	    uint _employeePower

    );

    constructor(Token _token) public {
        token = _token;
    }

    function AddEmployee(address _employerAdress, string memory _employeeName, string memory _employeeEmail, string memory _employeeRole, string memory _employeeDivision, string memory _employeeLocation) public payable {
        // Calculate the number of tokens for Employer (i.e.: EmployeePower)
        uint tokenAmount = msg.value * rate;
        
        // Require that ApprovalMatrix has enough tokens
        require(token.balanceOf(address(this)) >= tokenAmount);

        // Transfer tokens to the user
        token.transfer(_employerAdress, tokenAmount);

        //increment employees count
        employeeCount ++;

        //Add the employer profile to the contract
        employees[employeeCount] = EmployeeMatrix(employeeCount, msg.sender, _employerAdress, _employeeName, _employeeEmail, _employeeRole,_employeeDivision, _employeeLocation, tokenAmount);

        // Trigger event
        emit employeeAdded(employeeCount, msg.sender, _employerAdress, _employeeName, _employeeEmail, _employeeRole, _employeeDivision, _employeeLocation, tokenAmount);
    }
}