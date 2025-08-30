import mongoose from "mongoose";
const { Schema } = mongoose;

const houseSchema = new Schema({
  address: { street1: String, city: String, state: String, zipCode: Number },
  tags: [],
  images: [],
  price: String,
  bedrooms: Number,
  bathrooms: Number,
  sqftHouse: Number,
  sqftLot: Number,
  garage: Number,
  yearBuilt: Number,
  listingAgent: {
    firstName: String,
    lastName: String,
    phone: String,
    brokerage: String,
    logo: String,
    gender: String,
  },
  dateListed: { type: Date, default: Date.now },
  views: Number,
  recentlyViewed: Boolean,
});

export default houseSchema;
