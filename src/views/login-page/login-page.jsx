import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-neutral-600 text-white h-screen">
      <h1>this is a Login Page</h1>
      <div className="my-5">
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default LoginPage;
