import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StyledNavbar from "../src/components/stylednavbar";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProjectLayout from "./pages/SharedProjectLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import "./App.css";
import Home from "./pages/home.js";
import Tickets from "./pages/tickets";

function App() {
  const [user, setUser] = useState(null);
  function handleLogin(userData) {
    setUser(userData);
  }

  function handleLogout() {
    setUser(null);
  }
  return (
    <BrowserRouter>
      <StyledNavbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tickets" element={<Tickets />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
