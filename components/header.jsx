import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import { ThemeDropdown } from "./theme-dropdown";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-[var(--background)]/80 backdrop-blur-md z-50 border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 xl:px-20 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 bg-clip-text text-transparent tracking-tight">
            FINERGY
          </div>
        </Link>

        <div className="flex items-center space-x-3 md:space-x-4">
          <ThemeDropdown />
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
              >
                Login
              </Button>
            </SignInButton>
            <SignUpButton forceRedirectUrl="/dashboard">
              <Button className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90">
                SignUp
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
            appearance={{ 
              elements: { avatarBox: "w-10 h-10" } 
              }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
export default Header;
// installed framer-motion, changed landing page layout and added annimation, layout of navebar changed to align content to logo, alignment of other pages also done