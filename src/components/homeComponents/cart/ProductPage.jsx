import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity,addCart} from '../../Data/cartdata/cartSlice';
import Cakedata from '../../Blog data/ProductData';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BiLogoFacebook,BiLogoInstagram,BiLogoPinterest,BiLogoVisa } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import { CiHeart} from "react-icons/ci";
import RatingStars from '../../Reviews/RatingStars';
// import { Card } from '@mui/material';
import Card from '../Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const ProductPage = () => {


  const { itemId } = useParams();
  // console.log(itemId,"id")

  const dispatch = useDispatch()


  // const { cardProducts } = useSelector((state) => state.card);

  const selectedItem = Cakedata.find((item) => item.id === Number(itemId)); 
  let q =selectedItem.quantity

  const [Quantity, setQuantity] = useState(q)
  
  const handleQuantityChange = (newQuantity) => {
    dispatch(({ id: selectedItem.id, quantity: newQuantity }));
  };
  
  const handleIncrease = () => {
    dispatch(increaseQuantity({ id: selectedItem.id }));
    setQuantity(Quantity+1)
  };
  
  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id: selectedItem.id })); 
    setQuantity(Quantity-1)
  };
  
  if (!selectedItem) {
    return <div>Item not found.</div>;
  }
  return (

    <div >
       <div>
     <div
  form data-aos="zoom-out" data-aos-duration="1200" 

      className="relative overflow-hidden h-[60vh] bg-center rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/4553125/pexels-photo-4553125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.3 )" }}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white mt-8">
        <h2 className="mb-4 text-2xl  md:text-3xl font-semibold">{selectedItem.title}</h2>
        <h4 className="mb-6 text-md font-semibold">
        
          <Link to="/shop">/shop</Link>
        </h4>
      </div>
    </div>
  </div>
</div>
    </div>


    <div className='  md:flex   items-center  w-full p-[7vw] gap-[5vw]'>
      <div  className='md:w-[100rem] md:h-[40vw] px-4  my-6 overflow-hidden md:py-6  border'>
        <img src={selectedItem.img} className=' hover:scale-110 transition-all duration-100 w-full h-full' alt="" />
      </div>
      <div className='flex px-6 flex-col   gap-6'>
        <p className=' text-2xl md:text-3xl '>${selectedItem.price}</p>
        <RatingStars star={selectedItem.stars} reviews={selectedItem.reviews}/>
        <p className='  text-gray-500  md:text-xl  '>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
        <div className='md:flex gap-3  items-center'>
        <div className='flex my-5 gap-3'>
        <div className='flex border py-2 px-4 justify-between gap-5  rounded-full items-center'>
      
      <button onClick={handleDecrease}>-</button>
      
      {/* <input
      className='w-14 outline-none px-3'
        type="number"
        value={selectedItem.quantity}
        onChange={(e) => handleQuantityChange(e.target.value)}
      /> */}
      {/* <p>{Quantity}</p> */}
      <button onClick={handleIncrease}>+</button>
    </div>
        <button className=" bg-black text-white py-4 px-8 rounded-full hover:bg-amber-950 transition-all duration-300" onClick={()=>dispatch(addCart(selectedItem))}>ADD TO CART </button>
       
       

        </div>
        <div className=' flex gap-4 cursor-pointer text-3xl'>
          <span><CiHeart/></span>
          <span><HiOutlineArrowLongRight/></span>
        </div>
        </div>
        <div className=' flex flex-col gap-1 text-gray-600 font-medium'>
          <span>SKU: REF. LA-1641</span>
          <span>Category: {selectedItem.category}</span>
          <span>Tag: Cake 8</span>
        </div>
        <div className=' mx-auto md:mx-0 flex text-gray-700 gap-4 text-2xl '>
              <span className='hover:text-amber-950 hover:border-amber-800 border-[1px]  p-1 rounded-full '><BiLogoFacebook/></span>
              <span className='hover:text-amber-950 hover:border-amber-800 border-[1px]  p-1 rounded-full '><CiTwitter/></span>
              <span className='hover:text-amber-950 hover:border-amber-800 border-[1px]    p-1 rounded-full'><BiLogoPinterest/></span>
              <span className='hover:text-amber-950 hover:border-amber-800 border-[1px]    p-1 rounded-full' hover:border-amber><BiLogoInstagram/></span>
            
        </div>
      </div>
    </div>
    <div className='px-4 py-14'>
      <h2 className=' text-xl my-6 md:text-4xl font-medium '>Related Product</h2>
      <div>
      <Swiper
          spaceBetween={5} 
          slidesPerView={'auto'}
          breakpoints={{
            375: {
              slidesPerView: 2,
              
            },
            950: {
              slidesPerView: 4,
              
            },     
          }} 
          loop={true}
          
        >
      
      {
            Cakedata.map((item,ind)=>{
              const{ id, img, title, price} = item
              // console.log(id,"Asd")
            return(

              <SwiperSlide key={ind} className="res-slide">
              
              <div>
              <Card
                key={id}
                id={id}
                img = {img}
                title ={title}
                price={price} 
               item={item}
                />
              </div>
              
            
            </SwiperSlide>
              
                           )
                       
              }
            )
            
        
           }



          
            
          
        </Swiper>

           

      </div>
    </div>
    </div>
  )
}

export default ProductPage
