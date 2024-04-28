import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <div className="bg-[url('https://i.postimg.cc/ZKcZq6PZ/ba28.jpg')] w-full h-[200px]"></div>
      <div className="my-10">
        <div className="bg-white first-letter: rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
          <div className="relative">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product Image"
            />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Product Title</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae ante vel eros fermentum faucibus sit amet euismod lorem.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">$19.99</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductList;
