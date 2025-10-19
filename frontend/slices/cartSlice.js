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
            


            //item prices

            state.itemPrice=state.cartItem.reduce((acc,item)=>acc+item.price*item.qty,0)

            //gst
            state.taxPrice=Number(state.itemPrice*0.18);

            //shipping
            state.shippingPrice=state.itemPrice>100?10:20;

            //total
            state.toatlPrice=(state.itemPrice)+(state.shippingPrice)+(state.taxPrice)


            localStorage.setItem("cart",JSON.stringify(state))

        }
    }
})


export default cartSlice.reducer

export const{addToCart}=cartSlice.actions;