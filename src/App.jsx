import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";

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
        <h1>hello world</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
