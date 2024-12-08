import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://elynng:nMZ8k4A6wh6oNtQk@cluster0.ccjqn.mongodb.net/food-delivery').then(() => {
        console.log('DB Connected');
    })
}