import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from './routes/rooms.js';
import usersRoute from './routes/users.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();
dotenv.config();

const PORT = 3000;
const MONGOURL = process.env.MONGO_URL;

const connect = async () => {
    try {
        await mongoose.connect(MONGOURL);
        console.log("connected to mongodb");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
})

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "somthing is wrong!"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})


app.listen(PORT, () => {
    connect()
    console.log("app listening on port 3000!");
})