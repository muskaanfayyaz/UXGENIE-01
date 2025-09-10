import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "UXGENIE",
  description: "Empowering future tech leaders 🚀",
  icons: {
    icon: "/LOGO.jpg",      // Favicon for browser tabs
    shortcut: "/LOGO.jpg",  // Shortcut/bookmark icon
    apple: "/LOGO.jpg",     // iOS home screen icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8066070674854021" crossOrigin="anonymous" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8066070674854021" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
