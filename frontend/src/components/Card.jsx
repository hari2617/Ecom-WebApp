import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'



const Card = ({ product }) => {
  return (
    <Link to={`product/${product._id}`}>

      <div className="card bg-base-100 w-full shadow-xl my-5 p-4">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className='h-[500px]' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className='line-clamp-2 mb-3'>{product.description}</p>
          <div>
            <Rating value={product.rating} text={product.numReviews} />
          </div>

          <div className='badge badge-accent'>{product.price}</div>
        </div>
      </div>

    </Link>
  )
}

export default Card