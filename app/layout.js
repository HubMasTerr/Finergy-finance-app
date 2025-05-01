import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finergy-Finance Tracker",
  description:
    "An AI powered Finance Tracker which allows us to manage our expenses efficiently",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {/* Header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* Footer */}
            <footer className="bg-blue-50 dark:bg-gray-950 py-12 transition-colors duration-300">
              <div className="container mx-auto px-4 text-center">
                <p className="text-black dark:text-white">Footer © 2025</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
