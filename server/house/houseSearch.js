import houseModel from "./houseModel.js";

const houseSearch = async (req, res) => {
  const { location } = req.params;
  console.log("location", location)
     
   
    const houses = await houseModel.find({ "address.city": location });
    res.status(200).json({ success: true, houses: houses });

};

export default houseSearch;