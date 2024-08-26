import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    await mongoose
    .connect("mongodb://localhost:27017", {
        dbName: "loginpage",
    }).then(() => {
        console.log("database connected");
    })
    .catch((e) => {
        console.log(e);
    })}
export default connectDB;
