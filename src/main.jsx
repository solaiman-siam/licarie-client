import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import AuthProviderComponent from "./AuthContext/AuthProviderComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviderComponent>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviderComponent>
  </React.StrictMode>
);
