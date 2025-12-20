"use client";

import AdminHeader from "@/components/AdminHeader";
import ManagementSidebar, { SidebarSection } from "@/components/AppSidebar";
import { useSidebar } from "@/contexts/SidebarContext";

const adminSidebarConfig: SidebarSection[] = [
  {
    title: "Menu",
    items: [
      {
        icon: "solar:widget-5-outline",
        name: "Dashboard",
        path: "",
      },
      {
        icon: "ri:car-line",
        name: "Vehicles",
        path: "vehicles",
      },
      {
        icon: "carbon:operations-record",
        name: "Operations",
        subItems: [
          { name: "Stations", path: "stations" },
          { name: "Staffs", path: "staffs" },
          { name: "Fees", path: "fees" },
        ],
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        icon: "solar:ticket-linear",
        name: "Tickets",
        path: "tickets",
      },
    ],
  },
];

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[280px]"
    : "lg:ml-[80px]";

  return (
    <div className="min-h-screen xl:flex">
      <ManagementSidebar sidebarConfig={adminSidebarConfig} basePath="/admin" />
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
export default AdminLayout;
