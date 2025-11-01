//import React, { useEffect, useState } from 'react'
import Card from "../components/Card"
//import axios from 'axios';
//import products from '../../product.js'
import { useGetProductsQuery } from '../../slices/productApiSlice'


const Home = () => {




  const{data:products,isLoading,error} =useGetProductsQuery();

   if(isLoading) return <p>Loading...</p>
   if(error) return <p>ERROR : {error}</p>

  return (
    
    
     
    

     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-15 ">
        {
            products.map((product) => (
                <Card key={product._id} product={product}/>
            ))
        }
     </div>
    
  )
}

export default Home