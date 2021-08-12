const userRouter = require('express').Router()
const getAllUserRoute = require('./allUser/getAllUser')
const addNewUserRoute = require('./addUser/addNewUser')
const updateUserRoute = require('./updateUser/updateUserRoute')
const userDeleteRoute = require('./deleteUser/userDeleteRoute')

userRouter.use('/all',getAllUserRoute)
userRouter.use('/new',addNewUserRoute)
userRouter.use('/update',updateUserRoute)
userRouter.use('/delete',userDeleteRoute)

module.exports = userRouter