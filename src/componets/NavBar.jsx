
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

