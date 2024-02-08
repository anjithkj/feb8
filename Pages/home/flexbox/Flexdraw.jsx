import React, { useEffect, useState } from 'react'

import "../flexbox/flexdraw.scss";

import logo from '../flexbox/logo.svg'
// import  '../flexbox/flexdraw.scss'
import ecog from '../flexbox/ecog.png'
import { Link } from 'react-router-dom'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';



const Flexdraw = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    // You can perform any action here when a category is selected
    // For example, fetch related data or update state
  };

    


    useEffect(() => {
        const navBar = document.querySelector(".navbar");
        let prevScrollPos = window.scrollY;
    
        window.addEventListener("scroll", function () {
          let currScrollPos = window.scrollY;
    
          if (currScrollPos > prevScrollPos) {
            navBar.style.transform = `translateY(-105%)`;
          } else {
            navBar.style.transform = `translateY(0%)`;
          }
    
          prevScrollPos = currScrollPos;
        });
      }, []); // Empty dependency array ensures that the effect runs only once on mount
    

  return (
    <div>
    <nav className="navbar">
  <div className="logo">
    <i className="fa-solid fa-font-awesome"></i>
    <a href="#"><img src={ecog} className='pi' alt="Your SVG"  /></a>
    
  </div>
  <div className="menu">
    <div className="menu-links" >
    <Link to="/userside" style={{textDecoration:"none"}}>Home</Link>
      <a href="#">
  
      <div className="dropdowns">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          <span>Categories</span>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={() => handleCategoryClick('Dairy')}>Dairy</button>
            <button onClick={() => handleCategoryClick('Fruits')}>Fruits</button>
            <button onClick={() => handleCategoryClick('Vegetables')}>
            <Link to="/vegetables" style={{textDecoration:"none"}}>
              Vegetables
              </Link>
              </button>
          </div>
        )}
      </div>
      {selectedCategory && (
        <p>: {selectedCategory}</p>
      )}
    </div>

      
      </a>
  

     
     
      
      <a href="#">Contact</a>
      <a href="#"><ShoppingCartOutlinedIcon/> Cart</a>
      <Link to="/sellerlogin"><StorefrontIcon/>Become a Seller </Link>
    </div>
    
    {/* <Link to="/signup" style={{textDecoration:"none"}}>
    <button className="reg-in">Sign up</button></Link> */}

    <Link to="/" style={{textDecoration:"none"}}>
      <button className="reg-in">Log out</button></Link>
    
  </div>
  <div className="menu-btn">
    <i className="fa-solid fa-bars"></i>
  </div>
</nav>

{/* <section>
  <h1>Scroll Down to<br/>hide Navigation</h1>
</section>

<section>
  <h1>Scroll Up to<br/>show Navigation</h1>
</section> */}
{/* navbar */}
  
</div>
  )
}

export default Flexdraw
