import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/shared/Navber";
import Footer from "@/component/shared/Footer";
import Banner from "@/component/shared/HeroBanner";
import HeroBanner from "@/component/shared/HeroBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat – Livestock Booking Platform",
  description: "A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navber></Navber>
        
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
