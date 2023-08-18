import { createSlice } from '@reduxjs/toolkit';

const GetDataFromStorage = ()=> {
  let newcartData = localStorage.getItem('cart');
  if(newcartData===[]){
    return []
  }else{
    return JSON.parse(newcartData)
  }
}


const Cartslice = createSlice({
  name: 'cart',
  initialState: {
    CartProduct: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    // AllCart:[],

   
  
    //  GetDataFromStorage(),


  },
  reducers: {
    addCart: (state, action) => {
        
        const newItemId = action.payload.id;
            const existingItem = state.CartProduct.find(item => item.id === newItemId);
            
          
            
            
            if (existingItem) {
              existingItem.quantity++
              
            } else {
              
              state.CartProduct.push(action.payload);
            }
            localStorage.setItem("cart", JSON.stringify(state.CartProduct));


            
   
    },
    removeFromCart: (state, action) => {
      state.CartProduct = state.CartProduct.filter(item => item.id !== action.payload);
      localStorage.removeItem('cart'); 
    },

    clearCart: (state) => {
      state.CartProduct = []
      localStorage.removeItem('cart');
    },
  increaseQuantity: (state, action) => {
  const { id } = action.payload;
  console.log(id,state);
  const itemToIncrease = state.CartProduct.find(item => item.id === id);
  if (itemToIncrease) {
    // state.CartProduct.lenght++
    itemToIncrease.quantity++;
  }
},
decreaseQuantity: (state, action) => {
  const { id } = action.payload;
  const itemToDecrease = state.CartProduct.find(item => item.id === id);
  if (itemToDecrease && itemToDecrease.quantity > 1) {
    // state.CartProduct.lenght--
    itemToDecrease.quantity--;
  }
},
}
});

export const {
  addCart,
  removeFromCart,
  getCartTotal,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = Cartslice.actions;

export default Cartslice.reducer;