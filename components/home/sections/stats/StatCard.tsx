"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
}

export function StatCard({ icon: Icon, number, label }: StatCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white">
      <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
      <h3 className="text-2xl font-bold mb-2 text-blue-900">{number}</h3>
      <p className="text-blue-600">{label}</p>
    </Card>
  );
}