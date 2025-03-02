import { useState, useEffect } from "react";

const useFetchHealthData = () => {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    // Simulating fetching data from smartwatch API
    setTimeout(() => {
      setHealthData({
        bloodPressure: "120/80 mmHg",
        pulseRate: "72 bpm",
        caloriesBurned: "250 kcal",
      });
    }, 2000);
  }, []);

  return healthData;
};

export default useFetchHealthData;
