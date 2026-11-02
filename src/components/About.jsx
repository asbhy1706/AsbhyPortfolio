import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import photo from '/Professional photo.png'

function About() {
     useEffect(() => {
        Aos.init({
          duration: 1000,
          once: false,
          offset: 200
        }), []
      });
  return (
<div className='pt-10'>
     <div className=' bg-pink-100 grid lg:grid-cols-2 md:grid-cols-2 ps-5 pt-20 pb-20 '>
       <div className='p-10' data-aos="fade-down"  >
         <img src={photo} className='rounded-xl border-1 animi'/>
       </div>
       <div data-aos="fade-down">
        <p className='text-start text-xl text-red-800 font-philo'>About Me</p>
        <p className='text-5xl m-3 font-redaction'>Turning curiosity into full-stack skill</p>
        <p className='m-3'>I'm ASBHY, an Electronics and Communication Engineering graduate with a strong interest in software development. My interest in technology encouraged me to move into the software development field and specialize in Python Full Stack Development.</p>
        <p className='m-3'>I'm currently pursuing professional Python Full Stack Development training at JClick Solutions, where I'm building practical knowledge in frontend development, backend development, databases, APIs and modern development tools.</p>
        <p className='m-3'>I enjoy transforming ideas into responsive and functional web applications and continuously improving my programming and problem-solving abilities.</p>
         <div className=' border rounded-2xl p-4 m-3 mt-5'>
            <p className=' text-3xl font-redaction '>My Goal</p>
            <p className='pt-4 pb-4'>My goal is to begin my career as a Full Stack Developer where I can contribute to real-world applications, continuously expand my technical expertise and grow into an experienced software engineer.</p>
         </div>
        <div className='m-5'>
            <button className='rounded-3xl border-1 p-2 border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '><a href="/Asbhy_V_A_Resume.pdf" 
  download="Asbhy_V_A_Resume.pdf">
  Download resume
</a></button>
        </div>
      </div>     
    </div>
    <div className='mt-10'>
        <p className='text-center text-xl text-red-800 font-philo'>Details</p>
        <p className='text-6xl text-center font-redaction'>Personal Information</p>
        <div className='m-15 grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 sm:justify-content-center sm:items-center ' >
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 sm:p-2  mt-6 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-down">
            <p className='text-xs text-red-800 font-redaction '>NAME</p>
            <p className='text-xl pt-2 font-redaction'>ASBHY</p>
        </div>
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 sm:p-2 mt-6 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-up">
            <p  className='text-xs text-red-800 font-redaction'>DEGREE</p>
            <p className='text-xl pt-2 font-redaction'>B.E.ECE</p>
        </div>
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 mt-6 sm:p-2 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-down">
            <p className='text-xs text-red-800 font-redaction'>SPECILIZATION</p>
            <p className='text-xl pt-2 font-redaction'>Python Full Stack Development</p>
        </div>
        <div className='text-center border w-60  rounded-2xl lg:p-3 md:p-4 sm:p-2 mt-6 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-up">
            <p className='text-xs text-red-800 font-redaction'>TRAINING</p>
            <p className='text-xl pt-2 font-redaction'>JClicks Solutions</p>
        </div>
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 sm:p-2   mt-6 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-up">
            <p className='text-xs text-red-800 font-redaction'>LOCATION</p>
            <p className='text-xl pt-2 font-redaction'>India</p>
        </div>
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 sm:p-2  mt-6 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-down">
            <p className='text-xs text-red-800 font-redaction'>AVAILABILITY</p>
            <p className='text-xl pt-2 font-redaction'>Open to Opportunities</p>
        </div>
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 sm:p-2  mt-6 scale-100 hover:scale-90 hover:bg-pink-100' data-aos="fade-up">
            <p className='text-xs text-red-800 font-redaction'>LANGUAGES</p>
            <p className='text-xl pt-2 font-redaction'>English,Tamil</p>
        </div>
        <div className='text-center border w-60 rounded-2xl lg:p-3 md:p-4 sm:p-2  mt-6 scale-100 hover:scale-90 hover:bg-pink-100 ' data-aos="fade-down">
            <p className='text-xs text-red-800 font-redaction'>EMAIL</p>
            <p className='text-xl pt-2 font-redaction'>asbhyva317@gmail.com</p>
        </div>
      </div>
    </div>
    <div className=' grid lg:grid-cols-2 md:grid-cols-2 ps-5 bg-pink-100 '>
        <div>
          <p className='text-xl text-red-800 font-philo'>The Path So Far</p>
          <p className='text-5xl mt-3 font-redaction'>MY JOURNEY</p>
          <div className='border-s-4'>
          <div data-aos="fade-down">
            <p className='text-3xl m-6 font-redaction'>Engineering Foundation</p>
            <p className='m-6'>Completed B.E Electronic and Communication Engineering from Amrita College</p>
          </div>
           <div data-aos="fade-down"> 
            <p className='text-3xl m-6 font-redaction'>Discovering Programming</p>
            <p className='m-6'>Developed an interest in software, programming and web technologies.</p>
          </div>
           <div data-aos="fade-down">
            <p className='text-3xl m-6 font-redaction'>Entering Full Stack Development</p>
            <p className='m-6'>Started learning HTML, CSS, JavaScript and Python.</p>
          </div>
           <div data-aos="fade-down">
            <p className='text-3xl m-6 font-redaction'>Professional Training</p>
            <p className='m-6'>Joined JClick Solutions for Python Full Stack Development training</p>
          </div>
           <div data-aos="fade-down">
            <p className='text-3xl m-6 font-redaction'>Building Real Projects</p>
            <p className='m-6'>Started creating frontend, backend and database-driven web applications</p>
          </div >
          <div data-aos="fade-down"> 
            <p className='text-3xl m-6 font-redaction'>Career Goal</p>
            <p  className='m-6'>Preparing to begin a professional career as a Python Full Stack Developer</p>
          </div>
          </div>
        </div>
    </div>
    <div className=' border rounded-3xl m-5 p-3 mt-20 mb-20'>
        <p className='ms-6 text-xl text-red-800 font-philo'>Beyond Code</p>
        <p className='ms-6 text-5xl font-redaction'>Interests</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-3  gap-4 m-5'>
            <div className=' border rounded-4xl m-5 p-5 bg-pink-100'>
                <p className=' text-xl font-redaction font-bold'>Building Projects</p>
                <p>Prototyping ideas into working full stack applications</p>
            </div>
            <div className='border rounded-4xl m-5 p-5 bg-pink-100'>
                <p className='text-xl font-bold font-redaction'>Problem Solving</p>
                <p>Enjoying the logic and structure behind clean code</p>
            </div>
            <div className='border rounded-4xl m-5 p-5 bg-pink-100'>
                <p className=' text-xl font-bold font-redaction'>Continuous Learning</p>
                <p>Exploring new frameworks,tools and best practices</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About