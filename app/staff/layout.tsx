"use client";

import AdminHeader from "@/components/AdminHeader";
import ManagementSidebar from "@/components/ManagementSidebar";
import { useSidebar } from "@/contexts/SidebarContext";
import { UserRole } from "@/types/User";

function StaffLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[280px]"
    : "lg:ml-[80px]";

  return (
    <div className="min-h-screen xl:flex">
      <ManagementSidebar role={UserRole.STAFF} />
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
