import React from 'react'

   
   const ShopCategory = ({catitem,handler}) => {
  return (
    <div>
        <div className=' flex flex-col gap-4'>
    <h2 className=' text-xl md:text-2xl'>Categories</h2>
    <div className='flex flex-col gap-4 text-gray-600'>
    {catitem.map((item, ind) => (
            <div key={ind} className='capitalize  hover:text-amber-600'>
              <button onClick={()=> handler(item.title) }>{item.title}</button>
            </div>
          ))}
    </div>

   </div>
    </div>
  )
}

export default ShopCategory