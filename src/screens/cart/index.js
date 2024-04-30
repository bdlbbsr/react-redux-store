import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, setQuantity } from '../../redux/slices/cartSlice';  // Import cart actions




const Cart = () => {
  const cart = useSelector((state) => state.cart);  // Get cart from Redux
  const dispatch = useDispatch()

  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      dispatch(setQuantity({ id: item.id, quantity: newQuantity }));  // Update cart
    }
  };


  return (

    <>
      {cart?.length === 0 ? (
        <h1 className='text-center'>Your Cart is Empty!</h1>
      ) :
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.title} - Quantity: {item.quantity} - Price: {item.price} - Total Price: {item.price * item.quantity}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item)}  // Editable input
                min="1"  // Ensure at least 1
              />
              <button onClick={() => dispatch(increaseQuantity(item.id))}> + </button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}> - </button>
              <button onClick={() => dispatch(removeItem(item.id))}> Remove </button>
            </div>
          ))}


        </>
      }
    </>

  )
}

export default Cart