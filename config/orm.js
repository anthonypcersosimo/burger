var connection = require("./connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertBurger: function(tableInput, TableVal, cb) {
    var queryString = "INSERT INTO ?? VALUES ?";
    connection.query(queryString, [tableInput, TableVal], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteBurger: function(tableInput, colParam, TableVal, cb) {
    var queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [tableInput, colParam, TableVal], function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  updateBurger: function(tableInput, TableVal, vals, idVal) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [tableInput, TableVal, vals, idVal], function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;