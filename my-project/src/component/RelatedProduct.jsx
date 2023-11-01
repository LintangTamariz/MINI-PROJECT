import React from "react";

import useFetch from "../hooks/useFetch";

import ProductSlider from "./ProductSlider";

const RelatedProduct = ({ categoryTitle }) => {
  const { data } = useFetch(
    `http://localhost:1337/api/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 uppercase mb-9 text-center lg:text-left">
          Related Products
        </h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProduct;
