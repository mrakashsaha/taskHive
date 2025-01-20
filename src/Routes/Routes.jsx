import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../Layout/BasicLayout";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import AddNewTask from "../Pages/AdminPages/AddNewTask";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard/addNewTask",
        element: <AddNewTask></AddNewTask>,
      },
    ]
  },
]);