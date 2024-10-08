import "../../Styles/SwipeBoards.css";
import image1 from "../../Components/Assets/swipeboard1.png";
import image3 from "../../Components/Assets/swipeboard3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function Swipeboard() {
  return (
    <div className="boards">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Swipeboard 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Swipeboard 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
