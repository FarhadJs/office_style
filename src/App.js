import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./views/home-page/home-page.jsx";
import About from "./views/about-page/about-page";
import Dashboard from "./layouts/dashboard-page";
import Login from "./views/login-page/login-page";
import ErrorPage from "./views/404-page/notf-page";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to={"/dashboard"} /> : <Login />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
