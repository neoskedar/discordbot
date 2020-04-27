var mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "America1!",
    database: "nookbot"
  });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;