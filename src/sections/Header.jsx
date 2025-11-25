import front from "./../assets/img/frontporch.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import facility from "../data/facility";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center px-5 py-5 lg:px-25 lg:py-5">
      <h2 className="font-bold text-7xl lg:text-9xl">DAHLIA FAMILY HOUSE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-16">
        <div className="w-full h-[500px] border-none rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={front}
            alt="Front Porch"
          />
        </div>
        <div className="border-none rounded-2xl">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 2000 }}
          >
            {facility.map((i) => (
              <SwiperSlide key={i.id}>
                <div>
                  <img
                    src={i.image}
                    alt={i.name}
                    className="border-none rounded-2xl w-full h-[500px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;
