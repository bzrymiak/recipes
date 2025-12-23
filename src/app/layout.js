import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gtAmerica = localFont({
  src: [
    {
      path: "../fonts/GT-America-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GT-America-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-america",
  display: "swap",
});



export const metadata = {
  title: "Digital Cookbook",
  description: "Digitized recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
