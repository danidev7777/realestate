import mongoose from "mongoose"

const Schema = mongoose.Schema

const tagsSchema = new Schema({
  name: String,
  count: Number,
  image: String,
  link: String
})

export default tagsSchema


// { name: "New Listings", count: 355, image: "./assets/tag-card-01.jpg", link: "/new-listings" }