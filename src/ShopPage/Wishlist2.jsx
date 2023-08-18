import React, { useEffect } from 'react';
import { BsXLg } from 'react-icons/bs';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { wishlisthandler } from '../components/Data/ProductSlice';
import { useParams } from 'react-router-dom';
import Cakedata from '../components/Blog data/ProductData';

const Whishlist2 = ({ wishlist }) => {
  // const  { wishId }= useParams();
 
  // console.log(wishId, "Asdasd");
  const { whislistId } = useSelector((state) => state.card);

  const selectedItem = Cakedata.find((item) => item.id === Number(whislistId));
console.log(selectedItem);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={`font-normal flex h-screen w-full opacity-0 top-0 right-0 absolute bg-black to-gray-600 shadow-2xl z-20 justify-center items-center text-white ${
          wishlist ? 'opacity-90 transition-opacity px-8 z-0 duration-300' : ''
        }`}
      >
        <div className='bg-white opacity-100 relative overflow-auto h-[70vh] w-full px-4 md:w-[500px]'>
          <div
            className='border-red-900 p-1 border rounded-full right-0 bg-black absolute'
            onClick={() => dispatch(wishlisthandler())}
          >
            <BsXLg className='hover:rotate-12' size={30} />
          </div>

          <div className='text-black px-6 py-6'>
            <div className=' flex justify-center w-full'>
              <img className='w-[50%] h-[200px]' src={selectedItem.img } alt='' />
            </div>
            <h2 className='text-lg my-3'>
              <span className=' font-medium'>{selectedItem.title} </span>
              has been added to your wishlist.
            </h2>
            <div className='flex flex-col items-center'>
              <button
              onClick={() => dispatch(wishlisthandler())} className='bg-black font-semibold my-2 hover:bg-amber-700 transition-colors duration-300 text-white text-sm  h-[50px] w-[60%] '>
                
                <Link className='md:py-3 md:px-16 ' to='/wishlist'>View List Whislist</Link>
              </button>
              <button
                onClick={() => dispatch(wishlisthandler())}
                className='bg-black font-semibold my-2 hover:bg-amber-700 transition-colors duration-300 text-white text-sm  h-[50px] w-[60%] '
              >
                <Link to='/shop'>Continue Shopping</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whishlist2;
