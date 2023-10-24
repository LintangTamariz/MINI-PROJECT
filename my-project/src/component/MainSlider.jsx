import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import "../slider.css";

// Import component
import CameraImg from "../img/camera.png";

const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special product",
    title1: "Favorit product",
    title2: "Rp.100000/day",

  },
  {
    img: CameraImg,
    pretitle: "Special product",
    title1: "Favorit product",
    title2: "Rp.100000/day",

  },
  {
    img: CameraImg,
    pretitle: "Special product",
    title1: "Favorit product",
    title2: "Rp.100000/day",

  }
]

const MainSlider = () => {
  return (
    <Swiper
      // modules={[Pagination]}
      loop={true}    
      pagination={{
        clickable: true,
      }}
      className=" grad w-[600px] h-full xl:bg-no-repeat max-w-lg lg:max-w-none rounded-md overflow-hidden"
    >
      
      {
        
        sliderData.map((slide, index) => {
          return <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
              <div className="w-full lg-flex-1">
                <div className="uppercase mb-3 text-center lg:text-left">{slide.pretitle}</div>
                <div className="text-3xl md:text-[30px] font-semibold lg:text-left  uppercase leading-none xl:mb-20 text-center">
                  {slide.title1} <br />
                  {slide.title2} <br />
                </div>
                <button className="bg-yellow-500 p-4 rounded-md mx-auto lg:mx-0 text-black">Add Cart</button>
              </div>
              <div className="flex-1">
                <img 
                className="xl:absolute xl:-right-16 xl:-bottom-12" 
                src={slide.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        })
      }

    </Swiper>
  );
};

export default MainSlider;
