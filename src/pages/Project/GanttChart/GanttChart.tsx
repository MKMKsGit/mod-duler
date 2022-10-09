import Chart from "react-google-charts";
import { useParams } from "react-router-dom";
import { mockData } from "../../../utils/mockData";
import { drawChartProps } from "../Overview/Overview";
const DrawGantt = ({ tasks }: drawChartProps) => {
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  const sortedTasks = tasks?.sort((a, b) => {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });
  const rows: Array<Array<string | number | Date | null>> =
    sortedTasks?.map((task) => {
      const toInt = (date: string[]) => {
        const [day, month, year] = date;
        return [parseInt(year), parseInt(month), parseInt(day)];
      };

      const endDateData = task.endDate.split(", ")[1];
      const endDateList = toInt(endDateData.split("/"));
      const startDateList = toInt(task.startDate.split("/"));

      const endDate = new Date(endDateList[0], endDateList[1], endDateList[2]);
      const startDate = new Date(
        startDateList[0],
        startDateList[1],
        startDateList[2]
      );

      return [
        task.id.toString(),
        task.name,
        task.assignTo,
        startDate,
        endDate,
        null,
        task.status ? 100 : 0,
        null,
      ];
    }) ?? [];

  const data = [columns, ...rows];

  const options = {
    height: (rows?.length ?? 0) * 41 + 30, //gantt chart's height depends on amount of rows
    gantt: {
      criticalPathEnabled: false,
      trackHeight: 30,
    },
  };

  return <Chart chartType="Gantt" data={data} options={options} />;
};
const GanttChart = () => {
  const { id = "" } = useParams();
  const project = mockData.find((project) => project.id === parseInt(id));
  const { tasks } = project || {};
  return (
    <>
      <DrawGantt tasks={tasks} />
    </>
  );
};
export default GanttChart;
