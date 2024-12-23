"use client";

import Image from "next/image";

export function SchoolLogos() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
        <Image
          src="/mbk.png"
          alt="MBK International School"
          width={40}
          height={40}
          className="rounded"
        />
        <div>
          <p className="text-white font-semibold">MBK International</p>
          <p className="text-blue-200 text-sm">Excellence in Education</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
        <Image
          src="/secondarylogo.png"
          alt="Dr. Abdidhakuur Secondary"
          width={40}
          height={40}
          className="rounded"
        />
        <div>
          <p className="text-white font-semibold">Dr. Abdidhakuur</p>
          <p className="text-blue-200 text-sm">Secondary School</p>
        </div>
      </div>
    </div>
  );
}