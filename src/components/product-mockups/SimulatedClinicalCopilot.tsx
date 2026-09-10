"use client";

import React, { useState } from "react";
import {
  BrainCircuit,
  ShieldAlert,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Activity,
  User,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const SimulatedClinicalCopilot: React.FC = () => {
  const [selectedDifferential, setSelectedDifferential] = useState<number>(0);

  const differentials = [
    {
      name: "Tension-Type Headache / Digital Asthenopia",
      prob: "78%",
      status: "Primary Differential",
      rationale: "Bilateral non-pulsatile pain, retro-orbital distribution, late afternoon onset matching 10h screen exposure. Negative for photophobia aura and nuchal rigidity.",
      icd10: "G44.209",
      guideline: "ICHD-3 (International Classification of Headache Disorders, 3rd Edition) & AAFP Clinical Guidance.",
      evidenceLink: "AAFP 2023 Headache Practice Review",
    },
    {
      name: "Hypertensive Encephalopathy / BP Variability",
      prob: "14%",
      status: "Secondary Consideration",
      rationale: "Patient has established history of essential hypertension on Lisinopril 10mg. However, home BP log demonstrates stability (122/78 mmHg today), making rebound crisis unlikely.",
      icd10: "I10 / G44.81",
      guideline: "AHA/ACC 2024 High Blood Pressure Clinical Practice Guidelines.",
      evidenceLink: "AHA/ACC Circulation 2024",
    },
    {
      name: "Cervicogenic Headache",
      prob: "8%",
      status: "Lower Probability",
      rationale: "Occipital muscle spasm secondary to seated ergonomic posture during desk work. Correlates with trapezius tightness without radiculopathy.",
      icd10: "G44.841",
      guideline: "Cervicogenic Headache International Study Group Diagnostic Criteria.",
      evidenceLink: "Cephalalgia 2022 Journal Review",
    },
  ];

  return (
    <div className="rounded-3xl border border-vital-300 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Prominent Decision Support Mandate Header */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-vital-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-clinical-xs">
                Clinical Decision Support System (CDSS)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 font-mono text-[10px] font-bold uppercase">
                Physician Supervised • Non-Autonomous
              </span>
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Cognitive Diagnostic Copilot
            </h3>
            <p className="text-xs text-clinical-300 mt-0.5">
              For Attending Physician Independent Evaluation • Context-Grounded Differential Engine
            </p>
          </div>

          <Badge variant="clinical" className="bg-white/10 text-vital-300 border-white/20 text-xs self-start sm:self-auto">
            Algorithm v4.8 (Trained on Peer-Reviewed Literature)
          </Badge>
        </div>
      </div>

      {/* Main Grid: Left (Patient Context & Differentials) & Right (Guidelines, Risks, Questions) */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-clinical-50/20">
        {/* LEFT COLUMN: PATIENT CONTEXT & CONSIDERATIONS (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section 1: Patient Context */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
            <div className="flex items-center justify-between border-b border-clinical-100 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900 flex items-center gap-2">
                <User className="w-4 h-4 text-vital-600" />
                Active Patient Context
              </h4>
              <span className="text-[11px] font-mono text-clinical-500">Maya K. (38F)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-clinical-700">
              <div className="p-2.5 rounded-xl bg-clinical-50">
                <span className="text-[10px] text-clinical-500 block uppercase font-bold">Chief Concern</span>
                <span className="font-semibold text-clinical-950">Retro-orbital headache (Day 4)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50">
                <span className="text-[10px] text-clinical-500 block uppercase font-bold">Current Vitals</span>
                <span className="font-semibold text-clinical-950">BP 122/78 mmHg (HR 68 bpm)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50">
                <span className="text-[10px] text-clinical-500 block uppercase font-bold">Active Medication</span>
                <span className="font-semibold text-clinical-950">Lisinopril 10mg PO AM</span>
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50">
                <span className="text-[10px] text-clinical-500 block uppercase font-bold">Verified Lab</span>
                <span className="font-semibold text-clinical-950">HbA1c 5.6% • eGFR 96</span>
              </div>
            </div>
          </div>

          {/* Section 2: Clinical Considerations (Ranked Differentials) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-vital-800 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-vital-600" />
                Clinical Considerations & Ranked Differentials
              </h4>
              <span className="text-[11px] text-clinical-500">Click to inspect rationale</span>
            </div>

            <div className="space-y-2.5">
              {differentials.map((diff, idx) => {
                const isSelected = selectedDifferential === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDifferential(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-vital-500 shadow-clinical-sm ring-1 ring-vital-400"
                        : "bg-white/80 border-clinical-200 hover:border-clinical-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-vital-100 text-vital-800">
                          {diff.prob} Match
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold text-clinical-950">
                          {diff.name}
                        </h5>
                      </div>
                      <Badge variant="clinical" className="text-[10px] font-mono">
                        {diff.icd10}
                      </Badge>
                    </div>
                    <p className="text-xs text-clinical-600 leading-relaxed">
                      {diff.rationale}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Relevant History Correlated */}
          <div className="p-4 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              Correlated Historical Context
            </h4>
            <p className="text-xs text-clinical-700 leading-relaxed">
              Zero history of migraines or aura. No family history of aneurysm. Appendectomy (2018) uncomplicated. Penicillin allergy confirmed (urticaria).
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: GUIDELINES, RISKS, SUGGESTED QUESTIONS (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Section 4: Guideline References */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
            <div className="flex items-center justify-between border-b border-clinical-100 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-vital-600" />
                Guideline References & Citations
              </h4>
              <span className="text-[10px] font-mono text-vital-700">PubMed / AAFP</span>
            </div>
            <div className="p-3 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-vital-700 block">
                Primary Clinical Citation
              </span>
              <p className="text-xs font-semibold text-clinical-900">
                {differentials[selectedDifferential].guideline}
              </p>
              <a href="#evidence" className="inline-flex items-center gap-1 text-[11px] text-vital-600 hover:text-vital-800 font-medium pt-1">
                <span>View evidence summary</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Section 5: Potential Risks & Red Flag Surveillance */}
          <div className="p-5 rounded-2xl bg-rose-50/40 border border-rose-200 shadow-clinical-xs space-y-3">
            <div className="flex items-center justify-between border-b border-rose-200 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                Potential Risks & Triage Check
              </h4>
              <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.2 rounded">
                Clear
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-clinical-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>No sudden &ldquo;thunderclap&rdquo; onset (rules out SAH consideration).</span>
              </div>
              <div className="flex items-start gap-2 text-clinical-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Normotensive today (rules out acute hypertensive crisis).</span>
              </div>
              <div className="flex items-start gap-2 text-clinical-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Negative for visual aura, nuchal rigidity, and fever.</span>
              </div>
            </div>
          </div>

          {/* Section 6: Suggested Clinical Questions */}
          <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
            <div className="flex items-center justify-between border-b border-clinical-100 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                Suggested Physician Questions
              </h4>
              <span className="text-[10px] font-mono text-clinical-500">Triage Prompts</span>
            </div>
            <div className="space-y-2 text-xs text-clinical-800">
              <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                &ldquo;Do you experience relief within 30 minutes of stepping away from computer screens?&rdquo;
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                &ldquo;Have you noticed any jaw tightness or morning tooth soreness suggesting night clenching?&rdquo;
              </div>
              <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                &ldquo;Are you wearing blue-light filtering glasses or using Night Shift display modes?&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Decision Support Disclaimer Footer */}
      <div className="bg-clinical-100 px-6 py-3 border-t border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-clinical-600">
        <span className="flex items-center gap-1.5 font-medium">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          <strong>Regulatory Notice:</strong> DrGodly CDSS provides probabilistic decision support only. Clinical diagnosis and treatment orders remain the exclusive responsibility of the attending physician.
        </span>
        <span className="font-mono text-clinical-500">FDA SaMD Guidance Aligned</span>
      </div>
    </div>
  );
};
