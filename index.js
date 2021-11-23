// Adding the connection to the other javascript page to connect mysql 2.

// const connection = require("./connection");
const inquirer = require("inquirer");
// const db = require("./db");
// require("console.table");

// Initial prompt for asking the user what they want to do.

const runTheProgram = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "initialList",
            message: "What would you like to do?",
            choices: 
            [
                {
                    name: "allDepartments",
                    message: "View all departments.",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "allRoles",
                    // message: "View all roles.",
                    value: "VIEW_ROLES"  
                },
                {
                    name: "allEmployees",
                    message: "View all employees.",
                    value: "VIEW_EMPLOYEES" 
                },
                {
                    name: "addDepartments",
                    message: "Add a department.",
                    value: "ADD_DEPARTMENT" 
                },
                {
                    name: "addRolls",
                    message: "Add a role.",
                    value: "ADD_ROLE"  
                },
                {
                    name: "addEmployees",
                    message: "Add an employee.",
                    value: "ADD_EMPLOYEE"  
                },
                {
                    name: "updateEmployees",
                    message: "Update an employee.",
                    value: "UPDATE_EMPLOYEE"  
                }
            ]
        }
    ])
    .then((res) => {
        let choice = res.choice;

        switch(choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "UPDATE_EMPLOYEE":
                updateEmployee();
                break;
    }})
};

// Prompt when user chooses to add a department.

const addDepartment = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addingDepartment",
            message: "What is the name of the department?"
        }
    ]);
};

// When user chooses to add a role.

const addRole = () => {
    inquirer.prompt([
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
    inquirer.prompt([
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
    inquirer.prompt([
        {
            type: "list",
            name: "employeeUpdate",
            message: "Which employee would you like to update?"
        }
    ]);
};



// Function to run the initial questions.

const beginQuestioning = () => {
runTheProgram()

}

beginQuestioning();
