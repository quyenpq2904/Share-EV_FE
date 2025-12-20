"use client";

import StatsCard from "@/components/StatsCard";
import { Avatar, Button, Card, CardBody, Chip, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function OrganizationDashboard() {
  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-default-900">
            VF8 Hanoi - Group 01
          </h1>
          <div className="flex items-center gap-2 text-default-500">
            <Icon icon="solar:map-point-linear" />
            <span>Cau Giay, Hanoi</span>
            <span className="text-default-300">•</span>
            <span className="text-success font-medium">Active</span>
          </div>
        </div>
        <Button
          color="primary"
          variant="flat"
          startContent={<Icon icon="solar:key-linear" />}
        >
          Book Vehicle
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Vehicle Status Card (Span 2 cols) */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-content1 to-default-50 border border-default-200 shadow-sm min-h-[300px]">
          <CardBody className="p-0 relative overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between z-10">
              <div className="space-y-4">
                <Chip
                  color="success"
                  variant="dot"
                  className="border-none pl-1"
                >
                  Available Now
                </Chip>
                <div>
                  <h3 className="text-2xl font-bold text-default-900">
                    VinFast VF8
                  </h3>
                  <p className="text-default-500">License: 30K - 123.45</p>
                </div>

                <div className="space-y-2 max-w-[200px]">
                  <div className="flex justify-between text-sm">
                    <span className="text-default-500">Battery Level</span>
                    <span className="text-green-600 font-bold">85%</span>
                  </div>
                  <Progress
                    value={85}
                    color="success"
                    size="sm"
                    className="h-2"
                  />
                  <p className="text-xs text-default-400">
                    Range: approx. 380km
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center gap-2 text-sm text-default-600 bg-background/60 p-2 rounded-lg w-fit backdrop-blur-sm">
                  <Icon icon="solar:parking-linear" className="text-lg" />
                  <span>Parked at: </span>
                  <span className="font-semibold">My Dinh Stadium, Zone B</span>
                </div>
              </div>
            </div>

            {/* Car Image Area */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto flex items-center justify-center">
              {/* Abstract circular background */}
              <div className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -right-20 -top-20" />

              {/* Placeholder for Car Image - Replace with Image component */}
              <Icon
                icon="mdi:car-electric"
                className="text-[180px] text-default-300 relative z-10"
              />

              {/* Optional: Real image would be like this:
                    <Image 
                        src="/path/to/vf8.png" 
                        alt="VinFast VF8" 
                        className="object-contain relative z-10 drop-shadow-xl"
                        fill
                    /> 
                    */}
            </div>
          </CardBody>
        </Card>

        {/* Quick Stats & Actions */}
        <div className="space-y-4">
          <Card className="bg-content1 border border-default-200 shadow-sm">
            <CardBody className="p-4 flex flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <Icon icon="solar:wallet-linear" className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-default-500">Fund Balance</p>
                  <p className="text-xl font-bold text-default-900">
                    12,500,000 đ
                  </p>
                </div>
              </div>
              <Link
                href="finances"
                className="text-sm text-blue-500 hover:underline"
              >
                Details
              </Link>
            </CardBody>
          </Card>

          <Card className="bg-content1 border border-default-200 shadow-sm">
            <CardBody className="p-4 flex flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                  <Icon icon="solar:calendar-linear" className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-default-500">Next Booking</p>
                  <p className="text-base font-bold text-default-900">
                    Today, 18:00
                  </p>
                  <p className="text-xs text-default-400">by Jane Doe</p>
                </div>
              </div>
              <Link
                href="schedule"
                className="text-sm text-blue-500 hover:underline"
              >
                View
              </Link>
            </CardBody>
          </Card>

          <Card className="bg-content1 border border-default-200 shadow-sm">
            <CardBody className="p-4 flex flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                  <Icon icon="solar:letter-linear" className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-default-500">Unread Messages</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-default-900">2</p>
                    <span className="text-xs text-red-500 font-medium scale-90 bg-red-50 px-1 rounded-sm">
                      New
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="messages"
                className="text-sm text-blue-500 hover:underline"
              >
                Chat
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="bg-content1 border border-default-200 shadow-sm h-full">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-default-900">
                Recent Activity
              </h3>
              <Button size="sm" variant="light" className="text-default-500">
                View All
              </Button>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Charging Complete",
                  time: "2 hours ago",
                  icon: "solar:bolt-bold",
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                  detail: "Charged to 85% (15kWh)",
                },
                {
                  title: "Trip Completed",
                  time: "Yesterday",
                  icon: "solar:route-bold",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                  detail: "Alex drove 45km",
                },
                {
                  title: "Maintenance Alert",
                  time: "2 days ago",
                  icon: "solar:wrench-bold",
                  color: "text-orange-500",
                  bg: "bg-orange-500/10",
                  detail: "Tire pressure low",
                },
                {
                  title: "Fund Contribution",
                  time: "3 days ago",
                  icon: "solar:wallet-money-bold",
                  color: "text-purple-500",
                  bg: "bg-purple-500/10",
                  detail: "Jane contributed 1,000,000 đ",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center shrink-0`}
                  >
                    <Icon icon={item.icon} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-default-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-default-500">{item.detail}</p>
                    <span className="text-[10px] text-default-400 mt-1 block">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Upcoming Schedule Timeline (Vertical) */}
        <Card className="bg-content1 border border-default-200 shadow-sm h-full">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-default-900">
                Upcoming Trips
              </h3>
              <Link href="schedule">
                <Button size="sm" variant="light" className="text-default-500">
                  Open Calendar
                </Button>
              </Link>
            </div>

            <div className="relative pl-4 border-l-2 border-default-100 space-y-8">
              {[
                {
                  day: "Today",
                  date: "Oct 24",
                  time: "18:00 - 22:00",
                  user: "Jane Doe",
                  avatar: "https://i.pravatar.cc/150?u=u1",
                  status: "Confirmed",
                },
                {
                  day: "Tomorrow",
                  date: "Oct 25",
                  time: "08:00 - 18:00",
                  user: "Alex Miller",
                  avatar: "https://i.pravatar.cc/150?u=me",
                  status: "Pending",
                },
                {
                  day: "Sat",
                  date: "Oct 26",
                  time: "All Day",
                  user: "Sam Wilson",
                  avatar: "https://i.pravatar.cc/150?u=u2",
                  status: "Confirmed",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-content1" />
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          {item.day}
                        </span>
                        <p className="text-default-900 font-bold">
                          {item.date}
                        </p>
                      </div>
                      <Chip
                        size="sm"
                        variant="flat"
                        color={
                          item.status === "Confirmed" ? "success" : "warning"
                        }
                      >
                        {item.status}
                      </Chip>
                    </div>

                    <div className="bg-default-50 p-3 rounded-lg border border-default-100 flex items-center justify-between mt-1">
                      <div className="flex items-center gap-3">
                        <Avatar src={item.avatar} size="sm" />
                        <div>
                          <p className="text-sm font-medium text-default-900">
                            {item.user}
                          </p>
                          <p className="text-xs text-default-500">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default OrganizationDashboard;
