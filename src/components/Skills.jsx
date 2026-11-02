import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Skills() {
  useEffect(() => {
      Aos.init({
        duration: 2000,
        once: false,
        offset: 100
      }), []
    });
  return (
    <div className='pt-35 bg-pink-100'>
        <div className='ps-8 grid lg:grid-cols-2 md:grid-cols-2'>
          <div>
          <p className='text-start text-s text-red-800'>ToolBox</p>
         <p className='text-7xl mt-3 pt-4 font-redaction'>Skills & Technologies</p>
          <p className='pt-4'>Illustrative skill levels built through consistent practice, coursework and hands-on projects-not formal certifications</p>
          </div>
          
        </div>
        <div className='pt-10 border-b pb-10'>
          <p className='ms-6 text-4xl font-redaction pb-10'>Frontend</p>
          <div className='grid lg:grid-cols-4 md:grid:cols-2 sm:grid-cols-3 sm:justify-items-center'>
            <div className=' border rounded-2xl m-5 p-5 bg-white '  data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>HTML5</p>
              <p className='font-philo text-lg'>Frontend</p>
              </div>
             
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white'  data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>CSS3</p>
              <p className='font-philo text-lg'>Frontend</p>
              </div>
             
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white'  data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>Javascript</p>
              <p className='font-philo text-lg'>Frontend</p>
              </div>
             
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white'  data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>Bootstrap</p>
              <p className='font-philo text-lg'>Frontend</p>
              </div>
            </div>
            <div className='grid grid-cols-2 border rounded-2xl m-5 p-5 bg-white'  data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>React.js</p>
              <p className='font-philo text-lg'>Frontend</p>
              </div>
            </div>
            <div className='border rounded-2xl m-5 p-5 bg-white'  data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>Responsive Design</p>
              <p className='font-philo text-lg'>Frontend</p>
              </div>
             
            </div>
          </div>
        </div>
        <div className='border-b pb-10'>
          <p className='ms-6 text-4xl pt-10 font-redaction'>Backend</p>
          <div className='grid lg:grid-cols-4 md:grid:cols-2 '>
            <div className=' border rounded-2xl m-5 p-5 bg-white ' data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>Python</p>
              <p className='font-philo text-lg'>Backend</p>
              </div>
             
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white' data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>Django</p>
              <p className='font-philo text-lg'>Backend</p>
              </div>
             
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white' data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>Django REST Framework</p>
              <p className='font-philo text-lg'>Backend</p>
              </div>
            
            </div>
          </div>
        </div>
        <div className='border-b pb-10'>
          <p className='ms-6 text-4xl pt-10 font-redaction'>Database</p>
          <div className='grid lg:grid-cols-4 md:grid:cols-2'>
            <div className='grid grid-cols-2 border rounded-2xl m-5 p-5 bg-white' data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>MySQL</p>
              <p className='font-philo text-lg'>Database</p>
              </div>
              
            </div>
            <div className='border rounded-2xl m-5 p-5 bg-white' data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>SQLite</p>
              <p className='font-philo text-lg'>Database</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b pb-10'>
          <p className='ms-6 text-4xl pt-10 font-redaction'>Development Tools</p>
          <div className='grid lg:grid-cols-4 md:grid:cols-2'>
            <div className='border rounded-2xl m-5 p-5 bg-white' data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>Git</p>
              <p className='font-philo text-lg'>Development Tools</p>
              </div>
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white' data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>GitHub</p>
              <p className='font-philo text-lg'>Development Tools</p>
              </div>
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white' data-aos="fade-up">
              <div>
              <p className=' text-xl font-redaction'>VS Code</p>
              <p className='font-philo text-lg'>Development Tools</p>
              </div>
            </div>
            <div className=' border rounded-2xl m-5 p-5 bg-white' data-aos="fade-down">
              <div>
              <p className=' text-xl font-redaction'>Postman</p>
              <p className='font-philo text-lg'>Development Tools</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills