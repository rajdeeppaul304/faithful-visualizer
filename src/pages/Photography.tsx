import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "../data/photography.json"
import { useParams } from "react-router-dom";

const PhotographyPage = () => {
  const { id } = useParams(); // 1, 2, etc.
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Assuming your JSON looks like { "1": {...}, "2": {...} }
  const project = projectsData[id]; 
  const images = project?.images || [];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentIndex]);



  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Masonry layout component
  const MasonryGrid = ({ images }) => {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openImage(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>
    );
  };

  // Modal component for image viewing
  const ImageModal = ({ image, onClose, onPrevious, onNext, currentIndex, totalImages }) => {
    if (!image) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-full object-contain"
          />

          {/* Image counter */}
          {totalImages > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1">
              {currentIndex + 1} / {totalImages}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3f0' }}>
      {/* Hero Section */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="  rounded-lg overflow-hidden mb-8">
            <div className="text-center py-12 sm:py-16 lg:py-20 px-6 sm:px-12" style={{ backgroundColor: '#f9f7f4' }}>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-gray-600 mb-8 sm:mb-12 lg:mb-16 tracking-wide font-light">
                {project.title}
              </h1>
              
              {/* <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light px-4 sm:px-8">
                  {project.description}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4 text-gray-600 text-xs sm:text-sm">
                {Object.entries(project.weddingDetails).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-700 text-center mb-8 sm:mb-12 font-light">
            Gallery
          </h2>
          
          {images.length > 0 ? (
            <MasonryGrid images={images} />
          ) : (
            <div className="text-center py-12 text-gray-500">
              No images available
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        onClose={closeImage}
        onPrevious={() => navigateImage('prev')}
        onNext={() => navigateImage('next')}
        currentIndex={currentIndex}
        totalImages={images.length}
      />
    </div>
  );
};

export default PhotographyPage;