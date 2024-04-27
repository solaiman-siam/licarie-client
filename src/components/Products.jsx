import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-24 container mx-auto lg:px-6">
      <div className="flex flex-col items-center pb-10">
        <h3 className="text-3xl font-medium text-black pb-2"> Our Products</h3>
        <div className="bg-[#FAC056] h-0.5 px-12"></div>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {products.map((product) => (
            <>
              <div
                key={product.product_name}
                className="rounded overflow-hidden shadow-lg"
              >
                <a></a>
                <div className="relative">
                  <a>
                    <img className="w-full" src={product.photoURL} />
                    <div className="hover:bg-opacity-60 transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a>
                    <div className="absolute bottom-0 left-0 bg-[#FAC056] px-4 py-2 text-black text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      In Stock
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4">
                  <a className="font-semibold text-lg inline-block hover:text-[#FAC056] transition duration-500 ease-in-out">
                    {product.product_name}
                  </a>
                  <p className="text-gray-500 text-sm pt-2">
                    {product.product_details.slice(0, 70)}
                    ...
                  </p>
                </div>
                <div className="px-6 py-4 flex flex-row items-center">
                  <button className="btn font-medium btn-sm rounded-none border hover:text-white border-black bg-white hover:bg-[#FAC056]">
                    View Details
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
