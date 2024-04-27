import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div className="flex justify-center flex-col h-screen items-center">
        <h1 className="text-6xl font-semibold py-4">404</h1>
        <h3 className="text-3xl font-medium">
          Oops! That Page Can’t Be Found.
        </h3>
        <span className="pt-4">
          Please return to{" "}
          <Link className="text-[#FAC056] font-medium" to="/">
            Home Page
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ErrorPage;
