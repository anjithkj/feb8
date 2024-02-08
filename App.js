import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home/Home';
import List from './Pages/new/product/List';
import New from './Pages/new/New';
import Single from './Pages/single/Single';
import Login from './Pages/login/Login';
import Users from './Components/user/Users';
import Usersignup from './Pages/login/Usersignup';


import { DarkModeContext } from './context/darkModeContext';
import Productview from './Pages/new/product/Productview';
import Admin from './Components/Adminside/Admin';
import Addcategory from './Components/Adminside/Addcategory';

import Categoryview from './Components/Adminside/Categoryview';
import Datas from './Components/Adminside/Datas';
import Allproduct from './Pages/new/product/Allproduct';
import Adminviewproduct from './Components/Adminside/Adminviewproduct';
import Admincategoryview from './Components/Adminside/Admincategoryview';
import Flexslide from './Pages/home/flexbox/Flexslide';
import Sellersignup from './Pages/login/Sellersignup';
import Sellerlogin from './Pages/login/Sellerlogin';
// import Vegitables from './Components/products/vegitables/Vegitables';
import Productlist from './Pages/new/product/Productlist';

import Productpage from './Components/products/Productpage';


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/userside' element={<Flexslide />} />
          <Route path='/vegetables' element={<Productpage />} /> 
          <Route path='/seller' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/sellerlogin' element={<Sellerlogin />} />
          <Route path='/signup' element={<Usersignup />} />
          <Route path='/sellersignup' element={<Sellersignup/>}/>
          <Route path='/products' element={<List />} />
          <Route path='/productlist' element={<Productlist/>} />
          <Route path='/products/new' element={<New method='post' />} />
          <Route path='/users' element={<Users />} />
          <Route path='/profile' element={<Single />} />
          <Route path='/category' element={<Addcategory method='post'/>} />
          <Route path="/cview" element={<Categoryview method='get'/> }/>
          <Route path='/pview' element={<Productview method='get' />} />
          <Route path='/allproduct' element={<Allproduct />} /> 
          <Route path='/admin' element={<Admin />} />
          <Route path='/table' element={<Datas />} /> 
          <Route path='/adminallproduct' element={<Adminviewproduct />} /> 
          <Route path='/admincategoryall' element={<Admincategoryview />} /> 
          {/* <Route path='/vegitables' element={<Vegitables />} />  */}
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
