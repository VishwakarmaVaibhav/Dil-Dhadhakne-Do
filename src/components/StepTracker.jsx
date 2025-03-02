import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StepTracker = () => {
  const steps = Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000; // Random steps between 5K - 20K
  const minutes = Math.floor(Math.random() * (1500 - 500 + 1)) + 500; // Random minutes (500-1500)
  const calories = Math.floor(Math.random() * (2500 - 800 + 1)) + 800; // Random calories (800-2500)

  // Calculate progress percentages
  const stepProgress = (steps / 20000) * 100;
  const minProgress = (minutes / 1500) * 100;
  const calProgress = (calories / 2500) * 100;

  return (
    <Link to="/step-tracker">
      <motion.div
        className="flex bg-white  my-2 items-center rounded-xl p-6 w-full max-w-lg transition-transform hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section - Stats */}
        <div className="flex-1">
          {/* Steps Count */}
          <div className="mb-4">
            <p className="text-black font-extrabold text-2xl flex items-center">
              🥾 {steps.toLocaleString()} steps
            </p>
            <motion.div
              className="h-3 rounded-full overflow-hidden bg-green-200"
              initial={{ width: "0%" }}
              animate={{ width: `${stepProgress}%` }}
              transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
            >
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600"></div>
            </motion.div>
          </div>

          {/* Minutes Progress */}
          <div className="mb-4">
            <p className="text-black font-semibold text-lg">⏳ {minutes} min</p>
            <motion.div
              className="h-3 rounded-full overflow-hidden bg-blue-200"
              initial={{ width: "0%" }}
              animate={{ width: `${minProgress}%` }}
              transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
            >
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </motion.div>
          </div>

          {/* Calories Progress */}
          <div>
            <p className="text-black font-semibold text-lg">🔥 {calories} cal</p>
            <motion.div
              className="h-3 rounded-full overflow-hidden bg-red-200"
              initial={{ width: "0%" }}
              animate={{ width: `${calProgress}%` }}
              transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
            >
              <div className="h-full bg-gradient-to-r from-red-400 to-red-600"></div>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Animated Vector Design */}
        <motion.div
          className="flex items-center justify-center ml-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M17 2 L22 7 L7 22 L2 22 L2 17 Z" />
            <circle cx="7" cy="17" r="3" />
            <circle cx="17" cy="7" r="3" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default StepTracker;
