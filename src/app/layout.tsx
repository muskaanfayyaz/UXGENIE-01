import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"; // ✅ import your header
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "UXGenie",
  description: "Empowering future tech leaders 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
