import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GameDetails from "./pages/GameDetails";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import { form } from "framer-motion/client";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="game/:id" element={<PrivateRoute><GameDetails /></PrivateRoute>} />
        <Route path="my-profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
        <Route path="update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
