import React, { useEffect, useState } from 'react';
import '../Adminside/addcategory.scss';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import Adminsidebar from './Adminsidebar';
import Adminnav from './Adminnav';
import  baseurl from '../../Pages/new/Api'
import baseUrl from '../../Pages/new/Api';
import { useNavigate } from 'react-router-dom';
import CategoryView from './Categoryview';

const Addcategory = (props) => {
  
  
  const [inputs, setInputs] = useState({
    "Categoryname": '',
    "Status":'Active'
    // ... other properties
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (props.method === 'put' && props.data) {
      setInputs(props.data);
    }
  }, [props.method, props.data]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  

  const addHandler = () => {

    if (props.method === 'post') {
      
      // console.log(inputs)
      axios.post(baseUrl+"/category/categorynew", inputs)
        .then((response) => {alert('Record Saved');
        navigate('/admincategoryall') })
        .catch((err) => console.log(err));
    }

  }
  
  


  return (
    <div className='addcategory'>
      <Adminsidebar />
      <div className='addcategoryContainer'>
        <Adminnav />
        <div className="addcategorytop">
          <div className="addcategoryleft">
            <h1 className="addcategorytitle">Category</h1>
           
            <TextField id="Categoryname" label="Category Name" type="text" name='Categoryname' value={inputs.Categoryname} onChange={inputHandler}/>
        <br></br><br/>
            &nbsp;&nbsp;Status<br></br><select className='statusboc' name="Status" value={inputs.Status}  onChange={inputHandler}><br/>
       <option value="Active">Active</option>
       <option value="Inactive">Inactive</option>
      </select>
      <br/><br/>
            <Button variant='contained' color='secondary' onClick={addHandler}>ADD</Button>
          </div>
          
        </div>
        <div className="addcategorybottom">
          <h1 className="addcategorytitle">Recently Added Category</h1>
          <CategoryView/>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
