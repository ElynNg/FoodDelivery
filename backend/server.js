import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoute from "./routes/foodRoute.js";
import session from "express-session";

//app config
const app = express()
const port = 9999;

//middleware
app.use(express.json())
app.use(cors())

app.use(
    session({
        secret: 'my-practice-project',
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000*60*60}
    })
)

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).send('Failed to clear session');
        }

        res.send('Session cleared successfully');
    });
});

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