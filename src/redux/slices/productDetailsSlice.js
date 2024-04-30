import { createSlice } from '@reduxjs/toolkit';

const productDetailsSlice = createSlice({
  name: 'productDetails',  // Name of the slice
  initialState: {},  // Initial state
  reducers: {
    setProductDetails(state, action) {
      return action.payload;  // Sets the product details
    },
  },
});

export const { setProductDetails } = productDetailsSlice.actions;  // Export actions
export default productDetailsSlice.reducer;  // Export reducer


// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     productId:null,
// }

// const productDetailSlice = createSlice({
//   name: 'productDetail',
//   initialState,
//   reducers: {
//     setProductId: (state, action) => {
//         state.productId = action.payload;
        
//     },
//   },
// })
 

// export const { setProductId } = productDetailSlice.actions

// export default productDetailSlice.reducer