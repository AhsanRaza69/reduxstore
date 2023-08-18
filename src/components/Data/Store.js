import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import cartSlice from './cartdata/cartSlice';

const store = configureStore({
  reducer: {
    card: ProductSlice,
    cart:cartSlice
  }
});

export default store;
