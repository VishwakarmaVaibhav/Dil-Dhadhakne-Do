import avatar from '../assets/avatar.png'

const ProfileCard = () => {
  return (
    <div className="flex items-center my-2 bg-white  p-4 rounded-lg mt-6 mx-auto max-w-sm">
      <img src={avatar} alt="User Avatar" className="w-16 h-16 rounded-full" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">Shashank Sharma</h2>
        <p className="text-gray-600">Health Enthusiast</p>
      </div>
    </div>
  );
};

export default ProfileCard;
