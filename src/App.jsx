import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DietTracker from "./pages/DietTracker";
import ActivityTracker from "./pages/ActivityTracker";
import Music from "./pages/Music";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diet" element={<DietTracker />} />
        <Route path="/Activity" element={<ActivityTracker/>}/>
        <Route path="/music" element={<Music/>} />
        <Route path="/profile" element={<Profile/>}/>
        



      </Routes>
    </Router>
  );
}

export default App;
