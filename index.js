// Adding the connection to the other javascript page to connect mysql 2.

const inquirer = require("inquirer");
const { listenerCount } = require("process");
const db = require("./db");


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
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "allRoles",
                    value: "VIEW_ROLES"  
                },
                {
                    name: "allEmployees",
                    value: "VIEW_EMPLOYEES" 
                },
                {
                    name: "addDepartments",
                    value: "ADD_DEPARTMENT" 
                },
                {
                    name: "addRolls",
                    value: "ADD_ROLE"  
                },
                {
                    name: "addEmployees",
                    value: "ADD_EMPLOYEE"  
                },
                {
                    name: "updateEmployees",
                    value: "UPDATE_EMPLOYEE"  
                }
            ]
        }
    ])
    .then((res) => {
        let choice = res.initialList;

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

// Viewing specific sections of the schema.

const viewDepartments = () => {
    db.findDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.table(departments);
    })
    .then(() => runTheProgram())
}

const viewRoles = () => {
    db.findRoles()
    .then(([rows]) => {
        let roles = rows;
        console.table(roles);
    })
    .then(() => runTheProgram())
}


const viewEmployees = () => {
    db.findEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => runTheProgram())
}


// Prompt when user chooses to add a department.

const addDepartment = () => {
    inquirer.prompt([
        {
            name: "department_name",
            message: "What is the name of the department?"
        }
    ])
    .then((answer) => {
        db.addADepartment(answer)
        .then(() => console.log(`${answer.department_name} department was added.`))
        .then(() => runTheProgram())
    }
    );
};

// When user chooses to add a role.

const addRole = () => {
    db.findDepartments()
    .then(([rows]) => {
      let departments = rows;
      const departmentChoices = departments.map(({ id, department_name }) => ({
        name: department_name,
        value: id
      }));
    inquirer.prompt([
        {
            name: "title",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "What department does the role belong to?",
            choices: departmentChoices
        }
    ])
    .then((answer) => {
        db.addARole(answer)
        .then(() => console.log(`${answer.title} role was added.`))
        .then(() => runTheProgram())
    }
    );
})};

// When user chooses to add an employee.

const addEmployee = () => {
    db.findRoles()
    .then(([rows]) => {
      let roles = rows;
      const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
      }));

    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role_id",
            message: "What is the employee's role?",
            choices: roleChoices
        },
        {
            name: "manager_id",
            message: "What is the employee's manager?"
        }
    ])
    .then((answer) => {
        db.addAnEmployee(answer)
        .then(() => console.log(`${answer.first_nam} was added.`))
        .then(() => runTheProgram())
    }
    );
})};

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeUpdate",
            message: "Which employee would you like to update?"
        }
    ])
    .then((answers) => updateEmployee(answers));
};



// Function to run the initial questions.

const beginQuestioning = () => {
runTheProgram()

}

beginQuestioning();
