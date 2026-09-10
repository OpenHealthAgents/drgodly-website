"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlertCircle, X, ExternalLink } from "lucide-react";

export const MedicalSafetyBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("drgodly_medical_banner_dismissed");
    if (isDismissed === "true") {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("drgodly_medical_banner_dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <aside 
      aria-label="Medical and safety advisory"
      className="bg-clinical-900 text-clinical-200 border-b border-clinical-800 text-xs py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-[11px] sm:text-xs">
          <AlertCircle className="w-3.5 h-3.5 text-vital-400 shrink-0" aria-hidden="true" />
          <span className="truncate">
            <strong className="text-white font-semibold">Clinical Decision Support:</strong>{" "}
            DrGodly assists with health information and preparation. AI outputs are reviewed by licensed clinicians and do not replace emergency care.
          </span>
          <Link
            href="/security"
            className="hidden md:inline-flex items-center gap-0.5 text-vital-400 hover:text-vital-300 font-semibold underline underline-offset-2 shrink-0 ml-1"
          >
            <span>Learn about our safety standards</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss medical disclaimer banner"
          className="text-clinical-400 hover:text-white p-1 rounded transition-colors shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
