import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-primary p-3">
      <div className=" flow-root w-full">
        <Link to="/" className="px-2 float-left">
          <img src={process.env.PUBLIC_URL+"/assets/Logo/White.png"} alt="logo" className="h-8 w-40" />
        </Link>
        <div className="float-right space-x-4 mr-4">
          <Link to="/login">
            <button className="bg-white py-1 px-3 rounded-lg text-primary">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="text-white">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
