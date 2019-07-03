// Require in the MySQL NPM package
var mysql = require("mysql");

// Set up connection requirements for the database 'burgers_db'
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "curb3436ale7770dog!",
  database: "burgers_db"
});


// Initiate connection to database and console log threadId
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  };
  console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;