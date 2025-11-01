import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "../slices/apiSlice"
import cartSliceReducer from "../slices/cartSlice"
import themeSliceReducer from "../slices/themeSlice";



export const store =configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer, 
        cart:cartSliceReducer,
        theme:themeSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})



export default store