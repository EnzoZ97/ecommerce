import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';

import Navbar from './Components/navbar/Navbar';
import Ecommerce from './Components/ecommerce/Ecommerce';
import Sell from './Components/Sell/Sell' ;
import Help from './Components/Help/Help'
import MyCart from './Components/MyCart/MyCart';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';

import React from 'react';

import './App.scss';


function App() {
  const category = useAppSelector((state) => state.Category.value);
  const chosen_product = useAppSelector((state) => state.Product.value);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="route">
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path={`/${category}`} element={<Ecommerce />} />
            <Route path={`/${chosen_product.name}`} element={<Product />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/MyCart" element={<MyCart />} />
            <Route path="*" element={<Ecommerce />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
