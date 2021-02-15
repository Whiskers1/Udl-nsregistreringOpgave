const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  database: "app",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
