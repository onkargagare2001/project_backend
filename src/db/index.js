import mongoose from "mongoose";
///videotube?retryWrites=true&w=majority
import { dbName } from "../constants.js"

// const dbName='videotube'
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${dbName}`);
    console.log(`✅ MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection error >>>", error.message);
    process.exit(1);
  }
};

export default connectDB;
