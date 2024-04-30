import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';  // Import product slice
import cartReducer from './slices/cartSlice';  // Import cart slice
import productDetailsReducer from './slices/productDetailsSlice';
import productIdReducer from './slices/productIdSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    productId: productIdReducer,
    cart: cartReducer,
  },
});

export default store;


// import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux';
// import { cartReducer } from './slices/cartSlice';
// import productDetail from './slices/productDetailSlice';
// import { loadState } from "../utility/browser-storage";

// const reducers = combineReducers({
//   productDetail,
//   cart: cartReducer,
// });

// const store = configureStore({
//   devTools: true,
//   reducer: reducers,
//   preloadedState: loadState('redux'),
// });



// export default store;
