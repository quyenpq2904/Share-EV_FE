"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    tagline: "Former Tesla Engineer passionate about shared mobility.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "David Miller",
    role: "CTO",
    tagline: "AI researcher specializing in predictive algorithms.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    tagline: "Designing seamless experiences for complex ownership models.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Community Lead",
    tagline: "Building trust within co-ownership groups.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-success/5 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold">
                <Icon icon="solar:star-bold" /> About SharedEV
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-default-500">
                Powering fair and transparent electric vehicle co-ownership.
              </h1>
              <p className="text-xl text-default-500 leading-relaxed max-w-lg">
                We manage EV co-ownership, scheduling, and shared costs with
                AI-powered transparency, making shared mobility as simple and
                trustworthy as owning a personal car.
              </p>

              <div className="pt-8 flex gap-12 border-t border-default-200/50">
                <div>
                  <p className="text-3xl font-bold">2023</p>
                  <p className="text-sm text-default-500">Founded</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-default-500">Groups Active</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1200+</p>
                  <p className="text-sm text-default-500">EVs Managed</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-default-200 aspect-video lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
                  alt="Shared EV Charging"
                  className="w-full h-full object-cover"
                />
                {/* Floating UI Elements Overlay */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-8 right-8 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-default-100 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Icon icon="solar:pie-chart-2-bold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Ownership</p>
                      <p className="text-tiny text-default-500">Live Status</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-default-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary w-[40%]" />
                    <div className="h-full bg-success w-[30%]" />
                    <div className="h-full bg-warning w-[30%]" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-default-100 flex items-center gap-4"
                >
                  <div className="p-3 bg-success/10 rounded-full text-success text-2xl">
                    <Icon icon="solar:check-circle-bold" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Schedule Confirmed</p>
                    <p className="text-tiny text-default-500">
                      AI Collision Check Passed
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-default-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-none shadow-medium bg-background">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-primary">
                  Our Mission
                </p>
                <h3 className="font-bold text-2xl mt-2">
                  Democratize Ownership
                </h3>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-default-500 text-lg leading-relaxed">
                  To make shared EV ownership as simple, reliable, and
                  trustworthy as traditional individual ownership, removing the
                  barriers of cost and logistical complexity.
                </p>
              </CardBody>
            </Card>
            <Card className="p-8 border-none shadow-medium bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-success">
                  Our Vision
                </p>
                <h3 className="font-bold text-2xl mt-2">
                  Sustainable Communities
                </h3>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  We envision a future where communities, families, and
                  organizations can seamlessly share EVs, significantly reducing
                  costs and carbon footprints while maximizing asset
                  utilization.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. The Problem */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why SharedEV exists</h2>
            <p className="text-default-500">
              Traditional co-ownership is fraught with friction. We solved the
              hardest parts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "solar:graph-down-bold",
                colors: "text-danger bg-danger/10",
                title: "Complex Ownership",
                desc: "Manually calculating ownership ratios, equity, and responsibilities leads to disputes and confusion.",
              },
              {
                icon: "solar:calendar-date-bold",
                colors: "text-warning bg-warning/10",
                title: "Scheduling Conflicts",
                desc: "Without a central system, double-bookings and unfair access create friction between co-owners.",
              },
              {
                icon: "solar:bill-list-bold",
                colors: "text-primary bg-primary/10",
                title: "Opaque Expenses",
                desc: "Splitting costs for charging, insurance, and maintenance manually is tedious and lacks transparency.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`p-5 rounded-3xl mb-6 ${item.colors}`}>
                  <Icon icon={item.icon} className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-default-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-success/20 to-primary/20 border border-success/20 text-center">
            <p className="text-xl font-medium text-foreground">
              SharedEV centralizes ownership, scheduling, and expenses in one{" "}
              <span className="font-bold text-success-600">
                transparent system
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-24 bg-default-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold">How SharedEV Works</h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-default-200 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { title: "Register", icon: "solar:document-add-bold" },
                { title: "Schedule", icon: "solar:calendar-add-bold" },
                { title: "Track", icon: "solar:route-bold" },
                { title: "Split Costs", icon: "solar:wallet-money-bold" },
                { title: "Transact", icon: "solar:card-transfer-bold" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center bg-default-50 md:bg-transparent p-4 rounded-xl"
                >
                  <div className="w-24 h-24 rounded-full bg-background border-4 border-default-50 shadow-lg flex items-center justify-center mb-6">
                    <Icon
                      icon={step.icon}
                      className="text-3xl text-default-600"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{step.title}</h4>
                  <p className="text-sm text-default-400 mt-2">Step 0{i + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI Innovation */}
      <section className="py-24 bg-[#0a0f16] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <span className="text-success font-bold tracking-wider text-sm uppercase">
              Innovation Core
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              AI-driven fairness and efficiency
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "solar:tag-price-bold",
                title: "Smart Pricing & Sales",
                desc: "AI suggests fair market prices for shares and estimates sale probability based on trends.",
              },
              {
                icon: "solar:users-group-two-rounded-bold",
                title: "Fair Scheduling",
                desc: "Algorithms balance booking requests against ownership ratios to ensure fair access for all.",
              },
              {
                icon: "solar:clipboard-check-bold",
                title: "Predictive Maintenance",
                desc: "AI analyzes usage patterns to flag maintenance needs and assist in digital handover inspections.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Icon icon={card.icon} className="text-4xl text-success mb-6" />
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team & Culture */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">The team behind SharedEV</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {TEAM_MEMBERS.map((member, i) => (
              <Card key={i} className="border-none shadow-none bg-transparent">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-default-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-default-400 text-sm">{member.tagline}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-default-600 leading-relaxed">
              We operate on a culture of trust, transparency, and
              sustainability. Our mission is to collaborate with EV communities,
              co-living projects, and fleet operators to build a cleaner, shared
              future.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Who We Serve */}
      <section className="py-24 bg-default-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "solar:home-smile-bold",
                title: "Co-ownership Groups",
                desc: "Families and neighbors sharing a premium EV to reduce individual costs.",
              },
              {
                icon: "solar:buildings-bold",
                title: "Corporate Fleets",
                desc: "Companies optimizing fleet utilization across employees and departments.",
              },
              {
                icon: "solar:city-bold",
                title: "Communities",
                desc: "Residential complexes offering shared mobility as a modern amenity.",
              },
            ].map((card, i) => (
              <Card key={i} className="p-6">
                <CardHeader className="flex gap-4">
                  <div className="p-3 bg-default-100 rounded-xl">
                    <Icon icon={card.icon} className="text-2xl" />
                  </div>
                  <h4 className="text-lg font-bold">{card.title}</h4>
                </CardHeader>
                <CardBody>
                  <p className="text-default-500">{card.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA & Contact */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Want to bring SharedEV to your community?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" color="primary" className="font-semibold px-8">
              Book a Demo
            </Button>
            <Button size="lg" variant="bordered" className="font-semibold px-8">
              Contact Sales
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-default-500 text-sm border-t border-default-200 pt-8">
            <span className="flex items-center gap-2">
              <Icon icon="solar:letter-bold" /> hello@sharedev.com
            </span>
            <span className="flex items-center gap-2">
              <Icon icon="solar:map-point-bold" /> San Francisco, CA
            </span>
            <div className="flex gap-4">
              <Icon
                icon="mdi:twitter"
                className="text-xl cursor-pointer hover:text-foreground"
              />
              <Icon
                icon="mdi:linkedin"
                className="text-xl cursor-pointer hover:text-foreground"
              />
              <Icon
                icon="mdi:github"
                className="text-xl cursor-pointer hover:text-foreground"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
