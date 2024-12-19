"use client";

import Image from "next/image";
import CottageImg from "@/components/utils/CottageImg";
import Heading from "@/components/utils/Heading";
export default function OurCottages() {
  return (
    <div>
      <div className="py-16 bg-themeGreyBg  text-darkCustomGreen font-playfair">
        <div className=" w-full px-4 max-w-[1440px] m-auto">
          {/* <h3 className="text-[40px] leading-normal pb-10 font-normal text-center">
            Our cottages
          </h3> */}
          <Heading className="pb-10 text-center" text="Our cottages" />

          <div className="flex lg:gap-[.5%] lg:gap-y-3 md:gap-[2%] md:gap-y-3 flex-wrap w-full">
            <div className="lg:w-[33%] md:w-[49%]">
              <CottageImg />
            </div>
            <div className="lg:w-[33%] md:w-[49%]">
              <CottageImg />
            </div>
            <div className="lg:w-[33%] md:w-[49%]">
              <CottageImg />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
