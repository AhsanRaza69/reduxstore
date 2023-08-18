// import { Rating } from '@mui/material';
import React from 'react'
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";



const RatingStars = ({star,reviews}) => {
  const RatingStars =   Array.from({length:5},(elem,ind)=>{

 
  let number  =  ind + 0.5
  return (
 
        <span key={ind} className=' text-yellow-400'>
        {
            star >= ind + 1  ? (<BsStarFill/>) : star >= number ? (<BsStarHalf/>) : <BsStar/> 
        }
        </span>
    
    
  )
})

return(
    <div className='flex  items-center '>
     {RatingStars}
     <p className='ml-4'>({reviews } Customer reviews)</p>
    </div>
)
}

export default RatingStars