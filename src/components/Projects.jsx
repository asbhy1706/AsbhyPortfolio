import React from 'react'
import project1 from '/project1.png'
import project2 from '/portfolio.png'
import project3 from '/project3.png'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='pt-20 pb-20 bg-pink-100'>
      <div className='grid '>
        <div className='m-5'>
      <p className='text-5xl font-redaction text-start'>Projects</p>
      <p className='pt-3 text-xl text-start'>Practice and Portfolio builds spanning full-stack,backend and frontend work used to learn and demonstrate real development skills</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
        <div className='border m-5 rounded-3xl bg-white hover:scale-90'>
           <div className='border-b'>
             <img src={project1} className=' rounded-t-3xl'/>
           </div>
           <div className='p-5'>
              <p className='text-center font-redaction text-2xl'>Mini E-Commerce Website</p>
              <p className='pt-2'>Mini E-Commerce Cake Website using React JS, React Router, JSON Server, and React Bootstrap! </p>
              <p className='text-center'><a className='underline hover:text-blue-600 dark:hover:text-blue-400' href='https://lnkd.in/p/gwqR-YXn'>Check Out My Work</a></p>
           </div>
        </div>
        <div className='border m-5 rounded-3xl bg-white hover:scale-90'>
          <div className='border-b' >
            <img src={project2} className=' rounded-t-3xl'/>
           </div>
           <div className='p-5'>
              <p className='text-center font-redaction text-2xl'>My Portfolio</p>
              <p className='pt-2'> Built my personal portfolio website using React JS, Tailwind CSS, Animations, and React Router!</p>
           </div>
        </div>
        <div className='border m-5 rounded-3xl bg-white hover:scale-90'>
          <div className='border-b'>
            <img src={project3} className=' rounded-t-3xl'/>
           </div>
           <div  className='p-5'>
              <p  className='text-center font-redaction text-2xl'>Jwellery Website</p>
              <p className='pt-2'> Created a Dark Fashion Jewellery Shop Website Template from scratch using HTML & CSS. </p>
              <p className='text-center'><a className='underline hover:text-blue-600 dark:hover:text-blue-400' href='https://lnkd.in/p/gxDqmbaX'>Check Out My Work</a></p>
           </div>
        </div>
      </div>
    </div>

  )
}

export default Projects