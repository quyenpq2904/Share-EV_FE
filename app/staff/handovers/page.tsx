"use client";

import {
  Input,
  Button,
  Chip,
  User,
  Image,
  DatePicker,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, useMemo, Key } from "react";
import DataTable, { Column } from "@/components/DataTable";
import { getLocalTimeZone, today, CalendarDate } from "@internationalized/date";

interface HandoverSession {
  id: string;
  carName: string;
  carImage: string;
  memberName: string;
  memberAvatar: string;
  memberId: string;
  bookingId: string;
  time: string;
  station: string;
  type: "Pickup" | "Return";
  status: "Pending" | "Completed" | "Cancelled" | "In Progress";
}

const sessions: HandoverSession[] = [
  {
    id: "1",
    carName: "VinFast VF8 Plus",
    carImage:
      "https://images.unsplash.com/photo-1669910547700-1c045b849319?q=80&w=800&auto=format&fit=crop",
    memberName: "David Nguyen",
    memberAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    memberId: "MEM-001",
    bookingId: "BK-2023-001",
    time: "09:00 AM",
    station: "Station A (District 1)",
    type: "Pickup",
    status: "Pending",
  },
  {
    id: "2",
    carName: "Tesla Model Y",
    carImage:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
    memberName: "Sarah Jenkins",
    memberAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    memberId: "MEM-002",
    bookingId: "BK-2023-002",
    time: "10:30 AM",
    station: "Station B (District 2)",
    type: "Return",
    status: "Completed",
  },
  {
    id: "3",
    carName: "Hyundai Ioniq 5",
    carImage:
      "https://images.unsplash.com/photo-1662124508216-17b545464455?q=80&w=800&auto=format&fit=crop",
    memberName: "Michael Chen",
    memberAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    memberId: "MEM-003",
    bookingId: "BK-2023-003",
    time: "02:00 PM",
    station: "Station A (District 1)",
    type: "Pickup",
    status: "In Progress",
  },
  {
    id: "4",
    carName: "Kia EV6",
    carImage:
      "https://images.unsplash.com/photo-1678201256338-7f465d625573?q=80&w=800&auto=format&fit=crop",
    memberName: "Emily Davis",
    memberAvatar: "https://i.pravatar.cc/150?u=a048581f4e29026024d",
    memberId: "MEM-004",
    bookingId: "BK-2023-004",
    time: "04:15 PM",
    station: "Station C (District 7)",
    type: "Return",
    status: "Pending",
  },
  {
    id: "5",
    carName: "Ford Mustang Mach-E",
    carImage:
      "https://images.unsplash.com/photo-1620882006323-936630f9525c?q=80&w=800&auto=format&fit=crop",
    memberName: "Robert Wilson",
    memberAvatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    memberId: "MEM-005",
    bookingId: "BK-2023-005",
    time: "11:00 AM",
    station: "Station B (District 2)",
    type: "Pickup",
    status: "Cancelled",
  },
];

const columns: Column[] = [
  { name: "Car", uid: "car", sortable: true },
  { name: "Member", uid: "member", sortable: true },
  { name: "Booking ID", uid: "bookingId", sortable: true },
  { name: "Time", uid: "time", sortable: true },
  { name: "Station", uid: "station", sortable: true },
  { name: "Type", uid: "type", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Actions", uid: "actions" },
];

const statusColorMap: Record<
  string,
  "default" | "primary" | "secondary" | "success" | "warning" | "danger"
> = {
  Pending: "warning",
  Completed: "success",
  Cancelled: "danger",
  "In Progress": "primary",
};

const typeColorMap: Record<string, "secondary" | "default"> = {
  Pickup: "secondary",
  Return: "default",
};

export default function HandoverPage() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(
    today(getLocalTimeZone())
  );

  const filteredSessions = useMemo(() => {
    let result = [...sessions];

    if (filterValue) {
      const lowerFilter = filterValue.toLowerCase();
      result = result.filter(
        (item) =>
          item.carName.toLowerCase().includes(lowerFilter) ||
          item.memberName.toLowerCase().includes(lowerFilter) ||
          item.bookingId.toLowerCase().includes(lowerFilter)
      );
    }

    return result;
  }, [filterValue, selectedDate]);

  const renderCell = (item: HandoverSession, columnKey: Key) => {
    switch (columnKey) {
      case "car":
        return (
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-8 rounded-lg overflow-hidden bg-default-100 flex-shrink-0">
              <Image
                removeWrapper
                alt={item.carName}
                className="w-full h-full object-cover"
                src={item.carImage}
              />
            </div>
            <span className="font-semibold text-default-900 text-sm">
              {item.carName}
            </span>
          </div>
        );
      case "member":
        return (
          <User
            name={item.memberName}
            description={item.memberId}
            avatarProps={{
              src: item.memberAvatar,
              size: "sm",
            }}
            classNames={{
              name: "text-sm font-medium",
              description: "text-xs text-default-500",
            }}
          />
        );
      case "bookingId":
        return (
          <span className="text-default-600 text-sm font-mono">
            {item.bookingId}
          </span>
        );
      case "time":
        return <span className="text-default-700 text-sm">{item.time}</span>;
      case "station":
        return <span className="text-default-700 text-sm">{item.station}</span>;
      case "type":
        return (
          <Chip
            color={typeColorMap[item.type]}
            size="sm"
            variant="flat"
            className="font-medium"
          >
            {item.type}
          </Chip>
        );
      case "status":
        return (
          <Chip
            color={statusColorMap[item.status]}
            size="sm"
            variant="dot"
            className="border-none gap-1 font-medium pl-2"
          >
            {item.status}
          </Chip>
        );
      case "actions":
        return (
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
                <Icon
                  icon="solar:menu-dots-bold"
                  className="text-default-500 text-xl"
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Actions">
              <DropdownItem key="view">View Details</DropdownItem>
              <DropdownItem key="edit">Edit Session</DropdownItem>
              {item.status === "Pending" ? (
                <DropdownItem key="start" className="text-primary">
                  Start Session
                </DropdownItem>
              ) : null}
              {item.status === "In Progress" ? (
                <DropdownItem key="complete" className="text-success">
                  Complete
                </DropdownItem>
              ) : null}
            </DropdownMenu>
          </Dropdown>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-default-900">
            Vehicle Handovers
          </h1>
          <p className="text-default-500">
            Manage vehicle pickups and return sessions.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Input
          className="w-full md:max-w-md"
          placeholder="Search by car, member, or booking ID..."
          startContent={<Icon icon="solar:magnifer-linear" />}
          value={filterValue}
          onValueChange={setFilterValue}
        />
        <div className="w-full md:w-auto">
          <DatePicker
            label="Select Date"
            className="max-w-[284px]"
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredSessions}
        renderCell={renderCell}
        selectionMode="none"
        showPagination={true}
        rowsPerPage={10}
      />
    </div>
  );
}
