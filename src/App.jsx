import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/header/Header";
import { MainPage } from "./pages/mainPage/MainPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

/**
 * Function that structures site
 * @returns App.jsx
 */
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <MainPage />{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
