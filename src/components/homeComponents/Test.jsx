import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsInstagram } from "react-icons/bs";
// import { faIconName } from '@fortawesome/free-solid-svg-icons'; // Replace with the desired Font Awesome icon

function Test() {
  const images = [
    'https://res.cloudinary.com/mister-shadrack/image/upload/v1618444282/samples/landscapes/nature-mountains.jpg',
    'https://res.cloudinary.com/mister-shadrack/image/upload/v1618444278/samples/landscapes/beach-boat.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="App">
      <h1 className="text-white text-2xl font-bold mb-4">Swiper Test</h1>
      <div className="swiper-container" style={{ margin: '0', padding: '0' }}>
        <Swiper
          spaceBetween={10} // Adjust the spacing between images as needed
          slidesPerView={4} // Display only one image at a time
          className="m-0 inline pb-8"
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index} className="res-slide">
              <div
                className="min-w-[300px] max-w-[400px] min-h-[300px] border-2 border-blue-500 rounded-lg bg-cover bg-center relative group"
                style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: '75%' }}
              >
                <div className="overlay opacity-0 group-hover:opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="icon-container opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
                  <BsInstagram icon={BsInstagram} className="text-white text-3xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Test;
