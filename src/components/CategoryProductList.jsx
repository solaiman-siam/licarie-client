import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
function CategoryProductList() {
  const { category_name } = useParams();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const categoryData = allData.filter(
    (category) => category.category === category_name
  );
  console.log(categoryData);

  return (
    <div className="container mx-auto lg:px-20 md:px-12 px-6 py-10">
      <div className="bg-[url('https://i.postimg.cc/zGbdQrGM/s7.jpg')] rounded-md w-full h-[250px] bg-center bg-cover">
        <div className="text-white w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-base font-medium pb-1">Top Category</h3>
          <div className="h-1 bg-[#FAC056] px-8"></div>
          <h2 className="text-6xl font-medium pt-4 hover:text-[#FAC056] transition-all duration-200 cursor-pointer">
            {category_name}
          </h2>
        </div>
      </div>
      <div className="my-10 grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {categoryData.map((category) => (
          <div
            key={category._id}
            className="bg-white first-letter: rounded-lg overflow-hidden shadow-lg ring-4 ring-[#FAC056] ring-opacity-40 max-w-sm"
          >
            <div className="relative">
              <img
                className="w-full"
                src={category.photoURL}
                alt="Product Image"
              />
              <div className="absolute top-0  text-gray-500 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium">
                {category.rating === "5" ? (
                  <>
                    <div className="flex items-center gap-1">
                      <h5 className="pt-0.5"> 4.5</h5>
                      <FaStar size={18} color="#FAC056" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1">
                      <h5 className="pt-0.5"> 4.8</h5>
                      <FaStar size={18} color="#FAC056" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium ">{category.product_name}</h3>
              <h4 className="text-sm font-medium text-gray-400 pb-2">
                {category.category}
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                {category.product_details.slice(0, 80)}...
              </p>
              <h4 className="pb-5 text-gray-500 text-sm">
                Processing Time: {category.time} days
              </h4>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">${category.price}.00</span>
                <Link
                  to={`/productDetails/${category._id}`}
                  className="text-white font-bold btn btn-sm rounded-none bg-[#FAC056] hover:bg-[#fac156c9] "
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProductList;
