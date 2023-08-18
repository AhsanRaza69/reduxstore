import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'card',
  initialState: {
    cardAll: [],
    cardProducts: [],
    selectedCategory: 'All',
    wishData : [],
    wishlist : false,
    whislistId:null,
  SearchTerm:'',
  },
  reducers: {
    wishlisthandler: (state, {payload}) => {
      state.wishlist = !state.wishlist
      state.whislistId = payload
      console.log(state.whislistId)
    },
    addwish: (state, {payload}) => {
      console.log(payload);
      const newItemId = payload.id;
            const existingItem = state.wishData.find(item => item.id === newItemId);
            
            if (existingItem) {
            
              console.log("asda");
            } else {
              
              state.wishData.push(payload);
            }
           
    },
    removeFromWish: (state, action) => {
      state.wishData = state.wishData.filter(item => item.id !== action.payload);
      localStorage.removeItem('cart'); 
    },
    addCard: (state, action) => {
      state.cardAll = [...action.payload]
      
     
    },
    CardselectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCardCategory: (state) => {
      state.cardProducts = state.cardAll.filter((val) => {
        if (state.selectedCategory === 'All') {
          return true;
        } else if (val.category === state.selectedCategory) {
          return true;
        } 
        return false;
      });
    },
    filterPrice: (state,action) => {
      
      
      const filteredProducts = state.cardAll.filter((val) => val.price >= action.payload);
      // console.log(filteredProducts);
       state.cardProducts = filteredProducts;
       
    },
      SearchFilter: (state,{payload}) => {
          state.SearchTerm = payload
          // console.log(state.SearchTerm )
          state.cardProducts = state.cardAll.filter(item =>
          item.title.toLowerCase().includes(payload.toLowerCase())
        );
      



      },


      HighPriceStort: (state,action) => {

        let data = action.payload
       let SortedData =  state.cardProducts.sort((a, b) => {  
          return data ? a.price - b.price  : b.price - a.price 
        })
      console.log("first")
        state.cardProducts = SortedData
  
        


      },

    
  },
});


export const {
  addCard,
  removeFromCart,
  CardselectedCategory,
  HighPriceStort,
  wishlisthandler,
  setCardCategory,
  clearCart,
  addwish,
  removeFromWish,
  SearchFilter,
  filterPrice
} = ProductSlice.actions;
export default ProductSlice.reducer;
