import React from 'react'
import '../styles/home.css'
import Products from './Products'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/authSLice'
import {useNavigate} from 'react-router-dom'
import BreadCrumbs from './BreadCrumbs'



const Home = () => {
  const {isAuthenticated, user} = useSelector((state)=> state.auth)

  return (
    <>
    <div className='wellcome'> {isAuthenticated &&  <>Hello! <span>{user.username}</span></> }</div>
     <div className='home-heading'> Well come to the Redux tool kit ecommerce project</div>
     <section>
        <h1>Products List</h1>
        <Products/>
     </section>
    </>
   
  )
}

export default Home