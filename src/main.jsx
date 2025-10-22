import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import { RouterProvider } from "react-router";
import { router } from "./router/route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
            <RouterProvider router={router} ></RouterProvider>
      </AuthProvider>
  </React.StrictMode>
);
