import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LensOrdering from "../pages/LensOrdering";
import Profile from "../pages/Profile";

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
    ],
  },
]);
