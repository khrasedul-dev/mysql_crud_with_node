const mysql = require('mysql')

//define database
const db = mysql.createConnection({
    host: "remotemysql.com",
    user: "83VpvzdSbt",
    password: "l53ENxsB7F",
    database: "83VpvzdSbt"
})

db.connect((err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("Database connection succesfully")
    }
})

module.exports = db
