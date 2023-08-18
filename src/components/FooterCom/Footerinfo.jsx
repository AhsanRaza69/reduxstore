import React from 'react'
import { Link } from 'react-router-dom'

const Footerinfo = () => {
    const link =[
        {
            name:"About Us",
            link:"/about"
        },
        {
            name:"Contact Us",
            link:"/contact"
        },
        {
            name:"Latest Post",
            link:"/blog"
        },
            {
                name:"Selling Tips",
                link:"/shop"
            },
    ]
  return (
    <div className=' my-8'>
        <div className=' font-sans'>
            <h2 className=' text-xl my-4'>INFORMATION</h2>
      {   link.map((item,ind)=>{
        return(
            <ul key={ind}>
            <li className=' hover:text-white font-extralight my-3 text-md text-gray-300'>
                <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    {item.name}
                </Link>
            </li>
         </ul>
        )
      }
            
         )}
        </div>
    </div>
  )
}

export default Footerinfo
  
  
  
  
  
  
  
  
  
  
  
  
  
  