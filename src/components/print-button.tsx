"use client";

import { Printer } from "lucide-react";
import { track } from "@/lib/analytics";

export function PrintButton() {
  return (
    <button
      onClick={() => {
        track("resume_download", "resume-page-print");
        window.print();
      }}
      className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-bold text-[#05070d] hover:bg-sky-400"
    >
      <Printer size={15} aria-hidden /> PRINT / SAVE PDF
    </button>
  );
}
