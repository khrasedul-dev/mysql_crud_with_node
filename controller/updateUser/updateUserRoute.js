const updateUserRoute = require('express').Router()
const db = require('../../lib/db')

updateUserRoute.put('/:id',(req,res)=>{

    let id = req.params.id

    let {name,email,password} = req.body
    
    let sql = `UPDATE users SET name=('${name}'),email=('${email}'),pass=('${password}') WHERE id=('${id}')`

    db.query(sql,(err)=>{
        if (err) {
            console.log(err)
        } else {
            res.json("Data update succesfully")
        }
    })

})

module.exports = updateUserRoute