import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeartRateTracker = () => {
  const restingHR = Math.floor(Math.random() * 20) + 50; // 50-70 bpm
  const activeHR = Math.floor(Math.random() * 60) + 100; // 100-160 bpm
  const progressResting = Math.min((restingHR / 100) * 100, 100);
  const progressActive = Math.min((activeHR / 200) * 100, 100);

  return (
    <Link to="/heart-rate-tracker">
      <motion.div
        className="flex bg-white my-2 rounded-xl p-6 w-full max-w-lg transition-transform hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1">
          <p className="text-black font-extrabold text-2xl flex items-center">
            ❤️ {restingHR} bpm (Rest)
          </p>
          <motion.div
            className="h-3 rounded-full overflow-hidden bg-red-200"
            initial={{ width: "0%" }}
            animate={{ width: `${progressResting}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="h-full bg-red-500"></div>
          </motion.div>

          <p className="text-black font-semibold text-lg mt-2">🔥 {activeHR} bpm (Active)</p>
          <motion.div
            className="h-3 rounded-full overflow-hidden bg-orange-200"
            initial={{ width: "0%" }}
            animate={{ width: `${progressActive}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="h-full bg-orange-500"></div>
          </motion.div>
        </div>

        {/* Fixed SVG */}
        <motion.div className="ml-6">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <path d="M20.8 4.6A5.4 5.4 0 0 0 12 3a5.4 5.4 0 0 0-8.8 1.6C-2 9.3 7 21 12 21s14-11.7 8.8-16.4z" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default HeartRateTracker;
