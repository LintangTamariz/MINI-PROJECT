// index.jsx
import React , {useEffect, useState} from "react";
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
import Admin from "./pages/Admin";
import Checkout from "./component/Checkout";

const Layout = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  const handleCheckout = () => {
    // Lakukan logika checkout di sini
    // Misalnya, Anda bisa menyetel keranjang kembali ke array kosong setelah checkout
    setCartItems([]);
  };
  return (
    <div>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/admin' && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/question" element={<Chat />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" onCheckout={handleCheckout} element={<Checkout /> } />
      </Routes>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Footer />}
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  // Fungsi untuk mengambil data user dari localStorage
  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  useEffect(() => {
    // Memeriksa apakah ada data user yang tersimpan di localStorage saat komponen dimuat
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      console.log(storedUser);
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

export default App;
