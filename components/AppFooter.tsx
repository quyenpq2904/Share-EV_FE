"use client";

import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

const AppFooter = () => (
  <footer className="bg-default-50 border-t border-default-200 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-success/10 p-1.5 rounded-lg">
              <Icon
                icon="solar:electric-refueling-bold"
                className="text-success text-xl"
              />
            </div>
            <span className="font-bold text-xl">SharedEV</span>
          </div>
          <p className="text-default-500 text-sm">
            The modern platform for fractional electric vehicle ownership and
            fleet management.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-default-500">
            <li>
              <Link href="#" color="foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" color="foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" color="foreground">
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-default-500">
            <li>
              <Link href="#" color="foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" color="foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" color="foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-default-500">
            <li>
              <Link href="#" color="foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" color="foreground">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-default-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-default-400">
          © 2025 SharedEV. All rights reserved.
        </p>
        <div className="flex gap-4 text-default-400">
          <Icon icon="mdi:twitter" className="text-xl px-0" />
          <Icon icon="mdi:linkedin" className="text-xl px-0" />
          <Icon icon="mdi:github" className="text-xl px-0" />
        </div>
      </div>
    </div>
  </footer>
);

export default AppFooter;
