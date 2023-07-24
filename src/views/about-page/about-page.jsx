import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-neutral-600 text-white h-screen p-3">
      <h1>Hello! this is About Page.</h1>
      <div>
        <Link to={"/"}>Go To Home Page</Link>
      </div>
    </div>
  );
};

export default AboutPage;
