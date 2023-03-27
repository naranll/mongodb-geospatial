import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const restaurantConnection = process.env.MONGOOSE_CONNECTION_URL;

mongoose.connect(restaurantConnection);

export default mongoose.connection;