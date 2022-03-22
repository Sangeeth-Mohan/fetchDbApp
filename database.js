var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mydbpassword1',
    database: 'myOwnDb'
});

conn.connect((error) => {
    if (error) {
        return;
    }
    console.log("Connected to MySQL");
});

module.exports = conn;
