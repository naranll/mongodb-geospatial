import express from "express";
import cors from "cors";
import restaurantRouter from "./routes/restaurant-router.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5070;

app.use(restaurantRouter);



app.listen(port, () => {
    console.log(`listening on ${port}`);
})