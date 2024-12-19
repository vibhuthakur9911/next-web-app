import Image from "next/image";
import HomeBanner from "@/components/homeutils/HomeBanner";
import AboutSec from "@/components/homeutils/AboutSec"
import OurCottages from "@/components/homeutils/OurCottages"
import ThingsToDo from "@/components/homeutils/ThingsToDo"
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutSec/>
      <OurCottages />
      <ThingsToDo />
    </div>
  );
}
