const connection = require("./connection")

// Creating functions for user choices.

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    // Viewing specific rows.

    findDepartments() {
        return this.connection.promise().query(
            "SELECT departments.id, departments.department_name FROM departments;"
        )
    }

    findRoles() {
        return this.connection.promise().query(
            "SELECT roles.id, roles.title, roles.salary, roles.department_id FROM roles;"
        )
    }

    findEmployees() {
        return this.connection.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name, employees.role_id FROM employees;"
        )
    }

    findManagers() {
        return this.connection.promise().query(
            "SELECT employees.manager_id FROM employees;"
        )
    }

    // Adding specific rows.

    addAnEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employees SET ?", employee)
    }

    addARole(role) {
        return this.connection.promise().query("INSERT INTO roles SET ?", role)
    }

    addADepartment(departments) {
        return this.connection.promise().query("INSERT INTO departments SET ?", departments)
    }

    // Updating an employee.

    UpdateAnEmployee() {
        return this.connection.promise().query("INSERT INTO employees SET ?", employee)
    }

}

module.exports = new DB(connection);
