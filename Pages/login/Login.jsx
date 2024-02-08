import React, { useState } from 'react';
import '../login/login.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
const navigate=useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      console.log('Login successful', response.data);
      // Handle successful login (e.g., store token in state or localStorage)
      navigate('/userside')
    } catch (error) {
      console.error('Login failed', error.response.data);
     
      // Handle login error

      
    }
  };

  return (
    <div className='userpostion'>
      
    <div className="usercontainer">
      <div className="userimage-section">
        <div className="userimage-wrapper">
          <img src={require('../login/ve.jpg')} alt="" />
        </div>
        <div className="usercontent-container">
          <h1 className="usersection-heading">IT'S ALWAYS BETTER WHEN IT'S <span>Natural..</span></h1>
          <p className="usersection-paragraph">Eat well Feel goog.</p>
        </div>
      </div>
      <div className="userform-section">
        <div className="userform-wrapper">
          <div className="userlogo-container">
            <a href="#" className="userlogo-container">
              <img src={require('../image/ecog.png')} alt="Logo" />
            </a>
          </div>
          <h2>Welcome Back! 👋🏻</h2>
          <p>Enter your credentials to access your account.</p>
          <div className="userinput-container">
            <div className="userform-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" autoComplete="off"  
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="userform-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password"   
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="userremember-forgot">
            <div className="userremember-me">
              <input type="checkbox" defaultValue="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <button className="userlogin-btn" onClick={handleLogin}>Log In</button>
          <div className="useror-divider">or</div>
          <div className='usersign'><Link to="/signup" style={{textDecoration:"none"}}>
          <button className="usergoogle-signin">
          
            <span>Sign Up</span>
          </button></Link></div>
        </div>
      </div>
    </div>
  </div>
    
  );
};


export default Login;
