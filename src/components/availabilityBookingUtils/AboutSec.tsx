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
      <section className="pt-14 pb-12">
        <div className="container mx-auto  on-the-farm-content">
          <div className="max-w-[936px] mx-auto w-full">
            <Heading text="Booking" className="pb-8" />
            <ol className="text-themeTextBlack list-decimal pl-6 font-ubanTu leading-[140%] font-light space-y-1">
              <li>Book directly with us to get best rates</li>
              <li>
                <Link href="/" className="underline">
                  Terms & Conditions
                </Link>
              </li>
            </ol>
            <div className="mt-12 ">
              <Heading
                text="Availability"
                className="text-darkCustomGreen mb-8"
              />
              <p>
                Below shows the availability of each cottage for easy viewing.
                However, please note that, when clicked, you will be taken to an
                external website to complete the booking.
              </p>
            </div>

            <div className="py-12">{/* Boking Calender  */}</div>
          </div>
        </div>
        <div className="py-12 bg-[#F6EDE4]">
          <div className="container mx-auto">
            <h5 className="text-[22px] leading-normal max-w-[704px] w-full mx-auto text-darkCustomGreen font-normal italic text-center">
              “A perfect, tranquil setting. The place certainly has the WOW
              factor. Well equipped, everything you could possibly need and we
              didn’t want to leave. An ideal place for touring not only East
              Devon but also the beautiful Dorset coast. Will certainly return.”
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
