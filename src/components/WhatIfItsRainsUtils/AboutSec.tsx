"use client"; // Important for React hooks in Next.js components

import React from "react";
import Link from "next/link";
import Heading from "@/components/utils/Heading";
import Button from "@/components/utils/Button";
import SecondoryHeading from "@/components/utils/SecondoryHeading";
import OnTheFarm from "@/components/utils/OnTheFarm";
import Image from "next/image";
export default function AboutSec() {
  return (
    <>
      <section className="pt-14 pb-24 border-t-[3.5px]  border-solid border-customGreen">
        <div className="container mx-auto  on-the-farm-content">
          <div className="max-w-[936px] mx-auto w-full">
            <Heading text="What if it rains?" className="pb-8" />
            <p>
              We get it, you’ve booked an exciting trip to the West Country,
              ready to explore the outdoors, and the forecast is catered for
              ducks! Have no fear, there is still plenty to do for groups of all
              ages nearby.
            </p>
            <p>
              We’ve put together a list of inspiration below so you can be
              entertained undercover.
            </p>

            <div className="container mx-auto ">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-9  justify-between mt-16 mb-11">
                {/* Left Column */}
                <div className="lg:col-span-3 ">
                  <ul className="list-disc space-y-2 pl-6 theme-list">
                    <li>
                      Beer Caves have a very interesting tour of about 1hour ten
                      miniutes in these large caves, it is very cold so go
                      dressed up.
                    </li>
                    <li>
                      A day out looking around the many antique shops in Honiton
                      as this is what makes up a large part of the shops here
                      from old toys to books a lot to see if you are interested
                      this sort of History. The Museum is also great, with a
                      large displays of Honiton Lace.
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/TicketyBooOSM/"
                        className="underline"
                        target="_blank"
                      >
                        Tickety Boo,
                      </Link>{" "}
                      Ottery St Mary – a coffee shop and play centre, right in
                      the centre of Ottery St Mary.
                    </li>
                    <li>
                      <Link
                        href="https://www.thelmahulbert.com/"
                        className="underline"
                        target="_blank"
                      >
                        Thelma Hubert Gallery 
                      </Link>
                      – offers exhibitions as well as various activities for all
                      age ranges. Check website for calendar
                    </li>
                    <li>
                      <Link
                        href="https://www.honitonpottery.co.uk/"
                        className="underline"
                        target="_blank"
                      >
                        Honiton Pottery & Milkshake Bar
                      </Link>
                       – fun place to either ‘throw’your own pots, or decorate
                      pieces they have available
                    </li>
                    <li>
                      <Link
                        href="https://www.pecorama.co.uk/"
                        className="underline"
                        target="_blank"
                      >
                        Pecorama
                      </Link>
                       – an absolute ‘must-do’ for anyone who loves trains, the
                      gardens and the indoor play is very popular. A great place
                      for all ages from very small to oldest.
                    </li>
                    <li>
                      <Link
                        href="https://www.stuartlinecruises.co.uk/"
                        className="underline"
                        target="_blank"
                      >
                        Stuart Line Cruises
                      </Link>
                       – provided it is not too windy (read: choppy sea), the
                      comfortable Jurassic Coast or River Exe cruises can be
                      enjoyed under cover (from Exmouth)
                    </li>
                    <li>
                      <Link
                        href="https://www.worldofcountrylife.co.uk/"
                        className="underline"
                        target="_blank"
                      >
                        World of Country Life
                      </Link>
                       (Exmouth) -this place offers a whole range of
                      attractions; go back into olden days rural Devon Life,
                      enjoy their collection of motor bikes, vast range of
                      animals, or indeed the play facilities
                    </li>
                    <li>
                      <Link
                        href="https://www.crealy.co.uk/devon/"
                        className="underline"
                        target="_blank"
                      >
                        Crealy
                      </Link>
                       – A family day out, although you may have to give some of
                      the rides a miss when it hammers down, there are
                      sufficient indoor facilities to enjoy a good few hours at
                      what is East Devon’s largest attraction
                    </li>
                    <li>
                      <Link
                        href="https://rammuseum.org.uk/"
                        className="underline"
                        target="_blank"
                      >
                        Exeter RAMM
                      </Link>
                       (Royal Albert Memorial Museum) – Great, award winning,
                      museum in the heart of Exeter. Various exhibitions (see
                      website for details) and interactive displays and
                      workshops.
                    </li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-8 lg:col-span-2">
                  <div className="bg-[#F6EDE4] px-4 py-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="">
                        <div className="relative w-full h-[208px]">
                          <Link href="/">
                            <Image
                              src="/img/marin-theater.png"
                              alt=""
                              objectFit="cover"
                              layout="fill"
                              className="w-full shadow-lg shadow-[#ac8f738f] "
                            />
                          </Link>
                        </div>
                        <span className="text-sm font-workSans uppercase text-themeTextBlack block text-right mt-5">
                          <Link href="/"> Marine Theatre</Link>
                        </span>
                      </div>
                      <div className="">
                        <div className="relative w-full h-[208px]">
                          <Link href="/">
                            <Image
                              src="/img/marin-theater.png"
                              alt=""
                              objectFit="cover"
                              layout="fill"
                              className="w-full shadow-lg shadow-[#ac8f738f] "
                            />
                          </Link>
                        </div>
                        <span className="text-sm font-workSans uppercase text-themeTextBlack block text-right mt-5">
                          <Link href="/" target="_blank">
                            {" "}
                            Another pic
                          </Link>
                        </span>
                      </div>
                      <div className="">
                        <div className="relative w-full h-[208px]">
                          <Link href="/">
                            <Image
                              src="/img/marin-theater.png"
                              alt=""
                              objectFit="cover"
                              layout="fill"
                              className="w-full shadow-lg shadow-[#ac8f738f] "
                            />
                          </Link>
                        </div>
                        <span className="text-sm font-workSans uppercase text-themeTextBlack block text-right mt-5">
                          <Link href="/">another pic</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-9  justify-between">
                {/* Left Column */}
                <div className="lg:col-span-3 md:order-2">
                  <ul className="list-disc  space-y-2 pl-6 theme-list">
                    <li>
                    <Link
                        href="https://www.lymeregismuseum.co.uk/"
                        className="underline"
                        target="_blank"
                      >Lyme Regis Museum</Link> – With the bad weather this is a good
                      time to find the fossils as they become uncovered. Learn
                      the geology and about the Jurassic Coast.
                    </li>
                    <li>
                    <Link
                        href="http://www.dinosaurland.co.uk/"
                        className="underline"
                        target="_blank"
                      > Dinosaur Land</Link> (Lyme Regis) – Lyme Regis where you can find
                      out a lot about the local geology
                    </li>
                    <li>
                    <Link
                        href="https://www.marinetheatre.com/whats-on/"
                        className="underline"
                        target="_blank"
                      >Marine Theatre</Link> (Lyme Regis) – We get very good reports
                      back of this theatre
                    </li>
                    <li>
                    <Link
                        href="http://www.exeter.gov.uk/index.aspx?articleid=2914"
                        className="underline"
                        target="_blank"
                      >Exeter Underground Passages</Link> – Discover medieval
                      passageways that run under the city’s streets at this
                      visitor attraction in the centre of the city centre
                    </li>
                    <li>
                      Train ride on the Dawlish Loop – is said to be one of
                      Britain’s most spectacular railway journeys, especially in
                      bad weather when the waves frequently wash over the train.
                      Check out this little <Link
                        href="https://www.youtube.com/watch?v=16D1VrCQJYQ"
                        className="underline"
                        target="_blank"
                      >YouTube clip</Link> (BBC’s Coast) to see
                      what we mean
                    </li>
                    <li>
                      Swimming pool at Axminster– very nice swimming pool with
                      hydrotherapy pool that is very warm!, a 15-minute journey
                      from Hawley Farm
                    </li>
                    <li>
                      Cinema in <Link
                        href="https://sidmouth.scottcinemas.co.uk/"
                        className="underline"
                        target="_blank"
                      >Sidmouth</Link> or Exeter – the Sidmouth cinema is a
                      lovely old-fashioned cinema, there is one at Bridport as
                      well. where as Exeter offers the full range
                      (
                        <Link
                        href="https://www.odeon.co.uk/cinemas/exeter/90/"
                        className="underline"
                        target="_blank"
                      >Odeon,</Link>
                         <Link
                        href="https://www.myvue.com/cinema/exeter/whats-on"
                        className="underline"
                        target="_blank"
                      >Vue, </Link>
                        <Link
                        href="https://www.picturehouses.com/"
                        className="underline"
                        target="_blank"
                      >Picturehouse</Link>
                        )
                    </li>
                    <li>
                      Planet Play Honiton indoor
                      playground <Link
                        href="https://planet-play.co.uk/"
                        className="underline"
                        target="_blank"
                      >https://planet-play.co.uk/</Link>
                    </li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-8 lg:col-span-2 md:order-1">
                  <div className="bg-[#F6EDE4] px-4 py-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="">
                        <div className="relative w-full h-[208px]">
                          <Link href="/">
                            <Image
                              src="/img/marin-theater.png"
                              alt=""
                              objectFit="cover"
                              layout="fill"
                              className="w-full shadow-lg shadow-[#ac8f738f] "
                            />
                          </Link>
                        </div>
                        <span className="text-sm font-workSans uppercase text-themeTextBlack block text-right mt-5">
                          <Link href="/"> Another pic</Link>
                        </span>
                      </div>
                      <div className="">
                        <div className="relative w-full h-[208px]">
                          <Link href="/">
                            <Image
                              src="/img/east-devon.jpeg"
                              alt=""
                              objectFit="cover"
                              layout="fill"
                              className="w-full shadow-lg shadow-[#ac8f738f] "
                            />
                          </Link>
                        </div>
                        <span className="text-sm font-workSans uppercase text-themeTextBlack block text-right mt-5">
                          <Link href="/" target="_blank">
                            {" "}
                            Another pic
                          </Link>
                        </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
