import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login1.js";
import Signup from "./pages/Signup.js";
import Home from "./pages/Home.js";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        {/* <Dashboard /> */}
        <Login />
        {/* <Signup /> */}
        {/* <Home /> */}
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
