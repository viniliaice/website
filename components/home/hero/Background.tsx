"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants/images";

export function Background() {
  return (
    <>
      <Image
        src={IMAGES.hero.src}
        alt={IMAGES.hero.alt}
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    </>
  );
}