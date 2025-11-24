"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { notFound } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}
