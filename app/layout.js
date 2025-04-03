import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Finergy-Finance Tracker",
  description: "An AI powered Finance Tracker which allows us to manage our expenses efficiently",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Header */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
        {/* Footer */}
        <footer className="bg-black py-12">
          <div className="container mx-auto px-4 text-center text-white">
            <p>Footer @2025</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
