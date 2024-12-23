"use client";

import { Background } from "./Background";
import { Content } from "./Content";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Background />
      <Content />
    </section>
  );
}