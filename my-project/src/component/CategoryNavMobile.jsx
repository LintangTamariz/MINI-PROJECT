import React from "react";

import {Link} from "react-router-dom";

import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {

  const {data} =  useFetch("http://localhost:1337/api/categories?");
   
  return (
    <div className="w-full h-full bg-[#1A1C21] p-8">
      <div 
      onClick={() => setCatNavMobile(false)}
      className="flex justify-end mb-8 cursor-pointer">
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
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
          <Link 
          to={`products/${category.id}`}
          className="uppercase font-medium" 
          key={category.id}
          >
            {category.attributes.title} Cameras
          </Link>
          )
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
