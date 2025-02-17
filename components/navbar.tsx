import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/">
            <Image
              className="text-xl font-bold text-emerald-700 cursor-pointer"
              src={logo}
              width={60}
              height={60}
              alt="Logo"
            />
          </Link>

          {/* Navigation Links */}
          <div className="space-x-6 flex items-center">
            {/* Authentication Buttons */}

            <Link
              href="/mealplan"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Mealplan
            </Link>

            {/* Sign Out Button */}

            <button className="ml-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">
              Sign Out
            </button>

            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Home
            </Link>
            {/* <Link
              href={isSignedIn ? "/subscribe" : "/sign-up"}
              className="text-gray-700 hover:text-emerald-500 transition-colors"
            >
              Subscribe
            </Link> */}

            <Link
              href="/sign-up"
              className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
