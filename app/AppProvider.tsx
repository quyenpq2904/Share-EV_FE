"use client";

import GlobalLoading from "@/components/GlobalLoading";
import { AuthProvider } from "@/contexts/AuthContext";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient();

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <ToastProvider />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <GlobalLoading />
            {children}
          </AuthProvider>
        </QueryClientProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export default AppProvider;
