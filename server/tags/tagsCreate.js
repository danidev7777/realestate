import tagsModel from "./tagsModel.js"

const tagsCreate = async (req, res) => {
  const { name, count, image, link }= req.body
  // Validation goes here
  const tag = await tagsModel.create({ name, count, image, link })
  console.log("tag", tag)
  res.status(200).json({ "success": true, "tag": tag })
}

export default tagsCreate