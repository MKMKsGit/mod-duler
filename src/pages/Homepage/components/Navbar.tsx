import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div
      id="dropdownMenu"
      style={{ display: "none" }}
      className="mt-2 divide-y divide-color-100 z-10 w-44 rounded-lg absolute bg-white border text-primary"
    >
      <ul className="py-2 px-4 text-small" aria-labelledby="userDropdown">
        <li>
          <p>Edit Profile</p>
        </li>
      </ul>
      <div className="py-2 px-4 text-small">
        <Link to={"/"}>Logout</Link>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="bg-primary z-50 sticky top-0 w-full py-3 items-center">
      <div className="mx-auto container flex justify-between">
        <Link to="/home" className="lg:justify-start">
          <img
            src={process.env.PUBLIC_URL + "/assets/Logo/White.png"}
            alt="logo"
            className="w-[152.4px] "
          />
        </Link>
        <div className="text-white">
          <Link to="/home" className="mb-2 lg:mb-0">
            Home&nbsp;&nbsp;|&nbsp;&nbsp;
          </Link>
          <button
            type="button"
            id="userDropdown"
            className="inline-flex items-center"
            onClick={() => {
              const dropdownDisplay =
                document.getElementById("dropdownMenu")?.style.display;
              if (dropdownDisplay === "none") {
                document.getElementById("dropdownMenu")!.style.display =
                  "block";
              } else {
                document.getElementById("dropdownMenu")!.style.display = "none";
              }
            }}
          >
            Dummy User{" "}
            <svg
              className="ml-1 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <DropdownMenu />
        </div>
      </div>
    </header>
  );
};
