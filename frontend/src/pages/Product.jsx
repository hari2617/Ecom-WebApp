import { useParams } from 'react-router-dom'
//import products from '../../product';
import Rating from '../components/Rating';
//import axios from 'axios';
import { useGetDetailsQuery } from '../../slices/productApiSlice';
import { useState } from 'react';
import { addToCart } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';



const Product = () => {
    const { id } = useParams();
    const[qty,setQty]=useState(1);
    
    const dispatch=useDispatch();

    const {data:product,isLoading,error}=useGetDetailsQuery(id);

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error:{error}</p>


   

    const addToCardHandler=()=>{

        dispatch(addToCart({...product,qty}))
        
    }


    


  
    return (
        <div>
            <div className='grid md:grid-cols-2 mt-18 '>

                <div className=" md:grid-cols-6">
                    <img src={product.image} alt="" width="100%" className='h-8/10' />
                </div>
                <div className="md:grid-cols-6 mb-18">
                    <div className="card">
                        <div className="card-body">
                            <h1 className='card-title'>
                                {product.name}
                            </h1>
                            <p>{product.description}</p>
                            <h3>{product.price}</h3>
                            <Rating value={product.rating} text={product.numReviews} />
                            <div>
                                {product.countInStock > 0 ? "IN STOCK" : "OUT OF STOCK"}
                            </div>

                            {
                                product.countInStock>1&&(<form>
                                <div className='mb-3'>
                                    Quantity
                                </div>

                                
                                <select onChange={(e)=>setQty(e.target.value)} defaultValue=" Quantity" className="select  select-accent">
                                    {
                                        [...Array(product.countInStock).keys()].map((id)=>(
                                            <option key={id+1}>{id+1}</option>
                                        ))
                                    }
                                </select>
                            </form>) 
                            }


                            <div className="card-actions">
                                <button onClick={addToCardHandler} disabled={product.countInStock===0} className="btn btn-accent mt-2 ">Add to cart</button>
                            </div>
                            

                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product