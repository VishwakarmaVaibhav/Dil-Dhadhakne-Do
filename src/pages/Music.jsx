import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Search } from "lucide-react";
import BottomBar from "../components/BottomBar";
import HeroSection from "../components/HeroSection";

const musicData = {
  Meditation: [
    { id: 1, title: "Calm Waves", artist: "Zen Sounds", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, title: "Deep Focus", artist: "Relaxing Tunes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  ],
  Pop: [
    { id: 3, title: "Pop Hit 1", artist: "Star Singer", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 4, title: "Pop Hit 2", artist: "Famous Artist", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  ],
};

export default function MusicPage() {
  const [category, setCategory] = useState("Meditation");
  const [currentSong, setCurrentSong] = useState(musicData[category][0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(currentSong.url));

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.src = currentSong.url;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    let songs = musicData[category];
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    audio.src = songs[nextIndex].url;
    if (isPlaying) audio.play();
  };

  const prevSong = () => {
    let songs = musicData[category];
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    audio.src = songs[prevIndex].url;
    if (isPlaying) audio.play();
  };

  return (
    <div className="min-h-screen bg-gray-200 text-black p-4">
        <HeroSection title="MUSIC" tagline="Dil Dhadhakne Do!"/>
      <div className="flex items-center bg-gray-400 p-2 rounded-lg">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search music..."
          className="bg-transparent flex-1 ml-2 text-black outline-none"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="ml-2 p-1 bg-gray-300 text-black rounded"
        >
          {Object.keys(musicData).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        {musicData[category].map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between p-2 bg-gray-200 rounded-lg mb-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{song.title}</h3>
              <p className="text-gray-400 text-sm">{song.artist}</p>
            </div>
            <button
              className="bg-green-500 p-2 rounded-full"
              onClick={() => {
                setCurrentSong(song);
                setIsPlaying(true);
                audio.src = song.url;
                audio.play();
              }}
            >
              <Play className="text-black" />
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-40 left-0 w-full bg-gray-400 p-3 flex items-center justify-between">
        <SkipBack onClick={prevSong} className="text-black" />
        <button onClick={playPause} className="bg-green-500 p-2 rounded-full">
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <SkipForward onClick={nextSong} className="text-black" />
      </div>
      <BottomBar />
    </div>
  );
}
