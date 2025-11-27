"use client";
import { useCheckout } from "@/contexts/CheckoutContext";
import {
  Button,
  Card,
  CardBody,
  Input,
  RadioGroup,
  Radio,
} from "@heroui/react";

export const PaymentStep = () => {
  const { nextStep, prevStep } = useCheckout();

  return (
    <Card>
      <CardBody className="p-6 md:p-8 space-y-6">
        <h2 className="text-xl font-bold">Payment Method</h2>

        <RadioGroup defaultValue="card" color="success">
          <Radio value="card">Credit / Debit Card</Radio>
          <Radio value="paypal">PayPal</Radio>
        </RadioGroup>

        <div className="space-y-4 p-4 border border-default-200 rounded-xl">
          <Input
            label="Card Number"
            placeholder="0000 0000 0000 0000"
            labelPlacement="outside"
          />
          <div className="flex gap-4">
            <Input
              label="Expiry"
              placeholder="MM/YY"
              labelPlacement="outside"
            />
            <Input label="CVC" placeholder="123" labelPlacement="outside" />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="flat" onPress={prevStep}>
            Back
          </Button>
          <Button color="success" className="font-bold" onPress={nextStep}>
            Pay Now
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
