import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App