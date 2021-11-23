SELECT departments.department_name AS department, roles.title, roles.salary, employees.first_name, employees.last_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM (employees)
LEFT JOIN roles
ON employees.role_id = roles.id
LEFT JOIN departments
ON roles.department_id = departments.id
LEFT JOIN employees manager
ON manager.id = employees.manager_id