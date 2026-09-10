"use client";

import React from "react";
import Link from "next/link";
import { 
  BrainCircuit, 
  ArrowRight, 
  BookOpen, 
  ShieldAlert, 
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ClinicalCopilotSectionProps {
  onExploreClinicalAi?: () => void;
}

export const ClinicalCopilotSection: React.FC<ClinicalCopilotSectionProps> = ({
  onExploreClinicalAi,
}) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="intel" icon={<BrainCircuit className="w-3.5 h-3.5" />}>
            Physician Clinical Decision Support
          </Badge>

          {/* Exact Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            An AI copilot for every consultation.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Augment your diagnostic precision without administrative distraction. DrGodly surfaces ranked differentials, guideline references, and medication contraindications at the point of care.
          </p>

          <div className="mt-6 flex justify-center">
            <Link href="/platform/clinical-decision-support">
              <Button
                variant="vital"
                size="lg"
                onClick={onExploreClinicalAi}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Clinical AI
              </Button>
            </Link>
          </div>
        </div>

        {/* Doctor Dashboard Mockup (All 9 required items) */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/50 p-6 sm:p-10 shadow-clinical-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-200 pb-4">
            <div>
              <span className="text-xs font-bold text-intel-700 uppercase tracking-wider block">
                Doctor CDS Workspace
              </span>
              <h3 className="text-lg font-bold text-clinical-950">
                Point-of-Care Decision Support • Case #DG-884219
              </h3>
            </div>
            <div className="text-xs text-clinical-500 italic">
              Decision Support Only • Attending Physician Verification Mandated
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* 1. Patient Summary & 2. Relevant History */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-2">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                1. Patient Summary & Relevant History
              </span>
              <p className="text-clinical-700 leading-relaxed">
                46yo female with 2-year history of Essential HTN on HCTZ 25mg daily. Presents with 3 weeks subacute postural presyncope & calf fasciculations.
              </p>
            </div>

            {/* 3. Differential Considerations */}
            <div className="p-4 rounded-xl bg-intel-50/70 border border-intel-200 space-y-2">
              <span className="font-bold text-intel-950 uppercase tracking-wider text-[11px] block">
                2. Differential Considerations
              </span>
              <ul className="space-y-1 text-clinical-800">
                <li>• <strong>Drug-Induced Hypokalemia</strong> (High Probability)</li>
                <li>• <strong>Orthostatic Hypotension</strong> (Secondary)</li>
                <li>• <strong>Hypomagnesemia</strong> (Differential)</li>
              </ul>
            </div>

            {/* 4. Medication Context & 5. Relevant Investigations */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-2">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                3. Medications & Lab Context
              </span>
              <p className="text-clinical-700">
                • <strong>Current Med:</strong> HCTZ 25mg QD (Diuretic)<br />
                • <strong>Prior Lab:</strong> Serum K+ 3.3 mEq/L, eGFR 82.<br />
                • <strong>Contraindication Check:</strong> Sulfa allergy documented.
              </p>
            </div>

            {/* 6. Clinical Guidelines & 7. Evidence References */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-2 md:col-span-2">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-intel-600" />
                4. Clinical Guidelines & Evidence References
              </span>
              <p className="text-clinical-700 leading-relaxed">
                AHA/ACC 2024 Hypertension Guidelines recommend monitoring electrolytes 4-6 weeks after thiazide initiation, citing elevated incidence of hypokalemic cardiac arrhythmias and muscle cramping.
              </p>
            </div>

            {/* 8. Red Flags */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                5. Red Flags Surveillance
              </span>
              <p className="text-amber-950 leading-relaxed">
                No syncope, chest pain, or focal deficits reported. Urgency: Routine outpatient lab repletion.
              </p>
            </div>

            {/* 9. Suggested Questions */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1 md:col-span-3">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-vital-600" />
                6. Suggested Clinical Inquiries to Validate Rationale
              </span>
              <p className="text-clinical-700">
                1. &ldquo;Have you noticed any irregular heartbeats, fluttering, or lightheadedness when resting?&rdquo;<br />
                2. &ldquo;Are you experiencing excessive thirst or changes in daily urination volume?&rdquo;
              </p>
            </div>
          </div>

          {/* Critical Ethical Positioning Statement */}
          <div className="p-3.5 rounded-xl bg-clinical-100 text-clinical-600 text-[11px] leading-relaxed border border-clinical-200">
            <strong>Clinical Safety Mandate: </strong>
            DrGodly strictly functions as clinical decision support. DrGodly never independently diagnoses, prescribes medications, or executes treatment plans. All clinical care decisions remain exclusively with the licensed attending physician.
          </div>
        </div>
      </div>
    </section>
  );
};
