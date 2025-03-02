import { useState } from "react";
import soothingMusic from "@/assets/soothing-music.mp3";

const SoothingSounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(soothingMusic);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mt-6 bg-white shadow-lg p-4 rounded-lg max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold">Soothing Sounds</h2>
      <button
        onClick={togglePlay}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default SoothingSounds;
