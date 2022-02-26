import React from 'react';

//Router
import { Routes , Route , Navigate } from 'react-router-dom';

//Views
import ProductDetail from '../views/ProductDetail';
import Products from '../views/Products';
import Cart from '../views/Cart';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/" element={<Navigate to="/products"/>}/>
      </Routes>
    </div>
  );
};

export default Router;