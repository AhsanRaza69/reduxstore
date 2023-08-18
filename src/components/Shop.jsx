
  import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cakedata from './Blog data/ProductData.js'
import Card from './homeComponents/Card.jsx';
// import Card from './homeComponents/Card.jsx';
import { BsArrowRight} from "react-icons/bs";

import { BsSearch} from "react-icons/bs";
import { setCardCategory,addCard,CardselectedCategory } from './Data/ProductSlice.js';
import { BsInstagram,BsArrowUp,BsArrowDown } from "react-icons/bs";
import { BiSolidChevronDown } from "react-icons/bi";
import { useDispatch,useSelector } from 'react-redux';

import ShopCategory from '../ShopPage/ShopCategory.jsx';
import ShopPricefilter from '../ShopPage/ShopPricefilter.jsx';
import { SearchFilter ,HighPriceStort} from './Data/ProductSlice.js';
import AOS from 'aos';
import 'aos/dist/aos.css';  




const Shop = () => {
  const [rangeValues, setRangeValues] = useState({  max: 10 });
  const [Inputdata, setInputdata] = useState("")
  const [Currentpage, setCurrentpage] = useState(1) 
    

  const recordPerPages = 9 
  const lastIndex = Currentpage * recordPerPages   
  const firstIndex = lastIndex - recordPerPages

  
  
  const handleRangeChange = (e) => {
    setRangeValues({ ...rangeValues, [e.target.name]: parseInt(e.target.value) });
  };  
  
  const { cardProducts } = useSelector((state) => state.card);
  
  // const cardProducts = ProdData
  let  ProdData = cardProducts.slice(firstIndex,lastIndex)

  const newPages = Math.ceil(Cakedata.length/recordPerPages )

  const numbers =  [...Array(newPages +1 ).keys()].slice(1 )

  const handleSearch = (event) => {
    setInputdata(event.target.value);
   //  setInputdata("")
 }


  const dispatch = useDispatch()

  const changepage = (id)=>{
    setCurrentpage(id)
  }

  const handler = (title) => {
    dispatch(CardselectedCategory(title))
    dispatch(setCardCategory(title))
  };

  const NextPage = () =>{
    if(Currentpage !== newPages){
      setCurrentpage(Currentpage+  1)
    }
  }

  const SubInput = () => {
   if(Inputdata){
    dispatch(SearchFilter(Inputdata));
    setInputdata("")
   }else{
    alert("Search bar empty")
   }
  
 
   //  
     
   };

  //  console.log(cardProducts.length);


  useEffect(() => {
    AOS.init(
    );
    AOS.refresh();
  }, []);


  
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
    },    {
      title: 'Tart',
    },
  ];


  const popdata =[
    {
      title:"BROWNIE",
      img:"https://img.freepik.com/free-photo/cupcakes_74190-18.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph",
      price:4.99
    },
    {
      title:"BROWNIE",
      img:"https://img.freepik.com/free-photo/cupcakes_74190-18.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph",
      price:4.99
    },
    {
      title:"BROWNIE",
      img:"https://img.freepik.com/free-photo/cupcakes_74190-18.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph",
      price:4.99
    },
  ]

 

  const insta =[
    {img:"https://img.freepik.com/free-photo/vintage-breakfast-concept-with-copy-space_23-2148297443.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph"},
    {img:"https://img.freepik.com/free-photo/c-shloseupot-delicious-cupcakes-with-cream-cherries-top_181624-25997.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph"},
    {img:"https://img.freepik.com/free-photo/high-angle-honey-covered-stacked-waffles-plate-with-copy-space_23-2148422691.jpg?size=626&ext=jpg&ga=GA1.1.927166932.1687884501&semt=sph"},
    {img:"https://img.freepik.com/free-photo/chocolate-brownie-served-with-vanilla-icecream-ball-strawberries_114579-2595.jpg?w=740&t=st=1689188246~exp=1689188846~hmac=9b747dce8fbd999e8a40b6b584b4e192f936b8e80aa96e9ebc07b9298f4e9629  "},
  ]
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(()=>{
    dispatch(addCard(Cakedata))
    // dispatch(addCart(Cakedata))
    dispatch(setCardCategory())
  },[])


  return (
    <div className=' '>
      <div
      form data-aos="zoom-out" data-aos-duration="1200" 
       className="relative overflow-hidden rounded-lg bg-cover  bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/chocolate-chip-muffin_74190-7122.jpg?w=740&t=st=1689857437~exp=1689858037~hmac=62e723cfaa94ee7097209a01b68737b1b01f4a1c513c50b07386842990ddebbc')", height: "450px" }}>
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.4 )" }}>
      <div className="flex h-full items-center justify-center">
        <div className="text-white mt-8">
          <h2 className="mb-4 text-5xl font-semibold">Shop</h2>
          <h4 className="mb-6 text-md font-semibold">
            <Link to='/' >Home</Link>/shop
            
          </h4>
        </div>
      </div>
    </div>
  </div>

  <div className=' flex-col-reverse flex md:flex-row lg:flex-row '>
  <div className=' pt-12 px-[3vw] md:w-[80%] flex flex-col '>

    <div w className=' md:flex  text-gray-600  md:text-sm gap-4  lg:text-lg  font-sans  justify-between text-lg '>
      <p className='mb-4'>
      Showing 1–12 of 52 results
      </p>
      <div>

        <span className=' relative group flex gap-4 items-center  '>
        Sort by Price <BiSolidChevronDown className=' group-hover:rotate-180'/>
       <div className=' cursor-pointer text-gray-900 md:w-full absolute text-[15px] duration-300 text-md z-30 top-[50%] border  opacity-0 group-hover:translate-y-3 group-hover:opacity-100'>
       <span className='border gap-3 p-1 flex items-center' onClick={()=>dispatch(HighPriceStort(false))}>
          Sort by Price  <BsArrowUp />
        </span>
       <span className='border p-1 flex gap-3  items-center' onClick={()=>dispatch(HighPriceStort(true))}>
          Sort by Price  <BsArrowDown />
        </span>
       </div>
        </span>
        
      </div>
    </div>

    {/* item div */}

    {cardProducts.length < 1 && (
      <h2 className=' text-[3vw] text-gray-500 text-center mt-32'>No Item Match Your Search </h2>
    )}

    <div className='grid sm:grid-cols-1 md:grid-cols-2 my-12 gap-4 lg:grid-cols-3'>
     {
      ProdData.map((item,ind)=>{
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
   
      )
      })
     }
    </div>


   { ProdData.length > 0 && (<nav className=' my-8 flex items-center justify-center w-full'>
  <ul className=' flex items-center text-2xl  justify-center gap-4'>
    
 
{
  numbers.map((n,i)=>(
     <li
     onClick={()=>changepage(n)}

     className={ ` hover:cursor-pointer hover:bg-amber-900 hover:text-white p-4  ${Currentpage===n} ? active:text-white : '' `}
     key={i}>
     {n}
     </li>
  ))
}

<li
onClick={NextPage}
    className='hover:cursor-pointer hover:text-amber-900 '
    > <BsArrowRight/></li>
 </ul>
</nav>)}



  </div>


  <div className='bg-gray-50 px-[4vw] justify-between  pt-16   items-center  flex flex-col gap-14 font-sans  py-8  '>

   <div className='flex px-4 flex-col gap-14  '>
    <div>
 
    <div className='flex justify-between border border-gray-400 bg-white py-3 px-2   lg:w-[280px] '>
    <input onChange={handleSearch} value={Inputdata} className=' outline-none' type="text" placeholder='Search entire store' />
    <button onClick={()=> SubInput()} className=' hover:text-amber-950 '>
      <BsSearch size={20}/> 
    </button> 
    </div>
     
   </div>


   <ShopCategory handler={handler} catitem={catitem}
   
   />

  <ShopPricefilter
  setRangeValues={setRangeValues}
  rangeValues={rangeValues}
  
  handleRangeChange={handleRangeChange}
    
  />

