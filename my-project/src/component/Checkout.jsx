import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";

const Checkout = () => {
  const [barang, setBarang] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItem")) || [];
  });

  useEffect(() => {
    JSON.parse(localStorage.getItem("cartItem"));
  }, [barang]);

  const [price, setPrice] = useState(() => {
    return JSON.parse(localStorage.getItem("totalHarga")) || [];
  });

  useEffect(() => {
    JSON.parse(localStorage.getItem("totalHarga"));
  }, [price]);

  const checkout = () => {
    localStorage.removeItem("cartItem");
    localStorage.removeItem("totalHarga");
    alert("Checkout Success");
    location.reload();
    setCart([]);
  };
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8 ">
          <p className="text-xl font-medium ">Order</p>
          <p className="text-gray-600">
            Check out your items. And select a payment method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg bg-[#1A1C21] px-2 py-4 sm:px-6 text-white">

            {cart.length >= 0 ? (
              <div classNameName="bg-[#1A1C21] px-6 py-10 flex flex-col">
                <div classNameName="flex justify-between text-lg">
                  <div>Subtotal</div>
                  <div>Rp. {price}</div>
                </div>
                <div classNameName="flex justify-between text-2xl">
                  <div>Total</div>
                  <div>Jumlah : {barang}</div>
                </div>
              </div>
            ) : (
              <div classNameName="h-full absolute top-0 right-0 left-0 flex justify-center -z-10 flex-col text-center text-white/20">
                <div classNameName="text-3xl">your cart is empty</div>
              </div>
            )}
          </div>
          <p className="mt-8 text-lg font-medium">Payments Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:text-black peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="https://a.m.dana.id/danaweb/web/dana-meta-logo.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Dana</span>
                  <p className="text-slate-500 text-sm leading-6">081274530098</p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 rounded-lg text-center ">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-600">
            Complete your order
          </p>
          <div className="">
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-center text-gray-900">
                  Total Sewa
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total Barang</p>
                <p className="font-semibold text-gray-900">{barang}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total Harga</p>
              <p className="text-2xl font-semibold text-gray-900">{price}</p>
            </div>
          </div>
          <button
            onClick={checkout}
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
