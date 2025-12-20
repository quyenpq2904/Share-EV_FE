"use client";

import AdminHeader from "@/components/AdminHeader";
import ManagementSidebar, { SidebarSection } from "@/components/AppSidebar";
import { useSidebar } from "@/contexts/SidebarContext";

const staffSidebarConfig: SidebarSection[] = [
  {
    title: "Menu",
    items: [
      {
        icon: "solar:widget-5-outline",
        name: "Dashboard",
        path: "",
      },
    ],
  },
  {
    title: "Marketplace",
    items: [
      {
        icon: "ri:car-line",
        name: "Vehicle Approvals",
        path: "vehicle-approvals",
      },
      {
        icon: "hugeicons:contracts",
        name: "Share Offers",
        path: "share-offers",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        icon: "qlementine-icons:swap-16",
        name: "Handovers",
        path: "handovers",
      },
      {
        icon: "akar-icons:gear",
        name: "Maintainance",
        path: "maintainance",
      },
      {
        icon: "solar:ticket-linear",
        name: "Tickets",
        path: "tickets",
      },
    ],
  },
];

function StaffLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[280px]"
    : "lg:ml-[80px]";

  return (
    <div className="min-h-screen xl:flex">
      <ManagementSidebar sidebarConfig={staffSidebarConfig} basePath="/staff" />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
      >
        <AdminHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
export default StaffLayout;
