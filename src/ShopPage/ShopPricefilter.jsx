import React from 'react'
import { filterPrice } from '../components/Data/ProductSlice'
import { useDispatch } from 'react-redux'

const ShopPricefilter = ({rangeValues,handleRangeChange}) => {
  const dispatch = useDispatch()
  return (
    <div><div>
    <h2 className=' text-2xl'>Price Filter</h2>

    <div >
      
     <div>
     <input
       className='appearance-none h-2 w-full bg-amber-700  rounded slider outline-none' 
        type="range"
        name="max"  
        value={rangeValues.max}
        min={0}
        max={10}
        onChange={handleRangeChange}
      />
     </div>
       
    </div>
       <div className='flex  justify-between mt-3'>
        <button
         onClick={()=> dispatch(filterPrice(rangeValues.max))} 
         className=" border  border-gray-800 py-2 transition-colors duration-500 rounded-sm hover:bg-amber-900 hover:text-white px-8">FILTER</button>
       <p>Price - ${rangeValues.min} - {rangeValues.max} </p>
       </div>





  </div></div>
  )
}

export default ShopPricefilter
