import React from 'react'


function Resume() {
  return (
    <div className='bg-pink-50 pb-10 pt-20'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 '>
            <div className='ps-10'>
                <p className='text-s text-red-800'>Resume</p>
                 <p className='text-5xl mt-3 font-redaction'>Curriculum Vitae</p> 
            </div>
            <div className='text-center'>
                <button className=' text-wrap rounded-3xl border-1 lg:p-2 md:p-2 sm:m-5 border-solid bg-red-800 text-white hover:bg-white hover:text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800 active:bg-white '><a  href="/Asbhy_V_A_Resume.pdf"  download="Asbhy_V_A_Resume.pdf">Download resume</a></button>
            </div>
        </div>
        <div className='border rounded-xl p-10 m-10 bg-white'>
            <div className='m-2 border-b-1'>
                <p className='text-4xl font-redaction'>Profile</p>
                <p className='pt-2'><span className='text-xl'>ASBHY</span>-Python Full Stack Developer. I'm a passionate Python Full Stack Developer focused on building modern, responsive and scalable web applications. I'm currently enhancing my development skills through professional Python Full Stack training at JClick Solutions.</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2  mt-3 mb-3'>
                    <p><a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=asbhyva317@gmail.com&su=Job%20Opportunity"
  target="_blank"
  rel="noopener noreferrer"
>
 asbhyva317@gmail.com
</a></p>
                    <p className='sm:pt-3'>+91 8489323863</p>
                    <p className='sm:pt-3 md:pt-3'>India</p>
                </div>
            </div>
            <div className='m-2 pb-5 pt-5 border-b-1'>
                <p className='text-4xl font-redaction'>Career Objective</p>
                <p  className='pt-2 mt-3 mb-3'>My goal is to begin my career as a Full Stack Developer where I can contribute to real-world applications,</p>
            </div>
            <div className='pt-10 pb-10 border-b-1'>
                <p className='text-4xl font-redaction'>Education</p>
                <div className=''>
                  <div className=' grid lg:grid-cols-2 md:grid-cols-2  pt-3 pb-3'>
                    <div className='pt-3 pb-3'>
                       <p className='text-xl font-redaction'>B.E. Electronics and Communication Engineering  </p>
                       <p>Amrita College of Engineering and Technology</p>
                    </div>
                    <div className='pt-3'>
                      <p>(2020-2024)</p>
                    </div>
                  </div>
                  <div className='grid lg:grid-cols-2 md:grid-cols-2  pt-3 pb-3'>
                    <div className='pt-3 pb-3'>
                     <p className='text-xl font-redaction'>Higher Secondary Education (HSC)</p>
                     <p>S.M Matric Higher Secondary School</p>
                     </div>
                     <div className='pt-3'>
                        <p>2020</p>
                     </div>
                  </div>
                  <div className='grid lg:grid-cols-2 md:grid-cols-2  pt-3 pb-3'>
                    <div className='pt-3 pb-3'>
                    <p className='text-xl font-redaction'>Secondary School Education(SSLC)</p>
                    <p>S.M Matric Higher Secondary School</p>
                    </div>
                    <div className='pt-3'>
                       <p>2018</p> 
                    </div>
                 </div>
                </div>
            </div>
            <div className='pt-10 pb-10 border-b-1'>
                <p className='text-4xl font-redaction'>Training</p>
                <p className='pt-3 text-xl font-redaction'>Python Full Stack Development</p>
                <p className='text-red-800'>JClick Solutions - Currently pursuing</p>
            </div>
            <div className='pt-10 pb-10 border-b-1'>
                <p className='text-4xl font-redaction'>Projects</p>
                <p>Mini E-commerce Website</p>
            </div>
            <div className='pt-10 pb-10 border-b-1'>
                <p className='text-4xl pb-3 font-redaction'>Strengths</p>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-2'>
                    <p className='border rounded-xl text-center bg-pink-100 '>Problem Solving</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Adaptbility</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Quick Learner</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Team Work</p>
                    <p className='border rounded-xl text-center bg-pink-100 '>Communication</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Creativity</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Continuous Learning</p>
                    <p className='border rounded-xl text-center bg-pink-100'>Attention to detail</p>
                </div>
            </div>
            <div className='pt-10 pb-10'>
                <p className='text-4xl pb-3 font-redaction'>Contact Details</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
                    <p>asbhyva317@gmail.com</p>
                    <p className='sm:pt-3'>+91 8489323863</p>
                    <p className='sm:pt-3 md:pt-3'>India</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume