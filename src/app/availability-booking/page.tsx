import Image from "next/image";
import PaddingTop from "@/components/utils/PaddingTop";
import AboutSec from "@/components/availabilityBookingUtils/AboutSec"
import OurCottages from "@/components/availabilityBookingUtils/OurCottages"
export default function Home() {
  return (
    <div>
      <PaddingTop />
      <AboutSec/>
      <OurCottages/>
    </div>
  );
}
