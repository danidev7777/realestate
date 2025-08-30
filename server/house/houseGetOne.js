import houseModel from "./houseModel.js"

const houseGetOne = async (req, res) => {
  const { id } = req.params
  const house = await houseModel.find({ _id: id })
  console.log("house", house)
  res.status(200).json(house)
}

export default houseGetOne