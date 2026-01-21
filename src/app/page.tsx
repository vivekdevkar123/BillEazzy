import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BillEazzy - Simple & Effective Billing & Inventory Management",
  description: "Generate professional bills effortlessly, manage inventory seamlessly, and get comprehensive sales and inventory reports. BillEazzy makes billing simple and effective.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
    </>
  );
}
