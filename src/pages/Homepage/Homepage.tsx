import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const YourProject = () => {
  return (
    <div className="w-full divide-y">
      <text className="text-gray-800 font-medium text-h2 mb-2">
        Your projects
      </text>
      <div>
        <div className="p-6 max-w-sm flex-column">
          <Link
            to={"/project/1/overview"}
            className="text-h5 font-medium underline text-blue-600"
          >
            Mod-duler Project
          </Link>
          <p className="mt-1">Project scheduling website coding</p>
          <p className="mt-2 text-[14px] text-gray-500">Due date: 2021-12-30</p>
        </div>
        <div className="p-6 max-w-sm flex-column">
          <Link
            to={"/project/2/overview"}
            className="text-h5 font-medium underline text-blue-600"
          >
            OS VDO
          </Link>
          <p className="mt-1">VDO Presentation: How to compile linux kernel</p>
          <p className="mt-2 text-[14px] text-gray-500">Due date: 2021-12-01</p>
        </div>
      </div>
    </div>
  );
};

const OtherProjects = () => {
  return (
    <div className="w-full divide-y">
      <text className="text-gray-800 font-medium text-h2 mb-2">
        Other projects
      </text>
      <div>
        <div className="p-6 max-w-sm flex-column">
          <Link
            to={"/project/3/overview"}
            className="text-h5 font-medium underline text-blue-600"
          >
            GEN241 Project
          </Link>
          <p className="mt-1">Music Arrangement Project</p>
          <p className="mt-2 text-[14px] text-gray-500">Due date: 2021-11-30</p>
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="container w-full mx-auto mt-6 flex-row flex gap-20 justify-between">
        <YourProject />
        <OtherProjects />
      </div>
    </>
  );
};
export default Homepage;
