"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type FeatureTab =
  | "intake"
  | "previsit"
  | "copilot"
  | "telemedicine"
  | "soap"
  | "emr"
  | "emr_search";

export const DoctorProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FeatureTab>("intake");

  const tabs: { id: FeatureTab; label: string; number: string }[] = [
    { id: "intake", label: "AI Patient Intake", number: "01" },
    { id: "previsit", label: "Pre-Visit Report", number: "02" },
    { id: "copilot", label: "Clinical Copilot", number: "03" },
    { id: "telemedicine", label: "Telemedicine", number: "04" },
    { id: "soap", label: "SOAP Notes", number: "05" },
    { id: "emr", label: "AI-Native EMR", number: "06" },
    { id: "emr_search", label: "Conversational EMR Search", number: "07" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Comprehensive Clinical Suite</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Designed for high-precision clinical practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Explore the 7 foundational product capabilities built specifically to liberate clinicians from administrative overhead.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-clinical-950 text-white border-clinical-900 shadow-md"
                  : "bg-clinical-50 text-clinical-700 border-clinical-200 hover:bg-clinical-100"
              }`}
            >
              <span className={`font-mono text-[10px] ${activeTab === tab.id ? "text-vital-300" : "text-clinical-400"}`}>
                {tab.number}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mockup Display Box */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/50 p-6 sm:p-10 shadow-clinical-md min-h-[460px] flex flex-col justify-between">
          {/* MOCKUP 1: AI PATIENT INTAKE */}
          {activeTab === "intake" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-vital-700 uppercase font-mono">
                    Capability 01 • Adaptive Clinical Intake
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Conversational Red-Flag Surveillance
                  </h3>
                </div>
                <Badge variant="vital">Adaptive Protocol Active</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 space-y-3 text-xs sm:text-sm text-clinical-700">
                  <p className="leading-relaxed">
                    Patients don&apos;t face static 20-page forms. DrGodly uses empathetic conversational intake that dynamically asks targeted questions based on the patient&apos;s symptoms, duration, and medical history.
                  </p>
                  <div className="space-y-2 pt-2 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vital-600" />
                      <span>Screening for coronary, stroke, and sepsis red flags</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vital-600" />
                      <span>Quantifies symptom onset, severity (1-10), and triggers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-vital-600" />
                      <span>Converts patient vernacular into structured medical terms</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 bg-white p-5 rounded-2xl border border-clinical-200 shadow-sm space-y-3 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-clinical-400 font-mono border-b pb-2">
                    <span>LIVE INTAKE TRANSCRIPT</span>
                    <span className="text-vital-600 font-bold">100% COMPLETE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-clinical-50 text-clinical-800">
                    <span className="font-bold text-clinical-900 block text-[11px] mb-1">PATIENT (Voice / Text):</span>
                    &ldquo;I&apos;ve been getting lightheaded whenever I stand up, and my legs cramp up at night.&rdquo;
                  </div>
                  <div className="p-3 rounded-xl bg-vital-50 text-vital-950 border border-vital-200">
                    <span className="font-bold text-vital-800 block text-[11px] mb-1">DRGODLY INTAKE:</span>
                    &ldquo;Have you noticed palpitations, vision blurring, or shortness of breath when these episodes occur?&rdquo;
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOCKUP 2: PRE-VISIT REPORT */}
          {activeTab === "previsit" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-vital-700 uppercase font-mono">
                    Capability 02 • Executive Synthesis
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    60-Second Pre-Visit Briefing
                  </h3>
                </div>
                <Badge variant="vital">Synthesized in 45s</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1.5">
                  <span className="font-bold text-clinical-900 uppercase tracking-wider text-[10px] block">
                    Chief Complaint & Timeline
                  </span>
                  <p className="text-clinical-700">3-week progressive orthostatic dizziness and nocturnal calf cramps.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1.5">
                  <span className="font-bold text-clinical-900 uppercase tracking-wider text-[10px] block">
                    Pertinent Medical History
                  </span>
                  <p className="text-clinical-700">Essential HTN (2 yrs), on Hydrochlorothiazide 25mg daily. Sulfa allergy.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1.5">
                  <span className="font-bold text-clinical-900 uppercase tracking-wider text-[10px] block">
                    Relevant Prior Labs
                  </span>
                  <p className="text-clinical-700">Serum K+ 3.3 mEq/L (3 mos prior). eGFR 82 mL/min. Microcytic anemia 2024.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-vital-50 border border-vital-200 text-xs text-vital-950 leading-relaxed">
                <span className="font-bold text-vital-900 block mb-1 uppercase tracking-wide">
                  Clinical Considerations for Attending Physician:
                </span>
                High correlation between active Thiazide diuretic, hypokalemia (3.3 mEq/L), and orthostatic symptoms. Consider ordering repeat BMP panel today and evaluating transition to ACE inhibitor monotherapy.
              </div>
            </div>
          )}

          {/* MOCKUP 3: CLINICAL COPILOT */}
          {activeTab === "copilot" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-intel-700 uppercase font-mono">
                    Capability 03 • Physician Decision Support
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Live Point-of-Care Clinical Copilot
                  </h3>
                </div>
                <Badge variant="intel">Physician in the Loop</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-2">
                  <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                    Differential Diagnosis Hierarchy
                  </span>
                  <div className="space-y-1.5">
                    <div className="p-2.5 rounded-lg bg-intel-50/80 border border-intel-200 flex items-center justify-between">
                      <span className="font-bold text-intel-950">1. Drug-Induced Hypokalemia</span>
                      <span className="text-[10px] font-bold text-intel-700">High Match</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-clinical-50 border border-clinical-200 flex items-center justify-between">
                      <span className="font-semibold text-clinical-800">2. Orthostatic Hypotension</span>
                      <span className="text-[10px] text-clinical-500">Secondary</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-clinical-50 border border-clinical-200 flex items-center justify-between">
                      <span className="font-semibold text-clinical-800">3. Hypomagnesemia</span>
                      <span className="text-[10px] text-clinical-500">Differential</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-2">
                  <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                    Guideline Citations & Alerts
                  </span>
                  <p className="text-clinical-700 leading-relaxed">
                    <strong>AHA/ACC 2024 Hypertension Guidelines:</strong> Recommend electrolyte recheck 4–6 weeks post-thiazide initiation. Risk of muscle spasms and benign arrhythmia elevated with borderline hypokalemia.
                  </p>
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold">
                    Sulfa allergy cross-check: No direct anaphylaxis risk with Lisinopril.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOCKUP 4: TELEMEDICINE */}
          {activeTab === "telemedicine" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-vital-700 uppercase font-mono">
                    Capability 04 • High-Definition Telehealth
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Encrypted Video with Context Side-Rail
                  </h3>
                </div>
                <Badge variant="vital">Full Eye-Contact Active</Badge>
              </div>

              <div className="rounded-2xl bg-clinical-950 text-white p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 aspect-video rounded-xl bg-clinical-900 border border-clinical-800 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-vital-500/20 text-vital-300 font-bold text-xl flex items-center justify-center border border-vital-400/30 mb-2">
                    ER
                  </div>
                  <div className="text-sm font-bold text-white">Elena Rostova (Patient Feed)</div>
                  <div className="text-xs text-clinical-400">1080p Encrypted TLS 1.3 • Audio Synchronized</div>
                </div>

                <div className="md:col-span-5 space-y-2.5 text-xs">
                  <div className="text-vital-400 font-mono uppercase tracking-wider text-[11px] font-bold">
                    Doctor Side-Rail Assistant
                  </div>
                  <div className="p-3 rounded-lg bg-clinical-900 border border-clinical-800">
                    <span className="text-clinical-400 block text-[10px]">CURRENT RX:</span>
                    <span className="text-white font-mono font-bold">HCTZ 25mg QD, Metformin 500mg</span>
                  </div>
                  <div className="p-3 rounded-lg bg-clinical-900 border border-clinical-800">
                    <span className="text-clinical-400 block text-[10px]">SUGGESTED CLINICAL INQUIRY:</span>
                    <span className="text-clinical-200">&ldquo;Have you noticed dizziness specifically upon standing from your desk?&rdquo;</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOCKUP 5: SOAP NOTES */}
          {activeTab === "soap" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-vital-700 uppercase font-mono">
                    Capability 05 • Ambient Documentation
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Instant Ambient SOAP Note Generation
                  </h3>
                </div>
                <Badge variant="vital">Ready for Review & Sign</Badge>
              </div>

              <div className="rounded-2xl border border-clinical-300 bg-white p-6 shadow-sm font-mono text-xs space-y-3 text-clinical-900">
                <div>
                  <span className="font-bold text-vital-700 text-xs block mb-0.5">S (Subjective):</span>
                  <p className="font-sans text-clinical-700">46yo female reports 3-week orthostatic dizziness and bilateral calf cramps on HCTZ 25mg daily. Denies syncope, angina, or dyspnea.</p>
                </div>
                <div>
                  <span className="font-bold text-vital-700 text-xs block mb-0.5">O (Objective):</span>
                  <p className="font-sans text-clinical-700">Video consultation: Alert, oriented x 4, no acute respiratory distress. Sitting home BP: 104/66 mmHg, HR 72 bpm regular.</p>
                </div>
                <div>
                  <span className="font-bold text-vital-700 text-xs block mb-0.5">A (Assessment):</span>
                  <p className="font-sans text-clinical-700">1. Hypokalemia, secondary to thiazide therapy (ICD-10 E87.6). 2. Orthostatic intolerance (ICD-10 I95.1). 3. Essential HTN, controlled (ICD-10 I10).</p>
                </div>
                <div>
                  <span className="font-bold text-vital-700 text-xs block mb-0.5">P (Plan):</span>
                  <p className="font-sans text-clinical-700">Discontinue HCTZ. Switch to Lisinopril 10mg daily. Stat outpatient BMP and Magnesium order today. Follow-up video consult in 7 days.</p>
                </div>
              </div>
            </div>
          )}

          {/* MOCKUP 6: AI-NATIVE EMR */}
          {activeTab === "emr" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-vital-700 uppercase font-mono">
                    Capability 06 • Clinical Knowledge Graph
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    AI-Native Electronic Medical Record
                  </h3>
                </div>
                <Badge variant="vital">FHIR HL7 Synchronized</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
                  <span className="text-clinical-400 font-mono text-[10px] uppercase">Active Regimen</span>
                  <div className="font-bold text-clinical-950 text-sm">Lisinopril 10mg PO QD</div>
                  <p className="text-clinical-500">Replaced HCTZ • Started today</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
                  <span className="text-clinical-400 font-mono text-[10px] uppercase">Biomarker Tracker</span>
                  <div className="font-bold text-clinical-950 text-sm">Serum K+ & Ferritin</div>
                  <p className="text-clinical-500">Trend alerts active across 24 mos</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
                  <span className="text-clinical-400 font-mono text-[10px] uppercase">EHR Interoperability</span>
                  <div className="font-bold text-clinical-950 text-sm">Bi-Directional FHIR</div>
                  <p className="text-clinical-500">Epic, Cerner & AthenaHealth synced</p>
                </div>
              </div>
            </div>
          )}

          {/* MOCKUP 7: CONVERSATIONAL EMR SEARCH */}
          {activeTab === "emr_search" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-vital-700 uppercase font-mono">
                    Capability 07 • Natural Language Query
                  </span>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Conversational EMR Search
                  </h3>
                </div>
                <Badge variant="vital">Sub-Second Query</Badge>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-clinical-200 shadow-sm flex items-center gap-3">
                <Search className="w-5 h-5 text-vital-600 shrink-0" />
                <div className="flex-1 text-xs sm:text-sm font-semibold text-clinical-900">
                  Doctor Query: &ldquo;When was this patient&apos;s last documented Sulfa reaction, and what was the manifestation?&rdquo;
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-sm space-y-3 text-xs">
                <div className="flex items-center gap-2 text-vital-800 font-bold uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-vital-600" />
                  <span>Synthesized Answer with Source Verification:</span>
                </div>
                <p className="text-clinical-800 leading-relaxed">
                  The patient had a documented allergic reaction to <strong>Trimethoprim-Sulfamethoxazole (Bactrim)</strong> on <strong>October 14, 2019</strong>. The reaction manifested as diffuse urticarial rash and facial pruritus. No angioedema or airway involvement recorded.
                </p>
                <div className="pt-2 border-t border-clinical-100 flex items-center justify-between text-clinical-500 text-[11px]">
                  <span>Source: UrgentCare_Encounter_2019.pdf (Page 2, Section 4)</span>
                  <span className="text-vital-700 font-bold">1-Click PDF Inspector</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer of Card */}
          <div className="pt-6 mt-6 border-t border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-clinical-500">
            <span>Clinical decision autonomy verified • Real-time HIPAA-compliant infrastructure</span>
            <span className="font-bold text-clinical-900">Module {tabs.find((t) => t.id === activeTab)?.number} of 07</span>
          </div>
        </div>
      </div>
    </section>
  );
};
