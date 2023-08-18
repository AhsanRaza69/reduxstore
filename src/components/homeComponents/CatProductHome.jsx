import React ,{useEffect}from 'react';
import Cakedata from '../Blog data/ProductData';
import Card from './Card';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardCategory,addCard,CardselectedCategory } from '../Data/ProductSlice';
import { addCart } from '../Data/cartdata/cartSlice';
// import { addCart } from '../Data/cartdata/cartSlice';
// import { addCart } from '../Data/cartdata/cartSlice';

const CatProductHome = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { cardProducts } = useSelector((state) => state.card);

  const Firsteightele = cardProducts.slice(0,8)
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handler = (title) => {
    dispatch(CardselectedCategory(title))
    dispatch(setCardCategory(title))
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const catitem = [
    {
      title: 'All',
    },
    {
      title: 'Cupcake',
    },
    {
      title: 'Pastry',
    },
    {
      title: 'Muffin',
    },
    {
      title: 'Waffle',
    },
    {
      title: 'Tart',
    },
  ];
  useEffect(()=>{
    
    dispatch(addCard(Cakedata))
    // dispatch(addCart(Cakedata))
    // dispatch(addCart(Cakedata))
    dispatch(setCardCategory())
  },[])
  return (
    <div>
      <div className='flex justify-center my-16'>
        <div className='flex flex-col text-center gap-4 my-4'>
          <h2 className='text-4xl font-medium'>OUR PRODUCTS</h2>
          <p className='sm:text-lg text-gray-600 md:text-xl'>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. <br /> Voluptate exercitation incididunt
          </p>
        </div>
      </div> 

      <div>
        <div className=' text-center md:flex md:gap-8 text-xl font-sans w-full text-gray-600 justify-center'>
          {catitem.map((item, ind) => (
            <div key={ind} className=' my-4 md:my-0 capitalize hover:text-amber-600 pr-6 border-r'>
              <button onClick={()=>handler(item.title) }>{item.title}</button>
            </div>
          ))}
        </div>
        <div className='sm:g grid md:grid-cols-3 lg:grid-cols-4 gap-4  text-center my-12'>
          {Firsteightele.map((item,ind) => { 
            const { id, img, title, price,} = item
            
            return(
            <div key={ind}>
              <Card
             
             id={id}
             handleMouseEnter={handleMouseEnter}
             handleMouseLeave={handleMouseLeave}
             img={img}
             title={title}
             price={price}
             isHovered={isHovered}
             item={item}

             

           />
            </div>
          )}
          )}
        </div>
      </div>
    </div>
  );
};

export default CatProductHome;
