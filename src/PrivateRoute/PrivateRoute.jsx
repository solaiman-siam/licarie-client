import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProviderComponent";
import { Navigate, useLocation } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import PropTypes from "prop-types";
function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <BarLoader
          color={"#FAC056"}
          loading={loading}
          size={250}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return <div>{children}</div>;
}

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
