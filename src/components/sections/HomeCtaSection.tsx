"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Stethoscope } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface HomeCtaSectionProps {
  onOpenQuickAssess?: () => void;
  onOpenDoctorDemo?: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({
  onOpenQuickAssess,
  onOpenDoctorDemo,
}) => {
  const handleStartJourney = () => {
    analytics.trackHomepageCta("bottom_cta_patient", "Start Your Health Journey");
    if (onOpenQuickAssess) {
      onOpenQuickAssess();
    }
  };

  const handleDoctorDemo = () => {
    analytics.trackDemoCta("bottom_cta_doctor");
    if (onOpenDoctorDemo) {
      onOpenDoctorDemo();
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-clinical-950 text-white relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-b from-vital-500/20 via-teal-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-vital-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vital-500/15 border border-vital-400/30 text-vital-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-vital-400 animate-pulse" />
          <span>The Future of Continuous Care</span>
        </div>

        {/* Exact Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.15] text-white max-w-3xl mx-auto">
          Your health story shouldn&apos;t live in pieces.
        </h2>

        {/* Exact Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-clinical-300 max-w-2xl mx-auto leading-relaxed">
          Bring your health history, AI intelligence and human care together with DrGodly.
        </p>

        {/* Beautified Action Buttons with Ambient Aura */}
        <div className="mt-12 relative">
          {/* Radial aura behind buttons */}
          <div className="absolute inset-0 max-w-xl mx-auto bg-gradient-to-r from-vital-500/25 via-teal-500/20 to-vital-600/25 blur-3xl -z-10 opacity-75 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
            {/* Primary Patient CTA: Start Your Health Journey */}
            <button
              type="button"
              onClick={handleStartJourney}
              className="group relative inline-flex items-center justify-between sm:justify-center gap-3.5 px-7 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-vital-500 via-vital-600 to-teal-500 hover:from-vital-400 hover:via-vital-500 hover:to-teal-400 text-white font-bold text-base sm:text-lg shadow-[0_12px_36px_-6px_rgba(13,148,136,0.5),0_0_24px_0_rgba(20,184,166,0.3)] hover:shadow-[0_16px_48px_-4px_rgba(13,148,136,0.65),0_0_32px_2px_rgba(20,184,166,0.45)] border border-white/25 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Subtle glass reflection sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <span className="relative z-10 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-inner group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </span>
                <span className="tracking-tight font-semibold">Start Your Health Journey</span>
              </span>

              <span className="relative z-10 w-8 h-8 rounded-xl bg-black/15 group-hover:bg-black/25 flex items-center justify-center text-white group-hover:translate-x-1 transition-all duration-300 shrink-0">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            {/* Secondary Doctor CTA: Schedule Clinician Demo */}
            {onOpenDoctorDemo ? (
              <button
                type="button"
                onClick={handleDoctorDemo}
                className="group relative inline-flex items-center justify-between sm:justify-center gap-3.5 px-7 py-4 sm:py-4.5 rounded-2xl bg-clinical-900/90 hover:bg-clinical-850 text-white font-semibold text-base sm:text-lg border border-clinical-700/90 hover:border-vital-500/60 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_36px_-6px_rgba(20,184,166,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-vital-500/15 border border-vital-500/30 flex items-center justify-center text-vital-400 group-hover:bg-vital-500/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </span>
                  <span className="text-clinical-100 group-hover:text-white tracking-tight">Schedule Clinician Demo</span>
                </span>

                <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 group-hover:border-vital-500/30 group-hover:bg-vital-500/15 text-clinical-400 group-hover:text-vital-300 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            ) : (
              <Link href="/doctors" className="group relative inline-flex items-center justify-between sm:justify-center gap-3.5 px-7 py-4 sm:py-4.5 rounded-2xl bg-clinical-900/90 hover:bg-clinical-850 text-white font-semibold text-base sm:text-lg border border-clinical-700/90 hover:border-vital-500/60 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_36px_-6px_rgba(20,184,166,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-md">
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-vital-500/15 border border-vital-500/30 flex items-center justify-center text-vital-400 group-hover:bg-vital-500/25 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </span>
                  <span className="text-clinical-100 group-hover:text-white tracking-tight">Schedule Clinician Demo</span>
                </span>

                <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 group-hover:border-vital-500/30 group-hover:bg-vital-500/15 text-clinical-400 group-hover:text-vital-300 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </div>
        </div>

        {/* Microcopy trust labels */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs text-clinical-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-vital-400" />
            Takes ~2 minutes • Confidential
          </span>
          <span className="hidden sm:inline text-clinical-700">•</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Physician Supervised
          </span>
          <span className="hidden sm:inline text-clinical-700">•</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            No Credit Card Required
          </span>
        </div>

        {/* Concise Medical Safety Disclaimer Near CTAs */}
        <p className="mt-5 text-[11px] text-clinical-500 max-w-lg mx-auto leading-relaxed">
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
