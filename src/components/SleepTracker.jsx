import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SleepTracker = () => {
  const sleepHours = (Math.random() * (10 - 4) + 4).toFixed(1); // Random sleep hours (4-10)
  const deepSleep = (Math.random() * (5 - 1) + 1).toFixed(1); // Random deep sleep hours (1-5)
  const sleepScore = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random sleep score (60-100)

  // Calculate progress percentages
  const sleepProgress = (sleepHours / 10) * 100;
  const deepSleepProgress = (deepSleep / 5) * 100;
  const scoreProgress = sleepScore; // Sleep score is directly 0-100

  return (
    <Link to="/activity">
      <motion.div
        className="flex items-center my-2 bg-white p-4 rounded-lg mt-6 mx-auto max-w-sm transition-transform hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section - Sleep Stats */}
        <div className="flex-1">
          {/* Total Sleep */}
          <div className="mb-4">
            <p className="text-black font-extrabold text-2xl flex items-center">
              🛏️ {sleepHours} hrs
            </p>
            <motion.div
              className="h-3 rounded-full overflow-hidden bg-purple-200"
              initial={{ width: "0%" }}
              animate={{ width: `${sleepProgress}%` }}
              transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
            >
              <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
            </motion.div>
          </div>

          {/* Deep Sleep */}
          <div className="mb-4">
            <p className="text-black font-semibold text-lg">🌙 {deepSleep} hrs deep sleep</p>
            <motion.div
              className="h-3 rounded-full overflow-hidden bg-blue-200"
              initial={{ width: "0%" }}
              animate={{ width: `${deepSleepProgress}%` }}
              transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
            >
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </motion.div>
          </div>

          {/* Sleep Score */}
          <div>
            <p className="text-black font-semibold text-lg">💤 Sleep Score: {sleepScore}</p>
            <motion.div
              className="h-3 rounded-full overflow-hidden bg-green-200"
              initial={{ width: "0%" }}
              animate={{ width: `${scoreProgress}%` }}
              transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
            >
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600"></div>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Animated Vector */}
        <motion.div
          className="flex items-center justify-center ml-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M3 10h1l2 5h12l2-5h1" />
            <circle cx="7" cy="15" r="2" />
            <circle cx="17" cy="15" r="2" />
            <path d="M5 5h14v4H5z" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default SleepTracker;
