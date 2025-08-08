const { createPool } = require('mysql');

let mysql;



mysql = createPool({
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  connectionLimit: 1,//process.env.CONNECTION_LIMIT,
  timezone: "+00:00",
  multipleStatements: true
});


module.exports = { mysql };
