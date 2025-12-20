"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  ScrollShadow,
  Tooltip,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import AppIcon from "./AppIcon";

type NavItem = {
  name: string;
  icon: string;
  path?: string;
  subItems?: { name: string; path: string }[];
};

export type SidebarSection = {
  title: string;
  items: NavItem[];
};

export type Organization = {
  id: string;
  name: string;
  avatarUrl: string;
  provider: "Personal" | "Organization";
  path: string;
};

function AppSidebar({
  sidebarConfig,
  basePath,
  organizationSwitch = false,
  organizations = [],
}: {
  sidebarConfig: SidebarSection[];
  basePath: string;
  organizationSwitch?: boolean;
  organizations?: Organization[];
}) {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();

  const isFullSidebar = isExpanded || isHovered || isMobileOpen;

  const getFullPath = useCallback(
    (path?: string) => {
      return path ? `${basePath}/${path}` : basePath;
    },
    [basePath]
  );

  const isActive = useCallback(
    (path?: string) => {
      const fullPath = getFullPath(path);
      if (fullPath === getFullPath()) {
        return pathname === fullPath;
      }
      return pathname.startsWith(fullPath);
    },
    [pathname, getFullPath]
  );

  const activeClass = "bg-primary-50 text-primary font-medium";

  const inactiveClass =
    "text-foreground hover:bg-default-100 hover:text-primary";

  const renderSingleItem = (nav: NavItem) => {
    const active = isActive(nav.path);
    const href = getFullPath(nav.path);

    const content = (
      <Button
        as={Link}
        href={href}
        fullWidth
        variant="light"
        className={`h-12 gap-3 min-w-0 ${
          isFullSidebar ? "justify-start px-3" : "justify-center px-0"
        } ${active ? activeClass : inactiveClass}`}
        startContent={
          <Icon
            icon={nav.icon}
            className={`text-2xl shrink-0 ${
              active ? "text-primary" : "text-foreground/80"
            }`}
          />
        }
      >
        {isFullSidebar && <span className="truncate">{nav.name}</span>}
      </Button>
    );

    if (!isFullSidebar) {
      return (
        <Tooltip content={nav.name} placement="right" color="primary">
          <div className="w-full flex justify-center py-1">{content}</div>
        </Tooltip>
      );
    }

    return <li className="mb-1">{content}</li>;
  };

  const renderGroupItem = (nav: NavItem) => {
    const isChildActive = nav.subItems?.some((sub) => isActive(sub.path));

    if (!isFullSidebar) {
      return (
        <Tooltip content={nav.name} placement="right" color="primary">
          <div className="w-full flex justify-center py-1">
            <Button
              isIconOnly
              variant="light"
              className={`text-foreground/80 ${
                isChildActive ? "text-primary bg-primary-50" : ""
              }`}
              onPress={() => setIsHovered(true)}
            >
              <Icon icon={nav.icon} className="text-2xl" />
            </Button>
          </div>
        </Tooltip>
      );
    }

    return (
      <Accordion
        isCompact
        hideIndicator={false}
        keepContentMounted
        defaultExpandedKeys={isChildActive ? ["1"] : []}
        className="px-0"
        itemClasses={{
          base: "w-full p-0 mb-1",
          trigger: `px-3 h-12 rounded-medium transition-colors group ${
            isChildActive ? activeClass : inactiveClass
          }`,
          title: `text-sm ${
            isChildActive
              ? "text-primary font-medium"
              : "text-foreground font-normal"
          }`,
          indicator: `${isChildActive ? "text-primary" : "text-foreground/60"}`,
          content: "pb-2 pl-0",
        }}
      >
        <AccordionItem
          key="1"
          aria-label={nav.name}
          title={nav.name}
          startContent={
            <span
              className={`shrink-0 text-2xl ${
                isChildActive ? "text-primary" : "text-foreground/80"
              }`}
            >
              <Icon icon={nav.icon} />
            </span>
          }
        >
          <div className="flex flex-col gap-1 pl-10">
            {nav.subItems?.map((sub) => {
              const subActive = isActive(sub.path);
              const subHref = getFullPath(sub.path);

              return (
                <Link
                  key={sub.name}
                  href={subHref}
                  className={`relative flex items-center justify-between py-2 px-3 rounded-md text-sm transition-colors ${
                    subActive
                      ? "bg-primary-50 text-primary font-medium"
                      : "text-foreground/80 hover:bg-default-100 hover:text-primary"
                  }`}
                >
                  {sub.name}
                </Link>
              );
            })}
          </div>
        </AccordionItem>
      </Accordion>
    );
  };

  const renderSection = (section: SidebarSection) => (
    <div className="mb-6 w-full" key={section.title}>
      <div
        className={`mb-2 px-4 flex items-center h-6 ${
          !isFullSidebar
            ? "justify-center text-default-500"
            : "justify-start text-default-600 dark:text-default-500"
        }`}
      >
        {isFullSidebar ? (
          <span className="text-xs font-bold uppercase tracking-wider">
            {section.title}
          </span>
        ) : (
          <Icon icon="solar:menu-dots-bold" className="text-xl" />
        )}
      </div>

      <ul className="flex flex-col gap-0.5 w-full">
        {section.items.map((nav, idx) => (
          <div key={`${section.title}-${idx}`} className="w-full">
            {nav.subItems ? renderGroupItem(nav) : renderSingleItem(nav)}
          </div>
        ))}
      </ul>
    </div>
  );

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-background border-r border-default-200/50 transition-all duration-300 ease-in-out
        ${isFullSidebar ? "w-[280px]" : "w-[80px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-16 flex items-center ${
          isFullSidebar ? "px-6 justify-between" : "justify-center px-0"
        }`}
      >
        <Link href={"/"} className="flex items-center gap-2">
          <AppIcon size={40} />
          {isFullSidebar && (
            <p className="font-bold text-xl text-foreground">SharedEV</p>
          )}
        </Link>
      </div>

      {organizationSwitch && (
        <div
          className={`h-16 flex items-center ${
            isFullSidebar ? "px-6 justify-between" : "justify-center px-0"
          }`}
        >
          <Dropdown placement="bottom-start" className="w-full min-w-[240px]">
            <DropdownTrigger>
              <Button
                variant="light"
                className={`p-2 bg-transparent data-[hover=true]:bg-transparent ${
                  isFullSidebar ? "w-full justify-start" : "min-w-0 w-10 h-10"
                }`}
                disableAnimation={!isFullSidebar}
              >
                <div className="flex items-center w-full justify-between gap-3">
                  <Avatar
                    isBordered
                    size="sm"
                    src={
                      organizations.find((org) => org.path === basePath)
                        ?.avatarUrl
                    }
                    className="shrink-0"
                  />
                  {isFullSidebar && (
                    <div className="flex flex-col items-start truncate text-left">
                      <span className="text-sm font-semibold truncate w-full">
                        {
                          organizations.find((org) => org.path === basePath)
                            ?.name
                        }
                      </span>
                      <span className="text-xs text-default-500 truncate w-full">
                        {
                          organizations.find((org) => org.path === basePath)
                            ?.provider
                        }
                      </span>
                    </div>
                  )}
                  {isFullSidebar && (
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="ml-auto text-default-700"
                    />
                  )}
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Organization Custom Actions"
              onAction={(key) => router.push(key as string)}
              selectionMode="single"
              selectedKeys={new Set([basePath])}
            >
              {organizations.map((org) => (
                <DropdownItem
                  key={org.path}
                  startContent={
                    <Icon
                      icon={
                        org.provider === "Personal"
                          ? "solar:user-circle-linear"
                          : "solar:users-group-two-rounded-linear"
                      }
                      width={20}
                    />
                  }
                  description={org.provider}
                >
                  {org.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}

      <ScrollShadow className="h-[calc(100vh-64px)] pb-10" hideScrollBar>
        <div className="py-6 px-3">
          {sidebarConfig.map((section) => renderSection(section))}
        </div>
      </ScrollShadow>
    </aside>
  );
}

export default AppSidebar;
