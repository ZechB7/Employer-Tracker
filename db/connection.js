const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection(
  process.env.USER,
  process.env.DATABASE,
  process.env.PASSWORD,
  {
    host:'localhost',
    dialect: 'mysql',
    port: 3306
  },
  console.log('connected to database')
);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;