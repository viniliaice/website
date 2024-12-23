"use client";

import { NavLink } from "./NavLink";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}