"use client";

import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <GraduationCap className="w-8 h-8 text-[#B87333]" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight text-[#B87333]">
          MBK International School
        </span>
        <span className="text-xs text-black/70">Excellence in Education</span>
      </div>
    </div>
  );
}