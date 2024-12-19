"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/components/utils/Heading"
import SubHeading from "@/components/utils/SubHeading"
import SpecsBlock from "@/components/utils/SpecsBlock"
function AboutSec() {
  return (
    <div className="pt-[60px] pb-[64px] border-t-[3.5px]  border-solid border-customGreen">
      <div className="container mx-auto">
        <div className="">
          <div className="text-center max-w-[656px] m-auto text-darkCustomGreen pb-16">
          <Heading className="text-center pb-8" text="Hawley Farm" />
           <SubHeading  text="Nestled in the beautiful English countryside near Dalwood village,
our unique barn conversions are the perfect choice if you´re
looking for a relaxing holiday with family or friends in quiet and
peaceful East Devon."/>
          </div>
          <div className="sepcs  m-auto w-full">
            <ul className="flex justify-center gap-2 font-workSans uppercase  text-themeTextBlack font-normal text-[14px] leading-none flex-wrap">
              <li className=" max-w-[104px]  text-center">
                
                <SpecsBlock src="/img/home.png" title="spacious COTTAGES" alt="spacious COTTAGES"/>
              </li>
              <li className="max-w-[104px]  text-center w-full">

                <SpecsBlock src="/img/dog.png" title={`dog  friendly`} alt="dog  friendly"/>
              </li>
              <li className=" max-w-[104px]  text-center w-full">
              <SpecsBlock src="/img/local-attraction.png" title={`local attractions`} alt="local attractions"/>
              </li>
              <li className=" max-w-[104px]  text-center w-full">
                
                <SpecsBlock src="/img/bbq.png" title={`farm  tours`} alt="farm  tours"/>
              </li>
              <li className=" max-w-[104px]  text-center w-full">
              <SpecsBlock src="/img/farm-tours.png" title={`BBQ`} alt="BBQ"/>
                
              </li>
              <li className=" max-w-[104px]  text-center w-full">
                <SpecsBlock src="/img/rating.png" title={`4.9 stars google`} alt="4.9 stars google"/>
              </li>
            </ul>
          </div>
          <div className="pt-14 font-ubanTu max-w-[936px] w-full text-themeTextBlack text-[16px] leading-[140%] font-light m-auto">
            <p className="mb-2">
              If you’ve never considered a farm holiday, let us give you an idea
              of what to expect...
            </p>
            <p className="mb-2">
              Scattered on our fields are our cows, young stock and sheep; if
              you are interested to see the milking and see the animals at close
              hand, we can arrange a guided farm tour.
            </p>
            <p>
              You can also meander through the Blackdown Hills where you can
              spot all sorts of wildlife, there are many footpaths right from
              your door. Visit one of the many historical and cultural sights of
              East Devon or stay on the farm where you can learn all about our
              dairy, milk and beef farming over a cake and a cup of tea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
