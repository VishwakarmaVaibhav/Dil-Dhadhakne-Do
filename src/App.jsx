import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DietTracker from "./pages/DietTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diet" element={<DietTracker />} />
        



      </Routes>
    </Router>
  );
}

export default App;
