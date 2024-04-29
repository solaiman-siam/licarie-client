import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryProducts() {
  const [allcategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("https://licarie-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  console.log(allcategories);

  return (
    <div>
      <div className="container mx-auto lg:px-20 md:px-12 px-6">
        <div className="flex flex-col items-center ">
          <h3 className="text-3xl font-medium text-black pb-2">
            Category Products
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
                <h1 className="text-lg font-medium text-white ">
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
