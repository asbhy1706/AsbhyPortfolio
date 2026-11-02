import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import photo from '/Professional photo.png'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import resume from '/Asbhy_V_A_Resume.pdf'


function First() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
      offset: 100
    }), []
  });
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  px-2 py-2 bg-pink-50 pt-20'>
      <div className='grid md:justify-items-center md:items-center '>
        <div className='ps-3'>
          <p className='text-red-800 font-philo text-xl'> Hello, I'm</p>
          <p className='text-8xl mt-1 text-red-800  font-redaction'>ASBHY</p>
          <p data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className='text-3xl mt-3 text-red-800 font-redaction'>Python Full Stack Developer</p>
          <p className='mt-5'>I am passionate Python Full Stack Developer focused on building modern,expressive and scalable web applications.I'm currently enhancing my development skills through Professional python Full Stack Training at JClicks Solutions.</p>
          <div className=' mt-7 mb-5 flex justify-around '>
            <button className=' lg:w-1/3 rounded-3xl border-1 p-2  border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '>View My Work</button>
            <button className=' lg:w-1/3  rounded-3xl border-1 p-2  border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '><a 
  href="/Asbhy_V_A_Resume.pdf" 
  download="Asbhy_V_A_Resume.pdf">
  Download resume
</a></button>
          </div>
        </div>
      </div>
      <div className='p-10 mt-8 grid md:justify-items-center md:items-center' >
        <img src={photo} className='rounded-3xl border-1 lg:h-130 sm:h-0 animi  ' />
      </div>
    </div>
  )
}

export default First