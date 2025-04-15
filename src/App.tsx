import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Header";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
}

export default App;
