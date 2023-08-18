import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { LuMessagesSquare } from "react-icons/lu";

const FixIcons = () => {
  return (
    <div className='hidden lg:block'>
      <div className=' flex bg-white shadow-md text-gray-800 shadow-black  bottom-6 right-12  rounded-full z-20   fixed flex-col gap-4 text-xl  p-4 py-6 cursor-pointer  border-gray-300'>
        <LuMessagesSquare className='hover:text-amber-950 scale-105'/>
       <FiPhoneCall className='hover:text-amber-950 scale-105' />
       <TfiEmail className='hover:text-amber-950 scale-105' />
      </div>

    </div>
  )
}

export default FixIcons