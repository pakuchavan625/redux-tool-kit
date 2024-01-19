import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../styles/products.css";
import { removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';


const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.cart)
  
    const RemoveFromCart =(productsId)=>{
        dispatch(removeFromCart(productsId))
    }
  return (
    <>
    <div style={{marginTop:'3rem'}}>
      <BreadCrumbs/>
    </div>
      <h2>Shopping cart detail</h2>
      {products.length > 0 ?<div className="container">
        {products.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <img src={item.image} alt="" height="80px" />
                <h4>{item.title}</h4>
                <h5>Rs{item.price}</h5>
                <button onClick={() => RemoveFromCart(item.id) } className='remove-to-cart'>Remove</button>
              </div>
            </>
          );
        })}
      </div> : <><div>Cart is empty please add item into cart</div>
      go back to the <div>
            <Link to="/" className="  home-button">Home</Link>
          </div> to add the item
      </>}
      
    </>
  
  )
}

export default Cart