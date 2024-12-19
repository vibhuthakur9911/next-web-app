"use client";

import React, { useState } from "react";
import GalleryImg from "./GalleryImg"; // Import your GalleryImg component
import Image from "next/image";

const imageData = [
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 1" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 2" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 3" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 4" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 5" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 6" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 6" },
  { src: "/img/our-cottage-1.jpeg", alt: "Gallery Image 6" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string | null>(null);

  const openImage = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedAlt(null);
  };

  return (
    <div className="container mx-auto">
      {/* <h2 className="text-3xl font-semibold text-center mb-6">Image Gallery</h2> */}
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {imageData.map((image, index) => (
          <div key={index} onClick={() => openImage(image.src, image.alt)}>
            <GalleryImg
              src={image.src}
              alt={image.alt}
              className="cursor-pointer  hover:opacity-90 transition duration-300 h-[233px]"
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeImage} // Close modal when clicking outside
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <Image
              src={selectedImage}
              alt={selectedAlt || "Large image"}
              width={800}
              height={600}
            //   layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-darkCustomGreen h-[30px] w-[30px] flex items-center justify-center rounded-[50%]"
              onClick={closeImage}
            >
              &times; {/* Close Button */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
