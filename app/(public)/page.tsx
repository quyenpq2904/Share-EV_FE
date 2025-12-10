"use client";

import { Button, Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const HeroSection = () => {
  const data = [
    { name: "Mon", cost: 400, usage: 240 },
    { name: "Tue", cost: 300, usage: 139 },
    { name: "Wed", cost: 200, usage: 980 },
    { name: "Thu", cost: 278, usage: 390 },
    { name: "Fri", cost: 189, usage: 480 },
    { name: "Sat", cost: 239, usage: 380 },
    { name: "Sun", cost: 349, usage: 430 },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-success/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <Chip
            variant="flat"
            color="success"
            className="w-fit"
            startContent={<Icon icon="solar:bolt-bold" />}
          >
            Electric Vehicle Co-ownership & Cost-sharing Platform
          </Chip>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
            Manage shared EV with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-primary">
              Transparency
            </span>{" "}
            & AI-Powered Fairness.
          </h1>
          <p className="text-lg text-default-600 max-w-xl">
            Simplify fractional EV ownership. Automate usage scheduling, expense
            splitting, and maintenance tracking with our intelligent platform
            designed for modern co-ownership groups.
          </p>

          <div className="flex gap-4 pt-2">
            <Button
              size="lg"
              color="primary"
              variant="shadow"
              className="font-semibold bg-gradient-to-r from-success to-primary shadow-success/20"
              endContent={<Icon icon="solar:arrow-right-linear" />}
            >
              Start Free Pilot
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="font-semibold"
              startContent={
                <Icon icon="solar:play-circle-linear" className="text-xl" />
              }
            >
              Watch 2-min overview
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-default-200/50">
            <div>
              <p className="text-2xl font-bold text-foreground">150+</p>
              <p className="text-sm text-default-500">Groups Managed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">35%</p>
              <p className="text-sm text-default-500">Cost Reduction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">98%</p>
              <p className="text-sm text-default-500">Higher Utils</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Laptop/Dashboard Mockup */}
          <div className="relative z-10 bg-default-50 border border-default-200/50 rounded-xl shadow-2xl overflow-hidden transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
            <div className="h-8 bg-default-100 border-b border-default-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-danger/80" />
              <div className="w-3 h-3 rounded-full bg-warning/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            <div className="p-6 grid grid-cols-12 gap-4 bg-background/50 backdrop-blur-3xl min-h-[400px]">
              {/* Dashboard Header */}
              <div className="col-span-12 flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Dashboard</h3>
                <div className="flex gap-2">
                  <Chip size="sm" color="primary" variant="flat">
                    My Share: 25%
                  </Chip>
                  <Chip size="sm" variant="flat">
                    Next Booking: Tomorrow
                  </Chip>
                </div>
              </div>

              {/* Stats Cards */}
              <Card className="col-span-4 shadow-sm border border-default-100">
                <CardBody className="gap-1 p-3">
                  <span className="text-tiny text-default-500">
                    Monthly Usage
                  </span>
                  <span className="text-xl font-semibold">1,240 km</span>
                </CardBody>
              </Card>
              <Card className="col-span-4 shadow-sm border border-default-100">
                <CardBody className="gap-1 p-3">
                  <span className="text-tiny text-default-500">
                    Shared Costs
                  </span>
                  <span className="text-xl font-semibold">$342.00</span>
                </CardBody>
              </Card>
              <Card className="col-span-4 shadow-sm border border-default-100">
                <CardBody className="gap-1 p-3">
                  <span className="text-tiny text-default-500">
                    Battery Health
                  </span>
                  <span className="text-xl font-semibold text-success">
                    98%
                  </span>
                </CardBody>
              </Card>

              {/* Chart */}
              <div className="col-span-8 h-[200px] mt-2 bg-default-50/50 rounded-xl p-2 border border-default-100">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorUsage"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#006fee"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#006fee"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stroke="#006fee"
                      fillOpacity={1}
                      fill="url(#colorUsage)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Sidebar */}
              <div className="col-span-4 h-[200px] mt-2 flex flex-col gap-2">
                <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                  <p className="text-tiny font-bold text-success uppercase">
                    AI Insight
                  </p>
                  <p className="text-xs mt-1">
                    Optimal charging time suggested for minimal cost.
                  </p>
                </div>
                <div className="bg-default-100 p-2 rounded-lg flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      icon="solar:calendar-bold"
                      className="text-default-400"
                    />
                    <span className="text-xs font-semibold">Today</span>
                  </div>
                  <div className="text-xs bg-background p-1.5 rounded border border-default-200 mb-1">
                    09:00 - John Doe
                  </div>
                  <div className="text-xs bg-primary/20 p-1.5 rounded border border-primary/20 text-primary">
                    14:00 - You
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glowing accents */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-success/20 to-primary/20 blur-[80px] rounded-full opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <motion.div whileHover={{ y: -5 }} className="h-full">
    <Card className="h-full border border-default-200/50 shadow-sm hover:shadow-xl hover:border-success/30 transition-all">
      <CardBody className="p-6 gap-4">
        <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success">
          <Icon icon={icon} className="text-2xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-default-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </CardBody>
    </Card>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "solar:document-add-bold",
      title: "Vehicle Registration & Listing",
      desc: "Easily register EVs, verify ownership documents, and list shares for sale within the platform.",
    },
    {
      icon: "solar:pie-chart-2-bold",
      title: "Account & Ownership Management",
      desc: "Track ownership ratios, manage co-owners, and handle digital e-contracts securely.",
    },
    {
      icon: "solar:calendar-date-bold",
      title: "AI-Assisted Scheduling",
      desc: "Smart shared calendar with conflict resolution to ensure fair usage for every co-owner.",
    },
    {
      icon: "solar:wallet-money-bold",
      title: "Cost & Payment Management",
      desc: "Automated splitting of charging, insurance, and maintenance costs with integrated payments.",
    },
    {
      icon: "solar:graph-up-bold",
      title: "Usage History & Analytics",
      desc: "Detailed insights into usage vs. ownership ratio, optimizing value for every member.",
    },
    {
      icon: "solar:users-group-rounded-bold",
      title: "Group Management & Voting",
      desc: "Democratic decision making with in-app voting and transparent logs for all activities.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-default-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need for <br />
            EV co-ownership.
          </h2>
          <p className="text-default-500">
            Comprehensive tools to manage the entire lifecycle of shared
            electric vehicle ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AIModulesSection = () => {
  return (
    <section
      id="ai-modules"
      className="py-24 relative overflow-hidden bg-[#0d0d0e] text-white"
    >
      {/* Circuit Pattern Background (Simulated) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2d88f1_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
            <Icon icon="solar:magic-stick-3-bold" />
            <span className="text-sm font-semibold">
              Powered by Artificial Intelligence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI at the core of SharedEV
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Our advanced AI algorithms work silently in the background to ensure
            fairness, predict maintenance needs, and optimize the value of your
            asset.
          </p>

          <div className="flex flex-col gap-6">
            {[
              {
                title: "Fair Scheduling",
                desc: "Automatically suggests slots based on ownership ratio.",
              },
              {
                title: "Predictive Maintenance",
                desc: "Analyzes telemetry to predict battery & tire wear.",
              },
              {
                title: "Price Optimization",
                desc: "Recommends share prices based on market trends.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                  <Icon icon="solar:check-circle-bold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-[#18181b] border border-white/10 text-white overflow-visible hover:border-success/50 transition-colors cursor-pointer group">
            <CardBody className="flex flex-row items-center gap-4 p-5">
              <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Icon icon="solar:tag-price-bold" className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">AI Price Suggestion</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-400">
                    Recommended List Price:
                  </span>
                  <span className="text-sm font-bold text-success">
                    $4,250 / 5% share
                  </span>
                </div>
              </div>
              <div className="bg-success/20 px-2 py-1 rounded text-success text-xs font-bold">
                82% Sale Chance
              </div>
            </CardBody>
          </Card>

          <Card className="bg-[#18181b] border border-white/10 text-white hover:border-success/50 transition-colors cursor-pointer group">
            <CardBody className="flex flex-row items-center gap-4 p-5">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Icon icon="solar:calendar-bold" className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Smart Scheduling</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Conflict-free booking based on your 25% ownership.
                </p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Next Slot</div>
                <div className="text-sm font-bold text-primary">
                  Sat, 10:00 AM
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-[#18181b] border border-white/10 text-white hover:border-success/50 transition-colors cursor-pointer group">
            <CardBody className="flex flex-row items-center gap-4 p-5">
              <div className="bg-red-500/20 p-3 rounded-lg text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Icon icon="solar:health-bold" className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Predictive Health</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Battery degradation normal. Tire rotation advised.
                </p>
              </div>
              <Chip size="sm" color="warning" variant="flat">
                Action Needed
              </Chip>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

const FlowSection = () => {
  return (
    <section className="py-20 border-t border-default-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">End-to-end Lifecycle</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-4 items-center">
          {[
            { icon: "solar:document-add-linear", label: "Register" },
            { icon: "solar:users-group-rounded-linear", label: "Co-own" },
            { icon: "solar:calendar-date-linear", label: "Schedule" },
            { icon: "solar:key-linear", label: "Handover" },
            { icon: "solar:wallet-linear", label: "Pay" },
            { icon: "solar:refresh-circle-linear", label: "Resell" },
          ].map((step, i, arr) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-default-300 flex items-center justify-center text-default-500 hover:border-primary hover:text-primary transition-colors">
                  <Icon icon={step.icon} className="text-2xl" />
                </div>
                <span className="text-sm font-medium text-default-600">
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block w-12 h-[2px] bg-default-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AIModulesSection />

      <FlowSection />

      <section className="py-24 bg-gradient-to-br from-[#002147] to-[#000000] text-white text-center">
        <div className="max-w-screen-md mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to modernize your EV ownership?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Join hundreds of co-ownership groups using AI to save costs and
            reduce disputes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-success text-white font-bold shadow-lg shadow-success/20"
            >
              Book a live demo
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Download Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
