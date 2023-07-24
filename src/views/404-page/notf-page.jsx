import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      Sorry. this Page is Not Found!
      <Link to={"/"}> Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
