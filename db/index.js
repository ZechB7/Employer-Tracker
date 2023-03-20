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
        " "
    )
}

//view all employees by department
viewAllEmployeesByDepartment(){
    return this.connection.promise().query(
        " "
    )
}
//view all employees by manager
viewAllEmployeesByManager(){
    return this.connection.promise().query(
        " "
    )
}
//add employee
viewAllEmployees(){
    return this.connection.promise().query(
        " "
    )
}
//remove employee
viewAllEmployees(){
    return this.connection.promise().query(
        " "
    )
}
//update employee role
UpdateEmployeeRole(){
    return this.connection.promise().query(
        " "
    )
}
//view all roles
viewAllRoles(){
    return this.connection.promise().query(
        " "
    )
}
//add role
addRole(){
    return this.connection.promise().query(
        " "
    )
}
//remove role
removeRole(){
    return this.connection.promise().query(
        " "
    )
}
//view all departments
viewAllDepartments(){
    return this.connection.promise().query(
        " "
    )
}
//add department
addDepartment(){
    return this.connection.promise().query(
        " "
    )
}
//remove department
removeDepartment(){
    return this.connection.promise().query(
        " "
    )
}
// view total utilized budget by department
viewDepartmentCost(){
    return this.connection.promise().query(
        " "
    )
}

}
module.exports = new DB(connection);