import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
