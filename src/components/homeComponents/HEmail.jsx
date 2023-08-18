import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HEmail = () => {
  // const [shouldAnimate, setShouldAnimate] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const triggerPosition = 200; // Adjust this value as needed

  //     if (scrollY >= triggerPosition) {
  //       setShouldAnimate(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (shouldAnimate) {
  //     AOS.init();
  //   }
  // }, [shouldAnimate]);

  return (
    <div
    // data-aos="fade-left"
    // data-aos-duration="3000"
      
      className="h-[350px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/cookies-chocolate-truffle-dusted-with-cocoa-powder_23-2147890276.jpg?w=740&t=st=1689854024~exp=1689854624~hmac=028326f93a6ecb2b276d7c7872d39f3b61699bf450a82821013e240742fbe2ba")`,
      }}
    >
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5 )" }}
        className="flex h-full flex-col justify-center items-center lg:gap-12"
      >
        <h2 className="text-lg md:text-4xl">
          STAY IN TOUCH & GET 10% OFF
        </h2>
        <form
          action=""
          className="w-[90vw] my-6 md:w-[60vw] lg:w-[50vw]"
        >
          <div className="flex justify-between w-[100%] text-black py-5 px-8 bg-white">
            <label htmlFor="email" className="w-[80%]">
              <input
                className="font-sans w-full md:text-xl outline-none"
                type="text"
                name="email"
                placeholder="Your email address"
              />
            </label>
            <button
              type="submit"
              onClick={() => console.log("submitted")}
              className="md:text-xl hover:text-amber-900"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HEmail;


