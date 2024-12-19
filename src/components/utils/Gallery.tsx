"use client";

import React, { useState } from "react";
import GalleryImg from "./GalleryImg"; // Import your GalleryImg component
import Image from "next/image";

const imageData = [
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 1" },
  { src: "", alt: "Gallery Image 2" },
  { src: "", alt: "Gallery Image 3" },
  { src: "", alt: "Gallery Image 4" },
  { src: "", alt: "Gallery Image 5" },
  { src: "", alt: "Gallery Image 6" },
  { src: "", alt: "Gallery Image 6" },
  { src: "", alt: "Gallery Image 6" },
];

// Default placeholder image
const defaultImage = "/img/our-cottage-1.jpeg";

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex! === imageData.length - 1 ? 0 : prevIndex! + 1));
    }
  };

  const showPrevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex! === 0 ? imageData.length - 1 : prevIndex! - 1));
    }
  };

  return (
    <div className="container mx-auto">
      {/* <h2 className="text-2xl font-semibold text-center mb-6">Cider Press Gallery</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {imageData.map((image, index) => (
          <div
            key={index}
            onClick={() => openImage(index)}
            className="cursor-pointer"
          >
            <GalleryImg
              src={image.src.trim() !== "" ? image.src : defaultImage}
              alt={image.alt || "Gallery Image"}
              className="hover:opacity-90 transition duration-300 h-[233px]"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                imageData[selectedIndex].src.trim() !== ""
                  ? imageData[selectedIndex].src
                  : defaultImage
              }
              alt={imageData[selectedIndex].alt || "Large image"}
              width={800}
              height={600}
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 border-[2px] bg-black  text-white text-3xl  h-[30px] w-[30px] flex items-center justify-center rounded-[50%]"
              onClick={closeImage}
              aria-label="Close Gallery"
            >
              &times;
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white border-[2px] bg-black  px-3  py-1 rounded-full hover:bg-opacity-80"
              onClick={showPrevImage}
              aria-label="Previous Image"
            >
              &#10094;
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white border-[2px] bg-black  px-3  py-1  rounded-full hover:bg-opacity-80"
              onClick={showNextImage}
              aria-label="Next Image"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
