"use client";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Progress,
  User,
  Select,
  SelectItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/DataTable";

const cars = [
  { key: "all", label: "All Vehicles" },
  { key: "tesla", label: "Tesla Model 3" },
  { key: "rivian", label: "Rivian R1T" },
  { key: "ford", label: "Ford Mustang" },
];

const bookingRequests = [
  {
    id: 1,
    user: {
      name: "Maria G.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    car: "Tesla Model 3",
    time: "Tomorrow 08:00 - 12:00",
    expires: "12h",
  },
  {
    id: 2,
    user: {
      name: "David C.",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    },
    car: "Tesla Model 3",
    time: "Tomorrow 14:00 - 18:00",
    expires: "14h",
  },
  {
    id: 3,
    user: {
      name: "Sarah O.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    car: "Tesla Model 3",
    time: "Oct 28, 09:00 - 11:00",
    expires: "2d",
  },
];

const proposals = [
  {
    id: 1,
    status: "active",
    name: "Replace Tires",
    initiator: "Maria G.",
    closingDate: "Oct 30, 2024",
    progress: 70,
    myVote: "pending",
  },
  {
    id: 2,
    status: "active",
    name: "Upgrade Charging Cable",
    initiator: "David C.",
    closingDate: "Nov 05, 2024",
    progress: 20,
    myVote: "voted",
  },
  {
    id: 3,
    status: "closed",
    name: "Schedule Annual Maintenance",
    initiator: "Alex Johnson",
    closingDate: "Oct 15, 2024",
    progress: 100,
    myVote: "voted",
  },
  {
    id: 4,
    status: "closed",
    name: "Purchase All-Weather Floor Mats",
    initiator: "Sarah O.",
    closingDate: "Sep 28, 2024",
    progress: 40,
    myVote: "voted",
  },
];

const columns = [
  { name: "STATUS", uid: "status" },
  { name: "PROPOSAL NAME", uid: "name" },
  { name: "INITIATOR", uid: "initiator" },
  { name: "CLOSING DATE", uid: "date" },
  { name: "CURRENT RESULTS", uid: "result" },
  { name: "MY VOTE", uid: "vote", align: "end" },
];

function VotingPage() {
  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof typeof item];

    switch (columnKey) {
      case "status":
        return (
          <Chip
            size="sm"
            variant="flat"
            className={
              item.status === "active"
                ? "bg-success-50/20 text-success-500 font-medium capitalize"
                : "bg-default-100/20 text-default-500 font-medium capitalize"
            }
          >
            {item.status}
          </Chip>
        );
      case "name":
        return (
          <span className="text-default-300 font-medium">{item.name}</span>
        );
      case "initiator":
        return <span className="text-default-400">{item.initiator}</span>;
      case "date":
        return <span className="text-default-400">{item.closingDate}</span>;
      case "result":
        let color: "success" | "default" | "danger" = "success";
        if (item.status === "closed") {
          color = item.progress < 50 ? "danger" : "default";
        }

        return (
          <Progress
            aria-label="Voting result"
            value={item.progress}
            color={color}
            size="sm"
            classNames={{
              track: "bg-default-100/10",
              indicator:
                item.status === "closed" && item.progress >= 50
                  ? "bg-default-400"
                  : undefined,
            }}
          />
        );
      case "vote":
        return (
          <div className="flex justify-end">
            {item.myVote === "pending" ? (
              <span className="text-[#00E396] text-sm font-medium">
                Pending
              </span>
            ) : (
              <div className="flex items-center gap-1 text-default-400">
                <Icon icon="solar:check-circle-linear" className="text-lg" />
                <span className="text-sm">Voted</span>
              </div>
            )}
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">Voting & Governance Center</h1>

          <Select
            defaultSelectedKeys={["all"]}
            className="w-full md:w-64"
            placeholder="Select Vehicle"
            startContent={
              <Icon
                icon="solar:car-linear"
                className="text-default-500 text-lg"
              />
            }
          >
            {cars.map((car) => (
              <SelectItem key={car.key} textValue={car.label}>
                {car.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <section>
          <h2 className="text-xl font-bold mb-6">Pending Booking Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingRequests.map((req) => (
              <Card key={req.id}>
                <CardBody className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <User
                      name={req.user.name}
                      description={
                        <span className="text-default-600">
                          requests {req.car}
                        </span>
                      }
                      avatarProps={{
                        src: req.user.avatar,
                        className: "w-10 h-10",
                      }}
                      classNames={{
                        name: "font-bold text-medium",
                        description: "text-small",
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <p className="text-warning-500 text-sm font-medium ml-[52px]">
                      {req.time}
                    </p>
                  </div>

                  <div className="bg-default-800 rounded-lg py-2 text-center mb-6 border border-default-100/5">
                    <span className="text-background text-sm">
                      Expires in {req.expires}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="font-medium"
                      color="danger"
                      variant="flat"
                      startContent={<Icon icon="solar:close-circle-linear" />}
                    >
                      Reject
                    </Button>
                    <Button
                      className="font-semibold"
                      color="success"
                      startContent={<Icon icon="solar:check-circle-bold" />}
                    >
                      Accept
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* --- SECTION 2: GROUP PROPOSALS (Sử dụng DataTable) --- */}
        <section>
          <h2 className="text-xl font-bold mb-6">
            Group Proposals & Decisions
          </h2>

          <DataTable
            columns={columns}
            data={proposals}
            renderCell={renderCell}
            showPagination={false}
            rowsPerPage={100}
          />
        </section>
      </div>
    </div>
  );
}

export default VotingPage;
