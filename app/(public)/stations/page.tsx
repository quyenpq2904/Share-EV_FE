"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Chip,
  Input,
  Select,
  SelectItem,
  Switch,
  ScrollShadow,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import AppBreadcrumb from "@/components/AppBreadcrumb";

// --- Mock Data ---
type StationType =
  | "Handover"
  | "Charging"
  | "Maintenance"
  | "Storage"
  | "Mixed";
type StationStatus = "Open" | "Closed" | "Limited";

interface Station {
  id: string;
  name: string;
  address: string;
  city: string;
  type: StationType[];
  status: StationStatus;
  parkingSpots: number;
  vehicles: string[];
  hours: string;
  coordinates: { lat: number; lng: number };
  image: string;
  facilities: string[];
  contact?: string;
  note?: string;
  distance: string;
}

const STATIONS_DATA: Station[] = [
  {
    id: "1",
    name: "Central EV Hub & Handover",
    address: "123 Innovation Blvd, Tech District",
    city: "San Francisco",
    type: ["Handover", "Charging", "Maintenance"],
    status: "Open",
    parkingSpots: 45,
    vehicles: ["Sedan", "SUV", "Luxury"],
    hours: "24/7",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    facilities: [
      "Supercharger 150kW",
      "Lounge",
      "Coffee",
      "Staffed Handover",
      "Car Wash",
    ],
    contact: "+1 (415) 555-0123",
    note: "Please park in the designated 'Handover Zone' (Green paint) for check-ins.",
    distance: "1.2 mi",
  },
  {
    id: "2",
    name: "Westside Quick Charge",
    address: "45 Ocean View Dr, Sunset",
    city: "San Francisco",
    type: ["Charging"],
    status: "Open",
    parkingSpots: 12,
    vehicles: ["Sedan", "Compact"],
    hours: "06:00 - 23:00",
    coordinates: { lat: 37.75, lng: -122.48 },
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2070&auto=format&fit=crop",
    facilities: ["DC Fast Charge 50kW", "Self-service"],
    distance: "4.5 mi",
  },
  {
    id: "3",
    name: "Airport Long-term Storage",
    address: "Terminal 4 Garage, Level 2",
    city: "San Bruno",
    type: ["Storage", "Handover"],
    status: "Limited",
    parkingSpots: 150,
    vehicles: ["All"],
    hours: "24/7",
    coordinates: { lat: 37.62, lng: -122.38 },
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2038&auto=format&fit=crop",
    facilities: ["Secure Entry", "CCTV", "Weekly Maintenance Check"],
    contact: "+1 (650) 555-0987",
    note: "Accessible only with valid flight ticket or pre-booking code.",
    distance: "12.0 mi",
  },
  {
    id: "4",
    name: "Downtown Service Center",
    address: "88 Market St, Financial Dist",
    city: "San Francisco",
    type: ["Maintenance", "Charging"],
    status: "Closed",
    parkingSpots: 8,
    vehicles: ["Sedan", "SUV"],
    hours: "08:00 - 18:00",
    coordinates: { lat: 37.79, lng: -122.39 },
    image:
      "https://images.unsplash.com/photo-1530030501683-93d396bd45c6?q=80&w=2070&auto=format&fit=crop",
    facilities: ["Tire Change", "Battery Config", "Standard Charge 11kW"],
    note: "Opens tomorrow at 08:00.",
    distance: "2.1 mi",
  },
  {
    id: "5",
    name: "Bay Area Mall Charging",
    address: "Mall Road 5",
    city: "Emeryville",
    type: ["Charging", "Mixed"],
    status: "Open",
    parkingSpots: 200,
    vehicles: ["All"],
    hours: "10:00 - 22:00",
    coordinates: { lat: 37.83, lng: -122.29 },
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    facilities: ["Level 2 Charging", "Shopping", "Food Court"],
    distance: "8.3 mi",
  },
];

// --- Components ---

const StatusBadge = ({ status }: { status: StationStatus }) => {
  const colors = {
    Open: "bg-success",
    Closed: "bg-default-400",
    Limited: "bg-warning",
  };
  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
      <span className="text-small font-medium text-default-600">{status}</span>
    </div>
  );
};

