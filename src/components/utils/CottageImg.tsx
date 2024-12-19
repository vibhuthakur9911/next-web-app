import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CottageImg() {
  return (
    <div>
      <div className="relative  w-full">
        <Link href="">
        <div className="relative w-full min-h-[292px] max-h-[292px] max-w-[]">
          <Image
            src="/img/our-cottage-1.jpeg"
            alt="Cider Press"
            layout="fill"
            objectFit="cover"
            className="max-w-full "
          />{" "}
        </div>
        </Link>
        <Link href="">
        <h6 className="text-[22px] font-semibold mt-2">
          Cider Press{" "}
          <span className="text-[14px] font-workSans ml-4 uppercase font-normal">
            Sleeps 6
          </span>
        </h6>
        </Link>
      </div>
    </div>
  );
}
