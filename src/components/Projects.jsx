import React from 'react'
import project1 from '/project1.png'
import project2 from '/portfolio.png'

function Projects() {
  return (
    <div className='pt-20 pb-20 bg-pink-100'>
      <div className='grid grid-cols-2'>
        <div className='m-5'>
      <p className='text-5xl font-redaction'>Projects</p>
      <p className='pt-3 text-xl'>Practice and Portfolio builds spanning full-stack,backend and frontend work used to learn and demonstrate real development skills</p>
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
        <div>
          <div>
            
           </div>
           <div>
              <p></p>
              <p></p>
              <div>
                
              </div>
           </div>
        </div>
      </div>
    </div>

  )
}

export default Projects