import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProviderComponent";
import { updateCurrentUser } from "firebase/auth";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Update() {
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const category = form.category.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const time = form.time.value;
    const stock = form.stock.value;
    const customize = form.radio1.value;
    const rating = form.rating.value;
    const product_details = form.product_details.value;
    const email = user?.email;
    const name = user?.displayName;
    const updateCraft = {
      product_name,
      category,
      photoURL,
      price,
      time,
      stock,
      customize,
      rating,
      product_details,
      email,
      name,
    };
    console.log(updateCraft);
    fetch(`https://licarie-server.vercel.app/allproducts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged || data.modifiedCount > 0) {
          Swal.fire({
            title: "Craft Updated Successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto  lg:px-10">
        <div className="bg-white  border-[#fac1564c]  border-4 rounded-lg shadow relative m-10">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-2xl font-semibold">Update Craft Item</h3>
          </div>

          <div className="p-6 space-y-6">
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product_name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Products"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="">
                    <label
                      htmlFor="category"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Clay-made-pottery">
                        Clay-made Pottery
                      </option>
                      <option value="Stoneware">Stoneware</option>
                      <option value="Porcelain">Porcelain</option>
                      <option value="Terra-Cotta">Terra Cotta</option>
                      <option value="Ceramics-&-Architectural">
                        Ceramics & Architectural
                      </option>
                      <option value="Home-decor-pottery">
                        Home Decor Pottery
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="photoURL"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    id="photoURL"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Photo URL"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="$100"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="time"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Processing Time
                  </label>
                  <input
                    type="text"
                    name="time"
                    id="time"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Time"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="stock"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Stock Details
                  </label>
                  <select
                    id="stock"
                    name="stock"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  >
                    <option value="">Availability</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Made to Order">Made to Order</option>
                  </select>
                </div>
                {/* email */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Email"
                    required
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
                {/* username */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="User Name"
                    required
                    readOnly
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="rating"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Rating"
                    required
                    min="1"
                    max="5"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-5">
                    <label className="mb-3 block text-sm font-medium text-[#07074D]">
                      Are you want to Customize?
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton1"
                          className="h-5 w-5"
                          value={"true"}
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-3 text-sm font-medium text-[#07074D]"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton2"
                          className="h-5 w-5"
                          value={"false"}
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-3 text-sm font-medium text-[#07074D]"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="product_details"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Product Details
                  </label>
                  <textarea
                    id="product_details"
                    name="product_details"
                    rows="6"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    placeholder="Details"
                  ></textarea>
                </div>
              </div>
              <div className="p-6 mt-10 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-[#efb13f] hover:bg-[#FAC056] btn  rounded-none font-semibold text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
