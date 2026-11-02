import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='pt-30 pb-20'>
        <p className='text-center text-xl font-philo text-red-800'>Get In Touch</p>
        <p className='text-center text-5xl font-redaction'>Let's Build Something Together</p>
        <div className='pt-5 text-center lg:ms-50 lg:me-50 md:ms-10 md:me-10 sm:ms-5 sm:me-5'>
        <p>I'm currently looking for opportunities where I can contribute, learn and grow as a Python Full Stack Developer. Feel free to contact me regarding internships, junior developer roles. freelance projects or collaborations.</p>
        </div>
        <div className=' grid lg:grid-cols-4 md:grid-cols-4 sm:items-center sm:justify-content-center m-5'>
          <div className='text-center m-5 '>
            <div className='border rounded w-60 3xl p-2 bg-pink-100'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
            <p className='pt-5'>GitHub</p>
            </div>
          </div>
          <div className='text-center m-5 '> 
            <div className='border rounded w-60 3xl p-2 bg-pink-100'>
               <FontAwesomeIcon icon={faLinkedin} size='2x' />
               <p className='pt-5'> <a href='https://www.linkedin.com/in/asbhy-vinoba-va1706/'>LinkedIn</a></p>
            </div>
          </div>
          <div className='text-center m-5 '>
            <div className='border rounded w-60 3xl p-2 bg-pink-100'>
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
            <p className='pt-5'><a href='mailto:asbhyva317@gmail.com' >Mail</a></p>
            </div>
          </div>
          <div className='text-center w-60 m-5 '>
            <div className='border rounded 3xl p-2 bg-pink-100 '>
            <FontAwesomeIcon icon={faPhone}  size='2x'/>
            <p className='pt-5'>+91 8489323863</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact