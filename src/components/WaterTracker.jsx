import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WaterTracker = () => {
  const waterConsumed = Math.floor(Math.random() * 4) + 4; // Random value between 4L-8L
  const goal = 8;
  const progress = (waterConsumed / goal) * 100;

  return (
    <Link to="/activity">
      <motion.div
        className="flex items-center my-2 bg-white p-4 rounded-lg mt-6 mx-auto max-w-sm transition-transform hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left - Water Stats */}
        <div className="flex-1">
          <p className="text-black font-extrabold text-2xl flex items-center">
            💧 {waterConsumed}L
          </p>
          <motion.div
            className="h-3 rounded-full overflow-hidden bg-blue-200"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeInOut", bounce: 0.3 }}
          >
            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          </motion.div>
        </div>

        {/* Right - Animated Water Vector */}
        <motion.div
          className="ml-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <path d="M12 2C12 2 6 10 6 14a6 6 0 0 0 12 0c0-4-6-12-6-12z" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default WaterTracker;
