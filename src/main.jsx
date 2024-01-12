import React from "react";
import ReactDOM from "react-dom/client";
/* import { MoreProjects } from "./pages/moreProjectsPage/MoreProjects.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"; */
import Router from "./Router.jsx";

/* const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <MoreProjects />,
  },
]); */

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>

      <CssBaseline />
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  </React.StrictMode> */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
