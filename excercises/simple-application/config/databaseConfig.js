const { createPool } = require('mysql');

let mysql;



mysql = createPool({
  host: "localhost",//process.env.HOST_DB,
  port: "3306",//process.env.PORT_DB,
  user: "root",//process.env.USER_DB,
  password: "",//process.env.PASSWORD_DB,
  database: "java_db",//process.env.DATABASE,
  connectionLimit: 1,//process.env.CONNECTION_LIMIT,
  timezone: "+00:00",
  multipleStatements: true
});


module.exports = { mysql };
