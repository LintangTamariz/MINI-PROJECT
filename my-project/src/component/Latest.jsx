import React from "react";

import ProductSlider from "./ProductSlider";

import useFetch from "../hooks/useFetch";

const Latest = () => {
  // menagambil produk terbaru
  const { data } = useFetch(
    "http://localhost:1337/api/products?populate=*&filters[isNew]=true"
  );
  console.log(data);
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 uppercase mb-9 text-center lg:text-left">
          Latest Products
        </h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default Latest;
