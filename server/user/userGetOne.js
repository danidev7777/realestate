import userModel from "./userModel.js"

const userGetOne = async (req, res) => {
  const { email } = req.params
  const user = await userModel.find({ email })
  res.status(200).json(user)
}

export default userGetOne