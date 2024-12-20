"use client";
import { FC } from "react";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface StaticBannerProps {
  className?: string; 
  src: string; 
  alt: string;
}


const StaticBanner: FC<StaticBannerProps> = ({
  className,
  src,
  alt,
}) => {
  if (!src || src.trim() === "") return null;
  return (
    <div className="specs-item flex gap-2 flex-col items-center  w-full relative h-[100vh]">
      <div className="h-full bg-cover bg-center flex items-center justify-center text-center">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className={`w-full h-full ${className}`}
        />
      </div>
    </div>
  );
};

export default StaticBanner;
