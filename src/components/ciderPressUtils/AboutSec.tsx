"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/components/utils/Heading";
import Button from "@/components/utils/Button";
import SecondoryHeading from "@/components/utils/SecondoryHeading";
import SubHeading from "@/components/utils/SubHeading";
import SpecsBlock from "@/components/utils/SpecsBlock";
import Aminities from "@/components/utils/Aminities";
function AboutSec() {
  return (
    <div className="pt-[60px] pb-[64px] border-t-[3.5px]  border-solid border-customGreen">
      <div className="container mx-auto">
        <div className="">
          <div className="text-center max-w-[656px] m-auto text-darkCustomGreen pb-8">
            <Heading className="text-center pb-8" text="Cider Press" />
            {/* <SubHeading text="" /> */}
          </div>
          <div className="sepcs  m-auto max-w-[936px]">
            <ul className="flex justify-center gap-2 font-workSans uppercase  text-themeTextBlack font-normal text-[14px] leading-none flex-wrap">
              <li className=" max-w-[104px]  text-center w-full">
                <SpecsBlock
                  src="/img/bed.svg"
                  title="Sleeps 6"
                  alt="Sleeps 6"
                />
              </li>
              <li className="max-w-[104px]  text-center w-full">
                <SpecsBlock
                  src="/img/bbq.png"
                  title={`Barbecue`}
                  alt="img/bbq.png"
                />
              </li>
              <li className=" max-w-[104px]  text-center w-full">
                <SpecsBlock
                  src="/img/underflooring.png"
                  title={`underfloor heating`}
                  alt="underfloor heating"
                />
              </li>
            </ul>
          </div>
          <div className="pt-14 font-ubanTu max-w-[936px] w-full text-themeTextBlack text-[16px] leading-[140%] font-light m-auto">
            <p className="mb-2">
              This holiday let was once a place for making and storing cider. By
              restoring this historical building, we have added a touch of
              modern magic while still keeping this East Devon farm let homely
              and comfortable.
            </p>
            <p>
              Relax with stunning countryside and garden views while enjoying
              free WiFi throughout your accommodation. The room layout is
              upside-down, i.e. living area upstairs, sleeping area downstairs,
              to make the most of the views.
            </p>
          </div>
          <div className="sepcs  m-auto max-w-[936px]">
            <SecondoryHeading text="Details" className="mb-[26px]  mt-[56px]" />
            <div className="flex gap-[60px] items-end  mb-[56px]">
              <ul className="flex gap-2 font-workSans uppercase  text-darkCustomGreen font-normal text-[14px] leading-none ">
                <li className=" text-center  px-2 pt-[29px] pb-[14px] border-[1px] border-solid border-[#D9DFE4]">
                  <div className="specs-item flex gap-4 flex-col items-start max-w-[104px] w-full justify-center h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="28"
                      viewBox="0 0 40 28"
                      fill="none"
                    >
                      <path
                        d="M38 11.56V6C38 2.7 35.3 0 32 0H24C22.46 0 21.06 0.6 20 1.56C18.94 0.6 17.54 0 16 0H8C4.7 0 2 2.7 2 6V11.56C0.78 12.66 0 14.24 0 16V28H4V24H36V28H40V16C40 14.24 39.22 12.66 38 11.56ZM24 4H32C33.1 4 34 4.9 34 6V10H22V6C22 4.9 22.9 4 24 4ZM6 6C6 4.9 6.9 4 8 4H16C17.1 4 18 4.9 18 6V10H6V6ZM4 20V16C4 14.9 4.9 14 6 14H34C35.1 14 36 14.9 36 16V20H4Z"
                        fill="#509421"
                      />
                    </svg>
                    <p>Bedroom 1</p>
                  </div>
                </li>
                <li className=" text-center px-2 pt-[29px] pb-[14px] border-[1px] border-solid border-[#D9DFE4]">
                  <div className="specs-item flex gap-4 flex-col items-start max-w-[104px] w-full justify-center h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="28"
                      viewBox="0 0 52 28"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 10C22.65 10 24 11.8 24 14V24H22.005L21 28H19.5L18.51 24H5.505L4.5 28H3L1.995 24H0V14C0 11.8 1.35 10 3 10V4C3 1.8 4.35 0 6 0H18C19.65 0 21 1.8 21 4V10ZM14.25 10H18V4H14.25H13.5H10.5H9.75H6V10H9.75H10.5H13.5H14.25ZM21 14H3V20H21V14Z"
                        fill="#509421"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M49 10C50.65 10 52 11.8 52 14V24H50.005L49 28H47.5L46.51 24H33.505L32.5 28H31L29.995 24H28V14C28 11.8 29.35 10 31 10V4C31 1.8 32.35 0 34 0H46C47.65 0 49 1.8 49 4V10ZM42.25 10H46V4H42.25H41.5H38.5H37.75H34V10H37.75H38.5H41.5H42.25ZM49 14H31V20H49V14Z"
                        fill="#509421"
                      />
                    </svg>
                    <p>Bedroom 2</p>
                  </div>
                </li>
                <li className=" text-center px-2 pt-[29px] pb-[14px] border-[1px] border-solid border-[#D9DFE4]">
                  <div className="specs-item flex gap-4 flex-col items-start max-w-[104px] w-full justify-center h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="28"
                      viewBox="0 0 52 28"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 10C22.65 10 24 11.8 24 14V24H22.005L21 28H19.5L18.51 24H5.505L4.5 28H3L1.995 24H0V14C0 11.8 1.35 10 3 10V4C3 1.8 4.35 0 6 0H18C19.65 0 21 1.8 21 4V10ZM14.25 10H18V4H14.25H13.5H10.5H9.75H6V10H9.75H10.5H13.5H14.25ZM21 14H3V20H21V14Z"
                        fill="#509421"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M49 10C50.65 10 52 11.8 52 14V24H50.005L49 28H47.5L46.51 24H33.505L32.5 28H31L29.995 24H28V14C28 11.8 29.35 10 31 10V4C31 1.8 32.35 0 34 0H46C47.65 0 49 1.8 49 4V10ZM42.25 10H46V4H42.25H41.5H38.5H37.75H34V10H37.75H38.5H41.5H42.25ZM49 14H31V20H49V14Z"
                        fill="#509421"
                      />
                    </svg>
                    <p>Bedroom 3</p>
                  </div>
                </li>
              </ul>
              <p className="font-ubanTu text-themeTextBlack text-[16px] leading-[140%] font-light mb-[12px]">
                All bedrooms can be made into double beds if required.
              </p>
            </div>
            <div className="aminities">
              <ul className="flex gap-[2%] flex-wrap gap-y-2">
                <li className="w-[49%] ">
                  <Aminities src="/img/wifi.png" title="Free Wifi" />
                </li>
                <li className="w-[49%] ">
                  <Aminities src="/img/wifi.png" title="Description" />
                </li>
                <li className="w-[49%] ">
                  <Aminities src="/img/wifi.png" title="Description" />
                </li>
                <li className="w-[49%] ">
                  <Aminities src="/img/wifi.png" title="Description" />
                </li>
                <li className="w-[49%] ">
                  <Aminities src="/img/wifi.png" title="Description" />
                </li>
                <li className="w-[49%] ">
                  <Aminities src="/img/wifi.png" title="Description" />
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Button href="/" text="Book Now" className="mt-[86px]" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
