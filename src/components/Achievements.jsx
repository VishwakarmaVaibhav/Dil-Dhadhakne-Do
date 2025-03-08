import React from "react";
import Button from "../components/ui/Button"; // Importing Button component

const Achievements = () => {
  const pdfUrl = "public/Paper.pdf"; // Ensure PDF is in 'public' folder

  const handlePreview = () => {
    window.open(pdfUrl, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Achievements.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "OUR Achievements",
        text: "Check out OUR achievements!",
        url: window.location.origin + pdfUrl, // Absolute path required for sharing
      });
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg max-w-lg mx-auto bg-white text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Achievements</h2>

      {/* PDF Buttons */}
      <div className="flex flex-col gap-4">
        <Button onClick={handlePreview}>📄 Preview PDF</Button>
        <Button variant="outline" onClick={handleDownload}>⬇ Download PDF</Button>
        <Button onClick={handleShare}>📤 Share</Button>
      </div>

      {/* Instagram Follow Button */}
      <div className="mt-4">
        <Button
          onClick={() =>
            window.open("https://www.instagram.com/dildhadaknedo45", "_blank", "noopener noreferrer")
          }
        >
          🔗 Follow on Instagram
        </Button>
      </div>
    </div>
  );
};

export default Achievements;
