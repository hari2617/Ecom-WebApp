import express from "express";
//import products from "../data/product.js";
import Product from "../model/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";


const router=express.Router();


router.get("/",asyncHandler(async (req,res)=>{
        const products =await Product.find({});
        res.json(products)
}))

router.get("/:id",asyncHandler(async(req,res)=>{
    
    const product=await Product.findById(req.params.id);
    
    if(res.json(product)){
    
    res.json(product)
    }
    else{
        req.status(404).json({message:"Data not found"})
    }
}))

export default router;