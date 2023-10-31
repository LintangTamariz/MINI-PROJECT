import React, { useContext } from "react";

import { useParams, useNavigate} from "react-router-dom";

import useFetch from "../hooks/useFetch";

import RelatedProducts from "../component/RelatedProduct";

import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [data, setData] = useState('');

  // const handleLogin = () => {
  //   // Implement logic for user login
  //   setLoggedIn(true);
  // };

  // const handleSubmit = () => {
  //   if (loggedIn) {
  //     // Implement data submission logic
  //     // For example, submitData(data);
  //     console.log("Data submitted:", data);
  //   } else {
  //     alert("Anda harus login terlebih dahulu!");
  //   }
  // };

  // get product data by id
  const { data } = useFetch(
    `http://localhost:1337/api/products?populate=*&filters[id][$eq]=${id}`
  );
  if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }
  //category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%]  grad rounded-md flex justify-center items-center">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-[#1A1C21] p-12 xl:py-[100px] rounded-md flex-col justify-center">
            {/*category title*/}
            <div className="uppercase text-yellow-500 text-xl font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.title} Cameras
            </div>
            {/*title*/}
            <h2 className="h2 mb-4 font-semibold">
              {data[0].attributes.title}
            </h2>
            {/*desc*/}
            <p className="text-lg mb-12">{data[0].attributes.description}</p>
            {/*priice*/}
            <div className="flex items-center gap-x-8">
              <div className="text-3xl mb-12  font-semibold">
                Rp.{data[0].attributes.price}/Day
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="bg-yellow-500 p-2 rounded-md text-black hover:border-2 hover:bg-[#ffffff] w-[100px] mb-10"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetail;
