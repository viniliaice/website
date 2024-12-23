"use client";

import { School, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProgramCard } from "./ProgramCard";

const programs = [
  {
    icon: School,
    title: "Primary Education",
    description: "Comprehensive primary education focusing on core subjects and character development.",
  },
  {
    icon: GraduationCap,
    title: "Secondary Education",
    description: "Advanced curriculum preparing students for higher education and future careers.",
  },
  {
    icon: Heart,
    title: "Orphan Support",
    description: "Comprehensive support system including education, accommodation, and care for orphaned students.",
  },
];

export function ProgramsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-blue-50" ref={ref}>
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-blue-900"
          variants={cardVariants}
        >
          Our Programs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}