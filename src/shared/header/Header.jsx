import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import shipon from '../../assets/shipon/311362208_863199621755923_1309193143212560981_n.jpg'
const Header = () => {
  const menuItems = <React.Fragment>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  <li><Link to='/portfolio'>Portfolio</Link></li>
  <li><Link to='/contact'>Contact</Link></li>
   <li><Link to='/blog'>Blogs</Link></li>

</React.Fragment>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">nxshipon</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {menuItems}  
      </ul>
    </div>
     <div className='navbar-end'>
     <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={shipon} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
     </div>
  </div>
  );
};

export default Header;
