import React from 'react'
import { FiSmartphone } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const HshopDiv = () => {

  const links = [
    {name:"Contact us", link :"/contact",icon:<FiSmartphone size={25}/>},
    {name:"Shopping Online", link :"/shop",icon:<BiShoppingBag size={25}/>},
    {name:"Store Location", link :"/contact",icon:<TiLocationOutline size={25} />, style: 'border-none' },
    
  ]
  return (
    <div className=" text-white relative h-[400px] overflow-hidden bg-cover bg-no-repeat  text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NsYXRlJTIwY2thZSUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')", height: "450px" }}>
  <div className=" pt-8 flex flex-col  h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.6 )" }}>
    <div className=' h-[90%] flex flex-col gap-5   font-medium justify-center'>
      <h3  className=' text-amber-700  text-xl   '>Bakerfresh</h3>
      <h2 className='  text-3xl md:text-5xl'>
      THE MOST AMAZING CAKES
      </h2>
      <p className=' px-8 md:px-0 font-sans font-normal'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis  <br />deserunt mollit dolore cillum minim tempor enim</p>
      <div><button className=' border mt-2 font-sans border-white py-3 px-8  hover:bg-amber-900  hover:border-none transition-colors duration-300'>SHOP NOW</button></div>
    </div>
    <div
    style={{ backgroundColor: "rgba(0, 0, 0, 0.6 )" }}
    className=' mt-8 py-5  flex-wrap flex justify-evenly'>
    {
      links.map((item,ind)=>{
        return(
        
          <div 
          className=' my-2  border-r'
          key={ind}
          >
            <Link to={item.link}><h2 className={`flex  items-center my-2 gap-4 pr-16 text-xl  ${item.style}`}> <span className=' text-amber-900'>{item.icon}</span> {item.name} </h2></Link>
          </div>
        
        )
      }
        
         

      )
    }
</div> 
  </div>

</div>
  )
}

export default HshopDiv