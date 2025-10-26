//import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../../slices/cartSlice";
import { MdDelete } from "react-icons/md";
const Cart = () => {

  //const[cartItems,setCartItems]=useState([])

  const cartItems = useSelector((state) => state.cart.cartItem)

  const dispatch = useDispatch()


  const addToCartHandler = (item, qty) => {
    dispatch(addToCart({ ...item, qty }));

  }


  const removeFromCartHandler=(id)=>{
    dispatch(removeFromCart(id))

  }

  return (
    <div>


      <div className="container m-10 ">
        <h1 className="font-bold text-center text-4xl">CART ITEMS</h1>
        {
          cartItems.length <= 0 ? (
            <div>nothing</div>
          ) : (

            <div className="grid md:grid-cols-2  gap-10 mt-10">
              <div className="col-span-1">
                {
                  cartItems.map((i) => (

                    <div className="grid mt-10 md:grid-cols-2 gap-8" key={i._id}>
                      <div className="col-span-1 ">
                        <img src={i.image} className="w-full h-[280px]" />
                      </div>

                      <div className="col-span-1 card shadow-xs">
                        <div className="card-body ">
                          <h1 className="font-bold text-gray-400 text-[20px]">{i.brand}</h1>
                          <div className="text-[15px] text-gray-400 mt-3">Price:{i.price}</div>


                          {i.countInStock > 0 && (
                            <div className="flex items-center gap-3">

                              <label htmlFor="quantity" className="mt-3">Qty:</label>
                              <select className="select select-accent mt-3" value={i.qty} onChange={(e) => addToCartHandler(i, Number(e.target.value))}>

                                {
                                  [...Array(i.countInStock).keys()].map((x) => (
                                    <option value={x + 1} key={x + 1} className="text-gray-50">{x + 1}</option>
                                  ))
                                }
                              </select>

                              

                            </div>

                            
                          )}

                          <button className="bg-red-600 text-amber-50 btn btn-circle w-[50px] ml-auto mt-5" onClick={()=>removeFromCartHandler(i._id)}><MdDelete size="20px" /></button>
                        </div>
                      </div>

                    </div>





                  ))
                }
              </div>

              <div className="col-span-1 mt-10">
                <div className="card bg-amber-50 rounded-3xl">
                  <div className="card-body ">
                    <h1 className="card-title text-3xl font-bold text-gray-800">
                      Total items :{
                        cartItems.reduce((acc, i) => acc + Number(i.qty), 0)
                      }
                    </h1>

                    <h3 className="text-2xl font-bold text-gray-500">
                      Total Price:{
                        cartItems.reduce((acc,i)=>acc+i.qty*i.price,0)
                      }
                    </h3>

                    <button className="btn bg-black text-white border-black rounded-2xl">Buy</button>
                  </div>
                </div>
              </div>



            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart