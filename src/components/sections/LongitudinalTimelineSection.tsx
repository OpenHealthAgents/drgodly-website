"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface TimelineEvent {
  year: string;
  date: string;
  badge: string;
  title: string;
  facility: string;
  summary: string;
  details: { label: string; val: string }[];
  aiCorrelation?: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2024",
    date: "March 14, 2024",
    badge: "Lab Workup",
    title: "Annual Comprehensive Metabolic Panel and CBC",
    facility: "Metropolitan Clinical Labs",
    summary: "Borderline fasting glucose (104 mg/dL), elevated ALT (44 U/L). Mild microcytic anemia noted (Hb: 12.1 g/dL, Ferritin: 18 ng/mL).",
    details: [
      { label: "Fasting Blood Glucose", val: "104 mg/dL" },
      { label: "Serum Ferritin", val: "18 ng/mL (Low-normal)" },
      { label: "ALT / AST Ratio", val: "44 / 31 U/L" },
    ],
  },
  {
    year: "2025",
    date: "January 18, 2025",
    badge: "Specialist Visit",
    title: "Cardiology and Stress Assessment",
    facility: "Dr. Marcus Vance, FACC — Tele-Consultation",
    summary: "Patient reported intermittent palpitations and post-work exhaustion. Normal resting ECG, 24-hr Holter revealed benign sinus tachycardia correlated with work stress.",
    details: [
      { label: "Blood Pressure", val: "128/82 mmHg" },
      { label: "Holter Monitor 24h", val: "Sinus rhythm, 0 pauses, max HR 118 bpm" },
      { label: "Diagnosis", val: "Workplace autonomic stress response" },
    ],
  },
  {
    year: "2025",
    date: "August 22, 2025",
    badge: "Prescription",
    title: "Pharmacotherapy Initiation and Adjustment",
    facility: "Refilled via DrGodly Integrated Pharmacy",
    summary: "Started CoQ10 200mg daily, Metformin 500mg ER once daily with dinner for glycemic stabilization. Follow-up lab ordered.",
    details: [
      { label: "Active Regimen", val: "Metformin ER 500mg (1x daily)" },
      { label: "Supplements", val: "Ferrous Bisglycinate 28mg, CoQ10 200mg" },
      { label: "Adherence Track", val: "94% verified intake" },
    ],
  },
  {
    year: "2026",
    date: "February 28, 2026",
    badge: "New Symptom Logged",
    title: "New Onset: Progressive Afternoon Brain Fog and Post-Prandial Fatigue",
    facility: "Logged via DrGodly AI Conversational Intake",
    summary: "Patient reported recurring 3:00 PM energy crashes, mild dizziness when standing, and unrefreshing sleep despite 8 hours in bed.",
    details: [
      { label: "Onset Duration", val: "3 consecutive weeks" },
      { label: "Severity Score", val: "6 / 10 daily impairment" },
      { label: "Associated Factors", val: "High carbohydrate lunches, caffeine > 300mg" },
    ],
  },
  {
    year: "2026",
    date: "Present Day (March 2026)",
    badge: "AI Longitudinal Insight",
    title: "DrGodly Synthesis and Doctor Consultation",
    facility: "Pre-Visit Intelligence Report Prepared for Dr. Elena Rostova",
    summary: "DrGodly cross-referenced 2024 low ferritin + 2025 Metformin initiation (known to deplete B12/iron absorption) + 2026 post-prandial symptoms, flagging early reactive hypoglycemia and latent iron deficiency before the appointment began.",
    details: [
      { label: "Longitudinal Trend", val: "Ferritin downward trajectory across 24 months" },
      { label: "Drug-Nutrient Flag", val: "Metformin ER vs Vitamin B12 / Iron absorption" },
      { label: "Physician Action", val: "Targeted B12/Ferritin panel and meal adjustment in 8-min visit" },
    ],
    aiCorrelation: "Cross-temporal pattern detected: Isolated 2026 fatigue symptom is not idiopathic — it directly maps to 2024 baseline ferritin drop accelerated by 2025 Metformin initiation.",
  },
];

export const LongitudinalTimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const active = TIMELINE_EVENTS[activeIndex];

  return (
    <section className="py-24 bg-clinical-50/50 border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Longitudinal Health Intelligence</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Your health journey, connected over time.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Healthcare usually forgets everything the moment you leave the clinic. DrGodly connects every lab result from two years ago, every medication change, and every new symptom into an evolving, living clinical intelligence map.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Rail */}
          <div className="lg:col-span-5 space-y-3 relative">
            {TIMELINE_EVENTS.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left transition-all duration-200 rounded-2xl p-4 border ${
                    isSelected
                      ? "bg-clinical-950 text-white border-clinical-900 shadow-clinical-md translate-x-1"
                      : "bg-white hover:bg-clinical-50 text-clinical-900 border-clinical-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-vital-500/20 text-vital-300 border border-vital-400/30"
                          : "bg-vital-50 text-vital-800 border border-vital-200"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        isSelected ? "text-clinical-400" : "text-clinical-500"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <h4
                    className={`text-sm font-semibold truncate ${
                      isSelected ? "text-white" : "text-clinical-950"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-xs mt-0.5 line-clamp-1 ${
                      isSelected ? "text-clinical-300" : "text-clinical-500"
                    }`}
                  >
                    {item.facility}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector View */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-clinical-200 shadow-clinical-md p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-clinical-100 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-clinical-400">
                  Longitudinal Event Node
                </span>
                <div className="text-base font-bold text-clinical-950">{active.date}</div>
              </div>
              <Badge variant="vital">{active.badge}</Badge>
            </div>

            <div>
              <h3 className="text-xl font-bold text-clinical-950">{active.title}</h3>
              <p className="text-xs text-clinical-500 mt-1">
                {active.facility} • Verified Electronic Record
              </p>
            </div>

            <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-xs sm:text-sm text-clinical-700 leading-relaxed">
              <span className="font-bold text-clinical-900 block mb-1 text-xs uppercase tracking-wider">
                Clinical Summary
              </span>
              {active.summary}
            </div>

            <div>
              <div className="text-xs font-bold text-clinical-900 uppercase tracking-wider mb-2">
                Key Recorded Metrics
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {active.details.map((d, i) => (
                  <div key={i} className="p-3 rounded-lg bg-clinical-50 border border-clinical-200 text-xs">
                    <div className="text-clinical-500 mb-1">{d.label}</div>
                    <div className="font-mono font-bold text-clinical-900">{d.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-vital-500/10 border border-vital-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-vital-900 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-vital-600 shrink-0" />
                <span>Longitudinal Cross-Temporal Correlation</span>
              </div>
              <p className="text-xs sm:text-sm text-vital-950 leading-relaxed">
                {active.aiCorrelation ||
                  "DrGodly automatically tracks this data point across your multi-year timeline, checking for gradual drifts in biomarkers that isolated consultations miss."}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-clinical-500 border-t border-clinical-100">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 24-month continuous history connected
              </span>
              <Link
                href="/platform/health-history"
                className="font-bold text-vital-700 hover:text-vital-800 flex items-center gap-1"
              >
                Explore Longitudinal Engine <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
