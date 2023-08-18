import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Cart from './components/Cart';
import Footer from './components/Footer';
import FixIcons from './components/FixIcons';
import Login from './components/login';
import ChechoutSuccess from './components/ChechoutSuccess';
import Notfound from './components/Notfound';
import { Card } from '@mui/material';
import ProductPage from './components/homeComponents/cart/ProductPage';

import Wishlist from './ShopPage/Wishlist';


const App = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
         
      <Router>
        <Navbar/>
          <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/shop" element={<Shop/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/blog" element={<Blog/>}/>
        <Route path ="/checkout-success" element={<ChechoutSuccess/>}/>
        {/* <Route path ="/Product/:ProductItem" element={<Card/>}/> */}
        <Route path="/items/:itemId" element={<ProductPage/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        {/* <Route path ="/create-checkout-session" element/={<Server/>}/>  */}
        <Route path ="*" element={<Notfound/>}/>
      
      </Routes>
      <FixIcons/>
      <Footer/> 
      </Router>
   

    </div>
  )
}

export default App