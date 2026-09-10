"use client";

import React, { useState } from "react";
import {
  Activity,
  HeartPulse,
  Pill,
  FileText,
  Clock,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Lock
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type EmrTab = "problems" | "medications" | "labs" | "encounters" | "documents";

export const SimulatedAiNativeEmr: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EmrTab>("labs");

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Modern EMR Master Header Banner */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-vital-600 to-vital-400 text-white font-serif font-bold text-xl flex items-center justify-center shadow-clinical-sm ring-2 ring-white/10">
              MK
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold font-serif text-white">Maya K.</h3>
                <span className="px-2 py-0.5 rounded bg-vital-500/20 text-vital-300 font-mono text-xs border border-vital-400/30">
                  MRN: DG-94820-24
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs border border-emerald-400/30">
                  Code: Full Code
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-clinical-300 mt-1">
                <span>38F • DOB: 1986-04-12</span>
                <span>•</span>
                <span className="text-rose-400 font-semibold">Allergies: Penicillin (Hives)</span>
                <span>•</span>
                <span>Blood: A+</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  FHIR R4 Graph Store
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Badge variant="clinical" className="bg-white/10 text-vital-300 border-white/20 text-xs">
              Continuous Live Graph
            </Badge>
          </div>
        </div>
      </div>

      {/* Modern EMR Tab Bar */}
      <div className="bg-clinical-50 border-b border-clinical-200 px-6 flex items-center gap-2 overflow-x-auto py-2">
        <button
          onClick={() => setActiveTab("labs")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "labs"
              ? "bg-white text-clinical-950 shadow-clinical-xs border border-clinical-200 font-bold"
              : "text-clinical-600 hover:text-clinical-900"
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-vital-600" />
          <span>Biomarker Trends & Labs</span>
          <span className="px-1.5 py-0.2 rounded-full bg-vital-100 text-vital-800 text-[10px] font-mono">
            Oct 2024
          </span>
        </button>

        <button
          onClick={() => setActiveTab("problems")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "problems"
              ? "bg-white text-clinical-950 shadow-clinical-xs border border-clinical-200 font-bold"
              : "text-clinical-600 hover:text-clinical-900"
          }`}
        >
          <HeartPulse className="w-3.5 h-3.5 text-vital-600" />
          <span>Problem List</span>
          <span className="px-1.5 py-0.2 rounded-full bg-clinical-200 text-clinical-700 text-[10px] font-mono">
            2 Active
          </span>
        </button>

        <button
          onClick={() => setActiveTab("medications")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "medications"
              ? "bg-white text-clinical-950 shadow-clinical-xs border border-clinical-200 font-bold"
              : "text-clinical-600 hover:text-clinical-900"
          }`}
        >
          <Pill className="w-3.5 h-3.5 text-vital-600" />
          <span>Medications</span>
          <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono">
            96% Refill
          </span>
        </button>

        <button
          onClick={() => setActiveTab("encounters")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "encounters"
              ? "bg-white text-clinical-950 shadow-clinical-xs border border-clinical-200 font-bold"
              : "text-clinical-600 hover:text-clinical-900"
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-vital-600" />
          <span>Clinical Encounters</span>
        </button>

        <button
          onClick={() => setActiveTab("documents")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "documents"
              ? "bg-white text-clinical-950 shadow-clinical-xs border border-clinical-200 font-bold"
              : "text-clinical-600 hover:text-clinical-900"
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-vital-600" />
          <span>Ingested Documents</span>
        </button>
      </div>

      {/* Main Tab Content View */}
      <div className="p-6 sm:p-8 min-h-[420px] bg-white">
        {/* TAB: LAB TRENDS */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-clinical-950">
                  Longitudinal Biomarker Trajectory (2022 – 2024)
                </h4>
                <p className="text-xs text-clinical-500">
                  Multi-year normalized blood analytics cross-referenced from LabCorp, Quest, and clinic draws.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                All Current Biomarkers In-Range
              </span>
            </div>

            {/* Trajectory Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* HbA1c Trend */}
              <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-clinical-900">HbA1c Glycemic</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    -0.2%
                  </span>
                </div>
                <div className="text-2xl font-bold font-mono text-clinical-950">5.6%</div>
                <div className="space-y-1 text-[11px] font-mono text-clinical-600 pt-1 border-t border-clinical-200">
                  <div className="flex justify-between">
                    <span>Oct 2022:</span>
                    <span>5.8% (Pre-DM threshold)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Oct 2023:</span>
                    <span>5.7%</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-700">
                    <span>Oct 2024:</span>
                    <span>5.6% (Optimal)</span>
                  </div>
                </div>
              </div>

              {/* Blood Pressure Trend */}
              <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-clinical-900">Systolic BP</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    -14 mmHg
                  </span>
                </div>
                <div className="text-2xl font-bold font-mono text-clinical-950">122 mmHg</div>
                <div className="space-y-1 text-[11px] font-mono text-clinical-600 pt-1 border-t border-clinical-200">
                  <div className="flex justify-between">
                    <span>Nov 2022:</span>
                    <span>136 mmHg (Baseline)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jun 2023:</span>
                    <span>128 mmHg (Lisinopril start)</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-700">
                    <span>Aug 2024:</span>
                    <span>122 mmHg (Target reached)</span>
                  </div>
                </div>
              </div>

              {/* Vitamin D (25-OH) Trend */}
              <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-clinical-900">Serum 25-OH Vit D</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +26 ng/mL
                  </span>
                </div>
                <div className="text-2xl font-bold font-mono text-clinical-950">48 ng/mL</div>
                <div className="space-y-1 text-[11px] font-mono text-clinical-600 pt-1 border-t border-clinical-200">
                  <div className="flex justify-between">
                    <span>Nov 2023:</span>
                    <span>22 ng/mL (Insufficient)</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-700">
                    <span>Oct 2024:</span>
                    <span>48 ng/mL (Optimal)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: PROBLEM LIST */}
        {activeTab === "problems" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/40 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h5 className="font-bold text-clinical-950 text-sm">Essential (Primary) Hypertension</h5>
                  <Badge variant="clinical" className="text-[10px]">ICD-10: I10</Badge>
                  <span className="font-mono text-[10px] text-clinical-500">SNOMED CT: 59621000</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Active • Controlled</span>
              </div>
              <p className="text-xs text-clinical-600">
                Identified Nov 2022. Maintained on ACE inhibitor therapy (Lisinopril 10mg PO Daily). Last review Aug 22, 2024.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/40 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h5 className="font-bold text-clinical-950 text-sm">Seasonal Allergic Rhinitis</h5>
                  <Badge variant="clinical" className="text-[10px]">ICD-10: J30.2</Badge>
                  <span className="font-mono text-[10px] text-clinical-500">SNOMED CT: 267424006</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-clinical-200 text-clinical-800 text-[10px] font-semibold">Intermittent</span>
              </div>
              <p className="text-xs text-clinical-600">
                Tree and grass pollen sensitivity. Over-the-counter antihistamines as needed.
              </p>
            </div>
          </div>
        )}

        {/* TAB: MEDICATIONS */}
        {activeTab === "medications" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-clinical-200 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="font-bold text-clinical-950 text-sm">Lisinopril 10 mg Oral Tablet</h5>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">Daily AM</span>
                </div>
                <p className="text-xs text-clinical-500 mt-0.5">RxNorm: 314076 • Refills: 3 • Last: Aug 10, 2024</p>
              </div>
              <Badge variant="vital" className="text-[10px]">Active Rx</Badge>
            </div>
          </div>
        )}

        {/* TAB: ENCOUNTERS */}
        {activeTab === "encounters" && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-clinical-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-vital-700 font-bold block">Oct 24, 2024 • 10:14 AM</span>
                <h5 className="font-bold text-clinical-950 text-sm">Telemedicine Consultation (Dr. Emily Vance, MD)</h5>
                <p className="text-xs text-clinical-500 mt-0.5">Chief complaint: 4-day tension headache & asthenopia.</p>
              </div>
              <Badge variant="clinical" className="text-[10px]">SOAP Signed</Badge>
            </div>
          </div>
        )}

        {/* TAB: DOCUMENTS */}
        {activeTab === "documents" && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-clinical-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-vital-600 shrink-0" />
                <div>
                  <h5 className="font-bold text-clinical-950 text-xs">LabCorp_Metabolic_Oct2024.pdf</h5>
                  <p className="text-[11px] text-clinical-500">2.1 MB • 14 extracted biomarkers • Parsed & verified</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-xs">
                View Full PDF
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* EMR Footer Metadata */}
      <div className="p-4 bg-clinical-50 border-t border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-clinical-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Audit Log: 0 Unauthorized accesses • Encrypted with Maya K.&apos;s individual key</span>
        </div>
        <span className="font-mono text-[11px]">USCDI v3 / HL7 FHIR Release 4 Compliant</span>
      </div>
    </div>
  );
};
