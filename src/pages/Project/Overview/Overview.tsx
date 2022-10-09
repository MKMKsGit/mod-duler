import Chart from "react-google-charts";
import { useParams } from "react-router-dom";
import { mockData } from "../../../utils/mockData";

export type drawChartProps = {
  tasks:
    | {
        id: number;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        status: boolean;
        assignTo: string;
      }[]
    | undefined;
};

const DrawChart = ({ tasks }: drawChartProps) => {
  let complete = 0;
  let incomplete = 0;
  tasks?.forEach((task) => {
    if (task.status) {
      complete++;
    } else {
      incomplete++;
    }
  });
  const data = [
    ["Status of Task", "Tasks"],
    ["Not complete", incomplete],
    ["Complete", complete],
  ];
  const options = {
    title: "Tasks",
    width: 550,
    height: 400,
    colors: ["#916bbf", "#3d2c8d"],
  };
  return <Chart chartType="PieChart" data={data} options={options} />;
};

const Overview = () => {
  const { id = "" } = useParams();
  const project = mockData.find((project) => project.id === parseInt(id));
  const { name, description, startDate, endDate, owner, tasks } = project || {};
  return (
    <div>
      <p className="text-h1 font-medium">{name}</p>
      <p className="italic">{`${startDate} - ${endDate}`}</p>
      <p className="text-h5">
        <span className="font-medium">{`Description: `}</span>
        {description}
      </p>
      <p className="text-h5">
        <span className="font-medium">{`Project Owner: `}</span>
        {owner}
      </p>
      <DrawChart tasks={tasks} />
    </div>
  );
};
export default Overview;
