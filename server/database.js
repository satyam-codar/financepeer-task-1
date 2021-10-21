const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "satyam_database",
  password: "password",
});

console.log("db connected");
module.exports = pool.promise();
// module.exports = pool.promise();
