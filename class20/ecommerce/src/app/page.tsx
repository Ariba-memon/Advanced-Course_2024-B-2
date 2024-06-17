import Image from "next/image";
import  Hero  from "./Components/sections/Hero";
import Swipper from "./Components/shared/Swipper"
import Cards from "./Components/sections/Cards";
import Faq from "./Components/sections/Faq";
export default function Home() {
  return (
   <div>
    <Hero />
    <Swipper />
   <Cards/>
   <Faq />
   </div>
  );
}
