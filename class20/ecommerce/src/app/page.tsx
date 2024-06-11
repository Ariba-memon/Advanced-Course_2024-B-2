import Image from "next/image";
import  Hero  from "./Components/sections/Hero";
import Swipper from "./Components/shared/Swipper"
export default function Home() {
  return (
   <div>
    <Hero />
    <Swipper />
   </div>
  );
}
