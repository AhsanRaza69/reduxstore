import React from 'react'
import Cakedata from '../Blog data/ProductData'
import { useState } from 'react';
import  Card  from './Card';

const HProducts = () => {
  const [isHovered, setIsHovered] = useState(false);
  const firstThreeProducts = Cakedata.slice(0, 3);
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='flex flex-col  text-center mt-12 justify-center py-12'>
        <div className='flex flex-col gap-4 my-4'>
            <h2 className=' text-4xl  font-medium   '>FOR A SWEET DAY</h2>
            <p className= ' px-14 md:px-0  sm:text-lg font-medium text-gray-600 md:text-xl'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. <br /> Voluptate exercitation incididunt
        </p>
        </div>
        <div className='sm:grid-cols-1  mt-8 justify-center item-center px-12  gap-16  grid md:grid-cols-3'>
           {
            firstThreeProducts.map((item)=>{
              const{ id, img, title, price} = item
            return(
              
              <Card
                key={id}
                id={id}
                handleMouseEnter ={handleMouseEnter}
                handleMouseLeave = {handleMouseLeave}
                img = {img}
                title ={title}
                price={price}
                isHovered={isHovered}
               item={item}
                />
               
            )
             
                
              }
            )
            

            
           }
           
            
            
        </div>


    </div>
  )
}

export default HProducts