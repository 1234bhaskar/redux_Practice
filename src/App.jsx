import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div>
   <Provider store={store}>
     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
   </Provider>
    </div>
  )
}

export default App