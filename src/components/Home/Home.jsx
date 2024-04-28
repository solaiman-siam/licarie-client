import Banner from "../Banner";
import CategoryProducts from "../CategoryProducts";
import HotDeal from "../HotDeal";
import Products from "../Products";
import Rewards from "../Rewards";
import Testimonial from "../Testimonial";

function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Products></Products>
      <CategoryProducts></CategoryProducts>
      <Rewards></Rewards>
      <HotDeal></HotDeal>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
