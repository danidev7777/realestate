import houseModel from "./houseModel.js";

const houseGetMany = async (req, res) => {
  const { location } = req.params;
  console.log("location", location)
  if (location) {
    console.log("if location")
    // const houses = await houseModel.find({ address: { city: location } });
    const houses = await houseModel.find({ "address.city": location });
    res.status(200).json({ success: true, houses: houses });
  } else {
    console.log("else location")
    const houses = await houseModel.find();
    // console.log("houses", houses);
    res.status(200).json({ success: true, houses: houses });
  }
};

export default houseGetMany;
