import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryProducts() {
  const [allcategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("https://licarie-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto lg:px-20 md:px-12 lg:pt-6 md:pt-6 pt-10 px-6">
        <div className="flex flex-col items-center ">
          <h3 className="lg:text-3xl md:text-2xl text-2xl font-medium  pb-2">
            Category Art & Craft
          </h3>
          <div className="bg-[#FAC056] h-0.5 px-12"></div>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-6 grid-cols-2 py-20">
          {allcategories.map((product) => (
            <Link
              key={product._id}
              to={`/categoryProductList/${product.category_name}`}
              className=""
            >
              <div className=" w-full h-fit bg-cover bg-center bg-opacity-40  ">
                <img src={product.image} alt="" />
              </div>
              <div className="flex justify-center items-center bg-[#FAC056]">
                <h1 className="lg:text-lg text-base md:text-lg py-1 font-medium text-white ">
                  {product.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
