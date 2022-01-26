var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "USHYDRAVISING1",
    password: "mypassword",
    database:"ProfilesDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
export default connection;