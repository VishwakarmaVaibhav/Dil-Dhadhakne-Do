// src/components/ProfileCard.js
import { useEffect, useState } from "react";

// Mock Database (Profiles)
const profiles = [
  {
    id: 1,
    name: "Aryan Mehta",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Neeraj Kumar",
    role: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "AI Researcher",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Dr. Vaishali Jha",
    role: "Future Doctor",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Dr. Aditya Saran",
    role: "Future Doctor",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Dr. Pankaj Kumar",
    role: "Future Doctor",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Dr. Niyati Patel",
    role: "Future Doctor",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const ProfileCard = () => {
  const [randomProfile, setRandomProfile] = useState(null);

  useEffect(() => {
    // Select a random profile on page load
    const randomIndex = Math.floor(Math.random() * profiles.length);
    setRandomProfile(profiles[randomIndex]);
  }, []);

  if (!randomProfile) return null;

  return (
    <div >
    <div className="flex items-center my-2 bg-white p-4 rounded-lg mt-6 mx-auto max-w-sm shadow-md">
      <img src={randomProfile.avatar} alt="User Avatar" className="w-16 h-16 rounded-full" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{randomProfile.name}</h2>
        <p className="text-gray-600">{randomProfile.role}</p>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
