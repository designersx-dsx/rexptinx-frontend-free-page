import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import GoogleTranslateBoot from "./Component/GoogleTranslateBoot";
function App() {
  return (
    <div className="App">
      <GoogleTranslateBoot />
      <LandingPage />
    </div>
  );
}

export default App;
