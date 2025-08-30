import express from "express"
import tagsCreate from "./tagsCreate.js"
import tagsRead from "./tagsRead.js"

const tagsRouter = express.Router()

tagsRouter.post("/", tagsCreate) // Create
tagsRouter.get("/", tagsRead)

export default tagsRouter