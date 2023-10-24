import React, { useContext, useState } from "react";

import logo from "../img/logo.png";

// import { SlBag } from "react-icons/sl";

import { Link } from "react-router-dom";

import SearchFrom from "../component/SearchForm";
import CategoryNavMobile from "../component/CategoryNavMobile";
import Cart from "../component/Cart"; 

import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className="bg-[#1A1C21] shadow-xl py-6 fixed w-full z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setCatNavMobile(true)}
              className="w-10 h-10 xl:hidden cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            className={`
          ${
            catNavMobile ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          <Link to={"/"}>
            <img className="h-15" src={logo} />
          </Link>
          <div className="hidden w-full xl:flex xl:max-w-[734px] ">
            <SearchFrom />
          </div>
          <div className="flex items-center gap-x-[10px]">
            <div className="hidden xl:flex uppercase">Need Help?</div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="bg-[#F5B321] text-black absolute w-[15px] h-[15px] rounded-full top-3 text-center text-sm -right-1 flex justify-center items-center font-bold tracking-[-0.1em]">
                20
              </div>
            </div>
            <div
              className={`
            ${isOpen ? "right-0" : "-right-full"}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all`}
            >
              <Cart />
            </div>
          </div>
        </div>

        <div className="xl:hidden">
          <SearchFrom />
        </div>
      </div>
    </header>
  );
};

export default Header;
