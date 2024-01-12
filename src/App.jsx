import Header from "./components/header/Header";
import { MainPage } from "./pages/mainPage/MainPage";

/**
 * Function that structures site
 * Site is structured with a header and a main page
 * @returns App.jsx
 */
function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
