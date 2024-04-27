import Banner from "../Banner";
import HotDeal from "../HotDeal";
import Products from "../Products";
import Testimonial from "../Testimonial";

function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Products></Products>
      <HotDeal></HotDeal>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
