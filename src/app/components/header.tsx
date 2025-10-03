"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "./ui/button";
import React, { useState, useRef, useEffect } from "react";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between mx-auto sticky top-0 bg-white z-100 border-b border-gray-200 md:px-60">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/octopus.png"
          alt="Logo"
          className=""
          width={80}
          height={80}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
        <a
          href="#works"
          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("works");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Our work
        </a>
        <a
          href="#services"
          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("services");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Services
        </a>
        <a
          href="#about"
          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("about");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About
        </a>
      </nav>
      <Button
        className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 flex items-center gap-2 transition-colors duration-300"
        onClick={() => {
          const target = document.getElementById("get-in-touch");
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }}
        aria-label="Get in touch"
      >
        Get in touch
        <ArrowRight className="w-4 h-4" />
      </Button>
    </header>
  );
}
