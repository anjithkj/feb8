import React from 'react'
import '../Adminside/adminsidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { LuView } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";

const Adminsidebar = () => {
  return (
    <div className='adminsidebar'>
    <div className="admintop">Admin</div>
<hr/>
    <div className="admincenter">
      <ul>
          <p className="admintitle">MAIN</p>
          
          <li>
              <DashboardIcon className='adminicon'/>
              <span>Dashboard</span>
          </li>
          
          
          
          <li>
              
              <AccountCircleOutlinedIcon className='adminicon'/>
              <span>Profile</span>
          </li>
        
          
          <li><Link to="/adminallproduct" style={{textDecoration:"none"}}>
              <StoreIcon className='adminicon'/>
              <span>Product</span></Link>
          </li>
          
          
          <li>
              
              <PersonOutlineOutlinedIcon className='adminicon'/>
              <span>Users</span>
          </li>
          
          <li><Link to="/category" style={{textDecoration:"none"}}>
              <TbCategoryPlus  className='adminicon'/>              
              <span>Category</span></Link>
          </li>
         
          <li><Link to="/admincategoryall" style={{textDecoration:"none"}}>
              <LuView className='adminicon'/>
             <span>Category</span></Link>
          </li>
          <li> <NotificationsNoneIcon className='adminicon'/>
              <span>Notification</span>
          </li>
         
{/*           
          <li>
              
              <TimelineIcon className='adminicon'/>
              <span>Logs</span>
          </li> */}
          <li>
              <SettingsOutlinedIcon className='adminicon'/>
              <span>Settings</span>
          </li>
          
          {/* <li>
          <CreditCardIcon className='adminicon'/>
              <span>Others</span>
          </li> */}
          <li>
              <LogoutOutlinedIcon className='adminicon'/>
              <span>Logout</span>
          </li>
      </ul>
    </div>
    {/* <div className="adminbottom">
      <div className="admincolorOption" ></div>
      <div className="admincolorOption" ></div>
    </div> */}
  </div>
  )
}

export default Adminsidebar
