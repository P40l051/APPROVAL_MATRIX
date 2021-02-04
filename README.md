# APPROVAL_MATRIX

What is an Approvals Matrix?
Using a matrix to manage approvals ensures complex approval processes are flexible and scalable.

Approvals Matrix
A table that provides the business rules for routing an approval task through a business process based on preset conditions. An approval matrix ensures that the correct individuals are involved in decision-making at the appropriate time. Sometimes referred to as a "schedule of authority."

Approval Matrix Example
Let's take a look at an example of where an approval matrix can be used. An expense request needs to be routed to the appropriate approver based on a variety of conditions like:

Office Location
Amount of Expense
Type of Expense
Month Submitted
Cost Center Owner

How Is an Approvals Matrix Used in Workflow Automation?
An Approvals Matrix can drive the assignment of requests and approvals in an automated process to provide the process engine with the logic to route information appropriately.

It can also be quickly changed/edited to reflect the changing nature of the organization, staff changes, new policies, etc. In complex approval processes, this speed can be critical to prevent mistakes and delays.

How Do You Implement an Approval Matrix?
To back up a bit, depending on the nature of the approval chain or schedule of authority, a process may require several different logic steps. For instance, there may be a dollar amount rule (requests over $50k route differently) and then a geographic rule (specific states route differently) and finally a department rule (each department has a specific approver assigned).

While the example above shows a large table of approval logic, depending on the circumstance, you might use a combination of lookup tables and dynamic assigners and static rules to find the appropriate approver.

Or, based on your documented business requirements, you might just implement the approval routing using sets of rules at appropriate points in the process. This makes more sense when the matrix of approvals is fairly simple.

-----------------------
Instruction:

- clone repository
- install Truffle & Ganache (more info https://www.trufflesuite.com/)
- run Ganache for local enviroment testing (Link Truffle project to workspace by adding truffle-config.js to the workspace.)


from a new terminal window:
- npm install
- truffle compile
- truffle migrate --reset
- npm run start

