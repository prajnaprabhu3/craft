import noise from "../../public/bg/noise.svg";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { craftData } from "@/data/crafts";
import CraftPreview from "./components/craft/craftPreview";
import Badge from "./components/badge";

export default function Home() {
  return (
    <div className="h-screen mx-auto  w-full flex flex-col justify-between items-center">
      <Header />
      <Hero />

      <div className="w-1/2 flex flex-col gap-y-10">
        {craftData.map((craft) => (
          <CraftPreview key={craft.id} {...craft} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
