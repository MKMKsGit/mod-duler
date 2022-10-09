import { Navigate } from "react-router-dom";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Homepage from "./pages/Homepage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import GanttChart from "./pages/Project/GanttChart";
import Layout from "./pages/Project/Layout";
import Member from "./pages/Project/Member";
import Overview from "./pages/Project/Overview";
import Task from "./pages/Project/Task";
import Register from "./pages/Register";

const AppRoute = () => {
  const landingPath = "/mod-duler";
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="home/" element={<Homepage />}>
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="project/:id">
          <Route
            path="overview"
            element={
              <Layout>
                <Overview />
              </Layout>
            }
          />
          <Route
            path="task"
            element={
              <Layout>
                <Task />
              </Layout>
            }
          />
          <Route
            path="member"
            element={
              <Layout>
                <Member />
              </Layout>
            }
          />
          <Route
            path="ganttchart"
            element={
              <Layout>
                <GanttChart />
              </Layout>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
