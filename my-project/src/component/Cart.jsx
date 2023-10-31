import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const [barang, setBarang] = useState(() => {
    return JSON.parse(localStorage.getItem('cartItem')) || []
  });
    
  useEffect(() => {
    JSON.parse(localStorage.getItem('cartItem'))
  }, [barang]);

  const [price, setPrice] = useState(() => {
    return JSON.parse(localStorage.getItem('totalHarga')) || []
  });
    
  useEffect(() => {
    JSON.parse(localStorage.getItem('totalHarga'))
  }, [price]);  

  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        <div
          onClick={() => location.reload()}
          className="flex justify-start mt-8 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-30 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>

      
      {/*subtotal*/}
      {cart.length >= 0 && (
        <div className="px-6 py-10 flex flex-col">
          {/*subtotal*/}
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>Rp. {price}</div>
          </div>
          {/*total*/}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>Jumlah : {barang}</div>
          </div>
        </div>
      )}
      <div>
        {cart.length >= 0 ? (
          <div className="flex justify-between gap-x-4">
            <button 
            onClick={clearCart}
            className="bg-yellow-500 p-3 w-[100px] text-xl text-black font-semibold rounded-md hover:bg-yellow-400 transition-all">
              clear cart
            </button>
            <Link to="/checkout">
              <button 
              className="bg-yellow-500 p-3 w-[100px] text-xl text-black font-semibold rounded-md hover:bg-yellow-400 transition-all flex-1 px-2 gap-x-2">
                checkout
              </button>
            </Link>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center -z-10 flex-col text-center text-white/20">
            <div className="text-3xl">your cart is empty</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
