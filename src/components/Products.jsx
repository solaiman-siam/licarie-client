import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://licarie-server.vercel.app/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const limitedProducts = products.slice(0, 6);

  return (
    <div className="pt-24 ">
      <div className="flex flex-col items-center ">
        <h3 className="text-3xl font-medium  pb-2"> Our Products</h3>
        <div className="bg-[#FAC056] h-0.5 px-12"></div>
      </div>
      <div className="container mx-auto lg:px-20   p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {limitedProducts.map((product) => (
            <div key={product.product_name}>
              <div className="rounded overflow-hidden shadow-lg">
                <div className="relative">
                  <a>
                    <img className="w-full" src={product.photoURL} />
                    <div className="hover:bg-opacity-60 transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a>
                    <div className="absolute bottom-0 left-0 bg-[#FAC056] px-4 py-2 text-black text-sm hover:bg-white hover:text-[#FAC056] transition duration-500 ease-in-out">
                      {product.stock}
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
                  <Link
                    to={`/productDetails/${product._id}`}
                    className="btn font-medium btn-sm rounded-none border hover:text-white border-black   hover:bg-[#FAC056]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
