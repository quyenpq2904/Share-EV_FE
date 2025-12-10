"use client";

import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarProps,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";
import ThemeChanger from "./ThemeChanger";

import { useAuthContext } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

interface MenuItem {
  name: string;
  href: string;
  icon?: string;
  children?: {
    name: string;
    desc: string;
    icon: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Offerings", href: "/offerings" },
  { name: "Stations", href: "/stations" },
  { name: "About Us", href: "/about-us" },
  { name: "Pricing", href: "/pricing" },
];

const AppNavbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, profile, logout } = useAuthContext();
  const pathname = usePathname();

  const checkIsActive = (href: string) => {
    if (href === "/" || href === "#") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Navbar
      {...props}
      classNames={{
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
        content: "gap-8",
      }}
      maxWidth="xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand as={NextLink} href="/" className="text-foreground gap-2">
          <div className="bg-success/10 p-1.5 rounded-xl">
            <Icon
              icon="solar:electric-refueling-bold"
              className="text-success text-2xl"
            />
          </div>
          <span className="font-bold text-xl tracking-tight">SharedEV</span>
        </NavbarBrand>

        {menuItems.map((item) => {
          const isActive = checkIsActive(item.href);

          if (item.children) {
            return (
              <Dropdown key={item.name}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium"
                      endContent={<Icon icon="solar:alt-arrow-down-linear" />}
                      radius="sm"
                      variant="light"
                    >
                      {item.name}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label={item.name}
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item.children.map((child) => (
                    <DropdownItem
                      key={child.name}
                      description={child.desc}
                      startContent={
                        <div className="p-2 bg-success/10 rounded-lg text-success">
                          <Icon icon={child.icon} className="text-xl" />
                        </div>
                      }
                      href={child.href}
                    >
                      {child.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            );
          }

          return (
            <NavbarItem key={item.href} isActive={isActive}>
              <Link
                as={NextLink}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-foreground hover:text-primary ${
                  isActive ? "font-bold " : "text-foreground hover:text-primary"
                }`}
                size="md"
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 flex! items-center gap-2">
          <ThemeChanger />
          {isAuthenticated && profile ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name={profile.fullName?.[0] || "U"}
                  size="sm"
                  src={profile.avatar}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{profile.email}</p>
                </DropdownItem>

                <DropdownSection title="My Garage & Shares" showDivider>
                  <DropdownItem
                    key="garage"
                    href="/me/garage"
                    startContent={<Icon icon="solar:garage-bold" />}
                  >
                    My Garage
                    <span className="text-tiny text-default-400 block">
                      Vehicle Registration
                    </span>
                  </DropdownItem>
                  <DropdownItem
                    key="co-ownerships"
                    href="/me/co-ownerships"
                    startContent={
                      <Icon icon="solar:users-group-rounded-bold" />
                    }
                  >
                    My Co-ownerships
                    <span className="text-tiny text-default-400 block">
                      Contracts & Voting
                    </span>
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection title="Usage & Finance" showDivider>
                  <DropdownItem
                    key="bookings"
                    href="/me/schedules"
                    startContent={<Icon icon="solar:calendar-bold" />}
                  >
                    Bookings
                    <span className="text-tiny text-default-400 block">
                      Scheduling & History
                    </span>
                  </DropdownItem>
                  <DropdownItem
                    key="finance"
                    href="/me/finance"
                    startContent={<Icon icon="solar:wallet-money-bold" />}
                  >
                    Wallet
                    <span className="text-tiny text-default-400 block">
                      Costs & Settlements
                    </span>
                  </DropdownItem>
                  <DropdownItem
                    key="maintenance"
                    href="/me/maintenance"
                    startContent={<Icon icon="solar:clipboard-list-bold" />}
                  >
                    Maintenance
                    <span className="text-tiny text-default-400 block">
                      AI Reports & Alerts
                    </span>
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection title="Account">
                  <DropdownItem key="settings" href="/me/settings">
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    onPress={() => logout()}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <Button
                as={Link}
                href="/sign-in"
                className="text-md font-medium text-foreground"
                radius="full"
                variant="light"
              >
                Log in
              </Button>
              <Button
                as={Link}
                href="/request-demo"
                className="bg-gradient-to-r from-success to-primary text-md text-white font-medium shadow-lg shadow-success/20"
                endContent={<Icon icon="solar:arrow-right-linear" />}
                radius="full"
                variant="solid"
              >
                Request Demo
              </Button>
            </>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu className="bg-default-200/50 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)-1px)] max-h-fit pt-6 pb-6 backdrop-blur-md backdrop-saturate-150">
        {isAuthenticated && profile ? (
          <NavbarMenuItem className="mb-4">
            <div className="flex items-center gap-2 p-2 border border-default-200 rounded-lg">
              <Avatar src={profile.avatar} name={profile.fullName} />
              <div className="flex flex-col">
                <span className="font-bold">{profile.fullName}</span>
                <span className="text-tiny text-default-500">
                  {profile.email}
                </span>
              </div>
            </div>
            <Button
              fullWidth
              color="danger"
              variant="flat"
              className="mt-2"
              onPress={() => logout()}
            >
              Log Out
            </Button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Button fullWidth as={Link} href="/sign-in" variant="faded">
                Sign In
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem className="mb-4">
              <Button
                fullWidth
                as={Link}
                className="bg-foreground text-background"
                href="/sign-up"
              >
                Get Started
              </Button>
            </NavbarMenuItem>
          </>
        )}

        {menuItems.map((item, index) => {
          if (item.children) {
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex flex-col gap-2 mb-2"
              >
                <span className="text-default-500 text-sm font-medium px-2">
                  {item.name}
                </span>
                {item.children.map((child) => (
                  <NavbarMenuItem key={child.name}>
                    <Link
                      as={NextLink}
                      className="w-full pl-4 text-foreground"
                      href={child.href}
                      size="md"
                    >
                      {child.name}
                    </Link>
                  </NavbarMenuItem>
                ))}
                <Divider className="opacity-50 my-1" />
              </div>
            );
          }

          const isActive = checkIsActive(item.href);
          return (
            <NavbarMenuItem key={`${item.href}-${index}`} isActive={isActive}>
              <Link
                as={NextLink}
                className={`w-full mb-2 ${
                  isActive ? "font-bold text-primary" : "text-default-500"
                }`}
                href={item.href}
                size="md"
              >
                {item.name}
              </Link>
              {index < menuItems.length - 1 && (
                <Divider className="opacity-50" />
              )}
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
