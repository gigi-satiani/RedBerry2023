import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import FormRegistration from "./components/formRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "formRegistration",
    element: <FormRegistration />,
  },
]);

root.render(<RouterProvider router={router} />);
