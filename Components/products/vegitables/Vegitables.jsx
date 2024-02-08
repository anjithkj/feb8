import React, { useEffect, useState } from 'react';
import '../products.scss';
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import axios from 'axios';
import baseUrl from '../../../Pages/new/Api';
import {Buffer} from 'buffer';
import Flexdraw from '../../../Pages/home/flexbox/Flexdraw';
const Vegitables = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + "/product/productview")
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='bodyproduct'>
      
      <div className='grid'>
       

        {product.map((value, index) => (
          <div className="cardproduct" key={index}>
            <div className="image-container">
              <img src={`data:image/jpeg;base64,${Buffer.from(value.Photo.data)}`}  alt='Error' />
            </div>
            <div className="content">
              <h2 className="profile-name">{value.Productname}</h2>
              <p className="price">Price:&nbsp;&nbsp;{value.Productprice}</p>
              <p className="description">Quantity:&nbsp;&nbsp;{value.Quantity}&nbsp;&nbsp;&nbsp;&nbsp;Expiredate {value.Expiredate}</p>
            </div>
            <div className="cart">
              <a className="favour" >
                <MdOutlineFavorite />
              </a>
              <a className="tocart" >
                <FaCartPlus />
              </a>
              <a className="buynow" >
                <LuShoppingBag />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegitables;
