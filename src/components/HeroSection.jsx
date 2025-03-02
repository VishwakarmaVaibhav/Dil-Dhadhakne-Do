import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = ({ title, tagline }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100); // Hide hero section when scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-[25vh] bg-gray-200 text-black w-full"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2 text-gray-500">{tagline}</p>
      </motion.div>

      {/* Fixed Title on Top Left */}
      <motion.div
        className="fixed top-0 left-0 w-full font-semibold text-black"
        initial={{ y: "-100%", opacity: 0 }} // Start hidden above screen
        animate={{ y: isVisible ? "-100%" : "0%", opacity: isVisible ? 0 : 1 }} // Slide down & appear
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-gray-200 py-4 text-left pl-5 shadow-md">
          <h3 className="text-3xl">{title}</h3>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
