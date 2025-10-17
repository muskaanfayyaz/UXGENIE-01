import Image from "next/image";
import"./globals.css";
import Hero from "@/components/Hero";
import InternWelcomePage from "./interns/page";
import InternshipProgram from "./programs/page";
import CompetitionPage from "./competitions/page";
import AboutUXGenie  from "./about/page";
import ContactUs from "./contact/page";
import FAQSection from "./faq/page";
import CampusAmbassador from "./campus-ambassador/page";
import InternshipStatsPage from "./stats/page";
import TestimonialsPage from "./testinomials/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <InternshipStatsPage/>
      <AboutUXGenie/>
      <TestimonialsPage/>
      <InternWelcomePage/>
      <InternshipProgram/>
      <CampusAmbassador/>
      <CompetitionPage/>
      <FAQSection/>
      <ContactUs/>
    </div>  
  );
}
