import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='pt-10 pb-10 bg-red-900'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3'>
             <div className='m-5'>
                <p className='font-redaction text-white text-4xl'>ASBHY</p>
                <p className='pt-2 text-white'>Python Full Stack Developer,building responsive and scalable web applications</p>
             </div>
             <div className='m-5 '>
                <p className='font-redaction text-white text-2xl'>Navigate</p>
                <div className='grid grid-cols-2 pt-3'>
                    <div>
                        <p className=' text-white'><Link to="/">Home</Link></p>
                        <p className=' pt-1 text-white'><Link to="/skills">Skills</Link></p>
                        <p className=' pt-1 text-white'><Link to="/education">Education</Link></p>
                    </div>
                    <div>
                        <p className=' text-white'><Link to="/about">About</Link></p>
                        <p className=' pt-1 text-white'><Link to="/project">Projects</Link></p>
                        <p className=' pt-1 text-white'><Link to="/contact">Contact</Link></p>
                    </div>
                </div>
             </div>
             <div className='m-5'>
                <p className='font-redaction text-white text-2xl pb-3'>Get in Touch</p>
                  <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=asbhyva317@gmail.com&su=Job%20Opportunity" target="_blank" rel="noopener noreferrer" className='text-white'>asbhyva317@gmail.com</a></p>
                <p className=' pt-1 text-white'>+91 8489323863</p>
                <p className=' pt-1 text-white'>India.Open to Oppurtunities</p>
             </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer