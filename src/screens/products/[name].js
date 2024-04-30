import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { addItem, removeItem, increaseQuantity, decreaseQuantity } from '../../redux/slices/cartSlice';
import apis from "../../services/Apis";
import { setProductDetails } from '../../redux/slices/productDetailsSlice'; 
const path = "products";



export default function ProductDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const productId = useSelector((state) => state.productId.productId);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSingle = async (id) => {
    try {
      setLoading(true);
      setData(null);
      const response = await apis.getSingleDataApi({ url: path, id }, '');
      if (response) {
        setData(response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    // Fetch products from an API and dispatch them to Redux
    const api = `https://fakestoreapi.com/products/${productId?.id}`
    fetch(api)  // Example API call
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProductDetails(data));  // Update the Redux state
      });
  }, [dispatch]);


  // useEffect(() => {
  //   // fetchSingle(productId.id)
  //   if (productId?.id == productDetails?.id) {
  //     const url = `/products/${productId?.name}`
  //     navigate(url);
  //   } else {
  //     navigate('/products');

  //   }

  //   // console.log("name", productId.id)
  //   // console.log("title", productDetails?.id)
  //   // console.log("productId", productId.id)

  // }, [productId?.id])


  return (
    <div>

      <div className="productDetail" >
        <div className='lftside'> <img src={productDetails?.image} alt="" className="productImg" /></div>
        <div className='rgtside'>  <p>{productDetails?.title}</p>
          <p>{productDetails?.description}</p>
          <p>{productDetails?.price}</p>
          <button onClick={() => dispatch(addItem(data)) }>Add to Cart</button></div>
      </div>



    </div>
  )
}
