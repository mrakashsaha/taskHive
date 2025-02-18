import { createBrowserRouter, Navigate } from "react-router-dom";
import BasicLayout from "../Layout/BasicLayout";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import AddNewTask from "../Pages/BuyerPages/AddNewTask";
import PurchaseCoin from "../Pages/BuyerPages/PurchaseCoin";
import MyTask from "../Pages/BuyerPages/MyTask";
import Payment from "../Pages/BuyerPages/Payment";
import PaymentHistory from "../Pages/BuyerPages/PaymentHistory";
import BuyerHome from "../Pages/BuyerPages/BuyerHome";
import WorkerHome from "../Pages/WorkerPages/WorkerHome";
import TaskList from "../Pages/WorkerPages/TaskList";
import MySubmissions from "../Pages/WorkerPages/MySubmissions";
import Withdrawals from "../Pages/WorkerPages/Withdrawals";
import TaskDetails from "../Pages/WorkerPages/TaskDetails";
import AdminHome from "../Pages/AdminPages/AdminHome";
import ManageTask from "../Pages/AdminPages/ManageTask";
import ManageUsers from "../Pages/AdminPages/ManageUsers";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import WorkerRoute from "./WorkerRoute";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import BecomeSeller from "../Pages/BecomeBuyer";
import BecomeBuyer from "../Pages/BecomeBuyer";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/buyer",
        element: <BecomeBuyer></BecomeBuyer>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      // Only Dashboard Path should naviagte to Dashboard
      {
        path: "/dashboard",
        element: <Navigate to={"/"}></Navigate>
      },

      // Buyer Dashboard Routes
      {
        path: "/dashboard/buyerHome",
        element: <BuyerRoute><BuyerHome></BuyerHome></BuyerRoute>
      },
      {
        path: "/dashboard/addNewTask",
        element: <BuyerRoute> <AddNewTask></AddNewTask> </BuyerRoute>
      },
      {
        path: "/dashboard/purchaseCoin",
        element: <BuyerRoute> <PurchaseCoin></PurchaseCoin> </BuyerRoute>
      },
      {
        path: "/dashboard/myTask",
        element: <BuyerRoute> <MyTask></MyTask> </BuyerRoute>
      },
      {
        path: "/dashboard/payment",
        element: <BuyerRoute> <Payment></Payment> </BuyerRoute>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <BuyerRoute> <PaymentHistory></PaymentHistory> </BuyerRoute>
      },

      // Worker DashBoard Routes
      {
        path: "/dashboard/workerHome",
        element: <WorkerRoute> <WorkerHome></WorkerHome> </WorkerRoute>,
      },
      {
        path: "/dashboard/taskList",
        element: <WorkerRoute> <TaskList></TaskList> </WorkerRoute>
      },
      {
        path: "/dashboard/taskDetails/:id",
        element: <WorkerRoute> <TaskDetails></TaskDetails> </WorkerRoute>
      },
      {
        path: "/dashboard/mySubmissions",
        element: <WorkerRoute> <MySubmissions></MySubmissions> </WorkerRoute>
      },
      {
        path: "/dashboard/withdrawals",
        element: <WorkerRoute> <Withdrawals></Withdrawals> </WorkerRoute>
      },
      // Admin Routes
      {
        path: "/dashboard/adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },

      {
        path: "/dashboard/manageTask",
        element: <AdminRoute><ManageTask></ManageTask></AdminRoute>,
      },

      {
        path: "/dashboard/manageUsers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },



    ]
  },
]);