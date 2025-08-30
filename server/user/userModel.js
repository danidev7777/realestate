import mongoose from "mongoose"
import userSchema from "./userSchema.js"

userSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const userModel = mongoose.model("user", userSchema)

export default userModel