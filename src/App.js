import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <div id="google_translate_element" style={{ display: "none" }} /> */}
      <LandingPage />
    </div>
  );
}

export default App;
