"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SchoolLogos } from "./SchoolLogos";
import { motion } from "framer-motion";

export function Content() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="relative z-10 container mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl">
        <motion.div variants={itemVariants}>
          <SchoolLogos />
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="mt-8 text-5xl font-bold text-white"
        >
          Empowering Future Leaders Through Education
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-xl text-blue-100"
        >
          Join our community of 1000+ students where we nurture talent, foster growth, 
          and provide quality education to all, including 100+ orphaned children.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link href="/admissions">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white  mb-10 text-blue-900 hover:bg-blue-50 transition-all duration-300"
            >
              Apply Now
            </Button>
          </Link>
          <Link href="/about">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white  mb-10 text-blue-900 hover:bg-blue-50 transition-all duration-300"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}