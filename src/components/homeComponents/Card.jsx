import React, { createContext, useContext, useState } from 'react'
import { PiShoppingCartLight} from "react-icons/pi";
import { AiFillHeart} from "react-icons/ai";
import { TfiZoomIn} from "react-icons/tfi";
import { CiHeart} from "react-icons/ci";
import { TbArrowsExchange2} from "react-icons/tb";
import { Link} from 'react-router-dom';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../Data/cartdata/cartSlice';
import { wishlisthandler } from '../Data/ProductSlice';
import { addwish } from '../Data/ProductSlice';


import Cakedata from '../Blog data/ProductData';
import Navbar from '../Navbar';



const MyContext = createContext();

const Card = ({id , img , title, price,item}) => {
  

    const dispatch = useDispatch();
    const { wishlist } = useSelector((state) => state.card);

    const WishlistHanlder = () =>{
      dispatch(wishlisthandler(id)) 
      dispatch(addwish(item)) 
    }
  
 
  return (
    <div>
       
       <div 
key={id} 
className={`relative w-full overflow-hidden group   my-4 border   border-gray-200 product-container flex  mx-auto flex-col justify-evenly items-center gap-2 py-4 px-2 `}>
<div  className='   w-[80%] md:h-[20vw] md:w-[17vw]  flex justify-center'>
<img className='  h-full  w-full   ' src={img} alt="" />
</div>
<div className='flex flex-col text-center gap-3'>
<Link to={`/items/${id}`} onClick={() => window.scrollTo(0, 0)}>   <h2 className='text-xl  font-normal hover:text-amber-900 cursor-pointer '>{title}</h2> </Link>
    <p className=' text-xl'>${price}</p>
</div>
WishlistId

<Link to='/shop'>
<button className=' text-amber-600 hover:cursor-pointer   '><HiOutlineArrowLongRight size={30} />
 
  </button></Link>
 

 
<div  className={`absolute  left-0 w-full gap-3 translate-y-16 group-hover:translate-y-0  flex items-center justify-center opacity-0 transition-all    duration-700 group-hover:opacity-100
`}   >

<span className='bg-white text-black p-2 hover:cursor-pointer hover:bg-amber-600 hover:text-white rounded-sm '>
<Link to='/shop'><TfiZoomIn size={20}/></Link>
</span>
<span
onClick={()=> dispatch(addCart(item))}
 className='bg-white text-black p-2 hover:cursor-pointer hover:bg-amber-600 hover:text-white rounded-sm '>

<PiShoppingCartLight   size={20}/>

</span>
<span onClick={ WishlistHanlder} className='bg-white text-black p-2 hover:cursor-pointer hover:bg-amber-600 hover:text-white rounded-sm '>
{wishlist ? <AiFillHeart/>  : <CiHeart  size={20}/> }
{/* <Link to={`/wishs/${id}`} ><span></span> </Link>
<Link to={`/Whishlist/${id}`} >   <AiFillHeart/> </Link> */}
</span>
<span className='bg-white text-black hidden lg:block p-2 hover:cursor-pointer hover:bg-amber-600 hover:text-white rounded-sm '><TbArrowsExchange2 size={20}/></span>

</div>
 
 


</div>
      
    </div>
  )
}

// export const Wishdata = () => useContext(MyContext);

export default Card