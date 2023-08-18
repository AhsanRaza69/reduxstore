import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from "react-icons/ai";


const Login = () => {
  return (
    <div>
        <div
  form data-aos="zoom-out" data-aos-duration="1200" 

      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NsYXRlJTIwY2thZSUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')", height: "450px" }}>
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white mt-8">
        <h2 className="mb-4 text-5xl ">My Account</h2>
        <h4 className="mb-6 text-md font-semibold">
            <Link to='/' >Home</Link>/shop
            
            
          </h4>
      </div>
    </div>
  </div>
        </div>

        <div className='   flex justify-center py-16 items-center'>
          <div  className=' w-full  px-4 md:w-[50%]'>
          <div className='flex border-b text-2xl md:text-[2vw] rounded-sm py-4 border-black justify-between'>
            <h2 >Login</h2>
            <span className='flex text-gray-500 gap-3 items-center'>
            <AiOutlineUserAdd/>
            <h2>Register</h2>
            </span>
          </div>

          <div>
          <form action="">
            <label htmlFor="email"  className='flex text-lg mt-4 gap-4 text-gray-500 flex-col'>
               Username or email address *
              <input 
              className='border p-4 w-full'
              
              type="text" name='email' placeholder='Username or email address *' />
            </label>
            <label htmlFor="email"  className='flex my-4 text-lg gap-4 text-gray-500 flex-col'>
               Password *
              <input 
              className='border p-4 w-full'
              
              type="text" name='email' placeholder='Password *' />
            </label>
                    

            <label for="checkbox" className='flex gap-3 items-center'> 
             <input type="checkbox"  className='h-[15px] w-[15px]' name='checkbox'/>
             Remember Me 
            </label>

              <button className='px-14  py-4 my-6 bg-black rounded-full text-white hover:bg-amber-900 hover:text-white transition-all duration-300 '>
                LOG IN 
              </button>

              <p className=' text-amber-950  text-lg hover:underline font-medium cursor-pointer'>
              Lost your password?
              </p>

          </form>


          </div>

          </div>
        </div>
    </div>
  )
}

export default Login