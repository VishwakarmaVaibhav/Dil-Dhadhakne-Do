import { Link } from "react-router-dom";
import profiles from "../data/profileData";

const user = profiles[Math.floor(Math.random() * profiles.length)]; // Select a random profile

const ProfileCard = () => {
  return (

        <Link to={`/profile`} className="block">
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.role}</p>
            </div>
          </div>
        </Link>
 

     
       
     
   
  )
};

export default ProfileCard;
