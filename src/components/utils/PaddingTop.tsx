"use client"; // Important for React hooks in Next.js components

import { useEffect, useState } from "react";

const PaddingTop = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Dynamically calculate header height
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
 
    // Update on resize
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative border-b-[7px] border-solid border-customGreen mb-[2.4px]"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      
    </div>
  );
};

export default PaddingTop;
