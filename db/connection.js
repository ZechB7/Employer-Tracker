const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harley3427$",
    database: "employeeTracker"
  },
  console.log('connected to database')
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;