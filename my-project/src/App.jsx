// index.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Register from "./component/Register";
import Chat from "./component/Chat";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/question" element={<Chat />} />
      </Routes>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

export default App;
