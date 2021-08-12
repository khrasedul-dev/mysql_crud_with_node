const addNewUserRoute = require('express').Router()
const db = require('../../lib/db')

addNewUserRoute.post('/add',(req,res)=>{
    const {name,email,password} = req.body

    const Data = Object.values({
        name,
        email,
        password
    })

    let sql = "INSERT INTO users (name, email, pass) VALUES (?) "

    db.query(sql,[Data],(err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.json("Data Insert Succesfully")
        }
    })
})

module.exports = addNewUserRoute