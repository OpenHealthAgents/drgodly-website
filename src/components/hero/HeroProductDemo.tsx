"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  UserCheck, 
  FileText, 
  AlertTriangle, 
  ArrowRight, 
  Shield, 
  Activity, 
  Pill, 
  FlaskConical, 
  CheckCircle2, 
  Stethoscope,
  Info
} from "lucide-react";
import { COMPARISON_DATA } from "@/data/clinicalData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface HeroProductDemoProps {
  onOpenQuickAssess?: () => void;
  onOpenHealthProfile?: () => void;
}

export const HeroProductDemo: React.FC<HeroProductDemoProps> = ({
  onOpenQuickAssess,
  onOpenHealthProfile,
}) => {
  const [activeTab, setActiveTab] = useState<"personalized" | "quick">("personalized");
  const data = COMPARISON_DATA;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-clinical-200/90 bg-white shadow-2xl shadow-clinical-950/10 overflow-hidden">
      {/* Top Interactive Mode Switcher Bar */}
      <div className="bg-clinical-900 text-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-clinical-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-vital-500/20 border border-vital-400/40 flex items-center justify-center text-vital-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-clinical-400 font-semibold">
              Live Clinical Intelligence Simulator
            </div>
            <div className="text-sm font-medium text-slate-200">
              See why <span className="text-vital-400 font-semibold">&ldquo;symptoms are only part of the story&rdquo;</span>
            </div>
          </div>
        </div>

        {/* Toggle Pills */}
        <div className="inline-flex p-1 bg-clinical-950 rounded-xl border border-clinical-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("quick")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5",
              activeTab === "quick"
                ? "bg-clinical-800 text-white shadow-sm"
                : "text-clinical-400 hover:text-clinical-200"
            )}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Quick Start (No Context)
          </button>
          <button
            onClick={() => setActiveTab("personalized")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5",
              activeTab === "personalized"
                ? "bg-vital-600 text-white shadow-md shadow-vital-600/30"
                : "text-clinical-400 hover:text-clinical-200"
            )}
          >
            <UserCheck className="w-3.5 h-3.5 text-vital-300" />
            Personalized Health (With Profile)
          </button>
        </div>
      </div>

      {/* Simulated Patient Query Header */}
      <div className="px-6 py-4 bg-clinical-50/70 border-b border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-clinical-700">
        <div className="flex items-start gap-2.5">
          <span className="font-semibold text-clinical-900 shrink-0 uppercase tracking-wide text-[11px] bg-clinical-200/80 px-2 py-0.5 rounded">
            Patient Input
          </span>
          <p className="italic text-clinical-800 font-medium max-w-2xl">
            &ldquo;{data.query}&rdquo;
          </p>
        </div>
        <div className="shrink-0 text-clinical-500 font-mono text-[11px] self-end sm:self-center">
          Triage ID: #SIM-7049
        </div>
      </div>

      {/* Main Content State Rendering */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-clinical-50/30">
        {activeTab === "quick" ? (
          /* QUICK START VIEW (Standard anonymous AI output) */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge variant="warning" icon={<AlertTriangle className="w-3.5 h-3.5" />}>
                {data.quickStart.badge}
              </Badge>
              <span className="text-xs text-clinical-500 font-medium">
                No past labs • No prescription history • Zero context
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-clinical-50 border border-clinical-200/90 text-sm text-clinical-800 leading-relaxed font-sans">
              <div className="font-semibold text-clinical-950 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-clinical-500" />
                Generic Symptom Response:
              </div>
              <p className="text-clinical-700">{data.quickStart.response}</p>
            </div>

            {/* Why it falls short */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                Clinical Blindspots of Anonymous Assessment:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-950">
                {data.quickStart.limitations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value upgrade nudge */}
            <div className="p-5 rounded-2xl bg-vital-50/50 border border-vital-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-semibold text-clinical-900">
                  Your symptoms are only part of the story.
                </div>
                <p className="text-xs text-clinical-600 max-w-lg">
                  Give DrGodly the context behind your health. Connect your previous reports and prescriptions to see what the AI detected.
                </p>
              </div>
              <Button
                variant="vital"
                size="sm"
                onClick={() => setActiveTab("personalized")}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Reveal Profile Context
              </Button>
            </div>
          </div>
        ) : (
          /* PERSONALIZED HEALTH VIEW (Rich DrGodly Context-Aware Intelligence) */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge variant="vital" icon={<UserCheck className="w-3.5 h-3.5" />}>
                {data.personalized.badge}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-vital-700 font-semibold">
                <Shield className="w-3.5 h-3.5" />
                Encrypted Health Vault Connected
              </div>
            </div>

            {/* Connected Longitudinal Context Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-clinical-200 shadow-sm space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-clinical-500 uppercase tracking-wider">
                  <Pill className="w-3.5 h-3.5 text-vital-600" />
                  Active Medications
                </div>
                <div className="text-xs font-semibold text-clinical-900">
                  Hydrochlorothiazide 25mg daily
                </div>
                <div className="text-[11px] text-clinical-500">
                  Plus Lisinopril 10mg (BP control)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-clinical-200 shadow-sm space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-clinical-500 uppercase tracking-wider">
                  <FlaskConical className="w-3.5 h-3.5 text-vital-600" />
                  Prior Lab History (3 Mos)
                </div>
                <div className="text-xs font-semibold text-amber-700">
                  Serum K+: 3.3 mEq/L (Borderline low)
                </div>
                <div className="text-[11px] text-clinical-500">
                  eGFR 82 mL/min (Stable)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-clinical-200 shadow-sm space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-clinical-500 uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-vital-600" />
                  Health History Context
                </div>
                <div className="text-xs font-semibold text-clinical-900">
                  Essential Hypertension (2022)
                </div>
                <div className="text-[11px] text-clinical-500">
                  Allergy: Sulfa antibiotics
                </div>
              </div>
            </div>

            {/* AI Clinical Synthesis with high-precision correlation */}
            <div className="p-5 rounded-2xl bg-vital-500/10 border border-vital-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-vital-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-vital-600" />
                  DrGodly Clinical Intelligence Synthesis
                </div>
                <span className="text-[11px] font-semibold text-vital-700 bg-vital-100 px-2 py-0.5 rounded-md">
                  Correlated via 3 Data Points
                </span>
              </div>
              <p className="text-sm text-clinical-900 font-medium leading-relaxed">
                {data.personalized.aiSynthesis}
              </p>
              <div className="p-3 rounded-xl bg-white/90 border border-vital-300 text-xs font-bold text-vital-950 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                {data.personalized.clinicalFinding}
              </div>
            </div>

            {/* Pre-visit Briefing Prepared for Doctor */}
            <div className="p-5 rounded-2xl bg-clinical-900 text-white space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-clinical-300 flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-vital-400" />
                  What Your Doctor Receives Before Entering the Telehealth Room
                </span>
                <span className="text-vital-400 font-mono text-[11px]">Ready in 45s</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-clinical-200">
                {data.personalized.doctorPreparation.map((prep, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-clinical-800/80 p-2.5 rounded-lg border border-clinical-700/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-vital-400 shrink-0 mt-0.5" />
                    <span>{prep}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next step actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-clinical-600 flex items-center gap-2">
                <Info className="w-4 h-4 text-vital-600 shrink-0" />
                <span>Your health history helps DrGodly connect the dots without repeating tests.</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenQuickAssess}
                  className="flex-1 sm:flex-initial"
                >
                  Test Quick Ask
                </Button>
                <Button
                  variant="vital"
                  size="sm"
                  onClick={onOpenHealthProfile}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="flex-1 sm:flex-initial"
                >
                  Start Your Health Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
