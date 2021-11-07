// Adding the connection to the other javascript page to connect mysql 2.

const connection = require("./connection");
const inquirer = require("inquirer");
const db = require("./connection");

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

// Function to decide what will happen upon certain answers from the intial questions.

const whatIf = (answers) => {
    if (answers.initialList === "allDepartments") {
        const departmentRow = "SELECT id, employee_department AS title FROM employees";

        db.query(departmentRow, (err, rows) => {
            if (err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.json({
                message: "success",
                data: rows
            })
        })
    }
}

// Function to run the initial questions.

const beginQuestioning = () => {
runTheProgram()
.then((answers) => whatIf(answers))
}

beginQuestioning();