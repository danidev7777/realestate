import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import tagsRouter from "./tags/index.js"
import houseRouter from "./house/index.js"
import userRouter from "./user/index.js"
import messageRouter from "./messages/index.js"




const app = express()
app.use(express.json())
const port = 8000

app.use(cors())

const mongoURL = process.env.MONGODB_CONNECTION_STRING || ""
console.log("mongoURL", mongoURL)
const mainDB = async () => {
  await mongoose.connect(mongoURL)
  console.log(`Connected to ${mongoURL}`)
}
mainDB().catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/listings", houseRouter)
app.use("/users", userRouter)
app.use("/tags", tagsRouter)
app.use("/messages", messageRouter)



app.listen(port, () => {
  console.log(`House server listening on port ${port}`)
})