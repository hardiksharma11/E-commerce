const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12624323',
    password: '7CVNKK1ass',
    database: 'sql12624323'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
