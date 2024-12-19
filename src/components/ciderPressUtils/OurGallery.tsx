"use client";

import Image from "next/image";
import Gallery from "@/components/utils/Gallery";
import Heading from "@/components/utils/Heading";
import SecondoryHeading from "@/components/utils/SecondoryHeading";
export default function OurGallery() {
 
  return (
    <div>
      <div className="py-[72px] bg-themeGreyBg  text-darkCustomGreen font-playfair ">
        <div className="m-auto container">
          {/* <h3 className="text-[40px] leading-normal pb-10 font-normal text-center">
            Our Gallery
          </h3> */}
         <SecondoryHeading text="Cider Press gallery" className=" mb-6" />

          <div className="flex lg:gap-[2%] lg:gap-y-3 md:gap-[2%] md:gap-y-3 flex-wrap w-full">
            <div className="w-full">
             <Gallery />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
