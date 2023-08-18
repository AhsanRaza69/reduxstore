import React from 'react'
import { Link } from 'react-router-dom'

const ChechoutSuccess = () => {
  return (
    <div className='h-[500px] bg-gray-50 w-full   flex items-center justify-center '>
      <div className='flex my-14 flex-col  items-center gap-4  justify-center'>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM6J1SiVyLhKRlgI2o3xvIommY10joOSRQw&usqp=CAU" alt="" />
        </div>
       <Link to="/shop">
        <button className=' bg-amber-900 py-3 px-8 text-white'>Done</button>
       </Link>
      </div>
    </div>
  )
}

export default ChechoutSuccess