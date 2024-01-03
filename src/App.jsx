import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/header/Header";
import { MainPage } from "./pages/mainPage/MainPage";

// Apply dark theme for the site
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

/**
 * Function that structures site
 * Site is structured with a header and a main page
 * @returns App.jsx
 */
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* reduce browser inconsistencies in things like default line heights,
         margins and font sizes of headings, and so on */}
        <CssBaseline />
        <Header />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
