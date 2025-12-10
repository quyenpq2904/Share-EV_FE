"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  SelectItem,
  Button,
  Chip,
  User,
  Image,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, useMemo } from "react";

interface Listing {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  vehicleName: string;
  minShare: number;
  totalShare: number; // 1 share = 10%
  userPrice: number;
  aiPrice: number;
  image: string;
  status: "PENDING" | "VALIDATING" | "APPROVED" | "REJECTED";
  submissionDate: string;
}

const listings: Listing[] = [
  {
    id: "1",
    userId: "12345",
    userName: "David Nguyen",
    userAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    vehicleName: "VinFast VF8 Plus",
    minShare: 1,
    totalShare: 1, // 10%
    userPrice: 120,
    aiPrice: 118,
    image:
      "https://images.unsplash.com/photo-1669910547700-1c045b849319?q=80&w=800&auto=format&fit=crop",
    status: "PENDING",
    submissionDate: "2023-10-26",
  },
  {
    id: "2",
    userId: "67890",
    userName: "Sarah Jenkins",
    userAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    vehicleName: "Tesla Model Y Performance",
    minShare: 1,
    totalShare: 5,
    userPrice: 210,
    aiPrice: 212,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
    status: "VALIDATING",
    submissionDate: "2023-10-25",
  },
  {
    id: "3",
    userId: "11223",
    userName: "Michael Chen",
    userAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    vehicleName: "Hyundai Ioniq 5",
    minShare: 1,
    totalShare: 2,
    userPrice: 180,
    aiPrice: 175,
    image:
      "https://images.unsplash.com/photo-1662124508216-17b545464455?q=80&w=800&auto=format&fit=crop",
    status: "PENDING",
    submissionDate: "2023-10-24",
  },
  {
    id: "4",
    userId: "44556",
    userName: "Emily Davis",
    userAvatar: "https://i.pravatar.cc/150?u=a048581f4e29026024d",
    vehicleName: "Kia EV6 GT-Line",
    minShare: 1,
    totalShare: 1,
    userPrice: 150,
    aiPrice: 152,
    image:
      "https://images.unsplash.com/photo-1678201256338-7f465d625573?q=80&w=800&auto=format&fit=crop",
    status: "APPROVED",
    submissionDate: "2023-10-23",
  },
  {
    id: "5",
    userId: "77889",
    userName: "Robert Wilson",
    userAvatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    vehicleName: "Ford Mustang Mach-E",
    minShare: 1,
    totalShare: 3,
    userPrice: 250,
    aiPrice: 245,
    image:
      "https://images.unsplash.com/photo-1620882006323-936630f9525c?q=80&w=800&auto=format&fit=crop",
    status: "PENDING",
    submissionDate: "2023-10-22",
  },
  {
    id: "6",
    userId: "99001",
    userName: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    vehicleName: "Polestar 2",
    minShare: 1,
    totalShare: 2,
    userPrice: 220,
    aiPrice: 220,
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop",
    status: "VALIDATING",
    submissionDate: "2023-10-21",
  },
  {
    id: "7",
    userId: "33445",
    userName: "Jessica Parker",
    userAvatar: "https://i.pravatar.cc/150?u=a042581f4e290260242",
    vehicleName: "Porsche Taycan 4S",
    minShare: 1,
    totalShare: 1,
    userPrice: 450,
    aiPrice: 440,
    image:
      "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81d?q=80&w=800&auto=format&fit=crop",
    status: "REJECTED",
    submissionDate: "2023-10-20",
  },
  {
    id: "8",
    userId: "55667",
    userName: "Tom Cruise",
    userAvatar: "https://i.pravatar.cc/150?u=a042581f4e290260241",
    vehicleName: "Audi e-tron GT",
    minShare: 2,
    totalShare: 4,
    userPrice: 380,
    aiPrice: 385,
    image:
      "https://images.unsplash.com/photo-1617704548623-340751e39a38?q=80&w=800&auto=format&fit=crop",
    status: "PENDING",
    submissionDate: "2023-10-19",
  },
  {
    id: "9",
    userId: "99881",
    userName: "Alice Cooper",
    userAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024f",
    vehicleName: "BMW i4 M50",
    minShare: 1,
    totalShare: 2,
    userPrice: 280,
    aiPrice: 275,
    image:
      "https://images.unsplash.com/photo-1655212530869-d91547466d74?q=80&w=800&auto=format&fit=crop",
    status: "PENDING",
    submissionDate: "2023-10-18",
  },
];

