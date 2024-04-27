import { Link, useLoaderData } from "react-router-dom";

function AllProducts() {
  const loaderData = useLoaderData();

  return (
    <div>
      <div className="flex flex-col container mx-auto lg:px-20 md:px-10 px-6 py-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Availability
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Customizable
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loaderData.map((product) => (
                    <tr
                      key={product._id}
                      className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        {product.product_name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        ${product.price} USD
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {product.stock}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {product.customize === "true" ? <>Yes</> : <>No</>}
                      </td>
                      <td>
                        <Link
                          className="whitespace-nowrap mx-6 mt-2.5 btn-sm btn text-white rounded-none bg-[#FAC056] hover:bg-[#FAC056]"
                          to={`/productDetails/${product._id}`}
                        >
                          {" "}
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
