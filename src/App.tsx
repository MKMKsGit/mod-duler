import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
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
import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="home/" element={<Homepage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="project/">
            <Route
              index
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
