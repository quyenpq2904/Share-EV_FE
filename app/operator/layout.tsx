"use client";

import AdminHeader from "@/components/AdminHeader";
import ManagementSidebar, { SidebarSection } from "@/components/AppSidebar";
import { useSidebar } from "@/contexts/SidebarContext";
import { UserRole } from "@/types/User";

const operatorSidebarConfig: SidebarSection[] = [
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
    title: "Stations",
    items: [
      {
        icon: "solar:home-2-linear",
        name: "Stations",
        path: "stations",
      },
      {
        icon: "solar:user-linear",
        name: "Staffs",
        path: "staffs",
      },
    ],
  },
];

function OperatorLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[280px]"
    : "lg:ml-[80px]";

  return (
    <div className="min-h-screen xl:flex">
      <ManagementSidebar
        sidebarConfig={operatorSidebarConfig}
        basePath="/operator"
      />
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
export default OperatorLayout;
