const Navbar = () => {
  return (
    <div className="bg-primary p-3">
      <div className=" flow-root w-full">
        <a href="/" className="px-2 float-left">
          <img
            src="/Logo/White.png"
            alt="logo"
            className="h-8 w-40"
          />
        </a>
        <div className="float-right space-x-4 mr-4">
          <a href="/login">
            <button className="bg-white py-1 px-3 rounded-lg text-primary">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="text-white">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
