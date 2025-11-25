import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import facility from "./../data/facility";
import "swiper/css";
import "swiper/css/navigation";

const Facility = () => {
  return (
    <div className="px-5 py-5 lg:px-25 lg:py-5">
      <h2 className="text-5xl font-semibold mb-5">Our Facilities</h2>

      <Swiper
        className="mySwiper w-full"
        spaceBetween={100}
        slidesPerView={3}
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 2000 }}
        effect="coverflow"
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {facility.map((i) => (
          <SwiperSlide key={i.id}>
            <div>
              <img
                src={i.image}
                alt={i.name}
                className="border-none rounded-2xl"
              />
              <p className="font-semibold text-2xl mt-2">{i.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Facility;
