import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/home-page/home-page.jsx";
import About from "./views/about-page/about-page";
import Dashboard from "./layouts/dashboard-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
