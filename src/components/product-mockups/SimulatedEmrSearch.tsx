"use client";

import React, { useState } from "react";
import {
  Search,
  Sparkles,
  FileText,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  FileSearch
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type SearchQueryKey = "abnormal_labs" | "past_meds" | "htn_history" | "hba1c_compare";

interface QueryResult {
  query: string;
  category: string;
  summary: string;
  structuredDetails: { label: string; value: string; note?: string }[];
  sources: { title: string; date: string; author: string; excerpt: string; page: string }[];
}

const SEARCH_DATABASE: Record<SearchQueryKey, QueryResult> = {
  abnormal_labs: {
    query: "Show me all abnormal lab results from the last year.",
    category: "Biomarker Surveillance (Last 12 Months)",
    summary:
      "A complete scan of 3 diagnostic panels (November 2023 to October 2024) reveals only 1 historic abnormality: Serum 25-OH Vitamin D was 22 ng/mL (insufficient) on Nov 04, 2023. Following 2,000 IU daily therapy, it successfully normalized to 48 ng/mL on Oct 18, 2024. All kidney, liver, glycemic, and electrolyte panels are currently within normal limits.",
    structuredDetails: [
      { label: "Serum 25-OH Vitamin D", value: "22 ng/mL (Nov 2023)", note: "Resolved to 48 ng/mL in Oct 2024" },
      { label: "Serum Potassium", value: "3.8 mEq/L (May 2023)", note: "Low-normal under prior HCTZ therapy" },
      { label: "eGFR Filtration", value: "96 mL/min (Oct 2024)", note: "Optimal renal function (> 60)" },
    ],
    sources: [
      {
        title: "Annual Comprehensive Metabolic Panel.pdf",
        date: "Nov 04, 2023",
        author: "Northwest Health Diagnostics",
        excerpt: "Serum 25-Hydroxyvitamin D: 22 ng/mL [L]. Reference: 30-100 ng/mL. Recommend oral replenishment.",
        page: "p. 3",
      },
      {
        title: "LabCorp Glycemic & Micronutrient Panel.pdf",
        date: "Oct 18, 2024",
        author: "LabCorp San Francisco",
        excerpt: "Serum 25-Hydroxyvitamin D: 48 ng/mL [Normal]. Demonstrates therapeutic normalization.",
        page: "p. 1",
      },
    ],
  },
  past_meds: {
    query: "What medications has this patient previously tried?",
    category: "Pharmacotherapy History & Discontinuations",
    summary:
      "Maya K. previously took Hydrochlorothiazide (HCTZ) 12.5mg PO once daily from November 12, 2022 to May 28, 2023 for initial blood pressure management. It was formally discontinued by Dr. Marcus Vance following mild hypokalemia (potassium 3.6 mEq/L) and replaced with Lisinopril 10mg daily, which remains well-tolerated.",
    structuredDetails: [
      { label: "Discontinued Drug", value: "Hydrochlorothiazide (HCTZ) 12.5mg", note: "Nov 2022 – May 2023" },
      { label: "Discontinuation Reason", value: "Mild electrolyte imbalance (potassium dip)", note: "Resolved post-cessation" },
      { label: "Replacement Agent", value: "Lisinopril 10mg PO Daily", note: "Active since Jun 14, 2023" },
    ],
    sources: [
      {
        title: "Cardiology Clinical Consultation Note.pdf",
        date: "Jun 14, 2023",
        author: "Dr. Marcus Vance, FACC",
        excerpt: "Discontinue HCTZ 12.5mg due to borderline hypokalemia on routine BMP. Initiate Lisinopril 10mg PO Daily.",
        page: "p. 2",
      },
      {
        title: "CVS Pharmacy Prescription History.pdf",
        date: "May 30, 2023",
        author: "CVS Pharmacy #4821",
        excerpt: "Hydrochlorothiazide 12.5mg #30 - Status: Inactive / Physician Discontinued.",
        page: "p. 5",
      },
    ],
  },
  htn_history: {
    query: "Summarize the patient's hypertension history.",
    category: "Longitudinal Disease Trajectory",
    summary:
      "Essential Hypertension was initially diagnosed in November 2022 by Dr. Sarah Jenkins after office readings averaged 136/88 mmHg. Initial management began with lifestyle interventions and low-dose HCTZ. In June 2023, therapy was transitioned to Lisinopril 10mg daily. Over the past 15 months, the patient has demonstrated 96% medication adherence with home BP logs averaging 122/78 mmHg. Renal parameters (eGFR 96, creatinine 0.88) remain optimal with zero end-organ complications.",
    structuredDetails: [
      { label: "Diagnosis Date", value: "November 12, 2022", note: "ICD-10: I10 Essential HTN" },
      { label: "Baseline vs Current BP", value: "136/88 → 122/78 mmHg", note: "-14 mmHg reduction" },
      { label: "Current Regimen", value: "Lisinopril 10mg PO AM", note: "High adherence (96%)" },
      { label: "Target Control Status", value: "Controlled (< 130/80)", note: "Per AHA/ACC 2024 Guidelines" },
    ],
    sources: [
      {
        title: "Primary Care Baseline Visit Summary.pdf",
        date: "Nov 12, 2022",
        author: "Dr. Sarah Jenkins, MD",
        excerpt: "Assessment: Essential Hypertension, stage 1. Patient agreeable to diet modification and low-dose therapy.",
        page: "p. 1",
      },
      {
        title: "DrGodly Remote Vitals Sync Log.pdf",
        date: "Oct 24, 2024",
        author: "DrGodly Vault System",
        excerpt: "90-day rolling BP average: 122/78 mmHg. Zero hypertensive urgency episodes reported.",
        page: "p. 1",
      },
    ],
  },
  hba1c_compare: {
    query: "Compare HbA1c values over the last 2 years.",
    category: "Metabolic Biomarker Longitudinal Comparison",
    summary:
      "Maya K.'s HbA1c has steadily improved over a 24-month period across 3 verified blood draws: 5.8% (Oct 2022) → 5.7% (Oct 2023) → 5.6% (Oct 2024). The latest result is well within the healthy non-diabetic range (< 5.7%), representing a cumulative 0.2% reduction attributable to dietary refinement and sustained physical activity (7,400 daily steps).",
    structuredDetails: [
      { label: "October 2022 (Baseline)", value: "5.8%", note: "Pre-diabetes threshold" },
      { label: "October 2023 (Year 1)", value: "5.7%", note: "-0.1% reduction" },
      { label: "October 2024 (Year 2)", value: "5.6%", note: "Optimal non-diabetic range" },
    ],
    sources: [
      {
        title: "LabCorp Annual Wellness Bloodwork.pdf",
        date: "Oct 18, 2024",
        author: "LabCorp Diagnostics",
        excerpt: "Hemoglobin A1c: 5.6%. Reference: < 5.7%. Estimated Average Glucose (eAG): 114 mg/dL.",
        page: "p. 2",
      },
      {
        title: "Northwest Health Diagnostic Panel.pdf",
        date: "Oct 12, 2023",
        author: "Northwest Health Labs",
        excerpt: "Hemoglobin A1c: 5.7%. Demonstrating gradual downward glycemic trend.",
        page: "p. 1",
      },
    ],
  },
};

export const SimulatedEmrSearch: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState<SearchQueryKey>("abnormal_labs");
  const [customInput, setCustomInput] = useState<string>("");
  const result = SEARCH_DATABASE[activeQuery];

  const exampleButtons: { id: SearchQueryKey; title: string }[] = [
    { id: "abnormal_labs", title: "Show me all abnormal lab results from the last year." },
    { id: "past_meds", title: "What medications has this patient previously tried?" },
    { id: "htn_history", title: "Summarize the patient's hypertension history." },
    { id: "hba1c_compare", title: "Compare HbA1c values over the last 2 years." },
  ];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    // Default to a matching query or first query
    setActiveQuery("abnormal_labs");
  };

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Search Header Bar */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-vital-500/20 text-vital-300 font-mono text-[11px] font-semibold uppercase tracking-wider">
                Conversational EMR Intelligence
              </span>
              <span className="text-xs text-clinical-400 font-mono">Semantic RAG Engine v3.4</span>
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Query Maya K.&apos;s Multi-Year Clinical Record
            </h3>
            <p className="text-xs text-clinical-300 mt-0.5">
              Natural Language Semantic Search over 18 PDF Encounters, Lab Panels, and Prescriptions
            </p>
          </div>

          <Badge variant="clinical" className="bg-white/10 text-vital-300 border-white/20 text-xs self-start sm:self-auto">
            100% Sourced Citations
          </Badge>
        </div>

        {/* Search Bar Input */}
        <form onSubmit={handleCustomSubmit} className="mt-6 flex items-center gap-2">
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-3 flex items-center gap-3 focus-within:bg-white focus-within:text-clinical-950 focus-within:ring-2 focus-within:ring-vital-500 transition-all text-white">
            <Search className="w-5 h-5 text-vital-400 shrink-0" />
            <input
              type="text"
              value={customInput || result.query}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask anything about this patient's record..."
              className="bg-transparent border-none outline-none text-xs sm:text-sm w-full placeholder:text-clinical-400 font-medium text-inherit"
            />
          </div>
          <Button variant="vital" size="md" type="submit" className="shrink-0 h-12 px-5">
            Search Record
          </Button>
        </form>
      </div>

      {/* 4 Example Query Quick Tabs */}
      <div className="bg-clinical-50 px-6 py-3 border-b border-clinical-200">
        <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-400 block mb-2">
          Click an example query to simulate conversational EMR search:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {exampleButtons.map((btn) => {
            const isSelected = activeQuery === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveQuery(btn.id);
                  setCustomInput("");
                }}
                className={`p-2.5 rounded-xl border text-left transition-all text-xs font-semibold flex items-center justify-between ${
                  isSelected
                    ? "bg-vital-50 border-vital-500 text-vital-950 ring-1 ring-vital-400 shadow-clinical-xs"
                    : "bg-white border-clinical-200 text-clinical-700 hover:border-clinical-300 hover:bg-clinical-50/50"
                }`}
              >
                <span className="truncate">&ldquo;{btn.title}&rdquo;</span>
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 ml-2 ${isSelected ? "text-vital-600" : "text-clinical-400"}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Result Display with Source References */}
      <div className="p-6 sm:p-8 space-y-6 bg-white">
        {/* Synthesized Response Card */}
        <div className="rounded-2xl border border-clinical-200 bg-clinical-50/40 p-6 shadow-clinical-xs space-y-4">
          <div className="flex items-center justify-between border-b border-clinical-200 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-vital-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-900">
                Synthesized Clinical Intelligence
              </span>
            </div>
            <span className="text-xs font-mono text-clinical-500">
              {result.category}
            </span>
          </div>

          <p className="text-sm sm:text-base text-clinical-900 leading-relaxed font-normal">
            {result.summary}
          </p>

          {/* Structured Detail Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {result.structuredDetails.map((detail, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-clinical-200">
                <span className="text-[10px] uppercase font-bold text-clinical-500 block truncate">
                  {detail.label}
                </span>
                <span className="text-xs font-bold text-clinical-950 font-mono mt-0.5 block">
                  {detail.value}
                </span>
                {detail.note && (
                  <span className="text-[10px] text-vital-700 font-medium mt-0.5 block">
                    {detail.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Source References Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-700 flex items-center gap-2">
              <FileSearch className="w-4 h-4 text-vital-600" />
              Underlying Record Sources & Provenance ({result.sources.length} Documents Cited)
            </h4>
            <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Direct Document Excerpts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.sources.map((src, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-clinical-200 bg-white hover:border-vital-300 transition-all space-y-2 shadow-clinical-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-vital-600 shrink-0" />
                    <span className="text-xs font-bold text-clinical-950 truncate">
                      {src.title}
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-clinical-100 font-mono text-[10px] text-clinical-600 font-semibold shrink-0">
                    {src.page}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-clinical-500 font-mono">
                  <span>Date: {src.date}</span>
                  <span>•</span>
                  <span>Author: {src.author}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-clinical-50 border border-clinical-150 text-[11px] text-clinical-700 font-mono italic leading-relaxed">
                  &ldquo;{src.excerpt}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-clinical-50 border-t border-clinical-200 flex items-center justify-between text-xs text-clinical-500">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Every AI response links directly back to the verified PDF page and physician signature.
        </span>
        <span className="font-mono text-[11px]">Audit ID #DG-SRCH-994</span>
      </div>
    </div>
  );
};
