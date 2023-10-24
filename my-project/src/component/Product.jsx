import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-{362px} rounded-md overflow-hidden relative group">
        {/*badge*/}
        {product.attributes.isNew ? (
          <div className="absolute bg-yellow-500 text-black text-[12px] font-extrabold uppercase top-4 right-4 px-1 rounded-full z-10">
            New
          </div>
        ) : (
          ""
        )}

        {/* image */}
        <div className="w-full h-[200px] flex justify-center relative">
          <img
            className="group-hover:scale-90 transition-all w-[160px] h-[160px]"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/*text*/}
        <div className="px-6 pb-8 flex flex-col">
          {/*category tittle*/}
          <div className="text-sm text-yellow-500 capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}</div>
          {/*tittle*/}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/*price*/}
          <div className="text-xl text-yellow-500">
            Rp.{product.attributes.price} /hari</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
