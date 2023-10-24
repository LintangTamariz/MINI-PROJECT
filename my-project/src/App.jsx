// index.jsx
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Header from './component/Header';
import Footer from './component/Footer';



const Layout = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Router>
        <Layout/>
      </Router>
    </div>
  );
};

export default App;
