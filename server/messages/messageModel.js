import mongoose from "mongoose"
import messageSchema from "./messageSchema.js"

messageSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const messageModel = mongoose.model("message", messageSchema)

export default messageModel