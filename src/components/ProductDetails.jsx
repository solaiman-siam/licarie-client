import { useLoaderData } from "react-router-dom";

function ProductDetails() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container lg:px-20 mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={loaderData.photoURL}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl pb-6 font-bold text-gray-800 dark:text-white mb-2">
              {loaderData.product_name}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-[#efb240] font-medium pl-1 dark:text-gray-300">
                  ${loaderData.price}.00
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 pl-1 dark:text-gray-300">
                  {loaderData.stock}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Customizable:{" "}
                {loaderData.customize === "true" ? <>{"Yes"}</> : <>{"No"}</>}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-bold  text-gray-700 dark:text-gray-300">
                Processing Time: {loaderData.time} day
              </span>
              <div className="boder-none mt-10">
                <div className="flex  sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">
                    {loaderData.rating === "5" ? <>4.5</> : <>4.8</>}
                  </h3>

                  <img
                    className="w-5"
                    src="https://www.svgrepo.com/show/513354/star.svg"
                    alt="stars-icon"
                  />
                </div>
                <div>
                  <h3 className="text-sm">Rated by 2k on Licarie.</h3>
                </div>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {loaderData.product_details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
