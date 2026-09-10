"use client";

import React from "react";
import { 
  GitBranch, 
  Check, 
  X, 
  ArrowRight, 
  Database, 
  History, 
  Pill, 
  HeartPulse 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface DifferentiationProps {
  onOpenQuickAssess?: () => void;
  onOpenHealthProfile?: () => void;
}

export const Differentiation: React.FC<DifferentiationProps> = ({
  onOpenQuickAssess,
  onOpenHealthProfile,
}) => {
  return (
    <section id="differentiation" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital" icon={<History className="w-3.5 h-3.5" />}>
            The Longitudinal Advantage
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            Your symptoms are only{" "}
            <span className="text-vital-600">part of the story</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Anonymous AI symptom checkers look at symptoms in an isolated bubble. DrGodly connects the dots between your past blood tests, chronic medications, surgical history, and current complaints.
          </p>
        </div>

        {/* Narrative Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Card 1: Quick Start */}
          <div className="rounded-3xl border border-clinical-200 bg-clinical-50/60 p-8 flex flex-col justify-between hover:border-clinical-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-600">
                  Option A
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-clinical-200/80 text-clinical-800">
                  Available to Everyone
                </span>
              </div>
              <h3 className="text-2xl font-bold text-clinical-950">
                Quick Start
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Ask a health question immediately without upfront paperwork. Perfect when you need rapid clarity on a new symptom, medication clarification, or first-pass triage.
              </p>

              <div className="pt-4 space-y-2.5 text-xs text-clinical-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vital-600 shrink-0" />
                  <span>Immediate answer in seconds with zero sign-up barrier</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vital-600 shrink-0" />
                  <span>General differential triage and urgency classification</span>
                </div>
                <div className="flex items-center gap-2 text-clinical-400">
                  <X className="w-4 h-4 text-clinical-300 shrink-0" />
                  <span>Cannot verify interactions against past prescription history</span>
                </div>
                <div className="flex items-center gap-2 text-clinical-400">
                  <X className="w-4 h-4 text-clinical-300 shrink-0" />
                  <span>Cannot correlate lab trajectory across prior years</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                onClick={onOpenQuickAssess}
                className="w-full justify-center"
              >
                Ask a Quick Health Question
              </Button>
            </div>
          </div>

          {/* Card 2: Personalized Health (Highlighted as premium value) */}
          <div className="rounded-3xl border-2 border-vital-500/40 bg-gradient-to-b from-vital-50/40 via-white to-vital-50/20 p-8 flex flex-col justify-between shadow-clinical-lg hover:shadow-vital-600/10 transition-all relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-vital-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-vital-700">
                  Option B • Recommended
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-vital-600 text-white shadow-sm">
                  Deepest Clinical Intelligence
                </span>
              </div>
              <h3 className="text-2xl font-bold text-clinical-950">
                Personalized Health Profile
              </h3>
              <p className="text-sm text-clinical-700 leading-relaxed font-medium">
                Give DrGodly the context behind your health, and get more personalized insights. Upload previous reports, prescriptions, and lab panels so our AI and your doctors understand your complete health journey.
              </p>

              <div className="pt-4 space-y-2.5 text-xs text-clinical-800">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vital-600 shrink-0" />
                  <span className="font-semibold">Your health history helps DrGodly connect the dots</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vital-600 shrink-0" />
                  <span>Automatic cross-check of new symptoms against active medications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vital-600 shrink-0" />
                  <span>Doctors enter telehealth calls pre-briefed on your complete story</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vital-600 shrink-0" />
                  <span>Zero-knowledge client encryption: you own 100% of your data</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Button
                variant="vital"
                size="md"
                onClick={onOpenHealthProfile}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center text-sm font-semibold"
              >
                Create Secure Profile & Add History
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Context Connectors Infographic */}
        <div className="p-8 rounded-3xl bg-clinical-900 text-white">
          <div className="max-w-2xl mb-8">
            <h4 className="text-lg font-bold text-white">
              What Happens When You Upload Past Records?
            </h4>
            <p className="text-xs sm:text-sm text-clinical-300 mt-1">
              DrGodly doesn&apos;t just store PDFs. Our clinical parser extracts structured health indicators into a living patient graph:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
              <Pill className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-sm font-semibold text-white">Rx Knowledge Base</div>
              <div className="text-xs text-clinical-300 mt-1">
                Monitors active doses, half-lives, and drug-drug or drug-symptom contraindications.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
              <HeartPulse className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-sm font-semibold text-white">Lab Panels & Vitals</div>
              <div className="text-xs text-clinical-300 mt-1">
                Tracks metabolic panels, lipid panels, HbA1c, and eGFR trends over multiple years.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
              <Database className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-sm font-semibold text-white">Surgical & Allergy Logs</div>
              <div className="text-xs text-clinical-300 mt-1">
                Prevents accidental prescriptions of cross-reactive medications and flags past operative notes.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
              <GitBranch className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-sm font-semibold text-white">Specialist Continuity</div>
              <div className="text-xs text-clinical-300 mt-1">
                Synthesizes cardiology, dermatology, and primary care encounters into a single timeline.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
