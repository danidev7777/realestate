import houseModel from "./houseModel.js";

const houseCreate = async (req, res) => {
  const {
    address,
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
    recentlyViewed,
    
  } = req.body;
  // Validation goes here
  const house = await houseModel.create({
    address,
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
    recentlyViewed
    
  });
  console.log("house", house);
  res.status(200).json({ success: true, house: house });
};

export default houseCreate;
