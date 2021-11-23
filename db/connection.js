const mysql = require("mysql2")

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rootPW1",
        database: "employees_db"
    },
    console.log("Successfully connected to the employees database.")
);

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;