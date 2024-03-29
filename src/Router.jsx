import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import { MoreProjects } from "./pages/moreProjectsPage/MoreProjects";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

/**
 * Renders the router component for the application. Router.jsx manages the
 * routing of the application.
 * @returns {JSX.Element} The router component.
 */
const Router = () => {
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

  return (
    <ThemeProvider theme={darkTheme}>
      {/* reduce browser inconsistencies in things like default line heights,
                 margins and font sizes of headings, and so on */}
      <CssBaseline />
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  );
};

export default Router;
