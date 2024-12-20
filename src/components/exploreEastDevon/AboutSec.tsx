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
      <section className="pt-14 pb-40">
        <div className="container mx-auto  on-the-farm-content">
          <div className="max-w-[936px] mx-auto w-full">
            <Heading text="Explore East Devon" className="pb-8" />
            <p>
              We are enviously located in a beautiful part of the quiet English
              countryside, and within a stone’s throw from a plethora of
              activities for all generations to visit. Below are a few
            </p>
            <p>
              recommendations from our visitors during their stays that we want
              to share with you. And take a look at our page What if it rains?
              for ideas if you don’t fancy being exposed to a particularly grey
              day!
            </p>
            <div className="tours mt-10 mb-14">
              <SecondoryHeading text="Fun with the kids" className="mb-6" />
              <div className="bg-[#F6EDE4] px-5 py-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[7px]">
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
                      <Link href="/"> Jurassic Coast </Link>
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
                      <Link href="/"> Axe Wildlife park</Link>
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
                      <Link href="/"> seaton tramway </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <SubHeading
                  text="Jurassic Coast"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                  We are very lucky to be within easy reach of the coast, after
                  a short drive you will have a fantastic choice of beaches to
                  choose from; Lyme Regis, Sidmouth, Charmouth, Seatown,
                  Branscombe, Seaton and Beer all make a lovely days out.
                  Finding fossils, swimming, building sand castles, fishing,
                  coastal path walking and much more.
                </p>
                <p>
                  Remember to bring a hammer and goggles for fossil finding. You
                  may be lucky enough to find an ammonite already exposed but
                  otherwise join the other families cracking open the beach
                  rocks.
                </p>
              </div>
              <div className="my-10">
                <SubHeading
                  text="Axe Valley Wildlife Park"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                  Just an example, please choose 2 more experiences for families
                  with kids on sunny days
                </p>
              </div>
              <div className="my-10">
                <SubHeading
                  text="Seaton Tramway"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>Add Text</p>
              </div>
            </div>

            <div className="tours mt-10 ">
              <SecondoryHeading text="At one with nature" className="mb-6" />
              <div className="bg-[#F6EDE4] px-5 py-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[7px]">
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
                      <Link href="/"> Blackdown Hills</Link>
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
                      <Link href="https://www.dartmoor.gov.uk/" target="_blank">
                        {" "}
                        Dartmoor national park
                      </Link>
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
                      <Link href="/">Burrow farm gardens</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <SubHeading
                  text="Blackdown Hills"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                  Classified as an Area of Outstanding Natural Beauty, the 
                  <Link
                    href="https://blackdownhillsaonb.org.uk/"
                    className="underline"
                    target="_blank"
                  >
                    Blackdown Hills
                  </Link>
                   are unmissable. It’s a good job Hawley Farm is located within
                  them! The hills are a dream for cyclists and walkers alike who
                  can benefit from great pathways and amazing vistas. There are
                  also plenty of historical sites including Bronze Age burial
                  sites, Iron Age forts, castles and churches. Aside from that,
                  it´s a great place to go on a nature trail.
                </p>
              </div>
              <div className="my-10">
                <SubHeading
                  text="Dartmoor National Park"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                  <Link
                    href="https://www.dartmoor.gov.uk/"
                    className="underline"
                    target="_blank"
                  >
                    Dartmoor National 
                  </Link>
                  is nearby and a fantastic day out for all. You can delve into
                  the bogs or check out the rivers and streams that meander
                  through the park. There are also many ancient stone circles
                  and intriguing standing stones waiting to be found. Dartmoor
                  is also a place of myths and legends. Look out for the
                  headless horseman, black hounds and pixies!
                </p>
              </div>
              <div className="my-10">
                <SubHeading
                  text="Gardens"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                  Burrow Farm gardens are within the foot path walk no. 4 on the
                  Circular walks in and around Dalwood. So a visit not to be
                  missed. 13 Acres of heaven, now in their 50th year.
                </p>
                <p>
                  If you come in a gardening group of 10 or more Mary can
                  arrange a tour, around the different design styles that make
                  up the colour from 1st April to the end of October. Wild
                  flower meadow, Azalea Glade, Terrace, Rose, The Millennium
                  Garden and more to see. There is a Cafe and a Nursery, dogs
                  are allowed on leads. Open 10am - 6pm.
                </p>
                <p>
                  Bicton Park Botanical Gardens are 45 minutes drive. Open every
                  day from 10.00am. At 63 acres, there is lots to see and
                  explore for all the family. Italian garden, American and
                  Stream gardens, Mediterranean and Rose gardens. The Fernery
                  and Shell House. The Hermitage garden. the Pinetum and
                  Arboretum, and much more.
                </p>
                <p>
                  Childrens outdoor and indoor play, a woodland railway, a
                  countryside museum, this is a full day out for all.
                </p>
                <p>Dogs on leads, postcode EX9 7BG</p>
                <p>
                  If you would like to see the smaller local gardens there are
                  many that open up for the National Garden Scheme, it is really
                  worth going as they may only open for a few days in the year
                  when they are at their best, all the money goes to good
                  charities
                </p>
              </div>
              <div className="mt-10">
                <SubHeading
                  text="Dark Skies"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>Enter Text</p>
              </div>
            </div>
            <div className="tours mt-10 ">
              <SecondoryHeading
                text="Towns/Cultural experiences"
                className="mb-6"
              />
              <div className="bg-[#F6EDE4] px-5 py-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[7px]">
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
                      <Link href="/"> dalwood</Link>
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
                        lyme bay winery
                      </Link>
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
                      <Link href="/">ford abbey</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <SubHeading
                  text="Dalwood"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                  Dalwood is the closest village to Hawley Farm and guests can
                  benefit massively from the friendly community and local
                  amenities.
                </p>

                <p>
                  St. Peter’s church is worth a visit for a look at its stained
                  glass windows and religious architecture.
                </p>
                <p>
                  Head to The 
                  <Link
                    href="https://whatpub.com/pubs/EXE/105/tuckers-arms-dalwood/"
                    className="underline"
                    target="_blank"
                  >
                    Tucker’s Arms
                  </Link>
                  , one of the oldest buildings in Dalwood, for homely food and
                  local real ales.
                </p>
                <p>You can find out what’s happening in Dalwood on their {" "}
                  <Link href="/" className="underline" target="_blank">
                    website.
                  </Link>
                </p>
              </div>
              <div className="my-10">
                <SubHeading
                  text="Winery"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>Lyme Bay Winery is the home of LBW Drinks. Our small, dedicated drinks company is full of people who are passionate about producing delicious and award-winning English Wine, Fruit Wine, Mead, Liqueurs and Spirits from our home in Devon’s beautiful Axe Valley.</p>
                <p>Here we combine our knowledge and love of flavours and ingredients with our wine-making skills to craft award-winning traditional drinks, tailored to the 21st-century palate Each of these amazing products is fermented, blended and aged, as appropriate, right here at the Winery under the supervision of our experienced team.</p>
              </div>
              <div className="mt-10">
                <SubHeading
                  text="Ford Abbey & Gardens"
                  className=" text-darkCustomGreen mb-4"
                />
                <p>
                Ford Abbey and Gardens are just over the border into Dorset, but only 30 minutes from Hawley farm holiday cottages, founded by monks 800 years ago. Thirty acres of all year round interest. From 1st March, the fountain is on three times a day, 12noon, 1.30 and 3pm. A working kitchen garden, spring bulbs, herbaceous borders along the canal, a bog garden and arboretum. Good autumn colours.
                </p>
                <p>A plant Nursery and a food and gift shop. Dog friendly on leads and mobility scooters for hire if booked. The House and Gardens are open all days except Mondays and Saturdays from 10am. to 5.30 <Link href="mailto:info@fordabbey.co.uk" className="underline">info@fordabbey.co.uk</Link> tel no. 01460221290 postcode TA204LU</p>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
