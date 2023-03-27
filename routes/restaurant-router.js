import express from "express";
import Restaurant from "../models/restaurantModel.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/nearrestaurant", async function (req, res) {
    const currentLocation = req.body.location;

    console.log("res address", currentLocation);
    const nearestrestaurant = await Restaurant.find({
        "address.coord": {
            $near: {
                $geometry: currentLocation,
                $maxDistance: 100,
            }
        }

    }).exec();

    // res.send(nearestrestaurant);
    console.log("near", nearestrestaurant);
    console.log("posting location to get nearest restaurant")
    res.send({ "restaurants": nearestrestaurant })
});


restaurantRouter.get("/addrestaurant", async function (req, res) {
    const newRestaurant = new Restaurant({
        name: "DanDan noodles",
        location: {
            coordinates: [106.919678, 47.926233],
        },
    });

    newRestaurant.save();
    res.status(200).send("success adding new restaurant");
});

export default restaurantRouter;

// restaurantRouter.post("/nearrestaurant", async function (req, res) {
//     const currentLocation = req.body.location;
//     const nearestrestaurant = await Restaurant.find({
//         location: {
//                 $near: {
//                     $geometry: currentLocation,
//                     $maxDistance: 100000,
//                 }
//         }
//     }).exec();
//     console.log("post location to get nearest restaurant")
//     res.send(nearestrestaurant);
// });