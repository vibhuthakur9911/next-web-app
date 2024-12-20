"use client"; // Important for React hooks in Next.js components

import React from "react";
import Link from "next/link";
import Heading from "@/components/utils/Heading";
import SubHeading from "@/components/utils/SubHeading";
import SecondoryHeading from "@/components/utils/SecondoryHeading";
import OnTheFarm from "@/components/utils/OnTheFarm";
import Image from "next/image";
export default function AboutSec() {
  return (
    <>
      <section className="pt-14 pb-20">
        <div className="container mx-auto  on-the-farm-content">
          <div className="max-w-[936px] mx-auto w-full">
            <Heading text="Walks from the farm" className="pb-8" />
            <p>
              Intro - mentioning OS maps in the accommodation. Dogs on leads on
              farm lands.
            </p>
            <div className="mt-12 ">
              <SecondoryHeading
                text="Walk 1"
                className="text-darkCustomGreen mb-[10px]"
              />
              <div className="grid grid-cols-2 border-t-[8px] border-customGreen border-solid gap-[9px]">
                <div className="">
                  <div className="relative w-full h-[463px]">
                    <Image
                      src="/img/walk1.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div>
                  <ol className="text-themeTextBlack list-decimal pl-6 font-ubanTu leading-[140%] font-light space-y-1 mt-4">
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                  </ol>
                </div>
              </div>
              <div className="mt-[87px] text-end mb-[10px]">
                {" "}
                <SecondoryHeading
                  text="Walk 2"
                  className="text-darkCustomGreen"
                />
              </div>
              <div className="grid grid-cols-2 border-t-[8px] border-customGreen border-solid gap-[9px] ">
                <div className="md:order-2">
                  <div className="relative w-full h-[463px]">
                    <Image
                      src="/img/walk2.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="md:order-1">
                  <ol className="text-themeTextBlack list-decimal pl-6 font-ubanTu leading-[140%] font-light space-y-1 mt-4">
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                    <li>Directions</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
