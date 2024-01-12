import React from "react";
import ReactDOM from "react-dom/client";
import { MoreProjects } from "./pages/moreProjectsPage/MoreProjects.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* reduce browser inconsistencies in things like default line heights,
         margins and font sizes of headings, and so on */}
      <CssBaseline />
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  </React.StrictMode>
);
