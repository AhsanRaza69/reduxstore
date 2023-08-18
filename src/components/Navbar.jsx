import React from 'react'
import { BiSearch,BiCartAlt,BiSolidUser } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { FaBars ,FaTimes} from "react-icons/fa";
import{createContext, useState, useEffect } from 'react';
import CartDiv from './homeComponents/cart/CartDiv';
import SearchBox from './SearchBox';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whishlist2 from '../ShopPage/Wishlist2';




const Navbar = () => {
 
  const { CartProduct } = useSelector((state) => state.cart);
  const [Nav, setNav] = useState(false)
  const [Cart, setCart] = useState(false)
  const [Search, setSearch] = useState(false)
  const { wishlist } = useSelector((state) => state.card);

  const [scrollBackground, setScrollBackground] = useState(false);
  
  useEffect(() => {
    AOS.init(
    );
    AOS.refresh();
  }, []);
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          setScrollBackground(true);
        } else {
          setScrollBackground(false);
        }
      };
       

      window.addEventListener('scroll', handleScroll) ;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const pages = [
        {
            id :1,
            name : "Home",
            link:"/"

        },
        {
            id :2,
            name : "Shop",
            link:"/shop"

        },
        {
            id :3,
            name : "About",
            link:"/about"

        },
        {
            id :4,
            name : "Contact",
            link:"/contact"

        },
        {
            id :5,
            name : "Blog",
            link:"/blog"

        },
    ]

  return (  
    <div className='fixed w-full  z-20'>
        <div className={ `px-8  min-h-[100px]  items-center flex justify-between lg:px-16 py-8  ${
        scrollBackground ? 'bg-white text-gray-600' : ' bg-tansparent text-white  '
      } transition-all duration-300 `    }>
        <div>
           <Link to='/'>
            <img className='w-[160px] lg:w-full ' 
            src={`${
              scrollBackground ? `data:image/webp;base64,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` : `data:image/webp;base64,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`
            }`}

            alt="" />
           </Link>
        </div>

    
        <ul className=' gap-[4vw] md:flex hidden font-sans  '>
            {
                pages.map((cur,ind)=>{
                    return(
                        <li className=' text-sm  md:text-lg  font-medium  hover:transition-colors duration-500     hover:text-amber-700 hover:border-b hover:border-b-amber-700 ' key={ind} >

                           <Link to={cur.link} onClick={() => window.scrollTo(0, 0)}>
                           {cur.name}
                           </Link>
                            </li>
                    )
                })
            }
        </ul>
  

    <div className='flex gap-3 text-xl md:text-2xl cursor-pointer '>
        <BiSearch onClick={()=> setSearch(!Search)}   className='hover:text-amber-700 hover:transition-colors duration-200 ' />
        
        <div className='flex  '>
        <BiCartAlt onClick={()=> setCart(!Cart)}  className={`hover:text-amber-700 `}/>

        {CartProduct.length>0&&(<sup  className='  text-white bg-red-600 text-sm px-[8px]  rounded-full'>{CartProduct.length}</sup>)}
        </div>
       
        <Link to={"/login"}><BiSolidUser  className='hover:text-amber-700'  /></Link>
        <div onClick={()=> setNav(!Nav)} className='  cursor-pointer pr-4 z-10 md:hidden'>
       {
        Nav ?  <FaTimes className=' text-white' /> :  <FaBars   />
       }
      </div>

      {
        Nav && (
             <ul  className='w-[60%] flex items-center font-medium  flex-col pl-4 pt-16 top-0 ease-linear transition-transform duration-300  right-0 rounded-bl-full absolute h-[500px] bg-gradient-to-b from-amber-700  to-amber-900 md:w-[50%]  text-white'>


      {pages.map(({ id, link ,name }) => (
          <li
            key={id}
            className=' font-sans px-4 text-[10VW] cursor-pointer font-semibold capitalize py-6 ' 
          >
            <Link onClick={()=> setNav(!Nav)} to={link} smooth duration={500}>{name}</Link>
          </li>
        ))}

      </ul>
        )
      }

      {
        Cart && (
          <CartDiv
          setCart={setCart}
          Cart ={Cart}
          />
        )
      }
      {
        Search && (
          <SearchBox
          setSearch={setSearch}
          Search ={Search}
          />
        )
      }

{wishlist&&(
  <Whishlist2 wishlist={wishlist} />
 )}
      
   
     
    </div>


    </div>
    </div>
    
  )
}



export default Navbar