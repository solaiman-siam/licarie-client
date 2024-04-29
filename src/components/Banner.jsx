import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/6QHK3t32/banner2.jpg')] bg-cover bg-center w-full md:h-[650px] h-[500px] lg:h-[650px]">
            <div className="flex flex-col pl-10 md:pl-24 justify-center w-full h-full lg:pl-32">
              <h3 className="uppercase text-base md:text-lg lg:text-lg   font-medium tracking-wider">
                <Fade duration={1500}>Special Offer</Fade>
              </h3>
              <h1 className="font-semibold  py-6 text-3xl md:text-4xl lg:text-6xl">
                <Fade duration={1500}>Vase Collection</Fade>
              </h1>
              <p className="font-medium text-base md:text-lg lg:text-xl w-10/12 md:w-[9/12]  lg:w-5/12 leading-[30px] ">
                <Fade duration={1500}>
                  Indulge in Artisanal Excellence: Discover a World of
                  Handcrafted Ceramics and Pottery for Every Style and Space!
                </Fade>
              </p>
              <div className="mt-8">
                <button className="lg:px-12 md:px-10 px-8 transition-all duration-300 py-2 border-[1px] border-black uppercase hover:bg-black hover:text-white text-base font-medium ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/YS2kMhpB/banner1.jpg')] bg-cover bg-center w-full md:h-[650px] h-[500px] lg:h-[650px] ">
            <div className="flex flex-col justify-center items-end pr-10 md:pr-24  lg:pr-32 w-full h-full lg:pl-32 text-left">
              <h3 className="uppercase text-base md:text-lg lg:text-lg  font-medium tracking-wider">
                <Fade duration={1500}>Special Offer</Fade>
              </h3>
              <h1 className="font-semibold  py-6 text-3xl md:text-4xl lg:text-6xl">
                <Fade duration={1500}>Pottery Collection</Fade>
              </h1>
              <p className="font-medium text-base md:text-lg lg:text-xl w-10/12 md:w-[9/12]  lg:w-5/12 leading-[30px] text-right">
                <Fade duration={1500}>
                  Elevate Your Living Space with Handcrafted Elegance: Explore
                  Our Elegent Design.
                </Fade>
              </p>
              <div className="mt-8">
                <button className="lg:px-12 md:px-10 px-8 transition-all duration-300 py-2 border-[1px] border-black uppercase hover:bg-black hover:text-white text-base font-medium ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/d1LYZpkW/banner3.jpg')] bg-cover bg-center w-full md:h-[650px] h-[500px] lg:h-[650px]">
            <div className="flex flex-col justify-center items-end pr-10 md:pr-24 lg:pr-32 w-full h-full lg:pl-32 text-left">
              <h3 className="uppercase text-base md:text-lg lg:text-lg font-medium tracking-wider">
                <Fade duration={1500}>Style Destination</Fade>
              </h3>
              <h1 className="font-semibold  py-6 text-3xl md:text-4xl lg:text-6xl">
                <Fade duration={1500}>Ceramic Vase</Fade>
              </h1>
              <p className="font-medium text-base md:text-lg lg:text-xl w-10/12 md:w-[9/12]  lg:w-5/12 leading-[30px] text-right">
                <Fade duration={1500}>
                  Captivating Craftsmanship: Elevate Your Décor with Unique
                  Ceramics
                </Fade>
              </p>
              <div className="mt-8">
                <button className="lg:px-12 md:px-10 px-8 transition-all duration-300 py-2 border-[1px] border-black uppercase hover:bg-black hover:text-white text-base font-medium ">
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
