import React from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsInstagram } from "react-icons/bs";

const Histagram = () => {
  const imgslide = [
    { img:"https://images.pexels.com/photos/2764272/pexels-photo-2764272.jpeg?auto=compress&cs=tinysrgb&w=300",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/chocolate-cake-with-coffee-cup_1150-6492.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/muffins-with-illuminated-candle-birthday_23-2147917451.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/tasty-donuts-cup-coffee_144627-18346.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://images.pexels.com/photos/2764272/pexels-photo-2764272.jpeg?auto=compress&cs=tinysrgb&w=300",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/chocolate-cake-with-coffee-cup_1150-6492.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/muffins-with-illuminated-candle-birthday_23-2147917451.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/tasty-donuts-cup-coffee_144627-18346.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://images.pexels.com/photos/2764272/pexels-photo-2764272.jpeg?auto=compress&cs=tinysrgb&w=300",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/chocolate-cake-with-coffee-cup_1150-6492.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/muffins-with-illuminated-candle-birthday_23-2147917451.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://img.freepik.com/free-photo/tasty-donuts-cup-coffee_144627-18346.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=ais",link:"https://www.instagram.com/"},
    { img:"https://images.pexels.com/photos/2764272/pexels-photo-2764272.jpeg?auto=compress&cs=tinysrgb&w=300",link:"https://www.instagram.com/"},
  ]

  


  return (
    <div className='  lg:flex px-8  py-16   gap-4 justify-center  items-center '>
        <div className=' w-[50%]  ml-8  flex flex-col gap-4'>
            <h2 className=' text-3xl  lg:text-4xl font-medium   '>INSTAGRAM</h2>
            <span className='text-xl my-3 text-gray-600 '>@BakerFreshCakeshop</span>
        </div>
        <div>
        <div className=" mx-auto  max-w-[800px] overflow-hidden">
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
          {imgslide.map((item, index) => (
            <SwiperSlide key={index} className="res-slide">
              <div className=' overflow-hidden'>
              <div
                className="min-w-[150px] max-w-[300px] transition-all duration-300 hover:scale-110 min-h-[200px] rounded-lg bg-cover bg-center relative group"
                style={{ backgroundImage: `url(${item.img})`, backgroundSize: '75%' }}
              >
                <div className="overlay opacity-0 group-hover:opacity-50 absolute top-0 left-0 w-full h-full bg-black">
                  <div className="icon-container opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
                  
                  {/* <a target={'_blank'} href="https://www.instagram.com"> */}
                     <BsInstagram className='text-white  text-3xl' />
                   
             
                    {/* </a> */}
                </div>
                </div>
                
              </div>  
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>

      </div>
  )
}

export default Histagram