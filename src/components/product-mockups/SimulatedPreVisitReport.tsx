"use client";

import React, { useState } from "react";
import {
  FileText,
  Clock,
  Pill,
  ShieldAlert,
  Activity,
  Calendar,
  BrainCircuit,
  HelpCircle,
  CheckCircle2,
  Printer,
  Stethoscope
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const SimulatedPreVisitReport: React.FC = () => {
  const [reportState, setReportState] = useState<"briefing" | "full">("full");

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-vital-500/20 text-vital-300 font-mono text-[11px] font-semibold uppercase tracking-wider">
                Pre-Visit Clinical Intelligence
              </span>
              <span className="text-xs text-clinical-400 font-mono">Generated: 10:18 AM (3m before consult)</span>
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Executive Pre-Visit Summary: Maya K. (38F)
            </h3>
            <p className="text-xs text-clinical-300 mt-0.5">
              Prepared for: Dr. Emily Vance, MD • Encounter Type: Scheduled Telehealth (Internal Medicine)
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReportState(reportState === "full" ? "briefing" : "full")}
              className="text-xs text-white border-white/20 hover:bg-white/10"
            >
              {reportState === "full" ? "Switch to 60s Briefing" : "Show All 9 Sections"}
            </Button>
            <Button variant="vital" size="sm" className="text-xs" icon={<Printer className="w-3.5 h-3.5" />}>
              Print / PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Main 9 Sections Grid */}
      <div className="p-6 sm:p-8 space-y-6 bg-clinical-50/20">
        {/* ROW 1: CHIEF CONCERN & HISTORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Chief Concern */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-vital-700 flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-vital-600" />
                1. Chief Concern
              </h4>
              <Badge variant="clinical" className="text-[10px]">Primary Symptom</Badge>
            </div>
            <p className="text-sm font-semibold text-clinical-950 leading-snug">
              Bilateral retro-orbital tension headache escalating in late afternoon over past 4 days.
            </p>
            <p className="text-xs text-clinical-600 leading-relaxed">
              Patient reports dull throbbing sensation located behind both eyes, accompanied by general fatigue. Rated 4/10 upon waking, increasing to 7/10 by 4:00 PM.
            </p>
          </div>

          {/* 2. History of Present Illness (HPI) */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-vital-600" />
                2. History of Present Illness (HPI)
              </h4>
              <span className="text-[10px] font-mono text-clinical-500">Chronological</span>
            </div>
            <p className="text-xs text-clinical-700 leading-relaxed">
              Onset coincided with 3-week cumulative work overtime and prolonged screen exposure (avg 10h/day). Aggravated by bright computer monitors. Relieved slightly by dark environments and hydration. Zero relief from acetaminophen.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Red Flags Negative: No photophobia aura, nausea, vomiting, fever, or nuchal rigidity.</span>
            </div>
          </div>
        </div>

        {/* ROW 2: RELEVANT MEDICAL HISTORY, MEDICATIONS, ALLERGIES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* 3. Relevant Medical History */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-700 flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-600" />
              3. Relevant Medical History
            </h4>
            <ul className="text-xs text-clinical-700 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <span className="text-vital-600 font-bold">•</span>
                <span><strong>Essential Hypertension</strong> (Dx 2022 by Dr. Jenkins). Controlled.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-vital-600 font-bold">•</span>
                <span><strong>Seasonal Allergic Rhinitis</strong> (Intermittent, Spring).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-vital-600 font-bold">•</span>
                <span><strong>Lap Appendectomy</strong> (2018, uncomplicated).</span>
              </li>
            </ul>
          </div>

          {/* 4. Medications */}
          <div className="p-5 rounded-2xl bg-white border border-vital-200 bg-vital-50/20 shadow-clinical-xs space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vital-800 flex items-center gap-2">
              <Pill className="w-4 h-4 text-vital-600" />
              4. Active Medications
            </h4>
            <div className="space-y-1.5 text-xs text-clinical-800">
              <div className="p-2 rounded-lg bg-white border border-clinical-200">
                <div className="flex justify-between font-semibold">
                  <span>Lisinopril</span>
                  <span className="text-vital-700">10mg PO Daily</span>
                </div>
                <span className="text-[10px] text-clinical-500">Refilled 14d ago • High compliance</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-clinical-200">
                <div className="flex justify-between font-semibold">
                  <span>Vitamin D3</span>
                  <span className="text-vital-700">2,000 IU Daily</span>
                </div>
                <span className="text-[10px] text-clinical-500">OTC softgel with breakfast</span>
              </div>
            </div>
          </div>

          {/* 5. Allergies */}
          <div className="p-5 rounded-2xl bg-white border border-rose-200 bg-rose-50/20 shadow-clinical-xs space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              5. Documented Allergies
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-rose-50 border border-rose-200">
                <span className="font-bold text-rose-950 block">Penicillins / Amoxicillin</span>
                <span className="text-[11px] text-rose-800">Reaction: Urticaria (Hives, 2017)</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-clinical-200">
                <span className="font-bold text-clinical-950 block">Latex Products</span>
                <span className="text-[11px] text-clinical-600">Contact dermatitis (rash)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: RECENT INVESTIGATIONS & TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 6. Recent Investigations */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-vital-600" />
                6. Recent Investigations (Oct 18, 2024)
              </h4>
              <span className="text-[10px] font-mono text-vital-700">LabCorp Panel</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                <span className="text-[10px] text-clinical-500 block">HbA1c</span>
                <span className="font-bold text-clinical-950 font-mono">5.6%</span>
                <span className="text-[10px] text-emerald-600 block">Optimal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                <span className="text-[10px] text-clinical-500 block">eGFR Filtration</span>
                <span className="font-bold text-clinical-950 font-mono">96 mL/min</span>
                <span className="text-[10px] text-emerald-600 block">Normal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                <span className="text-[10px] text-clinical-500 block">Serum Creatinine</span>
                <span className="font-bold text-clinical-950 font-mono">0.88 mg/dL</span>
                <span className="text-[10px] text-emerald-600 block">Normal</span>
              </div>
            </div>
          </div>

          {/* 7. Timeline */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-vital-600" />
                7. Symptom & Clinical Timeline
              </h4>
              <span className="text-[10px] font-mono text-clinical-500">Last 3 Weeks</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-clinical-100">
                <span className="font-mono text-clinical-500">Day -21 to -4:</span>
                <span className="text-clinical-700">General fatigue noted during intense project sprint.</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-clinical-100">
                <span className="font-mono text-clinical-500">Day -4:</span>
                <span className="text-clinical-700">First retro-orbital headache onset at 4:30 PM.</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-clinical-100">
                <span className="font-mono text-vital-700 font-bold">Today 10:14 AM:</span>
                <span className="text-clinical-950 font-semibold">BP logged 122/78 mmHg. Intake initiated.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 4: POTENTIAL CLINICAL CONSIDERATIONS & QUESTIONS REQUIRING CLARIFICATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 8. Potential Clinical Considerations */}
          <div className="p-5 rounded-2xl bg-vital-50/50 border border-vital-200 shadow-clinical-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-vital-800 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-vital-600" />
                8. Potential Clinical Considerations
              </h4>
              <span className="text-[10px] font-mono text-vital-700 font-semibold">CDSS Assist</span>
            </div>
            <div className="space-y-1.5 text-xs text-clinical-900">
              <p className="flex items-start gap-2">
                <span className="font-bold text-vital-700">1.</span>
                <span><strong>Digital Asthenopia (Eyestrain) / Tension Cephalalgia:</strong> Primary differential given bilateral retro-orbital pain, afternoon escalation, and lack of visual aura.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-vital-700">2.</span>
                <span><strong>Hypertensive Fluctuations:</strong> Lower probability given stable 122/78 reading today, but worth re-checking seated vitals.</span>
              </p>
            </div>
          </div>

          {/* 9. Questions Requiring Clarification */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-800 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                9. Questions Requiring Clarification
              </h4>
              <span className="text-[10px] font-mono text-clinical-500">For Attending MD</span>
            </div>
            <ul className="space-y-1.5 text-xs text-clinical-700">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">•</span>
                <span>When was patient&apos;s last comprehensive optometric / refraction exam?</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">•</span>
                <span>Inquire about jaw clenching / nocturnal bruxism contributing to tension.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">•</span>
                <span>Confirm daily water intake and coffee/caffeine consumption schedule.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Provenance */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-clinical-500 border-t border-clinical-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-vital-600" />
            <span>Validated against 3 primary health records & conversational intake transcript.</span>
          </div>
          <span className="font-mono text-[11px] text-clinical-400">DrGodly Pre-Visit Protocol v3.1</span>
        </div>
      </div>
    </div>
  );
};
