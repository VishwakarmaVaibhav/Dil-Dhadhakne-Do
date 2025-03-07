import BottomBar from "../components/BottomBar";
import HeroSection from "../components/HeroSection";
const ActivityTracker = () => {
    return (
      <div className="min-h-screen bg-gray-200 p-4">
        <HeroSection title="Activity & Workout" tagline="" />
        
        <div className="mt-6 bg-white shadow-lg p-4 rounded-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold">Steps Today</h2>
          <p className="text-blue-600 font-bold">7,500 Steps</p>
          <h2 className="text-lg font-semibold mt-4">Calories Burned</h2>
          <p className="text-blue-600 font-bold">300 kcal</p>
        </div>
        <BottomBar />
      </div>
    );
  };
  
  export default ActivityTracker;
  