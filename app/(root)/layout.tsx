import type { Metadata } from "next";

import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";

import "../globals.css";

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI Powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="root">
      <Sidebar />

      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
