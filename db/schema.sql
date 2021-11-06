DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_firstname VARCHAR(50) NOT NULL,
    employee_lastname VARCHAR(100) NOT NULL,
    employee_salary INT NOT NULL,
    employee_title VARCHAR(50) NOT NULL,
    employee_department VARCHAR(100) NOT NULL,
    employee_manager VARCHAR(100) NOT NULL
)