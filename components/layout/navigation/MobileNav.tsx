"use client";

import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { navItems } from "./NavLinks";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
}

export function MobileNav({ isOpen }: MobileNavProps) {
  return (
    <div
      className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            className="block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md w-full"
          >
            {item.label}
          </NavLink>
        ))}
        <Button 
          variant="outline" 
          className="w-full mt-4 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}