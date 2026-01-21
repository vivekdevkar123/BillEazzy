import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BillEazzy - Simple & Effective Billing Solution",
  description: "Learn about BillEazzy - your all-in-one solution for effortless billing, inventory management, and business reporting.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
