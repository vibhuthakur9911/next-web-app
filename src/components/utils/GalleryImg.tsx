import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface GalleryImgProps {
  className?: string;
  src: string;
  alt: string;
}

const GalleryImg: FC<GalleryImgProps> = ({ className, src, alt }) => {
  if (!src || src.trim() === "") return null;
  return (
    <div className="relative  w-full">
     <div className="relative w-full min-h-[233px] max-h-[233px]">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className={`max-w-full ${className}` }
          />{" "}
        </div>
    </div>
  );
};

export default GalleryImg

