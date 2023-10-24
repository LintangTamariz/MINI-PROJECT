import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import "../slider.css";

// Import component
import Product from '../component/Product';

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      // pagination={{
      //   clickable: true,
      // }}
      // className="swiper-container productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
      className="mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
