"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <motion.div variants={{
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }}>
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
      <p className="text-lg text-blue-700 mb-6">
        At MBK International School and Dr. Abdidhakuur Secondary, we believe in providing quality education to all students, regardless of their background. Our special focus on supporting orphaned children reflects our commitment to creating positive change in our community.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          About Us
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
        >
          Support Our Mission
        </Button>
      </div>
    </motion.div>
  );
}