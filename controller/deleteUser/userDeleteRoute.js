const userDeleteRoute = require('express').Router()
const db = require('../../lib/db')

userDeleteRoute.delete('/:id',(req,res)=>{
    const id = req.params.id

    let sql = `DELETE FROM users WHERE id = ('${id}')`
    db.query(sql,(err)=>{
        if (err) {
            console.log(err)
        } else {
            res.json("Data Delete Succesfully")
        }
    })
})

module.exports = userDeleteRoute