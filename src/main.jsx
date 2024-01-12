import React from "react";
import ReactDOM from "react-dom/client";
import { MoreProjects } from "./pages/moreProjectsPage/MoreProjects.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <MoreProjects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
