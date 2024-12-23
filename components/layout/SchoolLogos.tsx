"use client";

import Image from "next/image";
import Link from "next/link";

export function SchoolLogos() {
  return (
    <div className="flex items-center gap-8">
      <Link href="/" className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src="/mbk.png"
            alt="MBK International School"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden md:flex flex-col">
          <span className="font-bold text-sm text-blue-600">
            MBK International School
          </span>
          <span className="text-xs text-gray-600">Excellence in Education</span>
        </div>
      </Link>
      <div className="hidden md:block w-px h-12 bg-gray-200"></div>
      <Link href="/" className="hidden md:flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src="/secondarylogo.png"
            alt="Dr. Abdidhakuur Secondary"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm text-red-600">
            Dr. Abdidhakuur
          </span>
          <span className="text-xs text-gray-600">Education from Truth</span>
        </div>
      </Link>
    </div>
  );
}