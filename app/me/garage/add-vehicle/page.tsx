"use client";

import React from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Image,
  Card,
  CardBody,
} from "@heroui/react";
import { Icon } from "@iconify/react";

function AddVehiclePage() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Add Your Vehicle to the Platform
        </h1>
        <p className="text-default-600">
          Start by entering the essential details of your electric vehicle.
        </p>
      </div>

      <Card radius="lg">
        <CardBody className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl font-bold">Vehicle Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Make"
                  placeholder="e.g., Ferrari"
                  labelPlacement="outside"
                  radius="sm"
                />
                <Input
                  label="Model"
                  placeholder="e.g., 488 Pista"
                  labelPlacement="outside"
                  radius="sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Year"
                  placeholder="e.g., 2023"
                  labelPlacement="outside"
                  radius="sm"
                />
                <Input
                  label="VIN"
                  placeholder="Vehicle Identification Number"
                  labelPlacement="outside"
                  radius="sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Mileage"
                  placeholder="e.g., 5,000"
                  labelPlacement="outside"
                  radius="sm"
                />
                <Input
                  label="Exterior Color"
                  placeholder="e.g., Rosso Corsa"
                  labelPlacement="outside"
                  radius="sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Mileage"
                  placeholder="e.g., 5,000"
                  labelPlacement="outside"
                  radius="sm"
                />
                <Input
                  label="Exterior Color"
                  placeholder="e.g., Rosso Corsa"
                  labelPlacement="outside"
                  radius="sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Location"
                  placeholder="e.g., Miami, FL"
                  labelPlacement="outside"
                  radius="sm"
                />
                <Input
                  label="Listing Price ($)"
                  placeholder="e.g., 350,000"
                  labelPlacement="outside"
                  radius="sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Engine"
                  placeholder="e.g., 3.9L Twin-Turbo V8"
                  labelPlacement="outside"
                  radius="sm"
                />
                <Select
                  label="Transmission"
                  placeholder="Select"
                  labelPlacement="outside"
                  defaultSelectedKeys={["automatic"]}
                  radius="sm"
                >
                  <SelectItem key="automatic">Automatic</SelectItem>
                  <SelectItem key="manual">Manual</SelectItem>
                </Select>
              </div>
            </div>

            {/* --- RIGHT COLUMN: UPLOAD PHOTOS (Span 5) --- */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-6">Upload Vehicle Photos</h2>

              <div className="flex-1 flex flex-col gap-4">
                {/* Main Upload Box - Expanded height to match layout */}
                <div className="flex-1 border-2 border-dashed border-default-300 bg-default-50 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-default-100 transition-colors min-h-[300px]">
                  <div className="w-12 h-12 bg-default-200 rounded-lg flex items-center justify-center text-default-600">
                    <Icon icon="solar:upload-linear" className="text-2xl" />
                  </div>

                  <div className="text-center space-y-2 px-4">
                    <p className="text-base font-semibold text-default-900">
                      Drag & drop files here
                    </p>
                    <p className="text-sm text-default-500">
                      At least 5 high-quality photos are required.
                    </p>
                  </div>

                  <Button
                    size="sm"
                    className="bg-default-200 text-default-700 font-medium px-6 mt-2"
                  >
                    Browse Files
                  </Button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-default-200">
                    <Image
                      src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=300&auto=format&fit=crop"
                      alt="Car Front"
                      className="w-full h-full object-cover"
                      removeWrapper
                      radius="none"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-default-200">
                    <Image
                      src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=300&auto=format&fit=crop"
                      alt="Car Side"
                      className="w-full h-full object-cover"
                      removeWrapper
                      radius="none"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative border border-default-200">
                    <Image
                      src="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=300&auto=format&fit=crop"
                      alt="Interior"
                      className="w-full h-full object-cover"
                      removeWrapper
                      radius="none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="bg-warning-100 border border-yellow-200 rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-default-700 text-center md:text-left">
          Our team will review your submission within 48 hours before it goes
          live.
        </p>
        <div className="flex items-center gap-3">
          <Button
            className="font-bold"
            color="warning"
            variant="shadow"
            radius="sm"
          >
            Submit for Review
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddVehiclePage;
