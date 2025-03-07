import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WorkoutTracker = () => {
  const workouts = Math.floor(Math.random() * 6) + 1; // 1-6 workouts
  const calories = Math.floor(Math.random() * 500) + 500; // 500-1000 cal
  const progress = Math.min((workouts / 6) * 100, 100);

  return (
    <Link to="/workout-tracker">
      <motion.div
        className="flex bg-white my-2  rounded-xl p-6 w-full max-w-lg transition-transform hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1">
          <p className="text-black font-extrabold text-2xl flex items-center">
            🏋️ {workouts} Workouts
          </p>
          <motion.div
            className="h-3 rounded-full overflow-hidden bg-green-200"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="h-full bg-green-500"></div>
          </motion.div>

          <p className="text-black font-semibold text-lg mt-2">🔥 {calories} kcal burned</p>
        </div>

        {/* Fixed SVG */}
        <motion.div className="ml-6">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M6 3v18" />
            <path d="M18 3v18" />
            <path d="M2 9h20" />
            <path d="M2 15h20" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default WorkoutTracker;
