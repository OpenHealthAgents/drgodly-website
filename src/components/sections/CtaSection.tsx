"use client";

import React from "react";
import { ArrowRight, Sparkles, Stethoscope, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CtaSectionProps {
  onOpenQuickAssess?: () => void;
  onOpenHealthProfile?: () => void;
  onOpenDoctorDemo?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenQuickAssess,
  onOpenHealthProfile,
  onOpenDoctorDemo,
}) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-clinical-950 via-clinical-900 to-slate-900 text-white p-8 sm:p-16 border border-clinical-800 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative radial light */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-vital-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-intel-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 border border-vital-400/40 text-vital-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              The Intelligent Layer Between Patients and Doctors
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
              Ready for healthcare that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vital-400 to-teal-200">
                knows your story?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-clinical-300 leading-relaxed max-w-2xl mx-auto">
              Whether you are a patient seeking answers backed by your full medical context, or a physician reclaiming 2.5 hours of daily charting, DrGodly is ready.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="vital"
                size="lg"
                onClick={onOpenHealthProfile}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-base"
              >
                Start Your Health Profile
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenQuickAssess}
                icon={<Sparkles className="w-4 h-4 text-vital-400" />}
                iconPosition="left"
                className="w-full sm:w-auto text-base bg-white/10 text-white border-clinical-700 hover:bg-white/20"
              >
                Try Quick Question
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenDoctorDemo}
                icon={<Stethoscope className="w-4 h-4 text-vital-400" />}
                iconPosition="left"
                className="w-full sm:w-auto text-base bg-clinical-900/90 text-white border-clinical-700 hover:border-vital-500/50 hover:bg-clinical-850 shadow-md"
              >
                Schedule Clinician Demo
              </Button>
            </div>

            {/* Trust footer tags */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-clinical-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-vital-400" />
                <span>256-Bit Encrypted & Patient-Controlled Privacy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-vital-400" />
                <span>Doctor-led care • Assistive clinical intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
