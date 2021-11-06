// Adding the connection to the other javascript page to connect mysql 2.

const connection = require("./connection");

// Initial prompt for asking the user what they want to do.

const runTheProgram = () => {
    prompt([
        {
            type: "list",
            name: "initialList",
            message: "What would you like to do?",
            choices: 
            [
                {
                    name: "allDepartments",
                    message: "View all departments."  
                },
                {
                    name: "allRoles",
                    message: "View all roles."  
                },
                {
                    name: "allEmployees",
                    message: "View all employees."  
                },
                {
                    name: "addDepartments",
                    message: "Add a department."  
                },
                {
                    name: "addRolls",
                    message: "Add a role."  
                },
                {
                    name: "addEmployees",
                    message: "Add an employee."  
                },
                {
                    name: "updateEmployees",
                    message: "Update an employee."  
                }
            ]
        }
    ])
};

// Prompt when user chooses to add a department.

const addDepartment = () => {
    prompt([
        {
            type: "list",
            name: "addingDepartment",
            message: "What is the name of the department?"
        }
    ]);
};

// When user chooses to add a role.

const addRole = () => {
    prompt([
        {
            type: "list",
            name: "addingRole",
            choices: 
            [
                {
                    name: "roleName",
                    message: "What is the name of the role?"
                },
                {
                    name: "roleSalary",
                    message: "What is the salary of the role?"
                },
                {
                    name: "roleDepartment",
                    message: "What department does the role belong to?"
                }
            ]
        }
    ]);
};

// When user chooses to add an employee.

const addEmployee = () => {
    prompt([
        {
            type: "list",
            name: "addingEmployee",
            choices: 
            [
                {
                    name: "employeeFirstName",
                    message: "What is the employee's first name?"
                },
                {
                    name: "employeeLastName",
                    message: "What is the employee's last name?"
                },
                {
                    name: "employeeRole",
                    message: "What is the employee's role?"
                },
                {
                    name: "employeeManager",
                    message: "What is the employee's manager?"
                }
            ]
        }
    ]);
};

const updateEmployee = () => {
    prompt([
        {
            type: "list",
            name: "employeeUpdate",
            message: "Which employee would you like to update?"
        }
    ]);
};