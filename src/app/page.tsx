import Image from "next/image";
import"./globals.css";
import Hero from "@/components/Hero";
import InternshipProgram from "./programs/page";
import CompetitionPage from "./competitions/page";
import AboutUXGenie  from "./about/page";
import ContactUs from "./contact/page";
import FAQSection from "./faq/page";
import CampusAmbassador from "./campus-ambassador/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutUXGenie/>
      <InternshipProgram/>
      <CampusAmbassador/>
      <CompetitionPage/>
      <ContactUs/>
      <FAQSection/>
    </div>
  );
}
