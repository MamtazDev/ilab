import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LensOrdering from "../pages/LensOrdering";
import Profile from "../pages/Profile";
import Status from "../pages/Status";
import Settings from "../pages/Settings";
import MyOrder from "../pages/MyOrder";
import Receipt from "../pages/Receipt";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Profile></Profile>,
      },
      {
        path: "/lens-ordering",
        element: <LensOrdering></LensOrdering>,
      },
      {
        path: "/status",
        element: <Status></Status>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/my-order",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/receipt",
        element: <Receipt></Receipt>,
      },
    ],
  },
]);
