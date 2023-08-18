import React, { useEffect, useState } from 'react';
import { BsXLg, BsSearch } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import { SearchFilter } from '../components/Data/ProductSlice';

const SearchBox = ({ setSearch, Search }) => {

  const [Inputdata, setInputdata] = useState("")
  


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const dispatch = useDispatch();

  const handleSearch = (event) => {
     setInputdata(event.target.value);
    //  setInputdata("")
  }

  const SubInput = () => {  
   dispatch(SearchFilter(Inputdata));
   setInputdata("")
   setSearch(!Search)

  //  
    
  };

  
  return (
    <div>
      <div
        className={`font-normal h-screen w-full opacity-0 top-0 right-0 absolute bg-black to-gray-600 shadow-2xl z-20 justify-center items-center text-white ${
          Search ? 'opacity-80 transition-opacity duration-300' : ''
        }`}
      >
        <div className='w-full justify-end flex p-10' onClick={() => setSearch(!Search)}>
          <BsXLg className='hover:rotate-12' size={30} />
        </div>

        <div className='flex items-center h-[60vh] justify-center'>
          <form data-aos='fade-down' data-aos-duration='500' action=''>
            <div className='flex text-2xl border-b'>
              <input
                type='text'
                name='search'
                value={Inputdata}
                placeholder='Search Here'
                className='px-4 bg-transparent focus:bg-none capitalize text-white outline-none'
                onChange={handleSearch}
              />
              <BsSearch  onClick={()=> SubInput()} /> {/* Remove the 'type' attribute */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
