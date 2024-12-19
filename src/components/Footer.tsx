import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" mt-[77px]">
      <div className="bg-[#D9DFE4] py-9">
        <div className="container mx-auto">
          <div className="flex justify-between columns-3">
            <div className="flex flex-col gap-7 max-w-[286px] w-full">
              <Image
                src="/img/logo.svg" // Path relative to the public folder
                alt="Hawley Farm Logo"
                width={215}
                height={95}
                priority
              />
              <div className="flex gap-4">
                <Image
                  src="/img/footer-img.png" // Path relative to the public folder
                  alt="Hawley Farm Logo"
                  width={53}
                  height={71}
                  priority
                />
                <Image
                  src="/img/footer-certi.png" // Path relative to the public folder
                  alt="Hawley Farm Logo"
                  width={102}
                  height={72}
                  priority
                />
              </div>
            </div>
            <div className="max-w-[544px] w-full p-12 bg-[#F0F6FA] shadow-md border border-solid border-[#F0F5FA] rounded ">
              {/* Heading */}
              <h2 className="text-[22px] font-semibold mb-4 text-themeTextBlack">
                Sign up for last minute deals.
              </h2>

              {/* Form */}
              <form className="flex flex-col sm:flex-row items-center gap-4">
                {/* Email Input */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-2 border border-customGreen rounded-[3px] focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen font-ubanTu "
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="  transition-all 
            duration-500 px-6 py-3 bg-customGreen text-white font-medium rounded-md hover:bg-darkCustomGreen"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="max-w-[286px] w-full">
              <div className="mb-[46px]">
                {" "}
                <ul className="flex gap-4 items-center justify-end">
                  <li>
                    {" "}
                    <Image
                      src="/img/facebook.png" // Path relative to the public folder
                      alt="Hawley Farm Logo"
                      width={60}
                      height={60}
                      priority
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/black-adviser.png" // Path relative to the public folder
                      alt="Hawley Farm Logo"
                      width={64}
                      height={40}
                      priority
                    />
                  </li>
                </ul>
              </div>
              <div className="font-workSans text-themeTextBlack text-[14px] uppercase text-end font-normal">
                <p className="mb-0">
                  +44 (0) 7968 155916 / +44 (0) 1404 831250
                </p>
                <p className="my-2">
                  Hawley Farm, Dalwood, <br />
                  Axminster, Devon, EX13 7HR
                </p>
                <a href="" className="underline">
                  TERMS & CONDITIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F5FA] font-ubanTu text-themeTextBlack leading-[140%] font-light text-center py-[13px]">
        <div className="container mx-auto">
          <p>
            Copyright © 2024 Hawley Farm. All rights reserved. design &amp;
            development By{" "}
            <a href="https://www.thedreamsteps.com/" target="_blank" className="text-darkCustomGreen underline ">
              The Dream Steps
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
