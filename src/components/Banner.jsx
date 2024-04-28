import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/6QHK3t32/banner2.jpg')] bg-cover bg-center w-full h-[650px]">
            <div className="flex flex-col justify-center w-full h-full lg:pl-32">
              <h3 className="uppercase text-lg text-black font-medium tracking-wider">
                Special Offer
              </h3>
              <h1 className="font-semibold text-black py-6 text-6xl">
                Vase Collection
              </h1>
              <p className="font-medium text-xl text-black w-5/12 leading-[30px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati distinctio ducimus,
              </p>
              <div className="mt-8">
                <button className="px-12 transition-all duration-300 py-2 border-[1px] border-black uppercase hover:bg-black hover:text-white text-base font-medium ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/YS2kMhpB/banner1.jpg')] bg-cover bg-center w-full h-[650px]">
            <div className="flex flex-col justify-center items-end lg:pr-32 w-full h-full lg:pl-32 text-left">
              <h3 className="uppercase text-lg text-black font-medium tracking-wider">
                Special Offer
              </h3>
              <h1 className="font-semibold text-black py-6 text-6xl">
                Pottery Collection
              </h1>
              <p className="font-medium text-xl text-black w-5/12 leading-[30px] text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati distinctio ducimus,
              </p>
              <div className="mt-8">
                <button className="px-12 transition-all duration-300 py-2 border-[1px] border-black uppercase hover:bg-black hover:text-white text-base font-medium ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/d1LYZpkW/banner3.jpg')] bg-cover bg-center w-full h-[650px]">
            <div className="flex flex-col justify-center items-end lg:pr-32 w-full h-full lg:pl-32 text-left">
              <h3 className="uppercase text-lg text-black font-medium tracking-wider">
                Style Destination
              </h3>
              <h1 className="font-semibold text-black py-6 text-6xl">
                Ceramic Vase
              </h1>
              <p className="font-medium text-xl text-black w-5/12 leading-[30px] text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati distinctio ducimus,
              </p>
              <div className="mt-8">
                <button className="px-12 transition-all duration-300 py-2 border-[1px] border-black uppercase hover:bg-black hover:text-white text-base font-medium ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
