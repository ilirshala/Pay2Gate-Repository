import About from "../Pages/About";
import Blog from "../Pages/Blog";
import ContactPartner from "../Pages/ContactPartner";
import ContactSales from "../Pages/ContactSales";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing";
import Signup from "../Pages/Signup";
import SolManage from "../Pages/SolManage";
import SolMonetize from "../Pages/SolMonetize";
import SolOptimize from "../Pages/SolOptimize";
import ToMonetize from "../Pages/ToMonetize";
import ToSell from "../Pages/ToSell";
import ToSubscribe from "../Pages/ToSubscribe";

export const defaultRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/faq",
    component: Faq,
  },
  {
    path: "/pricing",
    component: Pricing,
  },
  {
    path: "/toSell",
    component: ToSell,
  },
  {
    path: "/toSubscribe",
    component: ToSubscribe,
  },
  {
    path: "/toMonetize",
    component: ToMonetize,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/solution-manage",
    component: SolManage,
  },
  {
    path: "/solution-optimize",
    component: SolOptimize,
  },
  {
    path: "/solution-monetize",
    component: SolMonetize,
  },
  {
    path: "/contact-partner",
    component: ContactPartner,
  },
  {
    path: "/contact-sales",
    component: ContactSales,
  },
];
