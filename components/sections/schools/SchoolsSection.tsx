"use client";

import { Book, GraduationCap, Languages } from "lucide-react";
import { SchoolProgram } from "./SchoolProgram";

const mbkPrograms = [
  {
    icon: Book,
    name: "Bilingual Reading Program",
    description: "Specialized reading program in Arabic and English to build strong literacy foundations.",
    grades: "1-3"
  },
  {
    icon: Book,
    name: "Quran Program",
    description: "Comprehensive Quranic studies integrated into the curriculum.",
    grades: "1-6"
  },
  {
    icon: Languages,
    name: "Language Support",
    description: "Dedicated Somali and Arabic language support for students needing additional help.",
    grades: "All Grades"
  }
];

const abdidhakuurPrograms = [
  {
    icon: GraduationCap,
    name: "Islamic Studies",
    description: "Advanced Islamic studies program integrated with modern education.",
    grades: "7-12"
  },
  {
    icon: Languages,
    name: "Language Enhancement",
    description: "Specialized Somali and Arabic language support programs.",
    grades: "7-12"
  },
  {
    icon: Book,
    name: "Academic Support",
    description: "Personalized academic support to ensure students reach grade-level proficiency.",
    grades: "All Grades"
  }
];

export function SchoolsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Schools & Programs
        </h2>
        
        <div className="space-y-12">
          <SchoolProgram
            schoolName="MBK International School"
            description="Our primary school focuses on building strong foundations in both secular and religious education, with specialized programs designed to nurture young minds."
            programs={mbkPrograms}
            imageUrl="/mbk-primary.jpg"
            bgColor="bg-blue-100/50"
            index={0}
          />
          
          <SchoolProgram
            schoolName="Dr. Abdidhakuur Secondary School"
            description="Our secondary school provides comprehensive education with a strong emphasis on Islamic studies and academic excellence."
            programs={abdidhakuurPrograms}
            imageUrl="/secondary-school.jpg"
            bgColor="bg-blue-200/50"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}