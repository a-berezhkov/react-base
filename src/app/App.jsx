import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ReviewsPage from "../pages/ReviewsPage";
import Layout from "./Layout";
import MapPage from "../pages/MapPage";
import Profile from "../pages/Profile";
import LogInPage from "../pages/LogInPage";
import RegPage from "../pages/RegPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,

    children: [
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/reviews",
        element: <ReviewsPage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/reg",
        element: <RegPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
