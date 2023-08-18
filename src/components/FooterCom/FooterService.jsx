import React from 'react'
import { Link } from 'react-router-dom'

const FooterService = () => {
    const link =[
        {
            name:"Delivery",
            link:"/shop"
        },
        {
            name:"Payment",
            link:"/shop"
        },
        {
            name:"Return",
            link:"/shop"
        },
            {
                name:"Privacy",
                link:"/shop"
            },
    ]
  return (
    <div className=' my-8'>
        <div className=' font-sans'>
            <h2 className=' text-xl my-4'>SERVICES</h2>
      {   link.map((item,ind)=>{
        return(
            <ul key={ind} >
            <li className=' hover:text-white font-extralight my-3 text-md text-gray-300'>
                <Link to={item.link}>
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

export default FooterService




FooterService