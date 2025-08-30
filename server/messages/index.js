import express from "express"
import messageCreate from "./messageCreate.js"
import messageGetOne from './messageGetOne.js'
import messageGetMany from './messageGetMany.js'
import messageDelete from "./messageDelete.js"





const messageRouter = express.Router()

// Create message API
messageRouter.post("/", messageCreate)
// message match 
messageRouter.get("/", messageGetMany)

// Read one message
messageRouter.get("/:email", messageGetOne)
// Delete one message
messageRouter.delete("/:id", messageDelete)



export default messageRouter