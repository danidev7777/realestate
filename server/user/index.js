import express from "express"
import userCreate from "./userCreate.js"
import userGetOne from './userGetOne.js'
import userGetMany from './userGetMany.js'

import userUpdate from "./userUpdate.js"


const userRouter = express.Router()

// Create user API
userRouter.post("/", userCreate)
// user match 
userRouter.get("/:email?", userGetMany)
// Update one user
userRouter.put("/:id", userUpdate)

// Read one user
userRouter.get("/:email", userGetOne)


export default userRouter