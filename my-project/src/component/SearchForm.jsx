import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = " ";
      setSearchTerm("");
    } else {
      console.log("please search a product here..");
    }
  };

  return (
    <div className="flex w-full">
      <form onSubmit={handleSubmit} className={"relative w-full"}>
        <input
          onChange={handleSearchInput}
          type="text"
          className="input text-black"
          placeholder="search product here..."
        />
        <button className="bg-yellow-500 h-[40px] flex justify-center items-center rounded-[8px] px-10 text-black font-bold absolute top-0 right-0 hover:bg-yellow-400 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
