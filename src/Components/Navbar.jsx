import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Apicon } from './ContextPro'

export default function Navbar() {
  let {user,singsOut,th} = useContext(Apicon)

  function handleTheme(e){
    e.preventDefault()
    let genre = e.target.genre.value
    // let light = e.target.light.value
    // let retro = e.target.retro.value
    // let aqua = e.target.aqua.value
    
    // console.log(genre);
    

  }

    
        
    
  return (
    <div  className='w-11/12 mx-auto'>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><NavLink to='/'>Home</NavLink></li>
        <li>
          <NavLink to='/allmovies'>All Movies</NavLink>
          
        </li>
        <li>
        <NavLink to='/addmovies'>Add Movies</NavLink>
          
        </li>
        <li>
        <NavLink to='/fmovies'>Favorites Movies</NavLink>
          
        </li>
        <li>
          <NavLink to='/myprofile'>My Profile</NavLink>
          
        </li>
        
      </ul>
    </div>
    
    <img className='w-10 h-10 hidden md:block' src="https://i.ibb.co.com/mNwYvb9/download.jpg" alt="" />
    <a className="btn btn-ghost text-xl hidden md:block">Movie Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
    <li><NavLink to='/'>Home</NavLink></li>
        <li>
        <NavLink to='/allmovies'>All Movies</NavLink>
          
        </li>
        <li>
        <NavLink to='/addmovies'>Add Movies</NavLink>
          
        </li>
        <li>
        <NavLink to='/fmovies'>Favorites Movies</NavLink>
          
        </li>
        <li>
          <NavLink to='/myprofile'>My Profile</NavLink>
          
        </li>
        
    </ul>
  </div>
 
  
  <div className="navbar-end gap-x-2">
    {
      user ? (<Link onClick={()=>singsOut()} className="btn">Sing Out</Link>) : (<Link to='/login' className="btn">Log In</Link>) 
    }
    
    
    <div className="avatar">
  
</div>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img  src={user? user.photoURL : 'https://i.ibb.co.com/6ZH9wxD/3551911.jpg'} />
  </div>
</div>
  </div>
</div>
    </div>
  )
}