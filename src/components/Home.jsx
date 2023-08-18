import React, { useState,useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { GiCupcake } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import HProducts from './homeComponents/HProducts';
import Cakedata from './Blog data/ProductData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ContactSec from './homeComponents/ContactSec';
import Hicons from './homeComponents/Hicons';
import Hgallery from './homeComponents/Hgallery';
import CatProductHome from './homeComponents/CatProductHome';
import HshopDiv from './homeComponents/HshopDiv';
import Histagram from './homeComponents/Histagram';
// import Test from './homeComponents/Test';
import HEmail from './homeComponents/HEmail';
import { useDispatch } from 'react-redux';




function Home() {

  // const isCartOpen = useSelector(state => state.CartProduct ); // Assuming you have a state to track if the cart is open
  const dispatch = useDispatch();

  
  // useEffect(() => {
  
  //     window.scrollTo(0, 0); // Scroll to the top of the page
    
  // }, []);

  const slides = [
    {
      id:1,
      url: 'https://img.freepik.com/free-photo/chocolate-brownie-served-with-vanilla-icecream-ball-strawberries_114579-2595.jpg?w=740&t=st=1689188246~exp=1689188846~hmac=9b747dce8fbd999e8a40b6b584b4e192f936b8e80aa96e9ebc07b9298f4e9629',
      title: 'bring the best experience',
      btn: 'ORDER NOW',
      icon: <GiCakeSlice  />,
    },
    {
      id:2,
      url: 'https://img.freepik.com/free-photo/beautiful-delicious-dessert-with-blueberries_23-2148718712.jpg?t=st=1689188166~exp=1689188766~hmac=dc8f181fe81678aa220cc379e8f0b64850c59ff08bf6d062cc3c7331d48efc2d',
      title: ' Taste that last forever'  ,
      
      btn: 'ORDER NOW',
      icon: <GiCupcake  /> ,
    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

  };

  const nextSlide = () => { 
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    AOS.refresh();
 
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Only animate elements once
    }
    );
    AOS.refresh();
  }, []);

  return (
    <div>
     
      <div 
      data-aos="zoom-out" data-aos-duration="2000"  
      className=" relative h-[90vh] py- w-full  group">
      <div
      key={[currentIndex].id}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full   bg-center bg-no-repeat bg-cover duration-500"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.5 )" }}>
          <div className=" inset-x-[15%]  py-12 text-center text-white md:block">
           <div className='flex gap-6 flex-col h-[80vh] top-0 items-center justify-center left-0 w-full'>

            <h2 data-aos="fade-up" data-aos-duration="1000"  className=" md:text-7xl text-5xl">{slides[currentIndex].icon}</h2>
          
           <h2 data-aos="fade-up" data-aos-duration="2500" className="   w-[80vw]  md:w-[40vw] text-[10vw] md:text-[6vw] capitalize">{slides[currentIndex].title}</h2>

           <Link to='/shop'><button data-aos="fade-up" data-aos-duration="1000"  className="shadow bg-orange-300 hover:bg-black hover:transition-colors hover:duration-300 focus:shadow-outline focus:outline-none p-3 text-white font-bold text-sm md:p-4 rounded-sm">{slides[currentIndex].btn}</button></Link>
           </div>
          </div>
      <div className="flex text-white justify-center bottom-0 right-[50%] left-[50%] absolute  py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            
            <RxDotFilled />
          </div>
        ))}
      </div>
        </div>
       
      </div>
      {/* Left Arrow */}
     
    </div>
    <HProducts />
    <ContactSec/>
    <Hicons/>
    <Hgallery/>
    <CatProductHome/>
    <HshopDiv/>

{/* <Test/> */}
    <Histagram/>
    <HEmail/>
    </div>

  );
}

export default Home;

























