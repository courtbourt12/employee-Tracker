const mysql = require("mysql2")

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rootPW1",
        database: "employees_db"
    },
    console.log("Successfully connected to the employees database.")
);

db.connect(function (err) {
    if (err) throw err;
});

module.exports = db;