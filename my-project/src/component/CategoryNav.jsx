import React from "react";
import { Link } from "react-router-dom";
// use fetch hook
import useFetch from "../hooks/useFetch";
const CategoryNav = () => {
  const { data } = useFetch("http://localhost:1337/api/categories?");
  return (
    <aside className="hidden xl:flex">
      <div className="bg-gray-900 flex flex-col w-[286px] h-[500px] rounded-md overflow-hidden">
        <div className="bg-yellow-500 py-4 text-black uppercase font-semibold  flex items-center justify-center">
          Browse Categorie
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="cursor-pointer uppercase"
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
