import { useState } from "react";

// Replace these imports with your actual image imports
import destinationWedding from "@/assets/destination-wedding.jpg";
import brideElegant from "@/assets/bride-elegant.jpg";
import weddingCouple1 from "@/assets/wedding-couple-1.jpg";
import coupleCandid from "@/assets/couple-candid.jpg";
import brideTraditional from "@/assets/bride-traditional.jpg";
import weddingDetails from "@/assets/wedding-details.jpg";
import coupleWalking from "@/assets/couple-walking.jpg";
import GalaxiesLogo from "@/assets/GalaxiesLogo.png";
import groomPortrait from "@/assets/groom-portrait.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingDance from "@/assets/wedding-dance.jpg";
import mehendiHands from "@/assets/mehendi-hands.jpg";
import bridePrep from "@/assets/bride-prep.jpg";
import mandapCeremony from "@/assets/mandap-ceremony.jpg";
import familyPhoto from "@/assets/family-photo.jpg";

const mockImages = [
  destinationWedding,
  brideElegant,
  weddingCouple1,
  coupleCandid,
  brideTraditional,
  weddingDetails,
  weddingCeremony,
  weddingDance,
  mehendiHands,
  bridePrep,
  mandapCeremony,
  familyPhoto
];

const ImageCollage = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const renderImage = (src, index, className = "") => (
    <div key={index} className={`relative overflow-hidden bg-gray-200 ${className}`}>
      <img
        src={src}
        alt={`Wedding photo ${index + 1}`}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loadedImages.has(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        onLoad={() => handleImageLoad(index)}
      />
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* First row - 5 images */}
        <div className="grid grid-cols-5 gap-2 mb-2">
          {[0, 1, 2, 3, 4].map(i => 
            renderImage(mockImages[i], i, "aspect-square")
          )}
        </div>

        {/* Second row - 1 image, text, 1 image */}
        <div className="grid grid-cols-5 gap-2 mb-2">
          {renderImage(mockImages[5], 5, "aspect-square")}
          
          <div className="col-span-3 h-full bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50 flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-lg font-serif text-gray-800 mb-2">
                Galaxies Photography
              </h1>
              <p className="text-xs text-gray-600 leading-relaxed mb-2 px-2">
                Capturing the eternal moments of your love story with artistry and passion
              </p>
              <div className="flex justify-center items-center space-x-1">
                <div className="w-4 h-px bg-rose-400"></div>
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                <div className="w-4 h-px bg-rose-400"></div>
              </div>
            </div>
          </div>
          
          {renderImage(mockImages[6], 6, "aspect-square")}
        </div>

        {/* Third row - 5 images */}
        <div className="grid grid-cols-5 gap-2">
          {[7, 8, 9, 10, 0].map((imgIndex, i) => 
            renderImage(mockImages[imgIndex], imgIndex + 10, "aspect-square")
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Text section at top on mobile */}
        <div className="w-full bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50 flex items-center justify-center p-6 mb-4 rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-gray-800 mb-3">
              Galaxies Photography
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Capturing the eternal moments of your love story with artistry and passion
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-6 h-px bg-rose-400"></div>
              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
              <div className="w-6 h-px bg-rose-400"></div>
            </div>
          </div>
        </div>

        {/* Images in 2 columns */}
        <div className="grid grid-cols-2 gap-2">
          {mockImages.map((img, index) => 
            renderImage(img, index, "aspect-square")
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;