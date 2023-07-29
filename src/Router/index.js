import AuthLayout from "../Layouts/Auth";
import MainLayout from "../Layouts/Main";
import Login from "../Pages/Auth/Login";
import Analytics from "../Pages/Dashboard/Analytics";
import Banking from "../Pages/Dashboard/Banking";
import CRM from "../Pages/Dashboard/CRM";
import Ecommerce from "../Pages/Dashboard/Ecommerce";
import Project from "../Pages/Dashboard/Project";

export const routes = [
  {
    path: "/login",
    component: Login,
    layout: AuthLayout,
    user: false,
  },
  {
    path: "/dashboard/analytics",
    component: Analytics,
    layout: MainLayout,
    user: true,
  },
];
