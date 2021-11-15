SELECT deparTments.department_name, roles.title, roles.salary, employees.first_name, employees.last_name FROM departments
JOIN roles
ON departments.id = roles.department_id;
JOIN employees
ON roles.id = employees.role_id