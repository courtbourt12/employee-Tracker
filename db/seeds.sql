USE employees_db;

INSERT INTO departments (department_name)
VALUES  ("HR"),
        ("Engineering"),
        ("Accounting"),
        ("Marketing"),
        ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Intern", 20000, 1),
        ("Manager", 150000, 3),
        ("Senior Executive", 80000, 2),
        ("Consultant I", 65000, 3),
        ("Consultant II", 95000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Nancy", "Long", 1, 3),
        ("Ermias", "Chang", 2, 4),
        ("Bink", "Cash", 3, 2),
        ("Wylder", "Taylor", 4, 3),
        ("Ireland", "Abate", 5, 1);
