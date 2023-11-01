import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import CategoryNav from "../component/CategoryNav";
import Product from "../component/Product";

const Products = () => {
  const { id } = useParams();
  //get data product by category id
  const { data } = useFetch(
    `http://localhost:1337/api/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  //set title
  const [title, setTitle] = useState(null);
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });
  return (
    <div className="mb-16 pt-60 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[40px]">
          <CategoryNav />
          <main>
            <div className="font-medium uppercase py-4 text-xl text-center lg:text-left">
              {title} Cameras
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
      Products
    </div>
  );
};

export default Products;
