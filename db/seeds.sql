use employeeTracker;

INSERT INTO department
    (name)
VALUES
    ('Logistics'),
    ('Engineering'),
    ('Marketing'),
    ('Accounting'),
    ('HR');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Logistics Manager', 80000, 1),
    ('Lead Engineer', 100000, 2),
    ('Head of Marketing',70000, 3),
    ('Accounting Manager', 90000, 4),
    ('HR Coordinator', 50000, 5),
    ('HR Generalist', 40000, 5);
    

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Joey','Diaz', 1, 1),
    ('Michael','Smith', 2, 1),
    ('Bobby','Racoon', 3, 1),
    ('Janney','Furgeson', 4, 1),
    ('Kevin','Jeffery', 5, 1),
    ('Karen','Katherine', 6, NULL);