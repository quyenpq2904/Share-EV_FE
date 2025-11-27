"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const initialOrderData = {
  item: {
    name: "2023 Tesla Model Y",
    description: "Long Range | Deep Blue Metallic",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
  },
  pricing: {
    sharePrice: 6200.0,
    sharePercentage: 10,
    platformFee: 150.0,
    taxes: 558.0,
  },
};

export interface BillingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface CheckoutContextType {
  orderData: typeof initialOrderData;
  billingInfo: BillingInfo;
  totalDue: number;
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateBillingInfo: (info: Partial<BillingInfo>) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const totalDue =
    initialOrderData.pricing.sharePrice +
    initialOrderData.pricing.platformFee +
    initialOrderData.pricing.taxes;

  const updateBillingInfo = (info: Partial<BillingInfo>) => {
    setBillingInfo((prev) => ({ ...prev, ...info }));
  };

  const setStep = (step: number) => setCurrentStep(step);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const value = {
    orderData: initialOrderData,
    billingInfo,
    totalDue,
    currentStep,
    setStep,
    nextStep,
    prevStep,
    updateBillingInfo,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
