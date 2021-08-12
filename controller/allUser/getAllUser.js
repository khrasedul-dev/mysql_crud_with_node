const getAllUserRoute = require('express').Router()
const db = require('../../lib/db')

getAllUserRoute.get('/',(req,res)=>{
    let sql = "SELECT * FROM users"
    db.query(sql,(err,data)=>{
        res.json(data)
    })
})

module.exports = getAllUserRoute