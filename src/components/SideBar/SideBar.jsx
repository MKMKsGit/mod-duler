import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const current_page = (current_name) => {
  const elements = {
    task: document.getElementById("task"),
    member: document.getElementById("member"),
    ganttchart: document.getElementById("ganttchart"),
    overview: document.getElementById("overview"),
  };
  for (const key in elements) {
    const element = elements[key];
    if (key === current_name) {
      element.style.backgroundColor = "#916bbf";
      element.style.color = "white";
      document.getElementById(
        `${key}_img`
      ).src = `${process.env.PUBLIC_URL}/assets/Pictures/${key}.png`;
    } else {
      element.style.backgroundColor = "transparent";
      element.style.color = "#916bbf";
      document.getElementById(
        `${key}_img`
      ).src = `${process.env.PUBLIC_URL}/assets/Pictures/${key}_c.png`;
    }
  }
};

const sidebar_check = () => {
  const pathnames = {
    1: "task",
    2: "member",
    3: "ganttchart",
    4: "overview",
  };
  for (let i = 1; i <= 4; i++) {
    if (window.location.href.includes(pathnames[i])) {
      current_page(pathnames[i]);
    }
  }
};

const LogoImage = styled.img`
  width: 24px;
  height: 24px;
  display: inline-block;
`;

const LogoBox = styled.li`
  padding: 12px;
  border-bottom-width: 1px;
  justify-items: center;
  align-items: center;
  color: #916bbf;
`;

const LogoLink = styled(Link)``;

export const SideBar = () => {
  const { id } = useParams();
  useEffect(() => sidebar_check());
  return (
    <div className="bg-gray-100 h-full w-[130px] z-50 fixed float-left">
      <ul className="flex-col">
        <LogoBox id="overview">
          <LogoLink to={`/project/${id}/overview`} title="overview">
            <LogoImage
              id="overview_img"
              alt="overview"
              src={`${process.env.PUBLIC_URL}/assets/Pictures/overview_c.png`}
            />
            &nbsp;&nbsp;Overview
          </LogoLink>
        </LogoBox>
        <LogoBox id="task">
          <LogoLink to={`/project/${id}/task`} title="task">
            <LogoImage
              id="task_img"
              alt="task"
              src={`${process.env.PUBLIC_URL}/assets/Pictures/task_c.png`}
            />
            &nbsp;&nbsp;Task
          </LogoLink>
        </LogoBox>
        <LogoBox id="member">
          <LogoLink to={`/project/${id}/member`} title="member">
            <LogoImage
              id="member_img"
              alt="member"
              src={`${process.env.PUBLIC_URL}/assets/Pictures/member_c.png`}
            />
            &nbsp;&nbsp;Member
          </LogoLink>
        </LogoBox>
        <LogoBox id="ganttchart">
          <LogoLink to={`/project/${id}/ganttchart`} title="ganttchart">
            <LogoImage
              id="ganttchart_img"
              alt="ganttchart"
              src={`${process.env.PUBLIC_URL}/assets/Pictures/ganttchart_c.png`}
            />
            &nbsp;&nbsp;Gantt
          </LogoLink>
        </LogoBox>
      </ul>
    </div>
  );
};