{/* popular data */}
  <div className=' hidden md:block'>
    <h2 className='text-2xl'>Popular products</h2>
    <div>
      <div>
<div className='flex flex-col mt-4 gap-4'>
{
  popdata.map(({title,img,price},ind)=>(
    <div key={ind} className='flex gap-3'>
                            <img className=' border border-gray-200 w-[70px] max-h-[90px]' src={img} alt="" />
                             <div  className=' items-start text-gray-600   '>
                            <h2 className='text-md '>{title} </h2>
                            <p className=' text-sm'>{price} </p>
                          </div>
                          </div>
  ))
}
</div>
      </div>
    </div>
  </div>

  {/* insta prod */}
  <div>
  <h2 className='text-2xl mb-6'>Instagram</h2>
  <div className='grid gap-0 grid-cols-2'>
    {
      insta.map((item,ind)=>(
        <div key={ind} className='h-[100px] overflow-hidden w-[140px]'>
          <div  className='bg-black bg-cover hover:scale-110 transition-transform bg-center bg-s h-full w-full '
        style={{ backgroundImage:` url('${item.img}')`}}
        
        >
          <div className=' h-full text-amber-950 transition-opacity duration-300 text-lg flex justify-center items-center  w-full bg-white bg-cover opacity-0 hover:opacity-60'>
                    <BsInstagram />
          </div>
         

          
        </div>
        </div>
        
      ))
    }
  </div>
  <div>

  </div>
  </div>
   


   


  </div>
   </div>






  </div>
    </div>
  )
}

export default Shop