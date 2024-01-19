import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from './componets/Home'
import Cart from './componets/Cart'
import NavBar from './componets/NavBar'
import Login from './componets/Login'




function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
   <Router>
   <NavBar />
    <Routes>
 
      <Route exact path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
