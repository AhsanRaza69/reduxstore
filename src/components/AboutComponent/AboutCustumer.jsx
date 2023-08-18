import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const AboutCustumer = () => {
    const cusdata = [
        {
            name:"Krisna Barbie",
            sdes:"Frankfurt",
            img:"https://img.freepik.com/free-photo/cheerful-young-man-baker-standing-bakery-holding-bread_171337-16117.jpg?w=740&t=st=1690202586~exp=1690203186~hmac=1c7155e5dd5b1cb9fc06e66d2fb7501789d9b3535781626f49a47a7962fbe7b9 ",
            des:"It's amazing, the cakes here are so special that it's hard to describe, it's worth a try. I don't think I have ever eaten a better cake. I will be back again"
            
        },
        {
            name:"Krisna Barbie",
            sdes:"Frankfurt",
            img:"https://img.freepik.com/free-photo/cheerful-young-man-baker-standing-bakery-holding-bread_171337-16117.jpg?w=740&t=st=1690202586~exp=1690203186~hmac=1c7155e5dd5b1cb9fc06e66d2fb7501789d9b3535781626f49a47a7962fbe7b9 ",
            des:"It's amazing, the cakes here are so special that it's hard to describe, it's worth a try. I don't think I have ever eaten a better cake. I will be back again"
            
        },
        {
            name:"Krisna Barbie",
            sdes:"Frankfurt",
            img:"https://img.freepik.com/free-photo/cheerful-young-man-baker-standing-bakery-holding-bread_171337-16117.jpg?w=740&t=st=1690202586~exp=1690203186~hmac=1c7155e5dd5b1cb9fc06e66d2fb7501789d9b3535781626f49a47a7962fbe7b9 ",
            des:"It's amazing, the cakes here are so special that it's hard to describe, it's worth a try. I don't think I have ever eaten a better cake. I will be back again"
            
        },
        {
            name:"Krisna Barbie",
            sdes:"Frankfurt",
            img:"https://img.freepik.com/free-photo/cheerful-young-man-baker-standing-bakery-holding-bread_171337-16117.jpg?w=740&t=st=1690202586~exp=1690203186~hmac=1c7155e5dd5b1cb9fc06e66d2fb7501789d9b3535781626f49a47a7962fbe7b9 ",
            des:"It's amazing, the cakes here are so special that it's hard to describe, it's worth a try. I don't think I have ever eaten a better cake. I will be back again"
            
        },
    ]
  return (
    <div className='my-16 px-14  '>
    <h2 className='  text-3xl md:text-4xl text-center my-12'>CUSTOMER REVIEWS</h2>
    <div className='  overflow-x-auto  md:flex  gap-6 justify-center '>
    <Swiper
          spaceBetween={10} 
          slidesPerView={'auto'}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 3,
            },
          }}
        >
        

            {
                 cusdata.map((cur,ind)=>{
                    return(
                        <SwiperSlide key={ind} className="res-slide">
              <div className=' border  shadow-2xl items-center text-center py-12 px-6  max-w-[430px]   flex flex-col gap-8'>
                <BiSolidQuoteAltLeft className=' text-3xl text-amber-900'/>
                <p className=' text-gray-500 text-lg'>{cur.des} </p>
                <div className=' flex gap-2 items-center flex-col justify-center'>
                    <img src={cur.img} className=' h-14 w-16 rounded-full' alt="" />
                    <h2 className=' font-medium text-lg'>{cur.name}</h2>
                    <p className=' text-gray-500'>{cur.sdes}</p>
                </div>
              
                        
              </div>
            </SwiperSlide>
                    )
                 })   
            }



          
        </Swiper>




























    {/* {
        cheifs.map(({name,img,Rank},ind)=>{
            return(
                <div className='flex justify-center my-12 items-center flex-col gap-2'>
                    <img src={img} className=' rounded-full w-[300px] mb-4 h-[290px]' alt="" />
                    <h2 className=' text-2xl '>{name}</h2>
                    <p className='  text-sm font-medium text-amber-900'>{Rank}</p>
                    <div className=' text-gray-400 mt-4 mx-auto md:mx-0 flex gap-4 text-2xl '>
                            <span className='hover:text-amber-950'><BiLogoFacebook/></span>
                            <span className='hover:text-amber-950'><CiTwitter/></span>
                            <span className='hover:text-amber-950'><BiLogoPinterest/></span>
                            <span className='hover:text-amber-950'><BiLogoInstagram/></span>
                    
                     </div>
                </div>  
            )
        })
    } */}
    </div>
 </div>


  )
}

export default AboutCustumer