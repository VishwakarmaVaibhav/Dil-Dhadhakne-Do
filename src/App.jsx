import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import DietTracker from "./pages/DietTracker";
import ActivityTracker from "./pages/ActivityTracker";
import Music from "./pages/Music";
import Profile from "./pages/Profile";
import BottomBar from "./components/BottomBar";

function AnimatedRoutes() {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(null);

  // Define page order for direction tracking
  const pages = ["/", "/diet", "/activity", "/music", "/profile"];

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [location.pathname]);

  // Determine slide direction based on navigation
  const prevIndex = prevPath ? pages.indexOf(prevPath) : 1;
  const currentIndex = pages.indexOf(location.pathname);
  const direction = prevIndex < currentIndex ? 1 : -1;

  // No animation for initial home load
  const pageVariants = prevPath
  ? {
      initial: { x: direction * 300,  },
      animate: { x: 0, opacity: 1, transition: { type: "spring", duration: 0.5, ease: "easeInOut" } },
      exit: { x: -direction * 0,transition: { type: "spring", duration: 0.5, ease: "easeInOut" } },
    }
  : {};


  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="absolute w-full h-full"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/diet" element={<DietTracker />} />
          <Route path="/activity" element={<ActivityTracker />} />
          <Route path="/music" element={<Music />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <BottomBar />
    </Router>
  );
}

export default App;
