import Image from "next/image";
import HomeBanner from "@/components/ciderPressUtils/HomeBanner";
import AboutSec from "@/components/onTheFarmUtils/AboutSec"
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutSec/>
    </div>
  );
}
