import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongoURI = process.env.MONGO as string;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("mongo db is connected")

        ;
    } catch (err:any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;