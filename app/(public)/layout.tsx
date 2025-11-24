import AppNavbar from "@/components/AppNavbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
    </>
  );
}
