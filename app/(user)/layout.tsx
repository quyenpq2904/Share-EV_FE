"use client";

import AdminHeader from "@/components/AdminHeader";
import AppSidebar, {
  Organization,
  SidebarSection,
} from "@/components/AppSidebar";
import { useAuthContext } from "@/contexts/AuthContext";
import { useSidebar } from "@/contexts/SidebarContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const userSidebarConfig: SidebarSection[] = [
  {
    title: "Overview",
    items: [
      {
        icon: "solar:widget-5-outline",
        name: "Dashboard",
        path: "",
      },
      {
        icon: "solar:user-linear",
        name: "Profile",
        path: "profile",
      },
      {
        icon: "solar:clock-circle-linear",
        name: "History",
        path: "history",
      },
    ],
  },
  {
    title: "Marketplace",
    items: [
      {
        icon: "ri:car-line",
        name: "Vehicles",
        path: "vehicles",
      },
      {
        icon: "solar:tag-price-linear",
        name: "Offerings",
        path: "offerings",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        icon: "solar:wallet-linear",
        name: "Wallet",
        path: "wallet",
      },
      {
        icon: "solar:letter-linear",
        name: "Messages",
        path: "messages",
      },
      {
        icon: "solar:settings-linear",
        name: "Settings",
        path: "settings",
      },
    ],
  },
];

const coOwnerSidebarConfig: SidebarSection[] = [
  {
    title: "Organization",
    items: [
      {
        name: "Overview",
        icon: "solar:widget-5-outline",
        path: "",
      },
      {
        name: "Schedule",
        icon: "solar:calendar-linear",
        path: "schedule",
      },
      {
        name: "Finances",
        icon: "solar:wallet-linear",
        path: "finances",
      },
      {
        name: "Messages",
        icon: "solar:letter-linear", // Icon matching user sidebar
        path: "messages",
      },
      {
        name: "Members",
        icon: "solar:users-group-rounded-linear",
        path: "members",
      },
      {
        name: "Settings",
        icon: "solar:settings-linear",
        path: "settings",
      },
    ],
  },
];

const organizations: Organization[] = [
  {
    id: "personal",
    name: "Personal",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    provider: "Personal",
    path: "/me",
  },
  {
    id: "porsche",
    name: "Porsche",
    avatarUrl:
      "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c807851cdce007e74cad4a88047dc4d9139f98fe2192d864532a8dfbab68b3e9cf79a22f5bf6d449b8b9b295fffd6afef89678/PORSCHE_TAYCANGTS_911.jpg",
    provider: "Organization",
    path: "/porsche",
  },
  {
    id: "bmw",
    name: "BMW",
    avatarUrl:
      "https://bmwvietnam.com.vn/wp-content/uploads/2021/07/bmw-118i.jpg",
    provider: "Organization",
    path: "/bmw",
  },
];

function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const isOrganization = segment && segment !== "me";

  const sidebarConfig = isOrganization
    ? coOwnerSidebarConfig
    : userSidebarConfig;
  const basePath = isOrganization ? `/${segment}` : "/me";

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[280px]"
    : "lg:ml-[80px]";

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isLoading, isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar
        basePath={basePath}
        organizations={organizations}
        sidebarConfig={sidebarConfig}
        organizationSwitch={true}
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

export default Layout;
