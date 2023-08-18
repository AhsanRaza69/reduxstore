import React from 'react'
import blogData from './Blog data/BlogData'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom'

const Blog = () => {


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

      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NsYXRlJTIwY2thZSUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')", height: "450px" }}>
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white mt-8">
        <h2 className="mb-4 text-5xl font-semibold">Blog Page</h2>
        <h4 className="mb-6 text-md font-semibold">
        
          
        </h4>
      </div>
    </div>
  </div>
</div>
    </div>


    <div className=' flex justify-center flex-col items-center'>
      {
          blogData.map(({id,title,date,link,img,des,},ind)=>{
            return(
             <div className='flex w-[80%] font-sans flex-col gap-8 justify-center items-center py-16 px-4'>
              <div className='  w-full overflow-hidden '>
                <img className=' w-full hover:scale-110 transition-all duration-300' src={img} alt="" />
              </div>
              <div className='flex  flex-col gap-3'>
                <div className='flex  font-medium  gap-3 '>
                  <h2 className=' text-amber-950 font-medium font-sans'>Bakery</h2>
                  <span>-</span>
                  <p className=' text-gray-600'> {date}</p>
                </div>
                <div className=' flex  flex-col gap-3'>
                  <h2 className=' text-2xl md:text-3xl'>{title}</h2>
                  <p className=' text-gray-600   text-lg'>{des}</p>
                </div>
                <div>
                  <Link>
                  <button className=' border-gray-700 py-2 px-6 hover:text-white hover:bg-amber-950 transition-colors duration-300 md:py-4 rounded-full mt-3 md:px-8  border '>
                    Read More
                  </button>
                  </Link>
                </div>
              </div>
             </div>
              )
          })
      }
    </div>
    </div>
  )
}

export default Blog