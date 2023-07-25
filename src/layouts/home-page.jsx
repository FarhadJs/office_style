import Logo from "./../assets/logo.jpg";
const HomePage = () => {
  return (
    <div className={"p-3"}>
      <h1>Welcome to the Office Style</h1>
      <h3>this Place is for Develope your Customize Business</h3>
      <img src={Logo} alt="Office_Style logo" className="w-96 mx-auto my-10" />
    </div>
  );
};

export default HomePage;
