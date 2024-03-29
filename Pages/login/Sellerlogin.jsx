import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../login/sellerlogin.scss'
const Sellerlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const navigate=useNavigate();
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/auth/login', {
          email,
          password,
        });
  
        console.log('Login successful', response.data);
        // Handle successful login (e.g., store token in state or localStorage)
        navigate('/home')
      } catch (error) {
        console.error('Login failed', error.response.data);
        // Handle login error
      }
    };
  return (
    <div className='sellerpostion'>
      
    <div className="sellercontainer">
      <div className="sellerimage-section">
        <div className="sellerimage-wrapper">
          <img src={require('../login/seller2.jpg')} alt="" />
        </div>
        <div className="sellercontent-container">
          <h1 className="sellersection-heading">THE BEST MARKETING OF ALL IS  <span>HAPPY CLIENTS..</span></h1>
          <p className="sellersection-paragraph">Eat well Feel goog.</p>
        </div>
      </div>
      <div className="sellerform-section">
        <div className="sellerform-wrapper">
          <div className="sellerlogo-container">
            <a href="#" className="sellerlogo-container">
              <img src={require('../image/ecog.png')} alt="Logo" />
            </a>
          </div>
          <h2>Welcome Back! 👋🏻</h2>
          <p>Enter your credentials to access your account.</p>
          <div className="sellerinput-container">
            <div className="sellerform-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" autoComplete="off"  
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="sellerform-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password"   
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="sellerremember-forgot">
            <div className="sellerremember-me">
              <input type="checkbox" defaultValue="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <button className="sellerlogin-btn" onClick={handleLogin}>Log In</button>
          <div className="selleror-divider">or</div>
          <div className='sellersign'><Link to="/sellersignup" style={{textDecoration:"none"}}>
          <button className="sellergoogle-signin">
          
            Sign Up
          </button></Link></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sellerlogin
