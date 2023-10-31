import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Checkout = () => {
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

      const checkout = () =>{
        localStorage.removeItem('cartItem');
        localStorage.removeItem('totalHarga');
        alert('Checkout Success')
        location.reload();
        setCart([]);
      }
    const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8 ">
          <p class="text-xl font-medium">Order Summary</p>
          <p class="text-gray-600">
            Check out your items. And select a payment method.
          </p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 text-gray-600">
          {/* {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })} */}
            {cart.length >= 0 ? (
                <div className="px-6 py-10 flex flex-col">
                    <div className="flex justify-between text-lg">
                        <div>Subtotal</div>
                        <div>Rp. {price}</div>
                    </div>
                    <div className="flex justify-between text-2xl">
                        <div>Total</div>
                        <div>Jumlah : {barang}</div>
                    </div>
                </div>
            ):(
                <div className="h-full absolute top-0 right-0 left-0 flex justify-center -z-10 flex-col text-center text-white/20">
                    <div className="text-3xl">your cart is empty</div>
                </div>
            )}
        </div>
          <p class="mt-8 text-lg font-medium">Payments Methods</p>
          <form class="mt-5 grid gap-6">
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:text-black peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  class="w-14 object-contain"
                  src="https://a.m.dana.id/danaweb/web/dana-meta-logo.png"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Dana</span>
                  <p class="text-slate-500 text-sm leading-6">
                    081274530098
                  </p>
                </div>
              </label>
            </div>
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 peer-checked:text-black flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src="https://fintech.id/storage/files/shares/logo/logofi2/gopay-1.jpg"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">GoPay</span>
                  <p class="text-slate-500 text-sm leading-6">
                    081274530098
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 rounded-lg text-center">
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-gray-600">
            Complete your order by providing your payment details.
          </p>
          <div class="">
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-center text-gray-900">Total Sewa</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total Barang</p>
                <p class="font-semibold text-gray-900">{barang}</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total Harga</p>
              <p class="text-2xl font-semibold text-gray-900">{price}</p>
            </div>
          </div>
          <button 
          onClick={checkout}
          class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
