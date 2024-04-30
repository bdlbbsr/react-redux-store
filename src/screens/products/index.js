import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setProducts } from '../../redux/slices/productsSlice';  // Import product actions
import { addItem } from '../../redux/slices/cartSlice';  // Import cart action
import { setProductId } from "../../redux/slices/productIdSlice"
// import { useFetchByLoad } from "../../services/useFetchByLoad";
import ReactPaginate from 'react-paginate';

const path = "products";


export const Products = () => {
  const products = useSelector((state) => state.products);  // Get products from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let timer = useRef(null)
  // const { fetch, data, loading } = useFetchByLoad();

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 4;


  // useEffect(() => {
  //   clearTimeout(timer.current)
  //   timer.current = setTimeout(() => {
  //     fetch({ url: path })
  //   }, 100)
  // }, [])

  useEffect(() => {
    // Fetch products from an API and dispatch them to Redux
    const api = "https://fakestoreapi.com/products"
    fetch(api)  // Example API call
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));  // Update the Redux state
      });
  }, [dispatch]);


  useEffect(() => {
    setFilterData(
      products?.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [products, page]);
 

  const handleClick = (item) => {
    let names = item.title.replace(/\s+/g, '-');
    const url = `/products/${names}`
    dispatch(setProductId({ id: item.id, name: names }))
    navigate(url);

  }



  // if (loading) {
	// 	return <>loading</>
	// }



  return (
    <>
      {products && products.length === 0 ? (

        <p>NO PRODUCTS</p>

      ) : filterData?.map((item, i) => (
        <div className="productList" key={i}>
          <img src={item.image} alt="" className="productImg" onClick={() => handleClick(item)} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button onClick={() => dispatch(addItem(item))}>Add to Cart</button>
 
        </div>


      ))



      };

      <div className="paginationcnr">
        <ReactPaginate
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          onPageChange={(event) => setPage(event.selected)}
          breakLabel="..."
          pageCount={parseInt(Math.ceil(products?.length / n))}
          previousLabel="previous"
          nextLabel="next"
          renderOnZeroPageCount={null}
          forcePage={page}
        />
      </div>

    </>
  );
};




export default Products;