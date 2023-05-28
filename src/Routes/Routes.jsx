import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/UserLog/Login";
import SignUp from "../Pages/UserLog/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../../ErrorPage";
import Contact from "../Pages/ContactUs/Contact";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: "/order/:category",
            element: <PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);