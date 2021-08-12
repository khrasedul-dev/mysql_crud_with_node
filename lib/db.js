const mysql = require('mysql')

//define database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_crud"
})

db.connect((err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("Database connection succesfully")
    }
})

module.exports = db