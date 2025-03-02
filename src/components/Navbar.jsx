import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Medico Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/diet" className="text-gray-700 hover:text-blue-500">Diet</Link>
        <Link to="/activity" className="text-gray-700 hover:text-blue-500">Activity</Link>
        <Link to="/settings" className="text-gray-700 hover:text-blue-500">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
