import React from 'react'

import Adminnav from './Adminnav'
import Adminsidebar from './Adminsidebar'
import CategoryView from './Categoryview'
import '../Adminside/admincategoryview.scss'
const Admincategoryview = () => {
  return (
    <div className='admincatprolist'>
      <Adminsidebar/>
      <div className="admincatprolistContainer">
        <Adminnav/>
        <div className='admincatprotop'>
        <CategoryView/>
        </div>
      </div>
    </div>
  )
}

export default Admincategoryview
