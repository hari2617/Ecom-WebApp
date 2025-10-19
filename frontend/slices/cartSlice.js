import { createSlice } from "@reduxjs/toolkit";

const initialState=localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : {cartItem:[]}; 

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;
            const existItem=state.cartItem.find((i)=> i._id===item._id);
            if(existItem){
                state.cartItem=state.cartItem.map((i)=>i._id===existItem._id?item:i)
            }
            else{
                state.cartItem=[...state.cartItem,item];
            }
            localStorage.setItem("cart",JSON.stringify(state))
        }
    }
})


export default cartSlice.reducer

export const{addToCart}=cartSlice.actions;