"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At MBK International School and Dr. Abdidhakuur Secondary, we believe in providing quality education to all students, regardless of their background. Our special focus on supporting orphaned children reflects our commitment to creating positive change in our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://mbkstadium.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffootball.7a467b2d.jpg&w=1080&q=75"
              alt="MBK Stadium"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}