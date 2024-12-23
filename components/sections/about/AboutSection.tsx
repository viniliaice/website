"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutContent } from "./AboutContent";
import { IMAGES } from "@/lib/constants/images";
import { STAGGER_CONTAINER, SCALE_IN } from "@/lib/constants/animations";

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <motion.div 
        className="container mx-auto px-4"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <motion.div 
            variants={SCALE_IN}
            className="relative h-[400px]"
          >
            <Image
              src={IMAGES.stadium.src}
              alt={IMAGES.stadium.alt}
              fill
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}