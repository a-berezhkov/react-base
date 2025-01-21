import { useEffect, useState } from "react";
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

function App() {
  const [user, setUser] = useState(null);

  

  async function checkUser() {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(
      `https://66f17adb4153791915511635.mockapi.io/users?accessToken=${accessToken}`
    );
    const userData = await response.json();
    setUser(userData[0]);
  }

  useEffect(() => {
    checkUser()
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout user={user} />,

      children: [
        {
          path: "/map",
          element: <MapPage user={user} />,
        },
        {
          path: "/profile",
          element: <Profile  user={user}  setUser={setUser} />,
        },
        {
          path: "/reviews",
          element: <ReviewsPage />,
        },
        {
          path: "/login",
          element: <LogInPage setUser={setUser} />,
        },
        {
          path: "/reg",
          element: <RegPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
