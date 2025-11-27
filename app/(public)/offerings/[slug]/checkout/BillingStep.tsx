"use client";
import { useCheckout } from "@/contexts/CheckoutContext";
import { Button, Card, CardBody, Input } from "@heroui/react";
import { useMemo } from "react";

export const BillingStep = () => {
  const { billingInfo, updateBillingInfo, nextStep } = useCheckout();

  const isFormValid = useMemo(() => {
    return (
      billingInfo.fullName?.trim() !== "" &&
      billingInfo.email?.trim() !== "" &&
      billingInfo.phone?.trim() !== "" &&
      billingInfo.address?.trim() !== "" &&
      billingInfo.city?.trim() !== "" &&
      billingInfo.state?.trim() !== "" &&
      billingInfo.zip?.trim() !== "" &&
      billingInfo.country?.trim() !== ""
    );
  }, [billingInfo]);

  return (
    <Card>
      <CardBody className="p-6 md:p-8">
        <h2 className="text-xl font-bold mb-6">Billing Information</h2>

        <div className="space-y-5 flex flex-col">
          <Input
            isRequired // Hiển thị dấu *
            label="Full Name"
            placeholder="John Doe"
            labelPlacement="outside"
            value={billingInfo.fullName}
            onValueChange={(val) => updateBillingInfo({ fullName: val })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              isRequired
              label="Email Address"
              placeholder="you@example.com"
              labelPlacement="outside"
              type="email"
              value={billingInfo.email}
              onValueChange={(val) => updateBillingInfo({ email: val })}
            />
            <Input
              isRequired
              label="Phone Number"
              placeholder="(123) 456-7890"
              labelPlacement="outside"
              type="tel"
              value={billingInfo.phone}
              onValueChange={(val) => updateBillingInfo({ phone: val })}
            />
          </div>

          <Input
            isRequired
            label="Billing Address"
            placeholder="1234 Market St"
            labelPlacement="outside"
            value={billingInfo.address}
            onValueChange={(val) => updateBillingInfo({ address: val })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              isRequired
              label="City"
              placeholder="San Francisco"
              labelPlacement="outside"
              value={billingInfo.city}
              onValueChange={(val) => updateBillingInfo({ city: val })}
            />
            <Input
              isRequired
              label="State / Province"
              placeholder="CA"
              labelPlacement="outside"
              value={billingInfo.state}
              onValueChange={(val) => updateBillingInfo({ state: val })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              isRequired
              label="ZIP / Postal Code"
              placeholder="94103"
              labelPlacement="outside"
              value={billingInfo.zip}
              onValueChange={(val) => updateBillingInfo({ zip: val })}
            />
            <Input
              isRequired
              label="Country"
              placeholder="United States"
              labelPlacement="outside"
              value={billingInfo.country}
              onValueChange={(val) => updateBillingInfo({ country: val })}
            />
          </div>

          <div className="flex justify-end mt-4 pt-4 border-t border-default-100">
            <Button
              color="success"
              className="font-semibold"
              onPress={nextStep}
              isDisabled={!isFormValid}
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
