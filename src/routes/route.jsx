import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import AllProducts from "../components/AllProducts";
import MyCart from "../components/MyCart";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AddProducts from "../components/AddProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "addproducts",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);
