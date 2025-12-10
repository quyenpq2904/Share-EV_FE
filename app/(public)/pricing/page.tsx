"use client";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Accordion,
  AccordionItem,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header & Intro */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-success/5 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-6">
            <Icon icon="solar:tag-price-bold" /> Simple & Transparent
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-default-500">
            Pricing & Platform Fees
          </h1>
          <p className="text-xl text-default-500 leading-relaxed">
            We believe in aligning our success with yours. That's why we use a
            simple, transparent fee model with no hidden charges.
          </p>
        </div>
      </section>

      {/* 2. Fee Summary */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Share Sale Fee */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-2 border-primary/20 bg-background shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Icon icon="solar:card-transfer-bold" className="text-9xl" />
                </div>
                <CardBody className="p-8 flex flex-col items-center text-center z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon icon="solar:wallet-money-bold" className="text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Share Sale Fee</h2>
                  <div className="text-6xl font-black text-primary my-4">
                    5%
                  </div>
                  <p className="text-lg font-medium text-default-600 mb-2">
                    of the share sale amount
                  </p>
                  <p className="text-default-500 max-w-sm">
                    Charged only when a co-owner successfully sells their
                    ownership share through the platform.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Operation Fee */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-2 border-success/20 bg-background shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Icon icon="solar:settings-bold" className="text-9xl" />
                </div>
                <CardBody className="p-8 flex flex-col items-center text-center z-10">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success mb-6">
                    <Icon icon="solar:bolt-bold" className="text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Operation Fee</h2>
                  <div className="text-6xl font-black text-success my-4">
                    5%
                  </div>
                  <p className="text-lg font-medium text-default-600 mb-2">
                    of the vehicle base value / year
                  </p>
                  <p className="text-default-500 max-w-sm">
                    Used to operate and maintain the platform, including
                    scheduling, logging, financial tools, and support.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Fee Explanation */}
      <section className="py-24 bg-default-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How our fees work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon icon="solar:wallet-bold" className="text-primary" /> Share
                Sale Fee (5%)
              </h3>
              <ul className="space-y-4">
                {[
                  "Applied when a seller completes a share sale transaction.",
                  "Calculated as 5% of the total share sale price.",
                  "Covers secure payments, contract handling, and ownership record updates.",
                  "Ensures verification of buyer and secure transfer of digital assets.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-default-600">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-primary shrink-0 mt-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Icon icon="solar:bolt-bold" className="text-success" />{" "}
                Operation Fee (5%)
              </h3>
              <ul className="space-y-4">
                {[
                  "Calculated based on the vehicle’s base value annually.",
                  "Can be split among co-owners according to ownership ratio.",
                  "Covers core platform services: scheduling, logging, analytics, and support.",
                  "Includes AI features like predictive maintenance and smart pricing.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-default-600">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-success shrink-0 mt-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Example Cost Breakdown */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Card className="bg-default-50 border border-default-200">
            <CardHeader className="px-8 pt-8 pb-0">
              <h2 className="text-2xl font-bold">See it in action</h2>
            </CardHeader>
            <CardBody className="p-8 grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex flex-col justify-center">
                <div className="text-sm font-bold text-default-500 uppercase mb-4">
                  Example 1: Selling a Share
                </div>
                <div className="bg-background border border-default-200 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-default-600">Share Sale Price</span>
                    <span className="font-bold">$10,000</span>
                  </div>
                  <div className="flex justify-between mb-4 pb-4 border-b border-dashed border-default-300">
                    <span className="text-default-600">Platform Fee</span>
                    <span className="font-bold text-primary">5%</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-lg">Fee Amount</span>
                    <span className="text-2xl font-black text-primary">
                      $500
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-sm font-bold text-default-500 uppercase mb-4">
                  Example 2: Annual Operation
                </div>
                <div className="bg-background border border-default-200 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-default-600">Vehicle Base Value</span>
                    <span className="font-bold">$40,000</span>
                  </div>
                  <div className="flex justify-between mb-4 pb-4 border-b border-dashed border-default-300">
                    <span className="text-default-600">Annual Op. Fee</span>
                    <span className="font-bold text-success">5%</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-lg">Total Fee / Year</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-success block">
                        $2,000
                      </span>
                      <span className="text-tiny text-default-400">
                        (Split among co-owners)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* 5. What's Included */}
      <section className="py-24 bg-default-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">What you get with SharedEV</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="flex gap-4 pb-2">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Icon icon="solar:user-bold" className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">For Co-owners</h4>
                  <p className="text-tiny text-default-500">
                    The ultimate ownership experience
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-3">
                  {[
                    "Ownership dashboard",
                    "AI Fair Scheduling",
                    "Automated Cost Sharing",
                    "Share Sale & Transfer Tools",
                    "Digital Vehicle Logs",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-default-600">
                      <Icon
                        icon="solar:check-read-linear"
                        className="text-primary mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardHeader className="flex gap-4 pb-2">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Icon icon="solar:user-id-bold" className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">For Staff</h4>
                  <p className="text-tiny text-default-500">
                    Efficient operations management
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-3">
                  {[
                    "Approval Workflows",
                    "Digital Handover Checks",
                    "Maintenance Ticketing",
                    "Payment Verification",
                    "Fleet Status Monitoring",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-default-600">
                      <Icon
                        icon="solar:check-read-linear"
                        className="text-secondary mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardHeader className="flex gap-4 pb-2">
                <div className="p-3 bg-warning/10 rounded-xl text-warning">
                  <Icon icon="solar:shield-user-bold" className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">For Admins</h4>
                  <p className="text-tiny text-default-500">
                    Full control & transparency
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-3">
                  {[
                    "Rules & Fee Management",
                    "Financial Reports",
                    "Audit Logs",
                    "Multi-branch Control",
                    "User Role Management",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-default-600">
                      <Icon
                        icon="solar:check-read-linear"
                        className="text-warning mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="When is the fee charged?"
              title="When is the 5% share sale fee charged?"
            >
              The 5% share sale fee is only charged when a co-owner successfully
              transfers or sells their share to another party via the platform.
              It is deducted automatically from the final sale amount at the
              time of settlement.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="How is the operation fee split?"
              title="How is the 5% operation fee collected and split?"
            >
              The annual operation fee is calculated based on validity of the
              vehicle's base value. This amount can be automatically billed
              monthly or annually and is split among co-owners proportional to
              their ownership stake (e.g., a 10% owner pays 10% of the fee).
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Are there hidden fees?"
              title="Are there any hidden fees?"
            >
              No. We strictly adhere to the 5% model for sales and operations.
              Any third-party payment processing fees (e.g., credit card fees)
              are passed through directly without markup, but we do not charge
              extra for storage, bandwidth, or additional users.
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0a0f16] to-[#000] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to manage your shared EVs with transparent pricing?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              className="bg-success text-white font-bold shadow-lg shadow-success/20 px-8"
              endContent={<Icon icon="solar:arrow-right-linear" />}
            >
              Start Free Pilot
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
