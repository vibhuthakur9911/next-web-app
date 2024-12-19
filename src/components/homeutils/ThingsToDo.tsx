"use client";

import Image from "next/image";

export default function thingsToDo() {
  return (
    <>
      <div>
        <div
          className="pt-[170px] pb-[150px] bg-cover bg-no-repeat bg-center border-[16px] border-solid border-customGreen"
          style={{ backgroundImage: "url('/img/things-to-do.png')" }}
        >
          <div className="container m-auto">
            <div className="flex justify-end">
              <div className="p-8 text-darkCustomGreen w-full max-w-[350px] bg-[#ffffffcc] ">
                <h3 className="text-[40px] leading-normal  font-normal text-center">
                  Things to do
                </h3>
                <p className="leading-[140%] my-8 font-ubanTu">
                  We are very lucky to be within easy reach of the coast, after
                  a short drive you will have a fantastic choice of beaches to
                  choose from; Lyme Regis, Sidmouth, Charmouth, Seatown,
                  Branscombe, Seaton and Beer all make a lovely days out.
                  Finding fossils, swimming, building sand castles, fishing,
                  coastal path walking and much more.
                </p>
                <div className="text-center">
                  <button className="py-4 px-6 bg-customGreen text-white rounded text-[20px] font-medium leading-none"
                  >
                    {" "}
                    Explore East Devon
                  </button>
                </div>
                <div className="text-center pt-4">
                  <button className="py-4 px-6 bg-customGreen text-white rounded text-[20px] font-medium leading-none">
                    {" "}
                    What if it rains?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
