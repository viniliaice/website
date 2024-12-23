"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { SchoolLogos } from "./SchoolLogos";
import { NavLinks } from "./navigation/NavLinks";
import { MobileNav } from "./navigation/MobileNav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <SchoolLogos />
          <NavLinks />
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Apply Now
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <MobileNav isOpen={mobileMenuOpen} />
      </nav>
    </header>
  );
}