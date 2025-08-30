import houseModel from "./houseModel.js"

const houseUpdate = async (req, res) => {
  const { id } = req.params
  const {  address,
    tags,
    images,
    price,
    bedrooms,
    bathrooms,
    sqftHouse,
    sqftLot,
    garage,
    yearBuilt,
    listingAgent,
    dateListed,
    views,
    recentlyViewed } = req.body
  console.log(id,  address,
    tags,
    images,
    price,
    bedrooms,
    bathrooms,
    sqftHouse,
    sqftLot,
    garage,
    yearBuilt,
    listingAgent,
    dateListed,
    views,
    recentlyViewed,)
  // Validation goes here
  const house = await houseModel.findOneAndUpdate({ _id: id }, {  address,
    tags,
    images,
    price,
    bedrooms,
    bathrooms,
    sqftHouse,
    sqftLot,
    garage,
    yearBuilt,
    listingAgent,
    dateListed,
    views,
    recentlyViewed, })
  console.log("house", house)
  res.status(200).json({ "success": true, "house": house })
}

export default houseUpdate