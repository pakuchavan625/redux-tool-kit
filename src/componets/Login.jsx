
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess, logout } from '../features/authSLice';
import {useNavigate} from 'react-router-dom'
import "../styles/login.css"
import BreadCrumbs from './BreadCrumbs';



const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
 
    if (username === 'Prakash' && password === 'password') {
      dispatch(loginSuccess({username : 'Prakash'}))
      setUsername('')
      setPassword('')
      setTimeout(()=>{
        nav('/')
      },2000)


    } else {
      dispatch(loginFailure('Invalid username or password'));
    }
  };

  return (
    <>
    
    <div style={{marginTop:'3rem', marginBottom:'-5rem'}}>
      <BreadCrumbs/>
    </div>
    <div className='login-wrapper'>

    {isAuthenticated && <h3 style={{color:'green'}}>Login successful!</h3>}
      <h1>Login</h1>
      <div style={{marginBottom:'1rem'}}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  style={{padding:'10px'}}/>
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  style={{padding:'10px'}}/>
      </div>
      <button onClick={handleLogin} className='login'>Login</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </>
  );
};

export default Login;
