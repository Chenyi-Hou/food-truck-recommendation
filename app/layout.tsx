import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/root/header";
import { ThemeProvider } from "@/components/root/theme-provider";
import { Taviraj } from "next/font/google";
import { Poppins } from "next/font/google";

const taviraj = Taviraj({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-taviraj",
  weight: "500",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "500",
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Truck Finder",
  description: "For interview only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={taviraj.variable + poppins.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
