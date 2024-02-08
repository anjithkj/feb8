import React from 'react'
import Adminnav from './Adminnav'
import Adminsidebar from './Adminsidebar'
import '../Adminside/admin.scss'
const Admin = () => {
  return (
    <div className='adminhome'>
    <Adminsidebar/>
    <div className="adminhomeContainer">
      <Adminnav/> 
     
      
      
    </div>
  </div>
  )
}

export default Admin
