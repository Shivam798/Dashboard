import React from 'react'
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; 
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:"none"}}>
        <span className='logo'>Shivam dev</span>
        </Link>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
          <p className='title'>LISTS</p>
          <li><PersonOutlineOutlinedIcon className='icon'/><Link to="/users" style={{textDecoration:"none"}}><span>Users</span></Link></li>
          <li><ProductionQuantityLimitsOutlinedIcon className='icon'/><Link to="/products" style={{textDecoration:"none"}}><span>Products</span></Link></li>
          <li><ListAltOutlinedIcon className='icon'/><span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className='icon'/><span>Delivery</span></li>
          <p className='title'>USEFUL</p>
          <li><QueryStatsOutlinedIcon className='icon'/><span>Stats</span></li>
          <li><NotificationsActiveOutlinedIcon className='icon'/><span>Notification</span></li>
          <p className='title'>SERVICE</p>
          <li><SystemSecurityUpdateGoodOutlinedIcon className='icon'/><span>System Health</span></li>
          <li><SyncAltOutlinedIcon className='icon'/><span>Logs</span></li>
          <li><SettingsSuggestOutlinedIcon className='icon'/><span>Settings</span></li>
          <p className='title'>USER</p>
          <li><AccountCircleOutlinedIcon className='icon'/><span>Profile</span></li>
          <li><LogoutOutlinedIcon className='icon'/><span>Logout</span></li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        

      
      </div>
    </div>
  )
}

export default Sidebar