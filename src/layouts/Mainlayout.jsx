import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <div className="font-jost">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Mainlayout;
