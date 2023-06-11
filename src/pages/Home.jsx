import React from 'react'
import Products from '../Components/Products';

function Home() {
  return (
    <div className='home'>
      <h2>Welcome to redux toolkit Store</h2>
      <section>
        <h2>Products</h2>
      </section>
      <div className='product'>
        <Products/>
      </div>
        
    </div>
  )
}

export default Home;