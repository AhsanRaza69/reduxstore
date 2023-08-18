import React from 'react'
import { Link } from 'react-router-dom'

const Hgallery = () => {
    const galery = [
        {
            id:1,
            titel :"Cupcake",
            img:'"https://img.freepik.com/free-photo/chocolate-brownie-served-with-vanilla-icecream-ball-strawberries_114579-2595.jpg?w=740&t=st=1689188246~exp=1689188846~hmac=9b747dce8fbd999e8a40b6b584b4e192f936b8e80aa96e9ebc07b9298f4e9629"'
        },
        {
            id:2,
            titel :"Pastry",
            img:'"https://img.freepik.com/free-photo/high-angle-honey-covered-stacked-waffles-plate-with-copy-space_23-2148422691.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph"'
        },
        {
            id:3,
            titel :"Muffin",
            img:'"https://img.freepik.com/free-photo/c-shloseupot-delicious-cupcakes-with-cream-cherries-top_181624-25997.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph"'
        },
        {
            id:4,
            titel :"Waffle",
            img:'"https://img.freepik.com/free-photo/vintage-breakfast-concept-with-copy-space_23-2148297443.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph"'
        },
    ]
  return (
    <div className='grid sm:grid-cols-1 font-sans h-[80vh ] md:grid-cols-2'>
       {
        galery.map(({id,titel,img})=>{
            return(
                <div key={id} className=' hover:translate-y-3 hover:transition-transform duration-500 hover:scale-100  h-[350px]  bg-cover bg-center   text-white' style={{ backgroundImage: `url(${img})` }}>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }} className='flex h-[100%] justify-between pl-12 p-4 '>
                <div className='flex flex-col justify-center pt-4  '>
                    <h2 className='text-xl md:text-4xl my-4'> {titel}</h2>
                    <Link to="/shop">
                     <span  className=' inline border-b pb-2 border-white'>Shop Now</span>
                    </Link>
     
                 </div>
     
                 <div>
                     <h2 className='text-2xl'>0{id}.</h2>
                 </div>
                </div>
     
                 
             </div>
            )
        })
       }
    </div>
  )
}

export default Hgallery