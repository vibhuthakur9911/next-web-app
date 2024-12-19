import Image from "next/image";
import HomeBanner from "@/components/ciderPressUtils/HomeBanner";
import AboutSec from "@/components/ciderPressUtils/AboutSec"
import OurGallery from "@/components/ciderPressUtils/OurGallery"
import OtherAccommodation from "@/components/ciderPressUtils/OtherAccommodation"
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutSec/>
      <OurGallery />
      <OtherAccommodation />
    </div>
  );
}
