


import mongoose from "mongoose"
const { Schema } = mongoose

const messageSchema = new Schema({
 
  realtor: String,
  property: String,
  message: String,
  buyerEmail: String,
   
})

export default messageSchema