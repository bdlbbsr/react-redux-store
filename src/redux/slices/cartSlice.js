import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',  // Name of the slice
  initialState: [],  // Initial state (empty cart)
  reducers: {
    addItem(state, action) {
      const item = state.find((i) => i.id === action.payload.id);  // Find item in cart
      if (item) {
        item.quantity += 1;  // Increase quantity if item exists
      } else {
        state.push({ ...action.payload, quantity: 1 });  // Add new item to cart
      }
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);  // Remove item by ID
    },
    increaseQuantity(state, action) {
      const item = state.find((i) => i.id === action.payload);  // Find item in cart
      if (item) {
        item.quantity += 1;  // Increase quantity
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find((i) => i.id === action.payload);  // Find item in cart
      if (item && item.quantity > 1) {
        item.quantity -= 1;  // Decrease quantity if > 1
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;  // Set item quantity
      }
    },

  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, setQuantity } = cartSlice.actions;  // Export actions
export default cartSlice.reducer;  // Export reducer


// import { createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {

//     updateCart: (state, action) => {
//       state.length = 0
//       for (let item of action.payload) {
//         state.push({ ...item, quantity: item.qty });
//       }
//     },

//     addToCart: (state, action) => {
//       const itemExists = state.find((item) => item.id === action.payload.id);
//       if (itemExists) {
//         itemExists.quantity++;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//         toast.success("Added Successfully!");
//       }
      
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.find((item) => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.find((item) => item.id === action.payload);
//       if (item.quantity === 1) {
//         const index = state.findIndex((item) => item.id === action.payload);
//         state.splice(index, 1);
//       } else {
//         item.quantity--;
//       }
//     },
//     removeFromCart: (state, action) => {
//       const index = state.findIndex((item) => item.id === action.payload);
//       state.splice(index, 1);
//     },

//     clearCart: (state) => [],
//   },


// });

// export const cartReducer = cartSlice.reducer;


// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
//   clearCart,
//   updateCart
// } = cartSlice.actions;