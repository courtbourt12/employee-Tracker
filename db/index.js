const connection = require("./connection")

// Creating functions for user choices.

class DB {

    constructor(connection) {
        this.connection = connection;
    }


    viewDepartments() {
        return this.connection.promise().query(
            "SELECT departments.id, departments.department_name FROM departments;"
        )
    }

    viewRoles() {
        return this.connection.promise().query(
            "SELECT roles.id, roles.title, roles.salary, roles.department_id FROM roles;"
        )
    }

    viewEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name FROM employees;"
        )
    }
}

module.exports = new DB(connection);
