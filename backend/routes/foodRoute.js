import express from "express"
import { addFood } from "../controllers/foodController.js"
import multe from "multer"

const foodRoute = express.Router();

export default foodRoute;