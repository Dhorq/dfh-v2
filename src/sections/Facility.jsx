import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import facility from "./../data/facility";

const Facility = () => {
  return (
    <div className="px-25 my-10">
      <h2 className="text-5xl font-semibold mb-5">Our Facilities</h2>

      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 2000 }}
        effect="fade"
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
          <SwiperSlide key={i.name}>
            <div className="max-w-100">
              <img src={i.image} alt={i.name} />
              <p className="font-semibold text-2xl mt-2">{i.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Facility;
