import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Education() {
        
           useEffect(() => {
                  Aos.init({
                    duration: 2000,
                    once: false,
                    offset: 100
                  }), []
                })
  return (
    <div className='pt-10 bg-pink-100 pb-10'>
      <div className='pt-20'>
        <p className='font-philo text-lg text-red-800 ps-5 pt-3'>Academic Background</p>
        <p className='text-6xl font-redaction ps-5 pt-3'>Education</p>
        <p className='ps-5 pt-3 text-xl'>A steady foundation in engineering, now channelled into full-stack software development.</p>
        <div className=' border p-5 m-5 rounded-3xl mb-20 mt-10 bg-white ' data-aos="fade-up"
        >
          <div >

            <p className='text-red-800 text-lg font-philo pb-2'>2020-2024</p>
            <div className='grid grid-cols-2'>
            <div>
            <p className='font-redaction text-3xl'>B.E. Electronics and Communication Engineering</p>
            <p className='text-xl pt-1'>Amrita College of Engineering and Tecchnology</p>
            </div>
            <div>
            <p className='text-center text-red-800 font-redaction text-2xl' >8.25 CGPA</p>
            </div>
            </div>
            <div className='grid grid-cols-2 pt-3'>
            <p className='text-s'>Completed undergraduate engineering studies with exposure to electronics, communication technologies, programming fundamentals and technical problem solving.</p>
            </div>
          </div>
        </div>
        <div className=' border p-5 m-5 rounded-3xl mb-20 bg-white' data-aos="fade-up" >
            <p className='text-red-800 text-lg font-philo pb-2'>2020</p>
            <div className='grid grid-cols-2'>
              <div>
                <p className='font-redaction text-3xl'>Higher Secondary Education (HSC)</p>
                 <p className='text-xl pt-1'>S.M Matric Higher Secondary School</p>
              </div>
              <div>
               <p className='text-center text-red-800 font-redaction text-2xl'>74%</p>
              </div>
            </div>
            <div className='grid grid-cols-2 pt-3'>
            <p className='text-s'>Completed higher secondary education with a focus on mathematics and science, building the analytical foundation for engineering studies.</p>
            </div>
        </div>
        <div className=' border p-5 m-5 rounded-3xl bg-white' data-aos="fade-up">
            <p className='text-red-800 text-lg font-philo pb-2'>2018</p>
            <div className='grid grid-cols-2'>
              <div>
               <p className='font-redaction text-3xl'>Secondary School Education (SSLC)</p>
               <p className='text-xl pt-1'>S.M Matric Higher Secondary School</p>
              </div>
              <div>
               <p className='text-center text-red-800 font-redaction text-2xl'>94%</p>
              </div>
            </div>
            <div className='grid grid-cols-2 pt-3'>
            <p className='text-s'>Completed secondary schooling with strong fundamentals across core subjects.</p>
            </div>
        </div>
      </div>
      <div className='pt-5' >
        <p className='font-philo text-xl text-red-800 ps-5'>Skill Building</p>
        <p className='text-5xl font-redaction pt-3 ps-5'>Professional Training</p>
        <div className='border rounded-3xl m-10 p-10 bg-white'>
            <div className='grid grid-cols-2 gap-2'>
                <div>
                <p className='font-redaction text-3xl'>Python Full Stack Development</p>
                <p className='text-xl text-red-800 pt-1'>JClicks Solutions</p>
                </div>
                <div >
                    <button className='rounded-lg border-1 p-2 border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '>Currently Pursuing</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-2 pt-5'>
                    <p className='border rounded-xl text-center bg-pink-100 '>Python</p>
                    <p className='border rounded-xl text-center bg-pink-100'>HTML</p>
                    <p className='border rounded-xl text-center bg-pink-100'>CSS</p>
                    <p className='border rounded-xl text-center bg-pink-100'>JavaScript</p>
                    <p className='border rounded-xl text-center bg-pink-100 '>Bootstrap</p>
                    <p className='border rounded-xl text-center bg-pink-100'>React.js</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Git</p>
                    <p className='border rounded-xl text-center bg-pink-100'>GitHub</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Responsive Web Development</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Project Development</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Education