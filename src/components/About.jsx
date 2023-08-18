import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { CiPlay1 } from "react-icons/ci";
import AboutCheif from './AboutComponent/AboutCheif';
import AboutCustumer from './AboutComponent/AboutCustumer';
import AOS from 'aos';
import 'aos/dist/aos.css';  
  

const About = () => {
  useEffect(() => {
    AOS.init(
    );
    AOS.refresh();
  }, []);
  return (
    <div>
      <div>
     <div
     form data-aos="zoom-out" data-aos-duration="1200" 
     className="relative h-[60vh] overflow-hidden md:h-[70vh] rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NsYXRlJTIwY2thZSUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')" }}>
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white mt-8">
        <h2 className="mb-4 text-5xl font-semibold">About page</h2>
        <p className=' text-md'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. <br/> Voluptate exercitation incididunt</p>
        <p></p>
        <h4 className="mb-6 text-md font-semibold">
        
          
        </h4>
      </div>
    </div>
  </div>
</div>


<div className='grid grid-cols-1 md:grid-cols-2 px-11 py-16 my-16'>
<div className=' pl-16 pr-12 font-sans'>
  <p className='  text-amber-800 '>We Are Bakerfresh</p>
  <h2 className=' my-4 text-4xl'>WE LOVE CAKE</h2>
  <p className=' flex flex-col text-gray-600  font-medium my-8 gap-6'>
    <span>Nullam dictum, justo eu blandit lacinia, diam libero porta sem, sit amet molestie tellus lacus non orci. Nullam orci urna, egestas at dui vel, sagittis semper est.</span>
    <span>Vestibulum eu tristique tellus. Praesent at varius nisi, ut dignissim lectus. Praesent venenatis ipsum in arcu ullamcorper tristique. Aliquam et gravida magna, ut tincidunt massa.</span>
  </p>

  <div>
    <img src="https://www.pinclipart.com/picdir/big/176-1766449_background-image-hamza-signature-clipart.png"  className='w-[300px]  h-auto' alt="" />
  </div>
</div>

<div>
  <div className='border h-[300px] my-16 px-6 relative border-amber-900 md:h-full pb-12'>
    <img src="https://img.freepik.com/free-photo/chef-kneading-dough-with-flour_23-2148742196.jpg?w=740&t=st=1690195942~exp=1690196542~hmac=3d3ca721863d738ed04f3972cc941172ec632075ca48d48951d50c92655656ec" alt="" className=' md:h-full  border-r-none w-full top-[-20px]  left-[-20px] absolute' />
  </div>
</div>


<div>




</div>
</div>

<div>
<div className=" border bg-cover h-[500px]"
style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NsYXRlJTIwY2thZSUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')" }}
>

  <div
  style={{ backgroundColor: "r  gba(0, 0, 0, 0.6 )" }}
  className=' flex justify-center  items-center   h-full w-full'
  >


<div
    className='flex justify-center w-[300px] h-[200px] bg-cover  text-white  items-center '
    style={{ backgroundImage: "url('https://o.remove.bg/downloads/12d39117-8026-4730-b35f-32040c40e04f/circular-text-3674-removebg-preview.png')" }}
    >
      <Link to="/">
      <CiPlay1 size={30} className=' mt-6 hover:cursor-pointer bg-none'/>
      </Link>
      

    </div>

  
  </div>
</div>
</div>


<div className='grid grid-cols-1 md:grid-cols-2 px-11 py-12 my-12'>


<div>
  <div className='border h-[300px] my-16 px-6   relative border-amber-900 md:h-[500px] pb-12'>
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1e/de/f1/over-under-coffee-west.jpg" alt="" className=' h-full border-r-none w-full top-[-20px]  right-[-20px] absolute' />
  </div>
</div>



<div className=' flex flex-col justify-center pl-16 pr-12 font-sans'>
  <p className='  text-amber-800 '>Bakerfresh Time</p>
  <h2 className=' my-4 text-4xl'>WE ARE OPEN</h2>
  <p className=' flex flex-col text-gray-600  font-medium my-8 gap-6'>
    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
  </p>

  <div>
    <h2 className='flex  text-gray-600 font-medium justify-between border-b text-xl border-black pb-4'>
      <span>Mon-Fri</span>
      <span>9:00am - 9:00pm</span>
    </h2>
    <h2 className='flex my-8  text-gray-600 font-medium justify-between border-b text-xl border-black pb-4'>
      <span>Sat-Sun</span>
      <span>10:00am - 10:00pm</span>
    </h2>
  </div>
</div>


<div>




</div>
</div>


<div>
  <AboutCheif/>
</div>


<div>
  <AboutCustumer/>
</div>


    </div>
    </div>
  )
}

export default About