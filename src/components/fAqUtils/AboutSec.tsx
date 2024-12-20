"use client"; // Important for React hooks in Next.js components

import React from "react";
import Link from "next/link";
import Heading from "@/components/utils/Heading";
import SubHeading from "@/components/utils/SubHeading";
import SecondoryHeading from "@/components/utils/SecondoryHeading";
import FaqQuestions from "@/components/utils/FaqQuestions";
import Image from "next/image";
export default function AboutSec() {
  return (
    <>
      <section className="pt-14 pb-12 border-t-[3.5px]  border-solid border-customGreen">
        <div className="container mx-auto ">
          <div className="max-w-[936px] mx-auto w-full">
            <Heading text="Welcome" className="pb-8" />
            <p className="text-base font-light text-themeTextBlack font-ubanTu leading-[140%]">
              We are looking forward to your stay! We are Graham and Pamela
              Perry, and arrived at Hawley Farm in 1984. The cottages were
              completed in 2010 and we have had an overwhelming number of
              returning guests enjoying the peace and quiet of East Devon.
            </p>
            <div className="mt-12">
              <SecondoryHeading text="FAQs" className="text-dar"/>
              <div className="flex flex-col gap-8 mt-8">
                <FaqQuestions  questions="1. Do you provide towels?" answer="Yes, a large sheet towel and a hand towel each for each person. Please bring your own towels for the beach."/>
                <FaqQuestions  questions="2. Do you provide linen?" answer="Yes, all beds are made up for your requirements as some beds are flexible. We have some feather pillows, if this does not suit you please let me know so I can remove them."/>
                <FaqQuestions  questions="3. What time can we arrive?" answer="You can arrive from 4.pm and later if that suits you. We would also like to ask if you could leave by 9.30 prompt. We do need this time for the change over. /n
                However, through the low season when bookings are fewer you may well be able to arrive from 2pm and vacate at 11am, please check this."/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
