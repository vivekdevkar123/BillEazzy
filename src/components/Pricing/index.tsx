"use client";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plansPerView, setPlansPerView] = useState(3);

  const plans = [
    {
      packageName: "Trial Plan",
      price: "199",
      duration: "30 days",
      subtitle: "Perfect to start - 50 bills to try out our service",
      badge: undefined,
      isCustom: false,
      features: [
        { text: "50 bills", status: "active" },
        { text: "Cloud storage", status: "active" },
        { text: "GST compliance", status: "active" },
        { text: "Multi-device access", status: "active" },
        { text: "Cloud backup", status: "inactive" },
        { text: "24x7 support", status: "inactive" },
        { text: "Inventory management", status: "inactive" },
        { text: "Excel export", status: "inactive" },
        { text: "Sales reports", status: "inactive" },
        { text: "Inventory reports", status: "inactive" },
      ],
    },
    {
      packageName: "1 Month Plan",
      price: "399",
      duration: "30 days",
      subtitle: "Try it out - unlimited bills for a month",
      badge: undefined,
      isCustom: false,
      features: [
        { text: "Unlimited bills", status: "active" },
        { text: "Cloud storage", status: "active" },
        { text: "GST compliance", status: "active" },
        { text: "Multi-device access", status: "active" },
        { text: "Cloud backup", status: "inactive" },
        { text: "24x7 support", status: "inactive" },
        { text: "Inventory management", status: "inactive" },
        { text: "Excel export", status: "inactive" },
        { text: "Sales reports", status: "inactive" },
        { text: "Inventory reports", status: "inactive" },
      ],
    },
    {
      packageName: "3 Months Plan",
      price: "999",
      duration: "90 days",
      subtitle: "Most popular - save 17% with unlimited bills",
      badge: "Popular",
      isCustom: false,
      features: [
        { text: "Unlimited bills", status: "active" },
        { text: "Cloud storage", status: "active" },
        { text: "GST compliance", status: "active" },
        { text: "Multi-device access", status: "active" },
        { text: "Cloud backup", status: "active" },
        { text: "24x7 support", status: "active" },
        { text: "Inventory management", status: "active" },
        { text: "Excel export", status: "inactive" },
        { text: "Sales reports", status: "inactive" },
        { text: "Inventory reports", status: "inactive" },
      ],
    },
    {
      packageName: "6 Months Plan",
      price: "1699",
      duration: "180 days",
      subtitle: "Great value - save 29% plus inventory management",
      badge: undefined,
      isCustom: false,
      features: [
        { text: "Unlimited bills", status: "active" },
        { text: "Cloud storage", status: "active" },
        { text: "GST compliance", status: "active" },
        { text: "Multi-device access", status: "active" },
        { text: "Cloud backup", status: "active" },
        { text: "24x7 support", status: "active" },
        { text: "Inventory management", status: "active" },
        { text: "Excel export", status: "active" },
        { text: "Sales reports", status: "inactive" },
        { text: "Inventory reports", status: "inactive" },
      ],
    },
    {
      packageName: "12 Months Plan",
      price: "2799",
      duration: "365 days",
      subtitle: "Best deal - save 42% with all premium features",
      badge: "Best Value",
      isCustom: false,
      features: [
        { text: "Unlimited bills", status: "active" },
        { text: "Cloud storage", status: "active" },
        { text: "GST compliance", status: "active" },
        { text: "Multi-device access", status: "active" },
        { text: "Cloud backup", status: "active" },
        { text: "24x7 support", status: "active" },
        { text: "Inventory management", status: "active" },
        { text: "Excel export", status: "active" },
        { text: "Insights dashboard", status: "active" },
        { text: "Sales reports", status: "active" },
        { text: "Inventory reports", status: "active" },
      ],
    },
    {
      packageName: "Custom Plan",
      price: "",
      duration: undefined,
      subtitle: "Need something different? Contact us to create a plan tailored specifically for your business needs.",
      badge: undefined,
      isCustom: true,
      features: [
        { text: "Custom billing limits", status: "active" },
        { text: "Flexible duration", status: "active" },
        { text: "All features available", status: "active" },
        { text: "Dedicated support", status: "active" },
        { text: "Custom integrations", status: "active" },
        { text: "Priority onboarding", status: "active" },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPlansPerView(1);
      } else if (window.innerWidth < 1024) {
        setPlansPerView(2);
      } else {
        setPlansPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, plans.length - plansPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose the perfect plan for your business. Start with our trial plan and upgrade as you grow. Need a custom solution? Contact us to create a plan tailored to your needs."
          center
          width="665px"
        />

        <div className="relative">
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-primary p-3 text-white shadow-lg transition hover:bg-primary/90 lg:-translate-x-12"
              aria-label="Previous plans"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-primary p-3 text-white shadow-lg transition hover:bg-primary/90 lg:translate-x-12"
              aria-label="Next plans"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / plansPerView)}%)`,
              }}
            >
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / plansPerView}%` }}
                >
                  <PricingBox
                    packageName={plan.packageName}
                    price={plan.price}
                    duration={plan.duration}
                    subtitle={plan.subtitle}
                    badge={plan.badge}
                    isCustom={plan.isCustom}
                  >
                    {plan.features.map((feature, idx) => (
                      <OfferList
                        key={idx}
                        text={feature.text}
                        status={feature.status as "active" | "inactive"}
                      />
                    ))}
                  </PricingBox>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-body-color/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
