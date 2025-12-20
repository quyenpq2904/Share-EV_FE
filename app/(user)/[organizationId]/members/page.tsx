"use client";

import DataTable, { Column } from "@/components/DataTable";
import StatsCard from "@/components/StatsCard";
import { Chip, Progress, User } from "@heroui/react";
import React from "react";

// Mock Data
const members = [
  {
    id: "me",
    name: "Alex Miller (You)",
    email: "alex.miller@example.com",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?u=me",
    shares: 3,
    joinDate: "Jan 15, 2023",
    status: "Active",
  },
  {
    id: "u1",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Co-owner",
    avatar: "https://i.pravatar.cc/150?u=u1",
    shares: 2,
    joinDate: "Feb 01, 2023",
    status: "Active",
  },
  {
    id: "u2",
    name: "Sam Wilson",
    email: "sam.wilson@example.com",
    role: "Co-owner",
    avatar: "https://i.pravatar.cc/150?u=u2",
    shares: 2,
    joinDate: "Mar 10, 2023",
    status: "Active",
  },
  {
    id: "u3",
    name: "Emily Carter",
    email: "emily.carter@example.com",
    role: "Invested",
    avatar: "https://i.pravatar.cc/150?u=u3",
    shares: 1,
    joinDate: "Jun 20, 2023",
    status: "Inactive",
  },
];

// Calculate total stats
const totalShares = 10;
const takenShares = members.reduce((acc, curr) => acc + curr.shares, 0);

const columns: Column[] = [
  { name: "MEMBER", uid: "member" },

  { name: "SHARES", uid: "shares" },
  { name: "OWNERSHIP", uid: "ownership" },
  { name: "STATUS", uid: "status" },
  { name: "JOINED", uid: "joinDate", align: "end" },
];

function MembersPage() {
  const renderCell = React.useCallback(
    (item: (typeof members)[0], columnKey: React.Key) => {
      const cellValue = item[columnKey as keyof typeof item];

      switch (columnKey) {
        case "member":
          return (
            <User
              avatarProps={{ radius: "full", size: "sm", src: item.avatar }}
              classNames={{
                description: "text-default-500",
                name: "text-default-700 font-medium",
              }}
              description={item.email}
              name={item.name}
            />
          );

        case "shares":
          return (
            <div className="flex flex-col">
              <span className="text-default-900 font-bold">
                {item.shares} Shares
              </span>
            </div>
          );
        case "ownership":
          return (
            <div className="flex items-center gap-3 max-w-[150px]">
              <Progress
                size="sm"
                value={item.shares * 10}
                color="primary"
                aria-label="Ownership percentage"
                className="max-w-[80px]"
              />
              <span className="text-default-500 text-sm">
                {item.shares * 10}%
              </span>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={cellValue === "Active" ? "success" : "default"}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "joinDate":
          return <span className="text-default-500">{item.joinDate}</span>;
        default:
          return cellValue as React.ReactNode;
      }
    },
    []
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-default-900">Members</h1>
        <p className="text-default-500">
          Manage co-owners and view share distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Total Shares"
          value="10 Shares"
          icon="solar:pie-chart-2-linear"
          iconColor="text-blue-500"
          iconBg="bg-blue-500/10"
          trend={`${takenShares} Taken (${takenShares * 10}%)`}
          trendType="neutral"
        />
        <StatsCard
          title="Active Members"
          value={members.filter((m) => m.status === "Active").length}
          icon="solar:users-group-rounded-linear"
          iconColor="text-green-500"
          iconBg="bg-green-500/10"
        />
        <StatsCard
          title="Available Shares"
          value={`${totalShares - takenShares} Shares`}
          icon="solar:tag-price-linear"
          iconColor="text-orange-500"
          iconBg="bg-orange-500/10"
          trend={`${(totalShares - takenShares) * 10}% Remaining`}
          trendType="neutral"
        />
      </div>

      <DataTable
        columns={columns}
        data={members}
        renderCell={renderCell}
        totalItems={members.length}
        rowsPerPage={10}
        selectionMode="none"
        showPagination={false}
      />
    </div>
  );
}

export default MembersPage;
