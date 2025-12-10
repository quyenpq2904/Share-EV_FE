import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
      <AppFooter />
    </>
  );
}
