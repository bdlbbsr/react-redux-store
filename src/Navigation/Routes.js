import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Products = lazy(() => import('../screens/products'));
const ProductDetails = lazy(() => import('../screens/products/[name]'));
const Cart = lazy(() => import('../screens/cart'));

export const Navigation = () => {
    return (
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}