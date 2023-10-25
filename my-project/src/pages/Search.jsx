import React from "react";

import { useLocation } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import CategoryNav from "../component/CategoryNav";
import Product from "../component/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);

  const { data } = useFetch(
    `http://localhost:1337/api/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);
  return (
    <div className="mb-[30px] pt-60 lg:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          {/*categorynav8*/}
          <CategoryNav />
          <div>
            {/*titles*/}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0 ? 
              `${data.length} results for ${searchTerm}` 
                   : 
              `No results found for ${searchTerm}`}
            </div>
            {/*product grid*/}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
