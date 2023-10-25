import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";

import CartItem from "./CartItem"

const Cart = () => {
  const{setIsOpen, cart} = useContext(CartContext);
  return (
    <div className="w-full h-full px-4 text-white">
      <div
        onClick={() => setIsOpen(false)}
        className="flex justify-start mt-8 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
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
          return <CartItem  item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default Cart;
