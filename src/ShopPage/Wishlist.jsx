import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addCart } from '../components/Data/cartdata/cartSlice';
import { removeFromWish } from '../components/Data/ProductSlice';
import { BsXLg} from "react-icons/bs";

const Wishlist = () => {
  const { wishData } = useSelector((state) => state.card);
  const dispatch = useDispatch()
  return (
    <div>
          <div>
          <div>
     <div
  form data-aos="zoom-out" data-aos-duration="1200" 

      className="relative overflow-hidden h-[60vh] bg-center rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/4553125/pexels-photo-4553125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white mt-8">
        <h2 className="mb-4 text-2xl  md:text-3xl font-semibold">Whishlist</h2>
        <h4 className="mb-6 text-md font-semibold">
        
          <Link to="/shop">/shop</Link>
        </h4>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    <div className=' flex flex-col px-6 md:px-16 py-32 gap-4  justify-between'>
    <div className='grid-cols-4 hidden md:grid text-center  px-3 font-medium  text-gray-800 items-center border-b-[1px] pb-4  justify-between ' >
          
      
      <h2>Product</h2>
      <p>	Stock Status</p>
      <p>Price</p>
      <div>
      </div>
     </div>
     {wishData.length < 1 && (
      <div className='w-full  text-center border-b-[1px] py-8 text-xl text-gray-500'>
        <p>No products were added to the wishlist</p>
      </div>
     )}
     {wishData.length > 0 && (
      <div>
        {wishData.map((item,ind)=>{
       const{ id, img, title, price} = item
      return(
        <div className='md:grid  text-gray-600 font-normal text-center   md:grid-cols-4 py-8 px-4 md:py-12 items-center gap-[9vw] border-[1px] my-3  md:border-[0px]   md:border-b-[1px]  justify-between ' key={id}>
      <div className='flex  items-center gap-4'>
          <BsXLg className='  hidden md:block   cursor-pointer' onClick={()=>dispatch(removeFromWish(id))}size={15}/>
        <img src={img} className='h-[60px] w-[80px]' alt="" />
       <div className='flex  justify-between w-full md:hidden'>
       <div className='flex flex-col gap-1 text-left'>
          <h2 className=' text-gray-600 font-medium'>{title}</h2>
          <p className=' text-gray-700'><span className=' font-medium'>Stock Status:</span> In Stock</p>
          
        </div>
        <BsXLg className='   md:block   cursor-pointer' onClick={()=>dispatch(removeFromWish(id))}size={15}/>

       </div>
      <h2 className='  hidden md:block'>{title}</h2>
        <div className='flex justify-between'>

        </div>

      </div>
      <p className=' hidden md:block'>In Stock</p>
      <p className=' hidden md:block'>${price}</p>
      <div className=' mt-5 flex justify-end'>
      <button className=" bg-black text-sm text-white py-3  px-6 rounded-full hover:bg-amber-950 transition-all duration-300" onClick={()=>dispatch(addCart(item))}>ADD TO CART </button>
      </div>
     </div>

     
      )
     })}
      </div>
     )}
    </div>
    
    </div>
  )
}

export default Wishlist