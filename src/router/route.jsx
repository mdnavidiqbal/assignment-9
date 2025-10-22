

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Mainlayout from "../Mainlayout/Mainlayout";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import GameDetails from "../pages/GameDetails";
import Popular from "../pages/Popular";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        index:true,
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/notfound",
        element:<NotFound></NotFound>
      },
      {
        path:"/myprofile",
        element:<MyProfile></MyProfile>
      },
      {
        path:"/gamedetails/:id",
        element:<GameDetails></GameDetails>

      },
      {
        path:"/popular",
        element:<Popular></Popular>
      }
    ]
  },
]);