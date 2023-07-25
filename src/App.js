import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Static Pages
import HomePage from "./layouts/home-page.jsx";
import About from "./views/about-page/about-page";
import Dashboard from "./layouts/dashboard-page";
import Login from "./views/login-page/login-page";

// View Pages
import Users from "./views/dashboard-pages/users";
import EntryExit from "./views/dashboard-pages/entry-exit";
import Default from "./views/dashboard-pages";
import ErrorPage from "./views/404-page/notf-page";

import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Default />} />
          <Route path="users" element={<Users />} />
          <Route path="entryexit" element={<EntryExit />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to={"/dashboard"} /> : <Login />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
