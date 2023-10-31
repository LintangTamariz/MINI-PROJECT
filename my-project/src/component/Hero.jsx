import React from "react";

import CategoryNav from "../component/CategoryNav";
import MainSlider from "../component/MainSlider";

import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/*sidebar*/}
          <div className="">
            <CategoryNav />
          </div>
          {/*mainslider*/}
          <div className="w-full max-w-lg lg-max-w-[730px] mx-auto">
            <MainSlider />
          </div>
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/*promo img 1*/}
            <div className="grad flex-1 h-[250px] rounded-md overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Our Popular DSLR Camera
                </div>
              </div>
              <img
                className="absolute z-20 -top-2 -right-6"
                src={PromoImg1}
                alt=""
              />
            </div>
            {/*promo img 2*/}
            <div className="grad flex-1 h-[250px] rounded-md overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Our Popular Mirrorless Camera
                </div>

              </div>
              <img
                className="absolute z-20 top-4 -right-6"
                src={PromoImg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
