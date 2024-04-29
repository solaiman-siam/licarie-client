import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProviderComponent";
import { FaGithub } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
function Login() {
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { email, password };
    console.log(loginInfo);

    // createUser
    loginUser(email, password)
      .then((res) => {
        navigate(location.state || "/");

        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        console.log(res.user);
      })
      .catch((error) => {
        Swal.fire({
          title: "Password or Email didn't matchl!",
          icon: "error",
        });
        console.log(error);
      });
  };

  // GoogleSignIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Password or Email didn't matchl!",
          icon: "error",
        });
        console.log(error);
      });
  };

  // GithubSignIn
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        navigate(location.state || "/");
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        console.log(res.user);
      })
      .catch((error) => {
        Swal.fire({
          title: "Password or Email didn't matchl!",
          icon: "error",
        });
        console.log(error);
      });
  };

  return (
    <div>
      <div className="lg:h-screen  md:flex">
        <div className="relative  overflow-hidden md:flex w-full bg-gradient-to-tr from-[#DDB07F] to-[#FAC056] i justify-around items-center hidden">
          <div>
            <p className="text-white mt-1">
              <Fade direction="top" duration={2000}>
                <h1 className="text-white font-bold text-4xl font-sans">
                  Licarie
                </h1>
                <p>We offer the best products</p>
              </Fade>
            </p>
            <Link to="/">
              <button
                type="submit"
                className=" btn rounded-none hover:bg-white block w-28 bg-white text-gray-900 mt-4 py-2  font-bold mb-2"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full   lg:px-32 md:px-10 px-10  md:w-full justify-center py-10 items-center bg-white">
          <form onSubmit={handleLogin} className="bg-white w-full   ">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Login to Licarie
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="flex  items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex relative items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                id="name"
                placeholder="Password"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-2.5 cursor-pointer"
              >
                {showPassword ? (
                  <>
                    <IoIosEye size={24} />
                  </>
                ) : (
                  <>
                    <IoIosEyeOff size={24} />
                  </>
                )}
              </div>
            </div>

            <button
              type="submit"
              className=" btn hover:bg-gray-900 rounded-none block w-full bg-gray-900 mt-4 py-2  text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-yellow-500 cursor-pointer">
              Forgot Password ?
            </span>
          </form>
          <div className="flex flex-col lg:flex-row md:flex-row gap-2 pt-6 ">
            <div className="flex items-center justify-center  dark:bg-gray-800">
              <button
                onClick={handleGoogleSignIn}
                className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
              >
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
            <div className="flex items-center justify-center  dark:bg-gray-800">
              <button
                onClick={handleGithubSignIn}
                className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
              >
                <FaGithub size={25} />

                <span>Login with Github</span>
              </button>
            </div>
          </div>
          <p className="pt-10">
            Already have account?{" "}
            <Link to="/signup" className="link-hover  hover:text-yellow-500">
              SignUp
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
