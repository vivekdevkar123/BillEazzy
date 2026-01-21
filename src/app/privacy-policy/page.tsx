import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BillEazzy",
  description: "Read BillEazzy's Privacy Policy to understand how we collect, use, and protect your personal information.",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <section className="relative z-10 overflow-hidden py-16 pt-[120px] md:py-20 md:pt-[150px] lg:py-28 lg:pt-[180px]">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-body-color text-base dark:text-body-color-dark">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-gray-dark rounded-lg p-8 shadow-three">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Introduction
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                At BillEazzy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our billing and inventory management services.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
                Information We Collect
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="text-body-color dark:text-body-color-dark mb-6 list-disc pl-6 space-y-2">
                <li>Account information (name, email address, phone number)</li>
                <li>Business information (company name, address, GST details)</li>
                <li>Billing and transaction data</li>
                <li>Inventory and product information</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
                How We Use Your Information
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-body-color dark:text-body-color-dark mb-6 list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>

              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
                Data Security
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
                Data Retention
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>

              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
                Your Rights
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-4">
                You have the right to:
              </p>
              <ul className="text-body-color dark:text-body-color-dark mb-6 list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
                Contact Us
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-body-color dark:text-body-color-dark">
                Email: mrvivekdevkar123@gmail.com or Sopudevkar90@gmail.com<br />
                Phone: +91 87999 19978 or +91 93705 68621
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
