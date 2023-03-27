import mongoose from "mongoose";
import "../configs/mongoose-config.js";

const restaurantSchema = new mongoose.Schema(
    {
        name: String,
        borough: String,
        address: {
            coord: {
                type: { type: String, default: "Point" },
                coordinates: [Number]
            },
        },
    },
    {
        collection: "restaurants",
    }

);

const Restaurant = mongoose.model("Restaurant", restaurantSchema, "restaurants");

Restaurant.collection.createIndex({ 'address.coord': "2dsphere" });
export default Restaurant;