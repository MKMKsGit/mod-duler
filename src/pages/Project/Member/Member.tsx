import { useParams } from "react-router-dom";
import { mockData } from "../../../utils/mockData";

const Member = () => {
  const { id = "" } = useParams();
  const project = mockData.find((project) => project.id === parseInt(id));
  const { name, owner, members } = project || {};

  const handleClick = () => {
    let modal = document.getElementById("inviteModal")?.classList;
    if (modal?.contains("hidden")) {
      modal.remove("hidden");
    } else {
      modal?.add("hidden");
    }
  };

  return (
    <div>
      <div className="">
        <div className="flex items-center">
          <p className="text-h1">{name}</p>
          <button
            type="button"
            className="block ml-3 py-1 px-2 border-blue-700 border rounded text-blue-700"
            onClick={handleClick}
          >
            + invite member
          </button>
        </div>
        <div
          id="inviteModal"
          tabIndex={-1}
          className="hidden overflow-y-auto overflow-x-hidden fixed flex items-center justify-center z-50 w-full md:inset-0 h-modal md:h-full bg-[rgba(0,0,0,0.5)]"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-h5">Invite Member</h2>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClick}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Username
                  </label>
                  <input
                    name="Username"
                    type="text"
                    className="px-2 py-2 w-full border border-gray-300 text-gray-900 text-sm rounded-lg"
                    placeholder="New member"
                    disabled
                  />
                </div>
              </div>
              <div className="flex justify-end p-6 space-x-2 rounded-b border-t border-gray-200">
                <button
                  type="button"
                  className="rounded bg-primary text-white py-2 px-4 text-center"
                  onClick={handleClick}
                >
                  invite
                </button>
              </div>
            </div>
          </div>
        </div>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              {owner === "Dummy User" ? <th className="px-4 py-2"></th> : null}
            </tr>
          </thead>
          <tbody>
            {members?.map((member, index) => (
              <tr id={member.name} key={member.name}>
                <td className="border px-4 py-2">{member.name}</td>
                <td className="border px-4 py-2">{member.email}</td>
                <td className="border px-4 py-2">{member.role}</td>
                {owner === "Dummy User" && owner !== member.name ? (
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      className="block ml-2 py-1 px-2 border-blue-700 border rounded text-blue-700"
                      onClick={() => {
                        document.getElementById(member.name)?.remove();
                      }}
                    >
                      Remove
                    </button>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Member;
