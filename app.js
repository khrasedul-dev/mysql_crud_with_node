//Dependencies
const express = require('express')
const mysql = require('mysql')

//db import
const {db} = require('./lib/db')
const userHandler = require('./controller/userHandler')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/users',userHandler)




const port = process.env.PORT || 5000
app.listen(port,(err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('Server running on port '+ port)
    }
})