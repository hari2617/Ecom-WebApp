import express from "express";
import products from "./data/product.js";
import cors from "cors";
import connectDB from "./config/db.js";
import productRouter from "./Router/productRouter.js"

import { notFound,handleError } from "./middleware/errorHandler.js";

const app=express();
connectDB();
const port =5000;

app.use(cors());





app.get("/",(req,res)=>{
    res.send("hello hari26!");

});

app.use("/api/products",productRouter)

app.use(notFound);
app.use(handleError);


app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})