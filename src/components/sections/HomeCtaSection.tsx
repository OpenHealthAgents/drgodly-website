"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HomeCtaSectionProps {
  onOpenQuickAssess?: () => void;
  onOpenDoctorDemo?: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({
  onOpenQuickAssess,
  onOpenDoctorDemo,
}) => {
  return (
    <section className="py-24 bg-clinical-950 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-vital-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 border border-vital-400/30 text-vital-300 text-xs font-semibold tracking-wide uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          The Future of Continuous Care
        </div>

        {/* Exact Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight leading-tight text-white max-w-3xl mx-auto">
          Your health story shouldn&apos;t live in pieces.
        </h2>

        {/* Exact Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-clinical-300 max-w-2xl mx-auto leading-relaxed">
          Bring your health history, AI intelligence and human care together with DrGodly.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="vital"
            size="lg"
            onClick={onOpenQuickAssess}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold shadow-lg shadow-vital-600/25"
          >
            <span>Start Your Health Journey</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          {onOpenDoctorDemo ? (
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenDoctorDemo}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold border-clinical-700 text-white hover:bg-clinical-900"
            >
              <Stethoscope className="w-4 h-4 mr-2 text-vital-400" />
              <span>Schedule Clinician Demo</span>
            </Button>
          ) : (
            <Link href="/doctors" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold border-clinical-700 text-white hover:bg-clinical-900"
              >
                <Stethoscope className="w-4 h-4 mr-2 text-vital-400" />
                <span>For Doctors</span>
              </Button>
            </Link>
          )}
        </div>

        {/* Concise Medical Safety Disclaimer Near CTAs */}
        <p className="mt-4 text-[11px] text-clinical-400 max-w-lg mx-auto leading-relaxed">
          DrGodly provides clinical decision support and health preparation. All medical care and diagnoses are led by licensed physicians. Not for medical emergencies — call 911 immediately if you need urgent care.
        </p>

        {/* Trust Badges Bar */}
        <div className="mt-10 pt-8 border-t border-clinical-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-clinical-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vital-400" /> End-to-end encrypted PHI
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vital-400" /> Physician supervised care
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vital-400" /> Zero public AI model training
          </span>
        </div>
      </div>
    </section>
  );
};
