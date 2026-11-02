import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos'; 

function Second() {
    useEffect(()=>{
        Aos.init({
          duration:1000,
          once:false,
          offset:100
        }),[]
      });
  return (
    <div className='m-5 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-6 pt-20 pb-20'>
        <div data-aos="fade-up" className='text-center border rounded-2xl p-4 bg-pink-100'>
            <p className='text-4xl text-red-800'>10+</p>
            <p>Projects Completed</p>
        </div>
         <div  data-aos="fade-down" className='text-center border rounded-2xl p-4 bg-pink-100'>
            <p className='text-4xl text-red-800'>5+</p>
            <p>Technologies Learned</p>
        </div>
         <div data-aos="fade-up"  className='text-center border rounded-2xl p-4 bg-pink-100'>
            <p className='text-4xl text-red-800'>100%</p>
            <p>Passion for Coding</p>
        </div>
         <div data-aos="fade-down"  className='text-center border rounded-2xl p-4 bg-pink-100'>
            <p className='text-4xl text-red-800'>1+</p>
            <p>Years Learning Experience</p>
        </div>
    </div>
  )
}

export default Second