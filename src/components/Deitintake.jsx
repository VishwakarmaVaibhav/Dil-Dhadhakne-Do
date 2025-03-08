import React from "react";

const DietIntake = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold text-center mb-4">Diet Intake Tracker</h2>
      
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="p-2 bg-gray-100 rounded-md">
            <span className="font-semibold">{day}</span>
            <p>-- kcal</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 space-y-3">
        {["breakfast", "lunch", "dinner", "snacks"].map((meal) => (
          <div key={meal} className="flex flex-col gap-1">
            <label className="text-sm font-medium capitalize">{meal}</label>
            <input
              type="text"
              name={meal}
              placeholder="Enter food and calories (e.g., Apple 200)"
              className="p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              disabled
            />
          </div>
        ))}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed" disabled>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DietIntake;
