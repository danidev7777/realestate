import tagsModel from "./tagsModel.js"

const tagsRead = async (req, res) => {
  const tags = await tagsModel.find()
  console.log("tags", tags)
  res.status(200).json({ "success": true, "tags": tags })
}

export default tagsRead