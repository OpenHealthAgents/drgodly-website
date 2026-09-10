"use client";

import React from "react";
import {
  ArrowDown,
  Sparkles,
  Bot,
  History,
  FileText,
  FileCheck2,
  Video,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  Database,
  Stethoscope,
  ClipboardCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const DoctorWorkflowTriPhaseSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-clinical-50/60 border-t border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Continuous Clinical Orchestration</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            The Complete Doctor Workflow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            See how DrGodly orchestrates cognitive context across the three phases of every patient consultation.
          </p>
        </div>

        {/* 3-Column Tri-Phase Workflow Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Phase 1: BEFORE THE VISIT */}
          <div className="rounded-3xl border border-clinical-200 bg-white p-6 sm:p-8 shadow-clinical-sm flex flex-col justify-between hover:border-vital-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-clinical-100 pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-vital-700">
                  Phase 01
                </span>
                <span className="px-3 py-1 rounded-full bg-vital-50 text-vital-800 text-xs font-bold border border-vital-200">
                  Preparation
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-clinical-950 mb-2">
                BEFORE THE VISIT
              </h3>
              <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed mb-6">
                AI gathers, extracts, and summarizes the complete context before you enter the virtual room.
              </p>

              {/* Ingestion Pipeline Nodes */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex items-center gap-3">
                  <Bot className="w-4 h-4 text-vital-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">AI Intake</span>
                    <span className="text-[11px] text-clinical-500">Adaptive conversational symptom inquiry</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex items-center gap-3">
                  <History className="w-4 h-4 text-vital-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Patient Health History</span>
                    <span className="text-[11px] text-clinical-500">Chronological timeline & baseline medications</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex items-center gap-3">
                  <FileText className="w-4 h-4 text-vital-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Previous Records</span>
                    <span className="text-[11px] text-clinical-500">Uploaded labs, PDFs & external hospital charts</span>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-vital-600 animate-bounce" />
                </div>

                {/* Phase 1 Output */}
                <div className="p-4 rounded-xl bg-vital-100/70 border border-vital-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-vital-950 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-vital-700" />
                    <span>AI Pre-Visit Report</span>
                  </div>
                  <p className="text-xs text-vital-900 leading-relaxed">
                    60-second executive clinical summary ready before you click start.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-clinical-100 text-[11px] text-clinical-400">
              Zero clipboard or paper questionnaire reviews required.
            </div>
          </div>

          {/* Phase 2: DURING THE VISIT */}
          <div className="rounded-3xl border border-clinical-900 bg-clinical-950 text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-clinical-800 pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-vital-300">
                  Phase 02
                </span>
                <span className="px-3 py-1 rounded-full bg-vital-500/20 text-vital-300 text-xs font-bold border border-vital-400/30">
                  Point of Care
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-white mb-2">
                DURING THE VISIT
              </h3>
              <p className="text-xs sm:text-sm text-clinical-300 leading-relaxed mb-6">
                Full eye-contact consultations with silent AI decision support at your fingertips.
              </p>

              {/* Consultation Elements */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-clinical-900 border border-clinical-800 flex items-center gap-3">
                  <Video className="w-4 h-4 text-vital-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Telemedicine</span>
                    <span className="text-[11px] text-clinical-400">Encrypted HD video with contextual side rail</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900 border border-clinical-800 flex items-center gap-3">
                  <BrainCircuit className="w-4 h-4 text-vital-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Clinical Decision Support</span>
                    <span className="text-[11px] text-clinical-400">Differential considerations & guideline citations</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900 border border-clinical-800 flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-vital-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Patient Timeline</span>
                    <span className="text-[11px] text-clinical-400">Biomarker trends & medication milestones</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900 border border-clinical-800 flex items-center gap-3">
                  <FileCheck2 className="w-4 h-4 text-vital-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Relevant Records</span>
                    <span className="text-[11px] text-clinical-400">Quick-cited source extracts with 1-click verification</span>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-vital-400 animate-bounce" />
                </div>

                {/* Phase 2 Output */}
                <div className="p-4 rounded-xl bg-vital-500/20 border border-vital-400/40 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-vital-300 uppercase tracking-wide">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Doctor Decision</span>
                  </div>
                  <p className="text-xs text-clinical-200 leading-relaxed">
                    You evaluate, validate, and diagnose with complete human clinical autonomy.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-clinical-800 text-[11px] text-clinical-400">
              Zero typing during the visit. AI captures ambient audio silently.
            </div>
          </div>

          {/* Phase 3: AFTER THE VISIT */}
          <div className="rounded-3xl border border-clinical-200 bg-white p-6 sm:p-8 shadow-clinical-sm flex flex-col justify-between hover:border-vital-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-clinical-100 pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-vital-700">
                  Phase 03
                </span>
                <span className="px-3 py-1 rounded-full bg-vital-50 text-vital-800 text-xs font-bold border border-vital-200">
                  Documentation & Sync
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-clinical-950 mb-2">
                AFTER THE VISIT
              </h3>
              <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed mb-6">
                Instant ambient note drafting, order preparation, and living chart synchronization.
              </p>

              {/* Documentation Elements */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex items-center gap-3">
                  <ClipboardCheck className="w-4 h-4 text-vital-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">AI SOAP Note</span>
                    <span className="text-[11px] text-clinical-500">Structured S-O-A-P ready for 1-click review & sign</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Orders / Plan</span>
                    <span className="text-[11px] text-clinical-500">Auto-drafted lab orders, prescriptions & referrals</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex items-center gap-3">
                  <FileText className="w-4 h-4 text-vital-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Patient Instructions</span>
                    <span className="text-[11px] text-clinical-500">Clear post-visit summary sent in patient portal</span>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-4 h-4 text-vital-600 animate-bounce" />
                </div>

                {/* Phase 3 Output */}
                <div className="p-4 rounded-xl bg-vital-100/70 border border-vital-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-vital-950 uppercase tracking-wide">
                    <Database className="w-3.5 h-3.5 text-vital-700" />
                    <span>AI-Native EMR Sync</span>
                  </div>
                  <p className="text-xs text-vital-900 leading-relaxed">
                    Pushed to external EHR (Epic, Cerner, Athena) via bi-directional FHIR HL7.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-clinical-100 text-[11px] text-clinical-400">
              Pajama-time charting eliminated. Review, edit, and sign in 30 seconds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
