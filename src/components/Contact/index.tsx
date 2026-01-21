import Image from "next/image";
import { getImagePath } from "@/utils/imagePath";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Contact our co-founders directly for any inquiries or support.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-three transition-all hover:shadow-lg dark:bg-gray-dark sm:rounded-xl">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-dark">
                    <Image
                      src={getImagePath("/images/founder/vivek.jpeg")}
                      alt="Vivek Devkar"
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16 px-8 pb-8 pt-4 text-center sm:px-10">
                <h3 className="mb-1 text-2xl font-bold text-black dark:text-white">
                  Vivek Devkar
                </h3>
                <p className="text-body-color mb-6 text-sm font-medium">
                  Co-Founder
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="text-primary flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4H2a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:mrvivekdevkar123@gmail.com"
                      className="text-body-color hover:text-primary text-sm font-medium transition-colors dark:text-body-color-dark sm:text-base"
                    >
                      mrvivekdevkar123@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="text-primary flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:+918799919978"
                      className="text-body-color hover:text-primary text-sm font-medium transition-colors dark:text-body-color-dark sm:text-base"
                    >
                      +91 87999 19978
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-three transition-all hover:shadow-lg dark:bg-gray-dark sm:rounded-xl">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-dark">
                    <Image
                      src={getImagePath("/images/founder/sopan.jpeg")}
                      alt="Sopan Devkar"
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16 px-8 pb-8 pt-4 text-center sm:px-10">
                <h3 className="mb-1 text-2xl font-bold text-black dark:text-white">
                  Sopan Devkar
                </h3>
                <p className="text-body-color mb-6 text-sm font-medium">
                  Co-Founder
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="text-primary flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4H2a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:Sopudevkar90@gmail.com"
                      className="text-body-color hover:text-primary text-sm font-medium transition-colors dark:text-body-color-dark sm:text-base"
                    >
                      Sopudevkar90@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="text-primary flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href="tel:+919370568621"
                      className="text-body-color hover:text-primary text-sm font-medium transition-colors dark:text-body-color-dark sm:text-base"
                    >
                      +91 93705 68621
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
