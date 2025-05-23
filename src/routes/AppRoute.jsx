import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/user/Profile";
import Withdrawals from "../pages/user/Withdrawals";
import Task from "../pages/task/Task";
import TaskMonitor from "../pages/task/TaskMonitor";
import Affiliate from "../pages/affiliate/Affiliate";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:'/profile',
                Component:Profile
            },
            {
                path:'/withdrawals',
                Component:Withdrawals
            },
            {
                path:'/tasks',
                Component:Task
            },
            {
                path:'/task-monitor',
                Component:TaskMonitor
            },
            {
                path:'/affiliate',
                Component:Affiliate
            }
        ]
    }
]);

export default router;