const HealthStats = () => {
    return (
      <div className="my-2 bg-white  p-4 rounded-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">Live Health Stats</h2>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <h3 className="text-lg font-semibold">Blood Pressure</h3>
            <p className="text-blue-600 font-bold">120/80 mmHg</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Pulse Rate</h3>
            <p className="text-blue-600 font-bold">72 bpm</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Calories Burned</h3>
            <p className="text-blue-600 font-bold">250 kcal</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HealthStats;
  