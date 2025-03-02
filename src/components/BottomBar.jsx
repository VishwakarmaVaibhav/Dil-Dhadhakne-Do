import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, LineChart, Music, User } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg mb-2 rounded-full flex justify-between items-center w-80 p-3">
      {/** Icons Container */}
      <div className="flex justify-around w-full">
        <NavItem to="/" icon={<Home size={24} />} label="Home" />
        <NavItem to="/activity" icon={<LineChart size={24} />} label="Activity" />
        <NavItem to="/music" icon={<Music size={24} />} label="Relax" />
        <NavItem to="/profile" icon={<User size={24} />} label="Profile" />
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <Link to={to} className="flex flex-col items-center group">
      <motion.div
        className="text-gray-500 group-hover:text-black"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {icon}
      </motion.div>
      <motion.span
        className="text-xs font-semibold  text-gray-500 group-hover:text-black mt-1 transition-opacity duration-300"
      >
        {label}
      </motion.span>
    </Link>
  );
};

export default BottomBar;
