"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white border-blue-100 hover:border-blue-200">
      <Icon className="w-8 h-8 mb-4 text-blue-600" />
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-blue-600/80">{description}</p>
    </Card>
  );
}