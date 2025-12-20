"use client";

import DataTable, { Column } from "@/components/DataTable";
import StatsCard from "@/components/StatsCard";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

// --- MOCK DATA ---

const statsData: {
  title: string;
  value: string | number;
  icon: string;
  iconColor?: string;
  iconBg?: string;
  trend?: string;
  trendType?: "up" | "down" | "neutral";
}[] = [
  {
    title: "Fund Balance",
    value: "$1,250.00",
    icon: "solar:wallet-bold",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
    trend: "+$500.00 added this month",
    trendType: "up",
  },
  {
    title: "Total Spend",
    value: "$420.50",
    icon: "solar:bill-list-linear", // Changed icon to distinguish from wallet
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    trend: "12% less than last month",
    trendType: "up",
  },
  {
    title: "Top Category",
    value: "Charging",
    icon: "solar:bolt-linear",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
    trend: "$215.00 (51% of total)",
    trendType: "neutral",
  },
  {
    title: "Cost Efficiency",
    value: "$0.18 / mile",
    icon: "solar:leaf-linear",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
    trend: "Optimal range",
    trendType: "up",
  },
];

const pieData = [
  { name: "Charging", value: 215, color: "#f97316" }, // Orange
  { name: "Insurance", value: 120, color: "#3b82f6" }, // Blue
  { name: "Maint.", value: 65, color: "#a855f7" }, // Purple
  { name: "Other", value: 20, color: "#10b981" }, // Emerald
];

const barData = [
  { name: "Jan", expenses: 240, avg: 300 },
  { name: "Feb", expenses: 210, avg: 290 },
  { name: "Mar", expenses: 350, avg: 310 },
  { name: "Apr", expenses: 290, avg: 320 },
  { name: "May", expenses: 300, avg: 350 },
  { name: "Jun", expenses: 280, avg: 340 },
  { name: "Jul", expenses: 450, avg: 360 },
  { name: "Aug", expenses: 320, avg: 350 },
  { name: "Sep", expenses: 340, avg: 360 },
  { name: "Oct", expenses: 420, avg: 360 },
  { name: "Nov", expenses: 138, avg: 360 }, // Current month (partial)
  { name: "Dec", expenses: 0, avg: 360 }, // Future
];

const transactions = [
  {
    id: "1",
    date: "Oct 24, 2023",
    category: "Charging",
    categoryIcon: "solar:bolt-bold",
    categoryColor: "warning",
    description: "Supercharger - San Mateo",
    status: "Verified",
    amount: "$15.00",
  },
  {
    id: "2",
    date: "Oct 18, 2023",
    category: "Maint.",
    categoryIcon: "solar:wrench-bold",
    categoryColor: "secondary",
    description: "Tire Rotation",
    status: "Verified",
    amount: "$65.00",
  },
  {
    id: "3",
    date: "Oct 12, 2023",
    category: "Insurance",
    categoryIcon: "solar:shield-bold",
    categoryColor: "primary",
    description: "Monthly Premium (Geico)",
    status: "Pending",
    amount: "$120.00",
  },
  {
    id: "4",
    date: "Oct 05, 2023",
    category: "Charging",
    categoryIcon: "solar:bolt-bold",
    categoryColor: "warning",
    description: "ChargePoint - Downtown",
    status: "Verified",
    amount: "$12.50",
  },
  {
    id: "5",
    date: "Oct 01, 2023",
    category: "Cleaning",
    categoryIcon: "solar:waterdrops-bold",
    categoryColor: "success",
    description: "Car Wash Deluxe",
    status: "Verified",
    amount: "$22.00",
  },
];

const columns: Column[] = [
  { name: "DATE", uid: "date" },
  { name: "CATEGORY", uid: "category" },
  { name: "DESCRIPTION", uid: "description" },
  { name: "STATUS", uid: "status" },
  { name: "AMOUNT", uid: "amount", align: "end" },
];

function FinancesPage() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const renderCell = React.useCallback(
    (item: (typeof transactions)[0], columnKey: React.Key) => {
      const cellValue = item[columnKey as keyof typeof item];

      switch (columnKey) {
        case "category":
          return (
            <div className="flex items-center gap-2">
              <div
                className={`p-1.5 rounded-md bg-${item.categoryColor}-500/10 text-${item.categoryColor}-500`}
              >
                <Icon icon={item.categoryIcon} className="text-lg" />
              </div>
              <span className="text-default-900 font-medium">
                {item.category}
              </span>
            </div>
          );

        case "status":
          return (
            <Chip
              color={cellValue === "Verified" ? "success" : "warning"}
              size="sm"
              variant="flat"
              startContent={
                <Icon icon="solar:record-circle-linear" className="mr-1" />
              }
              className="px-1"
            >
              {cellValue}
            </Chip>
          );
        case "amount":
          return (
            <span className="text-default-900 font-bold">{item.amount}</span>
          );
        case "description":
          return <span className="text-default-700">{item.description}</span>;
        case "date":
          return <span className="text-default-500">{item.date}</span>;
        default:
          return typeof cellValue === "object" ? null : (cellValue as string);
      }
    },
    []
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-default-900">Finances</h1>
        <p className="text-default-500">
          Track expenses, shared costs, and efficiency metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-content1 border border-default-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-default-900 mb-4">
            Expense Composition
          </h3>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="h-[220px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f1f22",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Summary */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <span className="text-xs text-default-500">Total</span>
                <p className="text-xl font-bold text-default-900">$420</p>
              </div>
            </div>

            {/* Custom Legend */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-default-500">
                    {item.name} ({Math.round(item.value / 4.2)}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MONTHLY SPENDING TREND (Bar Chart) - 2/3 Width */}
        <div className="lg:col-span-2 bg-content1 border border-default-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-default-900">
              Monthly Spending Trend
            </h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-xs text-default-500">Expenses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-default-700/30" />
                <span className="text-xs text-default-500">Avg</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barSize={32}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#71717a", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-content1 p-2 rounded-lg shadow-lg border border-default-200">
                          <p className="text-default-900 font-bold">
                            ${payload[0].value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="expenses" radius={[4, 4, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === "Oct" ? "#3b82f6" : "#3f3f46"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-default-900">
            Recent Transactions
          </h3>
          <div className="flex gap-2">
            <Icon
              icon="solar:filter-linear"
              className="text-default-500 text-xl cursor-pointer"
            />
            <Icon
              icon="solar:magnifer-linear"
              className="text-default-500 text-xl cursor-pointer"
            />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={transactions}
          renderCell={renderCell}
          totalItems={28}
          page={page}
          onPageChange={setPage}
          rowsPerPage={rowsPerPage}
          selectionMode="none"
        />
      </div>
    </div>
  );
}

export default FinancesPage;
