import messageModel from "./messageModel.js"

const messageGetOne = async (req, res) => {
  const { email } = req.params
  const message = await messageModel.find({ email })
  res.status(200).json(message)
}

export default messageGetOne