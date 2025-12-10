"use client";

import {
  Input,
  Button,
  Chip,
  Select,
  SelectItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  DatePicker,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, useMemo, Key } from "react";
import DataTable, { Column } from "@/components/DataTable";

interface MaintenanceRecord {
  id: string;
  type: string;
  date: string;
  description: string;
  cost: number;
  status: "Completed" | "In Progress" | "Scheduled";
  notes: string;
  carName: string; // To allow filtering by car
}

const cars = [
  { key: "vf8", label: "VinFast VF8 Plus" },
  { key: "tesla-y", label: "Tesla Model Y" },
  { key: "ioniq5", label: "Hyundai Ioniq 5" },
];

const maintenanceRecords: MaintenanceRecord[] = [
  {
    id: "1",
    type: "Routine Service",
    date: "Oct 12, 2024",
    description: "Annual oil change, filter replacement, brake fluid check",
    cost: 1200,
    status: "Completed",
    notes: "Recommended new brake pads in 3,000 miles",
    carName: "VinFast VF8 Plus",
  },
  {
    id: "2",
    type: "Engine Upgrade",
    date: "Sep 28, 2024",
    description: "ECU Tuning, High-flow catalytic converter installation",
    cost: 4500,
    status: "In Progress",
    notes: "Awaiting dyno testing",
    carName: "Tesla Model Y",
  },
  {
    id: "3",
    type: "Tyre Replacement",
    date: "Aug 15, 2024",
    description: "Full set of Pirelli P Zero Corsa tyres",
    cost: 2800,
    status: "Completed",
    notes: "Balancing and alignment done",
    carName: "Hyundai Ioniq 5",
  },
  {
    id: "4",
    type: "Detailing",
    date: "Jul 5, 2024",
    description: "Full exterior and interior ceramic coating application",
    cost: 1850,
    status: "Completed",
    notes: "Looks showroom ready",
    carName: "VinFast VF8 Plus",
  },
  {
    id: "5",
    type: "Inspection",
    date: "Jun 20, 2024",
    description: "Pre-track day safety inspection",
    cost: 650,
    status: "Completed",
    notes: "No issues found",
    carName: "Tesla Model Y",
  },
  {
    id: "6",
    type: "Suspension Upgrade",
    date: "Jun 1, 2024",
    description: "Adjustable coilover system installation",
    cost: 3200,
    status: "Scheduled",
    notes: "Booked for next week",
    carName: "Hyundai Ioniq 5",
  },
];

const columns: Column[] = [
  { name: "Type", uid: "type", sortable: true },
  { name: "Date", uid: "date", sortable: true },
  { name: "Description", uid: "description", sortable: true },
  { name: "Cost", uid: "cost", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Notes", uid: "notes", sortable: true },
  { name: "Actions", uid: "actions" },
];

const statusColorMap: Record<
  string,
  "default" | "primary" | "secondary" | "success" | "warning" | "danger"
> = {
  Completed: "success",
  "In Progress": "warning",
  Scheduled: "primary",
};

const maintenanceTypes = [
  { key: "routine-service", label: "Routine Service" },
  { key: "engine-upgrade", label: "Engine Upgrade" },
  { key: "tyre-replacement", label: "Tyre Replacement" },
  { key: "detailing", label: "Detailing" },
  { key: "inspection", label: "Inspection" },
  { key: "suspension-upgrade", label: "Suspension Upgrade" },
];

export default function MaintainancePage() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedCar, setSelectedCar] = useState<string>("vf8");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const filteredRecords = useMemo(() => {
    let result = [...maintenanceRecords];

    const carLabel = cars.find((c) => c.key === selectedCar)?.label;
    if (carLabel) {
      result = result.filter((item) => item.carName === carLabel);
    }

    if (filterValue) {
      const lowerFilter = filterValue.toLowerCase();
      result = result.filter(
        (item) =>
          item.type.toLowerCase().includes(lowerFilter) ||
          item.description.toLowerCase().includes(lowerFilter) ||
          item.notes.toLowerCase().includes(lowerFilter)
      );
    }

    return result;
  }, [filterValue, selectedCar]);

  const renderCell = (item: MaintenanceRecord, columnKey: Key) => {
    switch (columnKey) {
      case "type":
        return (
          <div className="flex flex-col">
            <span className="text-default-900 font-semibold text-sm">
              {item.type}
            </span>
          </div>
        );
      case "date":
        return <span className="text-default-700 text-sm">{item.date}</span>;
      case "description":
        return (
          <span className="text-default-700 text-sm">{item.description}</span>
        );
      case "cost":
        return (
          <span className="text-default-900 font-mono text-sm">
            ${item.cost.toLocaleString()}
          </span>
        );
      case "status":
        return (
          <Chip
            color={statusColorMap[item.status]}
            size="sm"
            variant="flat"
            startContent={
              item.status === "Completed" ? (
                <Icon icon="solar:check-circle-bold" className="text-base" />
              ) : item.status === "In Progress" ? (
                <Icon icon="solar:clock-circle-bold" className="text-base" />
              ) : (
                <Icon icon="solar:calendar-bold" className="text-base" />
              )
            }
            className="pl-1 gap-1 font-medium capitalize"
          >
            {item.status}
          </Chip>
        );
      case "notes":
        return (
          <span className="text-default-600 text-sm italic">{item.notes}</span>
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
              <DropdownItem key="edit">Edit Record</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete
              </DropdownItem>
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
            Vehicle Maintenance
          </h1>
          <p className="text-default-500">
            Track and schedule maintenance for the fleet.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Input
          className="w-full md:max-w-md"
          placeholder="Search maintenance records..."
          startContent={<Icon icon="solar:magnifer-linear" />}
          value={filterValue}
          onValueChange={setFilterValue}
        />
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Select
            className="w-full md:min-w-[200px]"
            defaultSelectedKeys={["vf8"]}
            onChange={(e) => setSelectedCar(e.target.value)}
          >
            {cars.map((car) => (
              <SelectItem key={car.key}>{car.label}</SelectItem>
            ))}
          </Select>
          <Button
            color="primary"
            className="min-w-44"
            startContent={<Icon icon="solar:add-circle-bold" />}
            onPress={onOpen}
          >
            New Maintenance
          </Button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredRecords}
        renderCell={renderCell}
        selectionMode="none"
        showPagination={true}
        rowsPerPage={10}
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                New Maintenance Record
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Vehicle"
                    placeholder="Select vehicle"
                    defaultSelectedKeys={[selectedCar]}
                  >
                    {cars.map((car) => (
                      <SelectItem key={car.key}>{car.label}</SelectItem>
                    ))}
                  </Select>
                  <Select label="Maintenance Type" placeholder="Select type">
                    {maintenanceTypes.map((type) => (
                      <SelectItem key={type.key}>{type.label}</SelectItem>
                    ))}
                  </Select>
                  <DatePicker label="Date" />
                  <Input
                    label="Cost"
                    placeholder="0.00"
                    type="number"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                  />
                  <div className="md:col-span-2">
                    <Textarea
                      label="Description"
                      placeholder="Enter details about the maintenance"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Textarea label="Notes" placeholder="Additional notes" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create Record
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
