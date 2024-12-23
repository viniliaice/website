"use client";

import { Users, Heart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StatCard } from "./StatCard";

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Total Students",
  },
  {
    icon: Heart,
    number: "100+",
    label: "Orphans Supported",
  },
  {
    icon: GraduationCap,
    number: "2",
    label: "Partner Schools",
  },
];

export function StatsSection() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white" ref={ref}>
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={cardVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}