export default function StationsPage() {
  const [selectedStation, setSelectedStation] = useState<Station>(
    STATIONS_DATA[0]
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredStations = STATIONS_DATA.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      s.type.some((t) => t.toLowerCase() === selectedType);
    return matchesSearch && matchesType;
  });

  return (
    <div className="w-full max-w-7xl mx-auto mt-5 mb-10 px-6 h-[calc(100vh-90px)] flex flex-col">
      <AppBreadcrumb />
      <div className="flex-1 flex flex-col md:overflow-hidden bg-background border border-default-200 rounded-xl shadow-sm overflow-hidden relative">
        {/* Header */}
        <div className="border-b border-default-200 bg-background/80 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-20 shrink-0">
          <div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-default-500">
              Stations & Handover Points
            </h1>
            <p className="text-default-500 text-sm mt-1">
              Find charging, parking, and handover locations in your network
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="flat"
              startContent={<Icon icon="solar:map-point-linear" />}
            >
              View Map
            </Button>
            <Button
              color="primary"
              startContent={<Icon icon="solar:compass-bold" />}
            >
              Nearest Station
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden relative">
          {/* Left Panel: Filters & List */}
          <div className="w-full md:w-[400px] flex flex-col border-r border-default-200 bg-background z-10 h-full">
            {/* Filters */}
            <div className="p-4 space-y-4 border-b border-default-200 shrink-0">
              <Input
                placeholder="Search by name or address..."
                startContent={
                  <Icon
                    icon="solar:magnifer-linear"
                    className="text-default-400"
                  />
                }
                value={searchQuery}
                onValueChange={setSearchQuery}
                radius="lg"
                classNames={{ inputWrapper: "bg-default-100" }}
              />
              <div className="flex gap-2">
                <Select
                  placeholder="Station Type"
                  selectedKeys={[selectedType]}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="flex-1"
                  size="sm"
                >
                  <SelectItem key="all">All Types</SelectItem>
                  <SelectItem key="handover">Handover</SelectItem>
                  <SelectItem key="charging">Charging</SelectItem>
                  <SelectItem key="maintenance">Maintenance</SelectItem>
                  <SelectItem key="storage">Storage</SelectItem>
                </Select>
                <Select placeholder="Availability" className="flex-1" size="sm">
                  <SelectItem key="all">Any Status</SelectItem>
                  <SelectItem key="open">Open Now</SelectItem>
                  <SelectItem key="247">24/7</SelectItem>
                </Select>
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-sm text-default-500">My Groups Only</span>
                <Switch size="sm" color="success" />
              </div>
            </div>

            {/* List */}
            <ScrollShadow className="flex-1 p-4 space-y-3">
              {filteredStations.map((station) => (
                <div
                  key={station.id}
                  onClick={() => setSelectedStation(station)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all hover:border-primary/50 hover:bg-default-50 space-y-3 ${
                    selectedStation.id === station.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-default-200 bg-background"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3
                        className={`font-bold ${
                          selectedStation.id === station.id
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {station.name}
                      </h3>
                      <p className="text-xs text-default-500 truncate mt-0.5">
                        {station.address}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-default-600">
                        {station.distance}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {station.type.map((t) => (
                      <Chip
                        key={t}
                        size="sm"
                        variant="flat"
                        className="h-6 gap-1 px-2"
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>

                  <Divider className="opacity-50" />

                  <div className="flex justify-between items-center text-xs text-default-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:parking-bold" />{" "}
                        {station.parkingSpots} spots
                      </span>
                      <StatusBadge status={station.status} />
                    </div>
                    <div className="flex gap-1">
                      {station.facilities.includes("Coffee") && (
                        <Icon icon="solar:cup-bold" />
                      )}
                      {station.facilities.includes("Shopping") && (
                        <Icon icon="solar:bag-bold" />
                      )}
                      {station.facilities.includes("Car Wash") && (
                        <Icon icon="solar:waterdrops-bold" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollShadow>
          </div>

          {/* Right Panel: Detail View */}
          <div
            className={`absolute inset-0 md:static md:flex-1 bg-default-50 flex flex-col transition-transform duration-300 ${
              selectedStation
                ? "translate-x-0"
                : "translate-x-full md:translate-x-0"
            }`}
          >
            {/* Mobile "Back" Button Overlay (could be implemented if we treat this as a layered view on mobile) */}
            {/* For now, simplified as a desktop-first responsive pane */}

            {selectedStation ? (
              <div className="flex flex-col h-full overflow-y-auto">
                {/* Map Placeholder / Hero Image */}
                <div className="h-64 relative w-full bg-default-200 shrink-0">
                  <img
                    src={selectedStation.image}
                    className="w-full h-full object-cover"
                    alt={selectedStation.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h2 className="text-3xl font-bold">
                        {selectedStation.name}
                      </h2>
                      <p className="opacity-90 flex items-center gap-2 mt-1">
                        <Icon icon="solar:map-point-bold" />{" "}
                        {selectedStation.address}, {selectedStation.city}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-8 max-w-4xl mx-auto w-full space-y-8">
                  {/* Action Bar */}
                  <div className="flex gap-4">
                    <Button
                      color="primary"
                      size="lg"
                      className="flex-1 shadow-lg shadow-primary/20"
                      startContent={<Icon icon="solar:calendar-add-bold" />}
                    >
                      Book Handover here
                    </Button>
                    <Button
                      variant="flat"
                      size="lg"
                      className="flex-1"
                      startContent={<Icon icon="solar:map-arrow-up-bold" />}
                    >
                      Navigate
                    </Button>
                    <Button isIconOnly variant="faded" size="lg">
                      <Icon icon="solar:heart-linear" className="text-xl" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Info Column */}
                    <div className="space-y-6">
                      <section>
                        <h4 className="text-sm font-bold text-default-500 uppercase mb-3">
                          Operating Info
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-default-200">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                              <Icon
                                icon="solar:clock-circle-bold"
                                className="text-xl"
                              />
                            </div>
                            <div className="w-full">
                              <div className="flex justify-between w-full">
                                <p className="font-semibold">Opening Hours</p>
                                <p className="text-default-500">
                                  {selectedStation.hours}
                                </p>
                              </div>
                              <p className="text-xs text-success mt-1">
                                {selectedStation.status} Now
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-default-200">
                            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                              <Icon
                                icon="solar:phone-bold"
                                className="text-xl"
                              />
                            </div>
                            <div>
                              <p className="font-semibold">Contact</p>
                              <p className="text-default-500">
                                {selectedStation.contact || "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-sm font-bold text-default-500 uppercase mb-3">
                          Notes for Co-owners
                        </h4>
                        <div className="p-4 bg-warning/10 border border-warning/20 rounded-xl text-warning-700">
                          <p className="text-sm flex gap-2">
                            <Icon
                              icon="solar:info-circle-bold"
                              className="mt-0.5 shrink-0"
                            />
                            {selectedStation.note ||
                              "No specific instructions for this station."}
                          </p>
                        </div>
                      </section>
                    </div>

                    {/* Facilities Column */}
                    <div className="space-y-6">
                      <section>
                        <h4 className="text-sm font-bold text-default-500 uppercase mb-3">
                          Facilities & Services
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedStation.facilities.map((fac, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-3 bg-background border border-default-100 rounded-lg shadow-sm"
                            >
                              <Icon
                                icon="solar:check-circle-bold"
                                className="text-success text-lg shrink-0"
                              />
                              <span className="text-sm font-medium">{fac}</span>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h4 className="text-sm font-bold text-default-500 uppercase mb-3">
                          Vehicle Compatibility
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedStation.vehicles.map((v) => (
                            <Chip key={v} variant="dot" color="primary">
                              {v}
                            </Chip>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-default-400">
                <Icon
                  icon="solar:map-point-search-linear"
                  className="text-6xl mb-4"
                />
                <p className="text-lg font-medium">
                  Select a station to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
