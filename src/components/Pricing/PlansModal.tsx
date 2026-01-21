"use client";
import { useEffect } from "react";
import Link from "next/link";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

interface Plan {
  packageName: string;
  price: string;
  duration?: string;
  subtitle: string;
  badge?: string;
  isCustom?: boolean;
  features: Array<{ text: string; status: "active" | "inactive" }>;
}

const plans: Plan[] = [
  {
    packageName: "Trial Plan",
    price: "199",
    duration: "30 days",
    subtitle: "Perfect to start - 50 bills to try our service",
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
      { text: "Insights dashboard", status: "inactive" },
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
      { text: "Insights dashboard", status: "inactive" },
    ],
  },
  {
    packageName: "3 Months Plan",
    price: "999",
    duration: "90 days",
    subtitle: "Most popular - save 17% with the plan",
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
      { text: "Insights dashboard", status: "inactive" },
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
      { text: "Insights dashboard", status: "inactive" },
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
      { text: "Sales reports", status: "active" },
      { text: "Inventory reports", status: "active" },
      { text: "Insights dashboard", status: "active" },
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

interface PlansModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlansModal = ({ isOpen, onClose }: PlansModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-dark md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Choose Your Plan
          </h2>
          <p className="text-body-color text-base dark:text-body-color-dark">
            Select the perfect plan for your business needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingBox
              key={index}
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
                  status={feature.status}
                />
              ))}
            </PricingBox>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-body-color mb-4 text-sm dark:text-body-color-dark">
            Need help choosing?{" "}
            <Link
              href="/contact"
              onClick={onClose}
              className="text-primary hover:underline"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlansModal;
