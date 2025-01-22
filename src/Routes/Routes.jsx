import { createBrowserRouter } from "react-router-dom";
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
      // Buyer Dashboard Routes
      {
        path: "/dashboard/buyerHome",
        element: <BuyerHome></BuyerHome>
      },
      {
        path: "/dashboard/addNewTask",
        element: <AddNewTask></AddNewTask>,
      },
      {
        path: "/dashboard/purchaseCoin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "/dashboard/myTask",
        element: <MyTask></MyTask>
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      
      // Worker DashBoard Routes
      {
        path: "/dashboard/workerHome",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "/dashboard/taskList",
        element: <TaskList></TaskList>
      },
      {
        path: "/dashboard/mySubmissions",
        element: <MySubmissions></MySubmissions>
      },
      {
        path: "/dashboard/withdrawals",
        element: <Withdrawals></Withdrawals>
      },
      


    ]
  },
]);