// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bd6807a60ee3f1",
  password: "8a31bb7d",
  database: "heroku_7aab7fd98f89c29"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;