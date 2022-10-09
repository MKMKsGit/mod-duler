import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="container px-8 py-16 mx-auto">
      <div className="flex flex-row justify-center items-center space-x-16">
        <div>
          <img
            alt="meeting"
            className="h-[500px] w-[467px] object-contain"
            src="https://1.bp.blogspot.com/-_GTwRCTvCwI/WzC-xyQXfmI/AAAAAAABNEs/qUWGQKyzYgUtUsoGlG01LYqS0w5H7is0QCLcBGAs/s500/presentation_kaigi_woman.png"
          />
        </div>
        <div>
          <p className=" font-bold mb-3 text-h2">Your new project assistant</p>
          <p className="text-h5">
            Quickly design your project with Mod-duler,
            <br />
            Invite Member to project, Create Task, Assign Task, <br />
            View completion of all Task and View Gantt Chart
          </p>
          <Link to="/register">
            <button className="text-white bg-primary mt-4 rounded-lg px-4 py-2">
              Join us now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Content;
