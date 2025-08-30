import houseModel from "./houseModel.js"

const houseDelete = async (req, res) => {
  const { id } = req.params
  console.log(id)
  // Validation goes here
  const house = await houseModel.findOneAndDelete({ _id: id })
  console.log("house", house)
  res.status(200).json({ "success": true })
}

export default houseDelete