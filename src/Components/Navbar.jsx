import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
  const items=useSelector((state)=>state.cart);
  return (
    <div className='navbar'>

      <span>Redux ToolKit</span>

      <div className='links'>
      <Link className='navlink' to="/">Home</Link>
      <Link to="/cart" className='navlink'>Cart</Link>
      <span>CartItems:{items.length}</span>
      </div>
    </div>
  )
}

export default Navbar