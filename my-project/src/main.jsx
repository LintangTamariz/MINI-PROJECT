import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import CartProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
