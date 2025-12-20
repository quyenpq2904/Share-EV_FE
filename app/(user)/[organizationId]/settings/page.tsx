"use client";

import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Input,
  Slider,
  Switch,
  Textarea,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

function OrganizationSettingsPage() {
  const [approvalThreshold, setApprovalThreshold] = React.useState(75);

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-default-900">
          Co-owner Group Settings
        </h1>
        <p className="text-default-500">
          Manage information, members, and rules for your EV co-ownership group.
        </p>
      </div>

      {/* Group Information */}
      <Card className="bg-content1 border border-default-200 shadow-sm">
        <CardBody className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-default-900">
              Group Information
            </h3>
            <Chip color="success" variant="flat" size="sm">
              Active
            </Chip>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-default-300 flex items-center justify-center bg-default-50 overflow-hidden">
                <Icon
                  icon="solar:charging-station-bold"
                  className="text-4xl text-blue-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon
                  icon="solar:camera-linear"
                  className="text-white text-2xl"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <Input
                label="Group Name"
                placeholder="Enter group name"
                defaultValue="VF8 Hanoi - Group 01"
                variant="bordered"
                labelPlacement="outside"
              />
              <Textarea
                label="Short Description"
                placeholder="Description of your group"
                defaultValue="VinFast VF8 co-ownership group in Cau Giay - My Dinh area."
                variant="bordered"
                labelPlacement="outside"
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Rules & Voting */}
      <Card className="bg-content1 border border-default-200 shadow-sm">
        <CardBody className="p-6 space-y-8">
          <h3 className="text-lg font-bold text-default-900">Rules & Voting</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-default-700 font-medium">
                  Approval Threshold
                </span>
                <span className="text-default-500 text-sm">
                  Percentage of votes required to pass an expense proposal or
                  schedule change.
                </span>
              </div>
              <span className="text-2xl font-bold text-primary">
                {approvalThreshold}%
              </span>
            </div>
            <Slider
              aria-label="Approval Threshold"
              step={5}
              minValue={50}
              maxValue={100}
              value={approvalThreshold}
              onChange={(v) => setApprovalThreshold(v as number)}
              className="max-w-full"
              showSteps={true}
              marks={[
                {
                  value: 50,
                  label: "50%",
                },
                {
                  value: 100,
                  label: "100%",
                },
              ]}
            />
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-default-100">
                  <Icon
                    icon="solar:wallet-money-linear"
                    className="text-xl text-default-600"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-default-900 font-medium">
                    Auto-approve small expenses
                  </span>
                  <span className="text-default-500 text-sm">
                    Expenses under 200k do not require voting.
                  </span>
                </div>
              </div>
              <Switch
                defaultSelected
                aria-label="Auto approve small expenses"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-default-100">
                  <Icon
                    icon="solar:calendar-date-linear"
                    className="text-xl text-default-600"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-default-900 font-medium">
                    Lock schedule 24h prior
                  </span>
                  <span className="text-default-500 text-sm">
                    Prevent booking cancellations within 24 hours.
                  </span>
                </div>
              </div>
              <Switch aria-label="Lock schedule" />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Fund Management */}
      <Card className="bg-content1 border border-default-200 shadow-sm">
        <CardBody className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-default-900">
              Fund Management
            </h3>
            <span className="text-green-500 font-bold">
              Balance: 12,500,000 VND
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Monthly Contribution (VND)"
              placeholder="0"
              defaultValue="1000000"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">VND</span>
                </div>
              }
              variant="bordered"
              labelPlacement="outside"
              type="number"
            />
            <Input
              label="Low Fund Warning Threshold (VND)"
              placeholder="0"
              defaultValue="2000000"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">VND</span>
                </div>
              }
              variant="bordered"
              labelPlacement="outside"
              type="number"
            />
          </div>

          <div className="bg-default-50 p-4 rounded-lg border border-default-200">
            <Checkbox
              defaultSelected
              classNames={{ label: "text-default-700 font-medium" }}
            >
              Auto-remind contribution
            </Checkbox>
            <p className="text-default-500 text-sm pl-7">
              Send reminder notification on the 1st of every month.
            </p>
          </div>
        </CardBody>
      </Card>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="flat" color="default">
          Discard Changes
        </Button>
        <Button color="primary" className="font-bold">
          Save Settings
        </Button>
      </div>
    </div>
  );
}

export default OrganizationSettingsPage;
