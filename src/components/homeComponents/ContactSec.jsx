import React from 'react'
import { BsArrowRight} from "react-icons/bs";

const ContactSec = () => {


  return (
   <div className=' bg-cover  bg-center '  style={{ backgroundImage: `url("https://img.freepik.com/free-photo/chocolate-brownie-served-with-vanilla-icecream-ball-strawberries_114579-2595.jpg?w=740&t=st=1689188246~exp=1689188846~hmac=9b747dce8fbd999e8a40b6b584b4e192f936b8e80aa96e9ebc07b9298f4e9629)` }}>
     <div className="w-full h-full flex flex-col  items-center justify-center overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
       <div className='flex flex-col md:flex-row w-full py-4 md:px-16    gap-16 md:gap-24  justify-center  items-center  '>
      <div className=' mt-4 bg-amber-900 gap-8 p-16 flex flex-col text-white'>
        <h1 className='text-3xl lg:text-4xl'>
        COME WITH US
        </h1>
       <ul className=' sm:text-md flex lg:text-lg flex-col
        gap-8 list-disc'>
        <li>
         Aliquam pulvinar vestibulum blandit. Donec sed nisl <br /> libero. Fusce dignissim luctus sem eu dapibus.
        </li>
        <li>
        Pellentesque vulputate quam a quam volutpat, sed <br /> ullamcorper erat commodo. Vestibulum sit amet ipsum <br /> vitae mauris mattis vulputate lacinia nec neque.

        </li>
       </ul>
      </div>
      <div>
        <div className='border inline-block text-white border-white p-12 rounded-full'>

      <BsArrowRight size={40}/>
        </div>
      </div>
    </div>
    </div>
   </div>
   
  )
}

export default ContactSec