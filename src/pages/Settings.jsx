const Settings = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
        <h1 className="text-3xl font-bold text-center mt-4">Settings</h1>
        <div className="mt-6 bg-white shadow-lg p-4 rounded-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold">Smartwatch Connection</h2>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Connect Watch
          </button>
          <h2 className="text-lg font-semibold mt-4">Dark Mode</h2>
          <button className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg">
            Enable Dark Mode
          </button>
        </div>
      </div>
    );
  };
  
  export default Settings;
  