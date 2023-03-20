const connection = require("./connection");

class DB {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(connection) {
    this.connection = connection;
  }
//function(){
//return this.connection.promise().query(
    // query selector and params
//);}

//view all employees
viewAllEmployees(){
    return this.connection.promise().query(
        "SELECT employee.id employee.first_name, employee.last_name, role.title, departmnet.name AS departmnet, role.salary, CONCAT(manager.first_name, ' ', manager.last_name, AS manger FROM employee LEFT JOIN role on employee.role.id LEFT JOIN departmnet on role.department_id = departmnet.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
}

//view all employees by department
viewAllEmployeesByDepartment(departmentId){
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.departmnet_id - deparment.id WHERE department.id = ?;",
    departmentId
    );
}
//view all employees by manager
viewAllEmployeesByManager(managerId){
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.rol_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
        managerId
    );
}
//add employee
addEmployees(employee){
    return this.connection.promise().query(
        "INSERT INTO employee SET ?",
        employee
    );
}
//remove employee
removeEmployees(employeeId){
    return this.connection.promise().query(
        "DELETE FROM employee WHERE id = ?",
      employeeId  
    );
}
//update employee role
UpdateEmployeeRole(employeeId, roleId){
    return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [employeeId, roleId]
    );
}
//view all roles
viewAllRoles(){
    return this.connection.promise().query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
}
//add role
addRole(role){
    return this.connection.promise().query(
        "INSERT INTO role SET ?",
        role
    );
}
//remove role
removeRole(roleId){
    return this.connection.promise().query(
        "DELETE FROM role WHERE id = ?",
        roleId
    );
}
//view all departments
viewAllDepartments(){
    return this.connection.promise().query(
        "SELECT department.id, department.name FROM department;"
    );
}
//add department
addDepartment(department){
    return this.connection.promise().query(
        "INSERT INTO department SET = ?",
        department
    );
}
//remove department
removeDepartment(departmentId){
    return this.connection.promise().query(
        "DELETE FROM department WHERE id = ?",
        departmentId
    );
}
// view total utilized budget by department
viewDepartmentsCost(){
    return this.connection.promise().query(
        "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department = department.id GROUP BY department.id, department.name;"
    )
}

}
module.exports = new DB(connection);