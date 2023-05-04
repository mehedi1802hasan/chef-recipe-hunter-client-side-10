import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
const NavPart = () => {

const {user,logOut}=useContext(AuthContext)
const handleLogout=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>{
    console.log(error.message)
  })
}
    return (
        <div className="flex w-11/12 m-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li> <Link to='/'>Blog</Link></li>
              <li> <Link to='/login'>Login</Link></li>
              <li> <Link to='/registration'>Registration</Link></li>
            </ul>
          </div>
          <h3 className='text-4xl font-bold '>Ki<span className='text-blue-700 '>C</span><span className='text-red-500'>hen</span> Ch<span className='text-red-500'>E</span>f</h3>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li> <Link to='/'>Home</Link></li>
            
           <li> <Link to='/'>Blog</Link></li>
          
          </ul>
        </div>
        <div >
       
        <div>
          {
            user ?
          <div className='flex '>
       <div className="w-10 rounded-full">
       <img src={user?.photoURL} />

</div>


             <button onClick={handleLogout}>signOUt</button>
          </div>
                 :
            <div className='flex gap-5'>  <h3> <Link to='/login'>Login</Link></h3> 
           <h3> <Link to='/registration'>Registration</Link></h3> </div>
          }
        </div>
       
        </div>
      </div>
    );
};

export default NavPart;