


import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema({
 
  email: String,
  password: String,
  confirmPassword: String,
  firstName: String,
  lastName: String,
  phone: String,
  brokerage: String,
  
})

export default userSchema