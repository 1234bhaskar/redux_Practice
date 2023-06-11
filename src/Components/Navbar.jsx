import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>

      <span>Redux ToolKit</span>

      <div className='links'>
      <Link className='navlink' to="/">Home</Link>
      <Link to="/cart" className='navlink'>Cart</Link>
      <span>CartItems:0</span>
      </div>
    </div>
  )
}

export default Navbar