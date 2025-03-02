const ActivityTracker = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-300 p-4">
        <h1 className="text-3xl font-bold text-center mt-4">Activity & Workout</h1>
        <div className="mt-6 bg-white shadow-lg p-4 rounded-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold">Steps Today</h2>
          <p className="text-blue-600 font-bold">7,500 Steps</p>
          <h2 className="text-lg font-semibold mt-4">Calories Burned</h2>
          <p className="text-blue-600 font-bold">300 kcal</p>
        </div>
      </div>
    );
  };
  
  export default ActivityTracker;
  