"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
        alt="School Building"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-5xl font-bold text-center mb-4">MBK International School</h1>
        <h2 className="text-3xl font-semibold mb-8">& Dr. Abdidhakuur Secondary</h2>
        <p className="text-xl max-w-2xl text-center mb-8">
          Empowering futures through education, compassion, and opportunity
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Learn More
        </Button>
      </div>
    </section>
  );
}