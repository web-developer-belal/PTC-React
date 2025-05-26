import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/user/Profile";
import Withdrawals from "../pages/user/Withdrawals";
import Task from "../pages/task/Task";
import TaskMonitor from "../pages/task/TaskMonitor";
import Affiliate from "../pages/affiliate/Affiliate";
import Setting from "../pages/settings/Setting";
import General from "../pages/settings/General";
import AppearanceSetting from "../pages/settings/AppearanceSetting";
import NotificationSetting from "../pages/settings/NotificationSetting";
import Security from "../pages/settings/Security";
import PaymentSetting from "../pages/settings/PaymentSetting";

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
            },
            {
                path:'/settings',
                Component:Setting
            },
            {
                path:'/settings/general',
                Component:General
            },
            {
                path:'/settings/appearance',
                Component:AppearanceSetting
            },
            {
                path:'/settings/notifications',
                Component:NotificationSetting
            },
            {
                path:'/settings/security',
                Component:Security
            },
            {
                path:'/settings/payments',
                Component:PaymentSetting
            }
        ]
    }
]);

export default router;