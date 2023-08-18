import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Map from './contact/Map';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {

 

    useEffect(() => {
      AOS.init(
      );
      AOS.refresh();
    }, []);

  return (
    <div>
      <div
      form data-aos="zoom-out" data-aos-duration="1200" 
      
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NsYXRlJTIwY2thZSUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60')", height: "450px" }}>
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white mt-8">
        <h2 className="mb-4 text-5xl font-semibold">Contact US</h2>
        <h4 className="mb-6 text-md font-semibold">
          <Link to='/' >Home</Link>/Contact Us
          
        </h4>
      </div>
    </div>
  </div>
</div>

<div className='grid sm:grid-cols-1 py-[7vw] gap-16 md:gap-3   sm:items-center  md:grid-cols-2 lg:gap-4  justify-evenly  mt-16  px-[1vw] ' >
  <div className='md:px-8'>
    <div className='flex flex-col gap-6  text-left px-[2vw]'>
      <h2 className=' font-medium text-3xl'>Information</h2>
      <p className=' text-gray-900 font-normal text-md' >  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco <br /> cillum dolor. Voluptate exercitation incididunt</p>
      <div>
        <div>
          <div className='flex  flex-col gap-6  mt-4 '>

           <div className='flex items-center gap-4'>
           <span className='  p-6 border border-1 text-amber-700 rounded-full  border-gray-400  '>
              <SlLocationPin   size={30}/>
            </span>
             <p className='text-gray-900'>    
              6391 Elgin St. Celina, Delaware 10299 <br />
              2464 Royal Ln. Mesa, New Jersey 45463
              </p>
           </div>

           <div className='flex items-center gap-4'>
           <span className='  p-6 border border-1 text-amber-700 rounded-full  border-gray-400  '>
              <BsFillTelephoneFill   size={30}/>
            </span>
             <p className='text-gray-900'>    
             (480) 555-0103 <br />
(704) 555-0127
              </p>
           </div>
           <div className='flex items-center gap-2'>
           <span className='  p-6 border border-1 text-amber-700 rounded-full  border-gray-400  '>
              <GoMail   size={30}/>
            </span>
             <p className='text-gray-900 '>    
        
dolores.chambers@example.com <br />
nevaeh.simmons@example.com
              </p>
           </div>
          </div>
          

        </div>

       
      </div>

    </div>

    
  </div>
  
  
  {/* form */}

  <div className=' '>
  <div className=' py-6  flex flex-col items-center  px-6  gap-6 shadow-2xl'>
    <h2 className='text-3xl font-medium'>Say Something</h2>
    <form action='https://getform.io/f/6d53790d-0134-4d92-a54b-524977a236c8' method='POST' className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full  text-gray-900 border rounded p-[17px] mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="firstName" type="text" placeholder="Ali" />
      {/* <p className="text-red-900 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white p-[17px] focus:border-gray-900" id="grid-last-name" name="lastName" type="text" placeholder="Khan" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="email">
        E-mail
      </label>
      <input placeholder="eg:123@gmail.com"  className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded  p-[17px] mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-900" id="email" name="email" type="email" />
      {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" htmlFor="message">
        Message
      </label>
      <textarea className="no-resize appearance-none block w-full  text-gray-900 border border-gray-200 rounded p-[17px] mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900 h-48 resize-none" id="message" name="message"></textarea>
      {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
    </div>
  </div>
  <div className="flex justify-center w-full items-center"> 
  
      <button className="shadow bg-black hover:bg-amber-600 hover:transition-colors duration-300 focus:shadow-outline focus:outline-none text-white font-bold  p-4 rounded-full" type="submit">
          SEND MESSAGE
      </button>
    
  
  </div>
</form>
            </div>
  </div>

  
  

</div>


    <div className=' w-full'>
  <iframe
  className=' block'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.2581593073037!2d74.34753028256578!3d35.91618054617395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64993f0e6c903%3A0x8e22fcf3964d5fbf!2sTech%20ALPHALOGIX%20Pvt.%20Ltd.!5e0!3m2!1sen!2s!4v1692355934720!5m2!1sen!2s"
  width="100%" 
  height="450"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

  </div>


    </div>


  )
}

export default Contact