//import React, { useState } from 'react'
import {useSelector} from "react-redux";

const Cart = () => {

  //const[cartItems,setCartItems]=useState([])

 const cartItems=useSelector((state)=> state.cart.cartItem)
  
 console.log(cartItems)
  
  return (
    <div>
     

      hello
    </div>
  )
}

export default Cart