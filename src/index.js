import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/Home.js";
import FormRegistration from "./components/pages/main.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "formRegistration",
    element: <FormRegistration />,
  },
]);

root.render(<RouterProvider router={router} />);
