"use client";

import Image from "next/image";
import Link from "next/link";
import SecondoryHeading from "@/components/utils/SecondoryHeading";

export default function OtherAccommodation() {
  return (
    <>
      <div>
        <div className="py-12  bg-[#F6EDE4] font-normal mt-16 text-themeTextBlack">
          <div className="container  mx-auto">
            <div className="max-w-[940px] w-full mx-auto">
              <SecondoryHeading
                text="Other accommodation"
                className="mb-8"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                <div>
                <div className="relative w-full min-h-[225px] max-h-[225px] ">
                  <Link href="/">
                    <Image
                       src="/img/cider-press-1.png"
                      alt="{alt}"
                      layout="fill"
                      objectFit="cover"
                      className={`max-w-full}`}
                    />
                  </Link>
                  </div>
                  <h6 className="text-[18px]  mt-4 leading-[140%]">
                    <Link href="/">
                    The Stables  <span> | </span> 
                      <span className="text-sm font-workSans uppercase font-normal">
                      sleeps 5 +2
                      </span>
                    </Link>
                  </h6>
                </div>
            
              {/* ------- */}

                <div>
                <div className="relative w-full min-h-[225px] max-h-[225px] ">
                  <Link href="/">
                    <Image
                       src="/img/cider-press-2.png"
                      alt="{alt}"
                      layout="fill"
                      objectFit="cover"
                      className={`max-w-full}`}
                    />
                  </Link>
                  </div>
                  <h6 className="text-[18px]  mt-4 leading-[140%]">
                    <Link href="/">
                    The Stables  <span> | </span> 
                      <span className="text-sm font-workSans uppercase font-normal">
                      sleeps 5 +2
                      </span>
                    </Link>
                  </h6>
                </div>
              </div>
              {/* ------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
