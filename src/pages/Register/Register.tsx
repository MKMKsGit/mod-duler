import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Pictures/login_bg.png)`,
      }}
      className="bg-center bg-no-repeat h-screen bg-fixed bg-cover bg-primary flex items-center justify-center"
    >
      <div className="max-w-[330px] w-full p-[15px] m-auto">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/Logo/White.png"}
            alt="logo"
            className="w-full m-auto"
          />
        </Link>
        <form>
          <div className="mt-4">
            <input
              className=" h-12 text-white border-white border bg-white/30 w-full p-2 rounded-t-lg"
              type="text"
              placeholder="Username"
              readOnly
            />
            <input
              className=" h-12 border-white border border-t-0 bg-white/30 w-full p-2"
              type="password"
              placeholder="Password"
              readOnly
            />
            <input
              className=" h-12 border-white border border-t-0 bg-white/30 w-full p-2"
              type="text"
              placeholder="Name"
              readOnly
            />
            <input
              className=" h-12 border-white border border-t-0 bg-white/30 w-full p-2 rounded-b-lg"
              type="Email"
              placeholder="Email"
              readOnly
            />
            <button
              type="button"
              className="px-3 py-2.5 text-white w-full mt-4 bg-[#3d2c8d] rounded"
              onClick={() => {
                navigate("/login");
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