const ListingCard = ({
  listing,
  onReject,
}: {
  listing: Listing;
  onReject: (listing: Listing) => void;
}) => {
  const isGoodDeal = listing.aiPrice >= listing.userPrice;
  const aiPriceColor = isGoodDeal ? "text-success-500" : "text-warning-400";

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-default-100">
        <Image
          removeWrapper
          alt={listing.vehicleName}
          className="z-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={listing.image}
        />
        <div className="absolute top-3 right-3 z-10">
          <Chip color="primary" variant="solid" size="sm" className="font-bold">
            {listing.totalShare} Share
          </Chip>
        </div>
      </div>

      <CardBody className="px-4 py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <User
            name={listing.userName}
            description=""
            avatarProps={{
              src: listing.userAvatar,
              size: "sm",
              isBordered: true,
              color: "primary",
              classNames: { base: "w-6 h-6" },
            }}
            classNames={{
              name: "text-xs text-default-600 font-medium",
            }}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <h3 className="font-bold text-default-900 text-lg leading-tight">
            {listing.vehicleName}
          </h3>
        </div>

        <div className="flex flex-col gap-1 mt-1">
          <div className="flex justify-between text-sm">
            <span className="text-default-600">User Price:</span>
            <span className="text-default-900 font-bold">
              {listing.userPrice}M VND
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-default-600">AI Suggested:</span>
            <span className={`${aiPriceColor} font-bold`}>
              {listing.aiPrice}M VND
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-default-600">Min buy:</span>
            <span className="text-default-900 font-medium">
              {listing.minShare} shares ({listing.minShare * 10}%)
            </span>
          </div>
        </div>
      </CardBody>

      <CardFooter className="px-4 pb-4 pt-0 gap-3">
        <Button
          fullWidth
          variant="faded"
          className="font-medium"
          onPress={() => onReject(listing)}
          startContent={<Icon icon="lucide:x" />}
        >
          Reject
        </Button>
        <Button
          fullWidth
          color="primary"
          variant="shadow"
          className="font-bold"
          startContent={<Icon icon="lucide:check" />}
        >
          Approve
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function ShareOffersPage() {
  const [filterText, setFilterText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRejectListing, setSelectedRejectListing] =
    useState<Listing | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const handleReject = (listing: Listing) => {
    setSelectedRejectListing(listing);
    setRejectReason("");
    onOpen();
  };

  const filteredListings = useMemo(() => {
    let result = [...listings];

    if (filterText) {
      result = result.filter(
        (item) =>
          item.vehicleName.toLowerCase().includes(filterText.toLowerCase()) ||
          item.userName.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter);
    }

    return result.sort((a, b) => {
      let cmp = 0;
      if (sortBy === "price") {
        cmp = a.userPrice - b.userPrice;
      } else if (sortBy === "share") {
        cmp = a.totalShare - b.totalShare;
      } else {
        // Date
        cmp =
          new Date(a.submissionDate).getTime() -
          new Date(b.submissionDate).getTime();
      }
      return sortOrder === "asc" ? cmp : -cmp;
    });
  }, [filterText, statusFilter, sortBy, sortOrder]);

  const totalPages = Math.ceil(filteredListings.length / rowsPerPage);
  const paginatedListings = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredListings.slice(start, start + rowsPerPage);
  }, [page, filteredListings]);

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 w-full md:w-auto flex-1">
          <Input
            className="max-w-[500px]"
            placeholder="Search..."
            startContent={<Icon icon="solar:magnifer-linear" />}
            value={filterText}
            onValueChange={setFilterText}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select
            placeholder="Status"
            className="w-32"
            selectedKeys={[statusFilter]}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <SelectItem key="all" value="all">
              All Status
            </SelectItem>
            <SelectItem key="PENDING" value="PENDING">
              Pending
            </SelectItem>
            <SelectItem key="VALIDATING" value="VALIDATING">
              Validating
            </SelectItem>
          </Select>

          <Select
            placeholder="Sort By"
            className="w-32"
            selectedKeys={[sortBy]}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <SelectItem key="date" value="date">
              Date
            </SelectItem>
            <SelectItem key="price" value="price">
              Price
            </SelectItem>
            <SelectItem key="share" value="share">
              Share
            </SelectItem>
          </Select>

          <Select
            placeholder="Order"
            className="w-32"
            selectedKeys={[sortOrder]}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <SelectItem key="asc" value="asc">
              Ascending
            </SelectItem>
            <SelectItem key="desc" value="desc">
              Descending
            </SelectItem>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedListings.map((item) => (
          <ListingCard key={item.id} listing={item} onReject={handleReject} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-auto py-4">
          <Pagination
            total={totalPages}
            page={page}
            onChange={setPage}
            color="primary"
          />
        </div>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Reject Listing
              </ModalHeader>
              <ModalBody>
                <p className="text-sm text-default-600 mb-2">
                  Are you sure you want to reject{" "}
                  <b>{selectedRejectListing?.vehicleName}</b>? Please provide a
                  reason.
                </p>
                <Textarea
                  label="Rejection Reason"
                  placeholder="Enter reason..."
                  value={rejectReason}
                  onValueChange={setRejectReason}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Confirm Reject
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
