"use client";

import React from "react";
import {
  Video,
  Mic,
  PhoneOff,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PatientTelemedicineSectionProps {
  onOpenConsult?: () => void;
}

export const PatientTelemedicineSection: React.FC<PatientTelemedicineSectionProps> = ({
  onOpenConsult,
}) => {
  return (
    <section className="py-24 bg-clinical-50/50 border-t border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="clinical" icon={<Video className="w-3.5 h-3.5 text-vital-600" />}>
            Pre-Briefed Telemedicine
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            When you need a doctor, arrive prepared.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            No more spending the first 10 minutes of every consultation re-explaining your previous surgeries, drug allergies, and timeline from scratch. Your doctor joins the call having already reviewed your organized clinical briefing.
          </p>
        </div>

        {/* Telemedicine Mockup */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-white p-6 sm:p-8 shadow-clinical-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: HD Video Simulation (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-clinical-950 text-white p-5 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
              {/* Doctor Info Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vital-500/20 border border-vital-400/40 flex items-center justify-center font-serif text-sm font-bold text-vital-300">
                    EV
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Dr. Emily Vance, MD</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-vital-400" />
                    </h4>
                    <p className="text-[11px] text-clinical-400">Board-Certified Internal Medicine</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>08:14 Encrypted Call</span>
                </div>
              </div>

              {/* Center simulated call graphic */}
              <div className="my-auto text-center py-8 relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-vital-600 to-vital-400 mx-auto flex items-center justify-center text-white text-2xl font-serif font-bold shadow-2xl ring-4 ring-white/10 mb-3">
                  EV
                </div>
                <p className="text-sm text-clinical-200 font-medium">
                  &ldquo;Maya, I see you&apos;ve had this headache for 4 days with screen fatigue, and your Lisinopril BP has been stable.&rdquo;
                </p>
                <span className="text-[11px] text-vital-400 font-mono block mt-1">
                  Doctor is referencing your AI Pre-Visit Briefing
                </span>
              </div>

              {/* Call Control Toolbar */}
              <div className="relative z-10 flex items-center justify-center gap-3 pt-3 border-t border-white/10">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <Mic className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <Video className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-700 flex items-center justify-center text-white transition-colors">
                  <PhoneOff className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: What Your Doctor Sees (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl border border-clinical-200 bg-clinical-50/70 p-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-clinical-200 mb-4">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-vital-600" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-950">
                      What Your Doctor Sees in Advance
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                    60s Pre-Visit Report
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Item 1 */}
                  <div className="p-3 rounded-xl bg-white border border-clinical-200 shadow-clinical-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-clinical-950">Synthesized Chief Complaint</span>
                      <span className="text-[10px] text-clinical-500 font-mono">Day 4</span>
                    </div>
                    <p className="text-clinical-600">
                      Bilateral tension headache aggravated by screens; negative for photophobia, fever, or nuchal rigidity.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3 rounded-xl bg-white border border-clinical-200 shadow-clinical-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-clinical-950">Medications & Compliance</span>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">Verified Rx</span>
                    </div>
                    <p className="text-clinical-600">
                      Lisinopril 10mg daily (BP avg: 122/78) • Vitamin D3 2,000 IU • Amoxicillin allergy flagged.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3 rounded-xl bg-white border border-clinical-200 shadow-clinical-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-clinical-950">Recent Lab Biomarkers (Oct 2024)</span>
                      <span className="text-[10px] text-vital-700 font-mono">LabCorp</span>
                    </div>
                    <p className="text-clinical-600">
                      HbA1c 5.6% (Optimal) • eGFR 96 mL/min • Serum Creatinine 0.88 mg/dL.
                    </p>
                  </div>
                </div>
              </div>

              {/* Time saved metric banner */}
              <div className="p-3.5 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-vital-600 shrink-0" />
                  <span className="text-xs font-semibold text-vital-950">
                    8.5 minutes saved on routine paperwork
                  </span>
                </div>
                <span className="text-[11px] font-bold text-vital-700">
                  100% Care Focus
                </span>
              </div>
            </div>
          </div>

          {/* Telemedicine reassurance row */}
          <div className="mt-8 pt-6 border-t border-clinical-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-clinical-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Board-certified physicians licensed in all 50 states • e-Prescriptions sent directly to your local pharmacy</span>
            </div>
            <Button
              variant="vital"
              size="sm"
              onClick={onOpenConsult}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="self-start sm:self-auto text-xs"
            >
              Start Consultation Flow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
