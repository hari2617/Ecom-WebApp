import express from "express";
//import products from "../data/product.js";
// import Product from "../model/productModel.js";
// import asyncHandler from "../middleware/asyncHandler.js";

import { getProducts,getProducstById } from "../controllers/productRouteController.js";

const router=express.Router();


router.route("/").get(getProducts)

router.route("/:id").get(getProducstById)

export default router;