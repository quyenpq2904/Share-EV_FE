"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { formatCurrency } from "@/lib/utils/currency";
import { Card, CardBody, Divider, Image } from "@heroui/react";
import { BillingStep } from "./BillingStep";
import { PaymentStep } from "./PaymentStep";
import { CompletionStep } from "./CompletionStep";

function CheckoutPage() {
  const { orderData, totalDue, currentStep } = useCheckout();

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BillingStep />;
      case 1:
        return <PaymentStep />;
      case 2:
        return <CompletionStep />;
      default:
        return <BillingStep />;
    }
  };

  if (currentStep === 2) {
    return (
      <div className="max-w-2xl mx-auto mt-10">
        <CompletionStep />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">{renderStepContent()}</div>
        <div className="lg:col-span-4">
          <Card>
            <CardBody className="p-6 space-y-6">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="flex gap-4">
                <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-default-100">
                  <Image
                    alt={orderData.item.name}
                    className="w-full h-full object-cover"
                    src={orderData.item.image}
                    removeWrapper
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">
                    {orderData.pricing.sharePercentage}% Share of{" "}
                    {orderData.item.name}
                  </p>
                  <p className="text-xs text-default-600 mt-1">
                    {orderData.item.description}
                  </p>
                </div>
              </div>

              <Divider />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-default-600">Share Price</span>
                  <span className="font-medium">
                    {formatCurrency(orderData.pricing.sharePrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-600">Platform Fee</span>
                  <span className="font-medium">
                    {formatCurrency(orderData.pricing.platformFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-default-600">Taxes</span>
                  <span className="font-medium">
                    {formatCurrency(orderData.pricing.taxes)}
                  </span>
                </div>
              </div>

              <Divider />

              <div className="flex font-bold justify-between items-center">
                <span>Total Due</span>
                <span className="font-bold text-2xl text-success-500">
                  {formatCurrency(totalDue)}
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
