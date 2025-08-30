import express from "express"
import houseCreate from "./houseCreate.js"
import houseGetMany from "./houseGetMany.js"
import houseGetOne from "./houseGetOne.js"
import houseUpdate from "./houseUpdate.js"
import houseDelete from "./houseDelete.js"
import houseSearch from "./houseSearch.js"

const houseRouter = express.Router()

// Create house API
houseRouter.post("/", houseCreate)
// Read all houses
houseRouter.get("/", houseGetMany)
// Read all houses
houseRouter.get("/search/:location", houseSearch)
// Read one house
houseRouter.get("/:id", houseGetOne)
// Update one house
houseRouter.put("/:id", houseUpdate)
// Delete one house
houseRouter.delete("/:id", houseDelete)

export default houseRouter