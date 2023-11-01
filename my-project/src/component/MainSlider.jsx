import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
// import "../slider.css";

import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";

// Import component
import CameraImg from "../img/camera.png";

const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special product",
    title1: "Favorit product",
    title2: "Rp.100000/day",
  },
];

const MainSlider = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  // get product data by id
  const { data } = useFetch(
    `http://localhost:1337/api/products?populate=*&filters[id][$eq]=${id}`
  );

  return (
    <Swiper
      // modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className=" grad w-[600px] h-full xl:bg-no-repeat max-w-lg lg:max-w-none rounded-md overflow-hidden"
    >
      {sliderData.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
              <div className="w-full lg-flex-1">
                <div className="uppercase mb-3 text-center lg:text-left">
                  {slide.pretitle}
                </div>
                <div className="text-3xl md:text-[30px] font-semibold lg:text-left  uppercase leading-none xl:mb-20 text-center">
                  {slide.title1} <br />
                  {slide.title2} <br />
                </div>
              </div>
              <div className="flex-1">
                <img
                  className="xl:absolute xl:-right-16 xl:-bottom-12"
                  src={slide.img}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSlider;
