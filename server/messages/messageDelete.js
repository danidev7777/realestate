import messageModel from "./messageModel.js"

const messageDelete = async (req, res) => {
  const { id } = req.params
  console.log(id)
  // Validation goes here
  const message = await messageModel.findOneAndDelete({ _id: id })
  console.log("message", message)
  res.status(200).json({ "success": true })
}

export default messageDelete