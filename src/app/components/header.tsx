import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/octopus.png"
          alt="Logo"
          className=""
          width={120}
          height={120}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer">
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Our work
        </a>
        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer">
          <span>About</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Careers
        </a>
      </nav>

      {/* Get in touch button */}
      <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 flex items-center gap-2">
        Get in touch
        <ArrowRight className="w-4 h-4" />
      </Button>
    </header>
  );
}
