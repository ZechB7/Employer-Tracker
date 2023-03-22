const mysql = require("mysql2");
require('dotenv').config();
console.log(process.env.DB_PASSWORD);
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employeeTracker"
  },
  console.log('connected to database')
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;