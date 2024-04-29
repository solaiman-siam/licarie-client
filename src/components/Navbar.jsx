import logo from "../../src/assets/images/licarie-logo.png";
import { Divide as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProviderComponent";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("signout successfully"))
      .catch((error) => console.log(error));
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative container mx-auto lg:px-20 md:px-10 px-6  ">
      <div className="flex ">
        {/* <!-- sidebar --> */}
        <div
          className={
            isOpen
              ? "lg:hidden md:hidden  flex-col w-64  z-50  h-screen absolute  left-0"
              : "lg:hidden md:hidden flex-col w-64  hidden"
          }
        >
          <div className="flex items-center  justify-center h-16  ">
            <span className="text-white font-bold uppercase">
              <img className="w-40" src={logo} alt="" />
            </span>
          </div>
          <div className="flex flex-col flex-1  overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-200">
              <div className="flex flex-col list-none gap-2 font-medium">
                <li className="hover:text-[#F9BF56] py-2  pl-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "  text-[#F9BF56]" : "hover:text-[#F9BF56]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-[#F9BF56] py-2  pl-8">
                  <NavLink
                    to="/allproducts"
                    className={({ isActive }) =>
                      isActive ? "  text-[#F9BF56]" : "hover:text-[#F9BF56]"
                    }
                  >
                    All Art & Craft
                  </NavLink>
                </li>
                <li className="hover:text-[#F9BF56] py-2  pl-8">
                  <NavLink
                    to="/mycart"
                    className={({ isActive }) =>
                      isActive ? "  text-[#F9BF56]" : "hover:text-[#F9BF56]"
                    }
                  >
                    My Craft
                  </NavLink>
                </li>
                <li className="hover:text-[#F9BF56] py-2  pl-8">
                  <NavLink
                    to="/addProducts"
                    className={({ isActive }) =>
                      isActive ? "  text-[#F9BF56]" : "hover:text-[#F9BF56]"
                    }
                  >
                    Add Craft
                  </NavLink>
                </li>
              </div>
              <div className="pl-8">
                {user ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="btn mt-4  rounded-none px-8 btn-sm bg-[#FAC056] hover:bg-[#FAC056] text-white"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex">
                      <button className="btn btn-sm  mt-4 px-4 rounded-none bg-[#FAC056] hover:bg-[#FAC056] text-white">
                        <Link to="/login">Login</Link>
                      </button>
                      <button className="btn ml-2 px-4 text-sm lg:mt-0 md:mt-0 btn-sm lg:px-3 md:px-3 mt-4 rounded-none bg-[#FAC056] hover:bg-[#FAC056] text-white">
                        <Link to="/signUp">Signup</Link>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div className="flex flex-col  flex-1  transition-all duration-200">
          <div className="flex items-center  justify-between   h-20  border-b border-gray-200">
            <div className="flex items-center ">
              <Link to="/">
                <img
                  className={isOpen ? "hidden " : 'lg:w-40 md:w-36 w-36 "'}
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="lg:flex list-none gap-6 font-medium hidden md:flex">
              <div className=" flex items-center justify-center">
                <div className="relative  hover:text-[#F9BF56] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#F9BF56] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#F9BF56] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "  text-[#F9BF56]" : "hover:text-[#F9BF56]"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                </div>
              </div>

              <div className=" flex items-center justify-center">
                <div className="relative  hover:text-[#F9BF56] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#F9BF56] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#F9BF56] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                  <li>
                    <NavLink
                      to="/allproducts"
                      className={({ isActive }) =>
                        isActive ? "  text-[#F9BF56]" : ""
                      }
                    >
                      All Art & Craft
                    </NavLink>
                  </li>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative  hover:text-[#F9BF56] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#F9BF56] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#F9BF56] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                  <li>
                    <NavLink
                      to="/addproducts"
                      className={({ isActive }) =>
                        isActive ? "  text-[#F9BF56]" : ""
                      }
                    >
                      Add Craft
                    </NavLink>
                  </li>
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <div className="relative  hover:text-[#F9BF56] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#F9BF56] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#F9BF56] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                  <li>
                    <NavLink
                      to="/mycart"
                      className={({ isActive }) =>
                        isActive ? "  text-[#F9BF56]" : ""
                      }
                    >
                      My Craft
                    </NavLink>
                  </li>
                </div>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="lg:mr-3 md:mr-3 mt-1">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    onChange={handleTheme}
                    type="checkbox"
                    className="theme-controller"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off  fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on  fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              <div>
                <div className="dropdown dropdown-end z-50">
                  {user ? (
                    <>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={user?.displayName || ""}
                      >
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full hover:ring-3  ring-2 ring-yellow-500">
                            {user ? (
                              <>
                                {" "}
                                <img
                                  src={user?.photoURL || "not found"}
                                  alt=""
                                />
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </a>
                      <Tooltip id="my-tooltip" className="z-50" />
                      <ul
                        tabIndex={0}
                        className="menu menu-sm hidden   dropdown-content mt-3 z-[1] p-4 shadow bg-base-100  w-fit "
                      >
                        <div className="flex flex-col items-center">
                          <h4 className="text-center font-bold text-xl">
                            {user ? (
                              <>
                                <p>{user?.displayName || "not found"}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </h4>
                          {user ? (
                            <>
                              <button
                                onClick={handleSignOut}
                                className="btn mt-4  rounded-none btn-sm bg-[#FAC056] hover:bg-[#FAC056] text-white"
                              >
                                Logout
                              </button>
                            </>
                          ) : (
                            <>
                              <button className="btn btn-sm rounded-none bg-[#FAC056] hover:bg-[#FAC056] text-white">
                                <Link to="/login">Login</Link>
                              </button>
                            </>
                          )}
                        </div>
                      </ul>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleSignOut}
                        className="btn mt-4 hidden   rounded-none btn-sm bg-[#FAC056] hover:bg-[#FAC056] text-white"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="hidden md:flex lg:flex">
                {user ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="btn mt-4 lg:mt-0 md:mt-0 ml-2 rounded-none text-sm lg:px-3 md:px-3 px-8  btn-sm bg-[#FAC056] hover:bg-[#FAC056] text-white"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <button className="btn text-sm lg:mt-0 md:mt-0 btn-sm px-8 lg:px-4 md:px-3 mt-3 rounded-none bg-[#FAC056] hover:bg-[#FAC056] text-white">
                        <Link to="/login">Login</Link>
                      </button>
                      <button className="btn ml-2 text-sm lg:mt-0 md:mt-0 btn-sm px-8 lg:px-3 md:px-3 mt-4 rounded-none bg-[#FAC056] hover:bg-[#FAC056] text-white">
                        <Link to="/signUp">Signup</Link>
                      </button>
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => setOpen(!isOpen)}
                className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 ml-2 lg:hidden md:hidden"
              >
                <Hamburger
                  size={28}
                  color="black"
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
