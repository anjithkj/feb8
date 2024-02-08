import React from 'react'
import Adminsidebar from './Adminsidebar'
import Adminnav from './Adminnav'
import '../Adminside/adminviewproduct.scss'
import Productlist from '../../Pages/new/product/Productlist'
import Allproduct from '../../Pages/new/product/Allproduct'
const Adminviewproduct = () => {
  return (
    <div className='adminprolist'>
      <Adminsidebar/>
      <div className="adminprolistContainer">
        <Adminnav/>
        <div>
        <Allproduct/>
        </div>
      </div>
    </div>
  )
}

export default Adminviewproduct
