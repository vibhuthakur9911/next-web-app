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
      <section className="pt-14 pb-48">
        <div className="container mx-auto  on-the-farm-content">
          <div className="max-w-[936px] mx-auto w-full">
            <Heading text="On the farm" className="pb-8" />
            <p>
              If you haven’t stayed on a farm before, let us give you an idea of
              what to expect...
            </p>
            <div className="tours mt-10 mb-14">
              <SecondoryHeading text="Milking tours" className="mb-6" />
              <p>
                If you would like to learn more about the milk and beef
                industry, we are more than happy to take you on a tour of the
                sheds at milking time.{" "}
              </p>
              <p>
                We are happy to arrange a tour when you’re with us. If you would
                like to take a tour on the day you arrive, please contact us to
                arrange. Milking normally takes place at around 6am and 4:30pm.
              </p>
              <div className="text-center">
                <Button
                  text="Arrange a milking tour"
                  href="/"
                  className="mt-12"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 a-year-farm">
              <SecondoryHeading text="A year on the farm" />
              {/* <div className="a-year-farm-content">
                <h6 className="">January - february</h6>
                <p>As the snow melts, the sheep find their green grass again to eat. Many sheep keep the East Devon fields tidy in the winter when most of the cattle are not to be seen as they winter in the warm sheds on the farm, being fed the silage that had been made in the summer close to the village of Dalwood.</p>
              </div> */}
              <OnTheFarm
                text={`As the snow melts, the sheep find their green grass again to eat. Many sheep keep the East Devon fields tidy in the winter when most of the cattle are not to be seen as they winter in the warm sheds on the farm, being fed the silage that had been made in the summer close to the village of Dalwood.`}
                month={`January - february`}
              />

              <OnTheFarm
                text={`The Daffodils are all out, Primroses and the Hawthorn in the hedges.
Our young ewes on the farm are getting heavy in lamb now and are being feed daily with ewe rolls, they have had plenty of grass to eat all through the winter.
The weaned calves in the sheds at Hawley are very vocal when we arrive with the Land Rover thinking they would like some more blend that we feed them twice a day, this is bought from a local mill, it is a corn mixed feed that they like. They also eat ad lib silage, soon they will be out in the fields racing about and will be able to eat the grass.
Fencing is being done by Graham and Winston on the farm ready for the turn out, so the animals will stay in the correct fields and will not make their way to places they should not be! This is always an ongoing spring job.
The farm yard manure that has gathered over the winter from the cattle is being spread over the fields as this is a good natural fertiliser to feed the ground so a good crop of grass will grow in the spring.
Nearby, finding fossils at Lyme Regis and Charmouth can be easy this time of year as with the winter weather there is more uncovered.`}
                month={`March`}
              />
              <OnTheFarm
                text={`The cows have gone out to grass by day but waiting for the warmer nights to stay out all the time.
Most of the ewes will have lambed by the end of the month. In the mornings as the nights are cold with frosts the young lambs like to sleep on top of the ewes as their wool fleeces is lovely and warm.`}
                month={`APRIL`}
              />
              <OnTheFarm
                text={`The leaves are out and the trees look glorious, bright and shiny It is a lovely time of year, the bluebells are everywhere with many others flowers, wild garlic, little violets. The weather has been very dry and a little cold, however a lot of sunshine.
It is great to see the lambs running around and jumping in the air as if they are on springs. Children love to bottle feed spare lambs while on holiday in the spacious barn conversions near the Jurassic Coast.
Have just cut for first cut silage, it is early as the spring has been magnificent. The quality will be great but the quantity will not be large. Regrowth soon if it rains, we hope!`}
                month={`MAY`}
              />
              <OnTheFarm
                text={`eating and drinking together, and sitting out in the sun on the long summer days.
The weaned lambs enjoying looking for things to nibble in the hedges.`}
                month={`JUNE`}
              />
              <OnTheFarm
                text={`The cows are given a large run of a few fields and have some silage feed on the ground. Half of the herd have been dried up, so are not milking, they are on their rest period before they calve at the end of August.
The lambs have weaned from the ewes as they are at an age where the can eat the grass and do not need their mother’s milk anymore, this gives the mothers a rest period. 
On the farm, we had a crop of wheat which we decided to clamp for extra feed for the winter as this would make a good feed and prospects for a third cut were slim. It is a corn crop that is cut before it is fully ripe and is clamped, just like grass to make silage`}
                month={`JULY`}
              />
              <OnTheFarm
                text={`Calving starts at the end of August and continues into September and October with the pens getting full of calves. The milk in the tank starts to increase.
The cows start to receive silage as the grass loses its value and the cows need extra feed.
During the second half of October the leaves start to change colour, the fascinating Oak trees really look delightful.
The older calves enjoy having their cake in the troughs, a good time to count them if you can!`}
                month={`August - october`}
              />
              <OnTheFarm
                text={`Over late winter and early spring, it´s time for sheep lambing and you can watch the whole process happen at Hawley Farm. 
Treat your family to a Devon farm holiday before the festive season and expect baby cows and lambs on the children´s Christmas lists! It´s also a great option if you want to get away for Christmas and New Year or book both and bring all the family with you and have a party away from home! 
Plan something a little different for your friends or colleagues. The nearby towns have a sense of Christmas spirit and community that you won´t find in any big city.`}
                month={`November - December`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
