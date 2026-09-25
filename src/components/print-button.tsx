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
      className="button-primary min-h-0 px-5 py-2 text-xs"
    >
      <Printer size={15} aria-hidden /> PRINT / SAVE PDF
    </button>
  );
}
