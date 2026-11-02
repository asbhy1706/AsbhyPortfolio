import React, { use } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState,useEffect } from 'react'

function Navbar1() {
  const[openmenu,setopenmenu]=useState(false)
  
  return (
<nav className=" fixed w-full z-20 top-0 start-0 border-default bg-pink-50 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl text-heading font-semibold whitespace-nowrap">ASBHY</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-dropdown" aria-expanded="false" onClick={()=>setopenmenu(!openmenu)}>
        {openmenu?<FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faBars} />}
    </button>
    <div className="bg-pink-50 hidden w-full md:block md:w-auto" id="navbar-dropdown ">
      <ul className=" bg-pink-50 flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li>
          <Link to="/" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
          <Link to='/about'className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to='/education' className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Education</Link>
        </li>
        <li>
          <Link to='/skills' className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Skills</Link>
        </li>
        <li>
          <Link to="/project" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Projects</Link>
        </li>
        <li>
          <Link to='/resume' className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Resume</Link>
        </li>
        <li>
          <Link to='/contact' className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</Link>
        </li>
        <li>
          <button className='rounded-lg border-1 p-2 border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '><Link to='/contact'>Hire Me</Link></button>
        </li>
      </ul>
    </div>
  </div>
  <div> 
    {openmenu&&(
     <div className='lg:hidden md:hidden' >
      <ul>
        <li>
       <Link to='/' onClick={()=>setopenmenu(false)} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
       <Link to='/about' onClick={()=>setopenmenu(false)}   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
       <Link to='/education' onClick={()=>setopenmenu(false)}   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Education</Link>
        </li>
        <li>
       <Link to='/skills' onClick={()=>setopenmenu(false)}   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Skills</Link>
        </li>
        <li>
       <Link to='/project' onClick={()=>setopenmenu(false)}  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Projects</Link>
        </li>
        <li>
       <Link to='/resume' onClick={()=>setopenmenu(false)}   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Resume</Link>
        </li>
        <li>
       <Link to='contact' onClick={()=>setopenmenu(false)}   className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</Link>
        </li>
        <li>
       <button onClick={()=>setopenmenu(false)}   className='rounded-lg border-1 p-2 border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '><Link to='/contact'>Hire Me</Link></button>
        </li>
      </ul>
     </div>
    )
    }
  </div>
</nav>
 

  )
}

export default Navbar1