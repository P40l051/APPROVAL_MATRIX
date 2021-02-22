pragma solidity ^0.5.0;

import "./Token.sol";

contract ApprovalMatrix {
    string  public name = "Approval Matrix";

    Token public token;

    mapping(uint => EmployeeMatrix) public employees;
    // Store employee Count
    uint public employeeCount;

    struct EmployeeMatrix {
        uint Id;
        address EmployerBossAddress;
        address EmployerAddress;
        string EmployeeName;
        string EmployeeEmail;
        string EmployeeRole;
        string EmployeeDivision;
        string EmployeeLocation;
        uint EmployeePower;
    }

    event employeeAdded(
            uint _id,
            address _employerBossAddress,
    	    address _employerAddress,
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

    function AddEmployee(address _employerAddress, string memory _employeeName, string memory _employeeEmail, string memory _employeeRole, string memory _employeeDivision, string memory _employeeLocation) public payable {

        // Require that Creator has enough tokens
        require(token.balanceOf(msg.sender) >= msg.value);

        // Transfer tokens to the user
        token.transferFrom(msg.sender, _employerAddress, msg.value);

        //increment employees count
        employeeCount ++;

        //Add the employer profile to the contract
        employees[employeeCount] = EmployeeMatrix(employeeCount, msg.sender, _employerAddress, _employeeName, _employeeEmail, _employeeRole,_employeeDivision, _employeeLocation, msg.value);

        // Trigger event
        emit employeeAdded(employeeCount, msg.sender, _employerAddress, _employeeName, _employeeEmail, _employeeRole, _employeeDivision, _employeeLocation, msg.value);
    }
}