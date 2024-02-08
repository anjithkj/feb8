import React from 'react'
import '../Adminside/adminav.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';

const Adminnav = () => {
  return (
    <div className='adminnavbar'>
    <div className="adminwrapper">
      <div className="adminsearch">
        <input type="text" placeholder="search..." /><SearchIcon/>
      </div>
      <div className="adminitems">
      <div className="adminitems">
        <LanguageOutlinedIcon className='adminicon'/>English
         </div>
         <div className="adminitem">
          <DarkModeOutlinedIcon className='adminicon' />
        </div>
        <div className="adminitem">
          <FullscreenOutlinedIcon className='adminicon'/>
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className='adminicon'/>
          <div className="admincounter"></div>
        </div>
        <div className="adminitem">
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <div className="admincounter">2</div>
        </div>
        <div className="adminitem">
          <ListIcon className='adminicon'/>
        </div>
        
   </div>
    </div>
  </div>
  )
}

export default Adminnav
