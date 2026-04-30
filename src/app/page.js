import Allanimels from "@/component/shared/Allanimels";
import HeroBanner from "@/component/shared/HeroBanner";
import QurbaniTips from "@/component/shared/QurbaniTips";
import TopBreeds from "@/component/shared/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Allanimels></Allanimels>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
    </div>
  );
}
