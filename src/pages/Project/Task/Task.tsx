import { useState } from "react";
import { useParams } from "react-router-dom";
import { mockData } from "../../../utils/mockData";

const TaskCheckbox = ({
  status,
  id,
  assign,
}: {
  status: boolean;
  id: number;
  assign: string;
}) => {
  const [checked, setChecked] = useState(status);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="mt-2">
      <p
        className={`text-subtitle1 ${
          checked ? "text-green-700" : "text-red-600"
        }`}
      >
        {checked ? "Complete" : "Not Complete"}
      </p>
      {assign === "Dummy User" ? (
        <label
          htmlFor={`toggle-${id}`}
          className="inline-flex relative items-center cursor-pointer mt-1"
        >
          <input
            type="checkbox"
            value=""
            id={`toggle-${id}`}
            className="sr-only peer"
            checked={checked}
            onChange={handleChange}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ) : null}
    </div>
  );
};

const Task = () => {
  const { id = "" } = useParams();
  const project = mockData.find((project) => project.id === parseInt(id));
  const { owner, tasks } = project || {};

  return (
    <div>
      <div className="flex items-center">
        <p className="text-h1 block">Task</p>
        {owner === "Dummy User" ? (
          <button
            type="button"
            className="block ml-2 py-1 px-2 border-blue-700 border rounded text-blue-700"
          >
            + Create Task
          </button>
        ) : null}
      </div>
      {tasks?.map((task) => (
        <div key={`card-${task.id}`} className="p-4">
          <p className="text-h3 font-medium">{task.name}</p>
          <p className="text-subtitle2 mt-1">Responsible by {task.assignTo}</p>
          <p className="text-body1 mt-2">{task.description}</p>
          <TaskCheckbox
            status={task.status}
            id={task.id}
            assign={task.assignTo}
          />
          <div className="mt-2 float-right flex items-center">
            <p>End date: {task.endDate}</p>
            {owner === "Dummy User" ? (
              <button
                type="button"
                className="block mx-2 py-1 px-2 border-blue-700 border rounded text-blue-700"
              >
                Edit Task
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Task;
