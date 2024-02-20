import type { Metadata } from "next";

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
      {/* sidebar */}

      {/* mobile nav */}

      
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
