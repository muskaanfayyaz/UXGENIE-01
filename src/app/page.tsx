import Image from "next/image";
import"./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "./features/page";
import { Pricing } from "./pricing/page";
import { About } from "./about/page";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Features/>
      <Pricing/>
      <About/>
    </div>
  );
}
