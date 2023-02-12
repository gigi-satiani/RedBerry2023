import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateInformation } from "./components/pages/privateInformation";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "registration", element: <PrivateInformation /> },
]);

root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
