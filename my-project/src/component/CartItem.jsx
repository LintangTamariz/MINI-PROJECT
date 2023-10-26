import React, {useContext} from "react";
import { Link } from "react-router-dom";

import Qty from "../component/Qty";

import { CartContext } from "../context/CartContext";


const CartItem = ({ item }) => {
    const {removeFromCart} = useContext(CartContext)
  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 ">
          <Link className="" to={`/product/${item.id}`}>
            {item.attributes.title}
          </Link>
          <div 
          onClick={() => removeFromCart(item.id)}
          className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/sv g"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/*quantity*/}
          <div className="flex gap-x-4 mb-2">
            <div>
              <Qty item={item} />
            </div>
            <div className="text-xl text-yellow-500">
              Rp. {item.attributes.price * item.amount} 
            </div>
          </div>
        </div>
        <div>
            <span className="text-yellow-500">
              Rp. {item.attributes.price}/Day
            </span>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
