import React from "react";

const CategoryNavMobile = ({ setCatNavMobile }) => {
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
      CategoryNavMobile
    </div>
  );
};

export default CategoryNavMobile;
