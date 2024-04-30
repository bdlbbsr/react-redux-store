import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',  // Name of the slice
  initialState: [],  // Initial state
  reducers: {
    setProducts(state, action) {
      return action.payload;  // Sets the list of products
    },
  },
});

export const { setProducts } = productsSlice.actions;  // Export actions
export default productsSlice.reducer;  // Export reducer
