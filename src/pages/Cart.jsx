import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';

function Cart() {
  
  const products=useSelector(state=>state.cart); //overall state in which cart is present
 const dispatch=useDispatch()
 const handleRemove=(product)=>{
    dispatch(remove(product))
 }
  return (
    <div className='cart'>
      {
        products.map(product=>(
          <div className='cartCard'>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <h1>₹{product.price}</h1>
            <button className='btn' onClick={()=>{handleRemove(product.id)}}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart