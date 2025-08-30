import mongoose from "mongoose"
import houseSchema from "./houseSchema.js"

houseSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const houseModel = mongoose.model("house", houseSchema)

export default houseModel