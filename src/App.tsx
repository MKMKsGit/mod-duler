import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="home/" element={<Homepage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="project/">
            <Layout>
              <Route index element={<Overview />} />
              <Route path="task" element={<Task />} />
              <Route path="member" element={<Member />} />
              <Route path="ganttchart" element={<GanttChart />} />
              <Route path="*" element={<NotFound />} />
            </Layout>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
