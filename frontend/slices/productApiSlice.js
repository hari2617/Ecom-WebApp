import { PRODUCTS_URL } from "../src/constant";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints :(builder)=>({
        getProducts :builder.query({
            query:()=>({
                url:PRODUCTS_URL
            })
        }),
        getDetails:builder.query({
            query:(productId)=>({
                url:`${PRODUCTS_URL}/${productId}`
            })
        })
    })
})


export const {useGetProductsQuery,useGetDetailsQuery}=productApiSlice