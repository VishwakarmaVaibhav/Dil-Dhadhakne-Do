import { useState } from "react";
import { LogOut, Settings, Watch, CheckCircle, XCircle, PhoneCall, MapPin } from "lucide-react";
import profiles from "../data/profileData";
import BottomBar from "../components/BottomBar";

const ProfilePage = () => {
  const user = profiles[Math.floor(Math.random() * profiles.length)];
  const [isConnected, setIsConnected] = useState(true);

  return (
    <div className="min-h-screen bg-gray-200 text-black p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-6">
        <img src={user.avatar} alt="Profile" className="w-32 h-32 rounded-full border-4 border-green-500" />
        <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
        <p className="text-gray-400">{user.role}</p>
      </div>

      {/* Smartwatch Status */}
      <div className="flex items-center text-white justify-between bg-gray-800 p-4 rounded-lg mt-6">
        <div className="flex items-center">
          <Watch className="text-blue-400" />
          <span className="ml-2 text-lg">Smartwatch Connectivity</span>
        </div>
        {isConnected ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <XCircle className="text-red-500" />
        )}
      </div>

      {/* Personal Information */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">Age</p>
            <h3 className="text-2xl text-white font-bold">{user.age} years</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">Weight</p>
            <h3 className="text-2xl text-white font-bold">{user.weight} kg</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">Height</p>
            <h3 className="text-2xl text-white font-bold">{user.height} cm</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-400">Disabilities / Diseases</p>
            <h3 className="text-2xl text-white font-bold">{user.medicalCondition || "None"}</h3>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="mt-6">
  <h2 className="text-xl font-semibold mb-2">Emergency Contacts</h2>
  <div className="bg-gray-800 text-white p-4 rounded-lg">
    {user.contacts.map((contact, index) => (
      <div key={index} className="flex justify-between items-center border-b border-gray-700 py-2">
        <span>{contact.name} - {contact.relationship}</span>
        <a href={`tel:${contact.phone}`} className="text-blue-400 flex items-center">
          <PhoneCall className="mr-2" /> Call
        </a>
      </div>
    ))}
  </div>
</div>

      {/* Address */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <div className="flex items-center">
            <MapPin className="text-blue-400 mr-2" />
            <span>{user.address}</span>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="mt-6 mb-22">
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <button className="flex items-center text-white w-full py-2">
            <Settings className="mr-2" /> Other Settings
          </button>
          <button className="flex items-center text-red-400 w-full py-2 mt-2">
            <LogOut className="mr-2" /> Logout
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default ProfilePage;
