"use client";

import { Card } from "@/components/ui/card";
import { Users, Heart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <section className="py-16 bg-blue-50" ref={ref}>
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}