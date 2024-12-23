"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-blue-300" ref={ref}>
      <motion.div 
        className="container  mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
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
                className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
              >
                Support Our Mission
              </Button>
            </div>
          </motion.div>
          <motion.div 
            variants={imageVariants}
            className="relative h-[400px]"
          >
            <Image
              src="https://mbkstadium.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffootball.7a467b2d.jpg&w=1080&q=75"
              alt="MBK Stadium"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}