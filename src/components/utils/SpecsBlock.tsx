"use clien t";
import { FC } from "react";

import React from "react";
import Image from "next/image";

interface SpecsBlockProps {
  className?: string; // Optional class for styling
  title: string; // Text content for the heading
  src: string; // Text content for the heading
  alt: string;
}

const SpecsBlock: FC<SpecsBlockProps> = ({ className, title, src, alt }) => {
  if (!src || src.trim() === "") return null;
  if (!title || title.trim() === "") return null;
  return (
    <div className="specs-item flex gap-2 flex-col items-center max-w-[104px] w-full">
   <Image
        src={src}
        alt={title}
        width={50}
        height={50}
        priority
       className="h-[50px] w-[50px]"/>
      <p>{title}</p>
    </div>
  );
};

export default SpecsBlock;
