const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12621307',
    password: 'dv8kME7xFC',
    database: 'sql12621307'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
