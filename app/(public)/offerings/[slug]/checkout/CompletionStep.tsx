"use client";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const CompletionStep = () => {
  return (
    <Card className="border border-success/20">
      <CardBody className="p-10 flex flex-col items-center text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center text-success">
          <Icon icon="solar:verified-check-bold" className="text-5xl" />
        </div>
        <h2 className="text-2xl font-bold text-success">Order Successful!</h2>
        <p className="text-default-600 max-w-md">
          Thank you for your purchase. Your share certificate and ownership
          details have been sent to your email.
        </p>
        <Button
          as={Link}
          href="/me/garage"
          color="success"
          className="mt-4 font-bold"
        >
          Go to My Garage
        </Button>
      </CardBody>
    </Card>
  );
};
