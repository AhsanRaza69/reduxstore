import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { BsXLg} from "react-icons/bs";
import { removeFromCart,clearCart, addCart } from '../../Data/cartdata/cartSlice';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Paybutton from './Paybutton';


const CartDiv = ({setCart,Cart}) => { 
  let total = 0

  const [Showitem, setShowitem] = useState(false)

  
  const { CartProduct } = useSelector((state) => state.cart);
  
  const dispatch  = useDispatch()
   

  useEffect(() => {
    
    
    AOS.refresh();
  }, []);

  let ItemData = []

  return (
    <div>
        
        <div data-aos="fade-left " data-aos-duration="300"  className={` w-[320px]  font-normal   md:w-[400px]  opacity-0  top-0  right-0   absolute h-screen bg-white to-gray-600 shadow-2xl  z-20   text-black ${ Cart ? ' opacity-100 transition-opacity  duration-300 ': '' } `}>
            <div className='sm:p-[30px] p-[40px]' >
                <div className='flex  justify-between w-full'>
                    <h2 className=' text-xl mb-4 mt-12'>My Cart</h2>
                   
                   <div onClick={()=> setCart(!Cart)}>

                    <BsXLg size={25}  /> 
                   </div>

                    
                </div>

                   {CartProduct.length < 1 &&(
                    <h2 className=' text-lg font-sans text-gray-700'>No products in the cart.</h2>
                   )}

                {CartProduct.length > 0 && (<div>
                <div className='max-h-[55vh] pr-4 border-black  overflow-auto'>
                  {
                      CartProduct.map((item,ind)=>{
                        const { id, img, title, price,quantity} = item
                         ItemData.push(item)
                        {total += item.price * item.quantity}
                      return(
                    
                        
                        <div key={ind}
                        
                        className='flex font-sans my-5   justify-between   w-full  '>
                          
                          <div className='flex gap-4'>
                            <img className=' max-w-[70px] max-h-[70px]' src={img} alt="" />
                             <div className=' items-start text-gray-900   '>
                            <h2 className='text-[19px]'>{title} </h2>
                            <p className=' mt-1 text-sm'>{quantity} X ${price} </p>
                          </div>
                          </div>
                        
                          <BsXLg
                          onClick={()=>dispatch(removeFromCart(id))}
                           size={15}/>
                        </div>
                        
                      )
                      }
                      )
                  }
                </div>
                <div className=' text-[20px] font-sans'>
                    <h2 className=' font-sans  text-lg font-semibold'>Subtotal ${total.toFixed(2)}</h2>
                    
                    <div>
                      <button className='bg-black font-semibold my-2 hover:bg-amber-700 transition-colors duration-300 text-white  px-12 py-4 w-full'
                      onClick={()=> dispatch(clearCart())}
                      >Clear Cart</button>
                      <Paybutton item={ItemData} />
                   
                    </div>
                </div>
                </div>)}

            </div>




    </div>
    </div>
  )
}

export default CartDiv