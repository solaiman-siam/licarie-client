import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProviderComponent";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { CiFilter } from "react-icons/ci";

function MyCart() {
  //dropdown filter

  const { user } = useContext(AuthContext) || {};

  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    fetch(`https://licarie-server.vercel.app/userProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllUserData(data));
  }, [user]);

  // filter
  const handleCustomizable = (filterString) => {
    fetch(`https://licarie-server.vercel.app/filterProducts/${filterString}`)
      .then((res) => res.json())
      .then((data) => {
        const customizableData = data.filter(
          (item) => item.email === user?.email
        );
        setAllUserData(customizableData);
      });
  };

  const handleNotCustomizable = (filterString) => {
    fetch(`https://licarie-server.vercel.app/filterProducts/${filterString}`)
      .then((res) => res.json())
      .then((data) => {
        const notCustomizableData = data.filter(
          (item) => item.email === user?.email
        );
        setAllUserData(notCustomizableData);
      });
  };

  const handleAll = () => {
    fetch(`https://licarie-server.vercel.app/userProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllUserData(data);
      });
  };

  const handleDeleteCraft = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://licarie-server.vercel.app/allproducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = allUserData.filter(
              (element) => element._id !== id
            );
            setAllUserData(remaining);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container lg:px-20 md:px-12 px-6 my-10">
      <div>
        <div className="bg-[url('https://i.postimg.cc/zGbdQrGM/s7.jpg')] rounded-md w-full h-[250px] bg-center bg-cover">
          <div className="text-white w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-5xl font-medium pt-4 hover:text-[#FAC056] transition-all duration-200 cursor-pointer">
              My Craft
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center pt-12 pb-5">
        <div className="dropdown dropdown-right">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-8 text-base font-medium hover:text-white hover:border-[#FAC056]  transition-ease duration-200 rounded-none focus:border-none focus:text-white border-2 bg-white focus:bg-[#FAC056] border-black hover:bg-[#FAC056]"
          >
            <CiFilter className="" size={28} />
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => handleCustomizable("true")}
                className="hover:text-[#f9bd4c] text-black"
              >
                Customizable
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNotCustomizable("false")}
                className="hover:text-[#ffbe47] text-black"
              >
                Not Customizable
              </a>
            </li>
            <li>
              <a
                onClick={() => handleAll(user?.email)}
                className="hover:text-[#ffbe47] text-black"
              >
                All
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="my-10 grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {allUserData.map((currentData) => (
            <div
              key={currentData._id}
              className="bg-white first-letter: rounded-lg overflow-hidden shadow-lg ring-4 ring-[#FAC056] ring-opacity-40"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={currentData.photoURL}
                  alt="Product Image"
                />
                <h4 className="absolute bottom-0 border left-0 text-[#fda335]  hover:bg-white px-1 text-sm bg-[#ececec]">
                  {currentData.stock}
                </h4>
                <div className="absolute top-0  text-gray-500 right-0 px-2 py-1 m-2 rounded-md text-sm font-medium">
                  {currentData.rating === "5" ? (
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
                <h3 className="text-lg font-medium pb-3">
                  {currentData.product_name}
                </h3>

                <p className="text-gray-600 text-sm mb-1">
                  {currentData.product_details.slice(0, 80)}...
                </p>
                <h4 className=" text-gray-500 pb-1 text-sm">
                  Customization:{" "}
                  {currentData.customize === "true" ? (
                    <span className="text-[#f2b034]">Yes</span>
                  ) : (
                    <span className="text-[#f2b034]">No</span>
                  )}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">
                    ${currentData.price}.00
                  </span>
                </div>
                <div className="flex justify-between pt-5">
                  <Link
                    to={`/update/${currentData._id}`}
                    className="text-white font-bold btn btn-sm rounded-none bg-[#ebab34] hover:bg-[#fac156c9] "
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDeleteCraft(currentData._id)}
                    className="text-white font-bold btn btn-sm rounded-none bg-[#f4b135] hover:bg-[#fac156c9] "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
