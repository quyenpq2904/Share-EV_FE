"use client";

import AppNavbar from "@/components/AppNavbar";
import AppSidebar from "@/components/AppSidebar";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isLoading, isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <AppNavbar />
      <div className="flex flex-1 container mx-auto max-w-7xl pt-6">
        <aside className="hidden w-64 md:block shrink-0">
          <div className="sticky top-24">
            <AppSidebar />
          </div>
        </aside>
        <main className="flex-1 px-4 pb-10">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
