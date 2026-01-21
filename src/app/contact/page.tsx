import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BillEazzy - Get in Touch with Our Co-Founders",
  description: "Get in touch with Vivek Devkar or Sopan Devkar, co-founders of BillEazzy. Contact us directly for any inquiries or support.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
