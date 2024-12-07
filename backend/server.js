import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoute from "./routes/foodRoute.js";

//app config
const app = express()
const port = 5001;

//middleware
app.use(express.json())
app.use(cors())

//db connect
connectDB();

//api endpoints
app.use('/api/food', foodRoute);

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})