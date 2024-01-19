// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'
// import "../styles/navbar.css"
// import { logout } from "../features/authSLice";
// import {useNavigate} from 'react-router-dom'


// const NavBar = () => {
//   const nav = useNavigate()
//   const dispatch = useDispatch()
//   const cartItemCount = useSelector((state)=> state.cart.length)
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   const handleLogout =()=>{
//     console.log('clicked')
//     dispatch(logout())
//   }

//   const handleLogin =()=>{
//     nav('/login')
//   }
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           border: "1px solid green",
//           padding: "2rem",
//           marginBottom: "2rem",
//         }}
//       >
//         <div style={{fontSize:'2rem', fontWeight:'bolder'}}>Redux Store</div>
//         <div style={{display:'flex' , gap:'2rem', justifyContent:'center', alignItems:'baseline'}}>
//           <div>
//             <Link to="/" className="link-style">Home</Link>
//           </div>
//           <div>
//             <Link to="/cart" className="link-style">Cart</Link>
//           </div>
//           <div>
//             <Link className="link-style">Cart item : <span style={{color:'red'}}>{cartItemCount}</span></Link>
//           </div>
//           <div>
//           {isAuthenticated ? <button onClick={handleLogout} className="login">logout</button>  : <button onClick={handleLogin} className="login">login</button> }
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;


import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../features/authSLice";
import { useNavigate } from 'react-router-dom';
import "../styles/navbar.css";

const NavBar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.length);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    console.log('clicked');
    dispatch(logout());
  };

  const handleLogin = () => {
    nav('/login');
  };

  return (
    <div className="navbar-container">
      <div className="brand">Redux Store</div>
      <div className="nav-links">
        <Link to="/" className="link-style home-button">Home</Link>
        <Link to="/cart" className="link-style cart-button">Cart</Link>
        {isAuthenticated && (
          <div className="cart-item-count">
            <span>Cart item:</span> <span style={{ color: 'red' }}>{cartItemCount}</span>
          </div>
        )}
      </div>
      <div className="user-actions">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <button onClick={handleLogin} className="login-button">Login</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;

