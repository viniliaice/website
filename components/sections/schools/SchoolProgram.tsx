"use client";

import { Card } from "@/components/ui/card";
import { Book, GraduationCap, Languages } from "lucide-react";
import { motion } from "framer-motion";

interface Program {
  icon: typeof Book | typeof GraduationCap | typeof Languages;
  name: string;
  description: string;
  grades: string;
}

interface SchoolProgramProps {
  schoolName: string;
  description: string;
  programs: Program[];
  imageUrl: string;
  bgColor: string;
  index: number;
}

export function SchoolProgram({ 
  schoolName, 
  description, 
  programs,
  bgColor,
  index 
}: SchoolProgramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`${bgColor} p-8 rounded-2xl`}
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-4">{schoolName}</h3>
      <p className="text-blue-700 mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, idx) => (
          <Card 
            key={idx}
            className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          >
            <program.icon className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="font-semibold text-blue-900 mb-2">{program.name}</h4>
            <p className="text-sm text-blue-600 mb-2">{program.description}</p>
            <p className="text-xs text-blue-500">Grades: {program.grades}</p>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}