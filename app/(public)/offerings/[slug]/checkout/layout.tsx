"use client";

import AppBreadcrumb from "@/components/AppBreadcrumb";
import RowSteps from "@/components/RowSteps";
import { useAuthContext } from "@/contexts/AuthContext";
import { CheckoutProvider, useCheckout } from "@/contexts/CheckoutContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function CheckoutLayoutContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();
  const params = useParams();

  const { orderData, currentStep, setStep } = useCheckout();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isLoading, isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const slug = params.slug as string;

  return (
    <div className="max-w-7xl mx-auto mt-5 mb-10 px-6">
      <AppBreadcrumb
        dynamicRoutes={{
          [slug]: orderData.item.name,
        }}
      />

      <div className="w-fit mx-auto mt-6 mb-8">
        <RowSteps
          currentStep={currentStep}
          onStepChange={setStep}
          steps={[
            { title: "Billing Info" },
            { title: "Payment" },
            { title: "Complete" },
          ]}
        />
      </div>
      {children}
    </div>
  );
}

function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutProvider>
      <CheckoutLayoutContent>{children}</CheckoutLayoutContent>
    </CheckoutProvider>
  );
}
export default CheckoutLayout;
