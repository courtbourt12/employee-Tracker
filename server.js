// Adding the connection to the other javascript page to connect mysql 2.

const connection = require("./connection");

// Initial prompt for asking the user what they want to do.

const runTheProgram = () => {
    prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do?",
            choices: 
            [
                {
                    name: "department",
                    message: "View all departments."  
                },
                {
                    name: "department",
                    message: "View all roles."  
                },
                {
                    name: "department",
                    message: "View all employees."  
                },
                {
                    name: "department",
                    message: "Add a department."  
                },
                {
                    name: "department",
                    message: "Add a role."  
                },
                {
                    name: "department",
                    message: "Add an employee."  
                },
                {
                    name: "department",
                    message: "Update an employee."  
                }
            ]
        }
    ])
};

