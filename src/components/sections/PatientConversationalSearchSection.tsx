"use client";

import React, { useState } from "react";
import {
  Search,
  Sparkles,
  FileText,
  Calendar,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ClipboardList
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type QuestionId = "bp_meds" | "hba1c" | "blood_changes" | "last_recommendations";

interface QuestionDemo {
  id: QuestionId;
  question: string;
  category: string;
  dateRange: string;
  summary: string;
  keyInsights: string[];
  metrics?: { label: string; value: string; change?: string; trend?: "up" | "down" | "neutral" }[];
  citations: { docName: string; date: string; provider: string; page: string }[];
}

const QUESTIONS_DATA: Record<QuestionId, QuestionDemo> = {
  bp_meds: {
    id: "bp_meds",
    question: "What medications have I taken for blood pressure?",
    category: "Cardiovascular / Pharmacotherapy",
    dateRange: "2022 – 2024",
    summary:
      "You are currently taking Lisinopril 10mg once daily in the morning, started on June 14, 2023 by Dr. Marcus Vance. Prior to this, you were prescribed Hydrochlorothiazide (HCTZ) 12.5mg from November 2022 to May 2023, which was stopped following mild hypokalemia noted on your routine metabolic panel.",
    keyInsights: [
      "Current: Lisinopril 10mg PO Daily (Adherence: 96% based on pharmacy refills)",
      "Discontinued: Hydrochlorothiazide 12.5mg (Discontinued May 2023 by Dr. Vance due to mild potassium dip)",
      "Cross-Check: No drug-drug interactions detected with current Vitamin D3 supplement",
    ],
    metrics: [
      { label: "Current Sys/Dia", value: "122/78 mmHg", change: "-14 mmHg vs 2022", trend: "down" },
      { label: "Adherence Score", value: "96%", change: "Good", trend: "neutral" },
      { label: "Active Months", value: "15 mo", change: "Stable", trend: "neutral" },
    ],
    citations: [
      { docName: "Cardiology Consultation Note.pdf", date: "Jun 14, 2023", provider: "Dr. Marcus Vance, FACC", page: "p. 2" },
      { docName: "Comprehensive Metabolic Panel.pdf", date: "May 28, 2023", provider: "Quest Diagnostics", page: "p. 1" },
      { docName: "Pharmacy Dispense History.pdf", date: "Aug 10, 2024", provider: "CVS Pharmacy #4821", page: "p. 4" },
    ],
  },
  hba1c: {
    id: "hba1c",
    question: "When was my last HbA1c test?",
    category: "Metabolic & Endocrine Panel",
    dateRange: "Oct 2024 (Last 24 Months)",
    summary:
      "Your last HbA1c test was completed on October 18, 2024 at LabCorp. Your result was 5.6%, which is within the optimal non-diabetic reference range (< 5.7%). This continues a steady downward trajectory from 5.8% in October 2022 and 5.7% in October 2023.",
    keyInsights: [
      "Latest Value: 5.6% (Normal range: < 5.7%, Pre-diabetes: 5.7–6.4%)",
      "Two-Year Trajectory: 5.8% (2022) → 5.7% (2023) → 5.6% (2024)",
      "Fasting Plasma Glucose at same draw: 92 mg/dL (optimal)",
    ],
    metrics: [
      { label: "Oct 2024 HbA1c", value: "5.6%", change: "-0.2% vs 2022", trend: "down" },
      { label: "Fasting Glucose", value: "92 mg/dL", change: "Optimal", trend: "neutral" },
      { label: "Estimated Avg Glucose", value: "114 mg/dL", change: "Normal", trend: "neutral" },
    ],
    citations: [
      { docName: "LabCorp Glycemic Panel.pdf", date: "Oct 18, 2024", provider: "LabCorp Diagnostics", page: "p. 1" },
      { docName: "Annual Wellness Clinical Summary.pdf", date: "Oct 24, 2024", provider: "Dr. Sarah Jenkins, MD", page: "p. 3" },
    ],
  },
  blood_changes: {
    id: "blood_changes",
    question: "What changed in my blood reports over the last year?",
    category: "Biomarker Trend Analysis",
    dateRange: "Nov 2023 vs. Oct 2024",
    summary:
      "Comparing your November 2023 and October 2024 comprehensive blood draws, your metabolic and cardiovascular markers show positive improvements across three primary areas: cholesterol reduction, improved renal filtration, and complete normalization of Vitamin D levels.",
    keyInsights: [
      "LDL Cholesterol dropped from 138 mg/dL to 112 mg/dL (-18.8% decrease)",
      "eGFR (Kidney Filtration) rose from 84 to 96 mL/min/1.73m² (+14.2% increase)",
      "Serum 25-OH Vitamin D normalized from 22 ng/mL (insufficient) to 48 ng/mL (optimal) after 2,000 IU daily therapy",
    ],
    metrics: [
      { label: "LDL Cholesterol", value: "112 mg/dL", change: "-26 mg/dL", trend: "down" },
      { label: "Vitamin D (25-OH)", value: "48 ng/mL", change: "+26 ng/mL", trend: "up" },
      { label: "eGFR Filtration", value: "96 mL/min", change: "+12 mL/min", trend: "up" },
    ],
    citations: [
      { docName: "Lipid & Liver Function Profile.pdf", date: "Oct 18, 2024", provider: "Quest Diagnostics", page: "p. 2" },
      { docName: "Annual Health Screening Panel.pdf", date: "Nov 04, 2023", provider: "Northwest Health Labs", page: "p. 1" },
    ],
  },
  last_recommendations: {
    id: "last_recommendations",
    question: "What did my doctor recommend at my last visit?",
    category: "Encounter Care Plan",
    dateRange: "August 22, 2024 Consultation",
    summary:
      "During your August 22, 2024 check-up with Dr. Sarah Jenkins (Internal Medicine), four specific directives were recorded in your after-visit clinical care plan regarding blood pressure monitoring, exercise, and preventative follow-ups.",
    keyInsights: [
      "1. Continue Lisinopril 10mg daily each morning; log blood pressure twice weekly in DrGodly vault",
      "2. Maintain 2,000 IU daily Vitamin D3 with meal through winter months",
      "3. Goal: 30 minutes of brisk aerobic walking 4 days per week",
      "4. Schedule routine 6-month repeat lipid check in February 2025",
    ],
    metrics: [
      { label: "Care Directives", value: "4 Items", change: "All Active", trend: "neutral" },
      { label: "Next Lab Due", value: "Feb 2025", change: "In 5 months", trend: "neutral" },
      { label: "Physician Review", value: "Dr. S. Jenkins", change: "Board-Certified", trend: "neutral" },
    ],
    citations: [
      { docName: "Clinical Encounter SOAP Note.pdf", date: "Aug 22, 2024", provider: "Dr. Sarah Jenkins, MD", page: "p. 4" },
      { docName: "Patient Discharge & Care Directives.pdf", date: "Aug 22, 2024", provider: "Summit Health Primary Care", page: "p. 1" },
    ],
  },
};

export const PatientConversationalSearchSection: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionId>("bp_meds");
  const current = QUESTIONS_DATA[selectedQuestion];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Badge variant="vital" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Conversational Health Search
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Ask your medical history anything.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Forget digging through dense PDFs and deciphering medical acronyms. Ask natural questions and receive accurate, cited answers backed by your exact clinical records.
          </p>
        </div>

        {/* 4 Clickable Interactive Questions Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          {(Object.keys(QUESTIONS_DATA) as QuestionId[]).map((qId) => {
            const item = QUESTIONS_DATA[qId];
            const isSelected = selectedQuestion === qId;
            return (
              <button
                key={qId}
                onClick={() => setSelectedQuestion(qId)}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isSelected
                    ? "bg-vital-50/80 border-vital-500 shadow-clinical-md ring-1 ring-vital-400"
                    : "bg-clinical-50/50 border-clinical-200 hover:bg-white hover:border-clinical-300 hover:shadow-clinical-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-semibold tracking-wide uppercase ${
                    isSelected ? "text-vital-700" : "text-clinical-500"
                  }`}>
                    {item.category.split("/")[0]}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-vital-500 animate-pulse" : "bg-clinical-300"}`} />
                </div>
                <p className={`text-sm font-semibold leading-snug line-clamp-2 ${
                  isSelected ? "text-vital-950 font-bold" : "text-clinical-800 group-hover:text-clinical-950"
                }`}>
                  &ldquo;{item.question}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-vital-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore answer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Query & Response Terminal Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/40 p-6 sm:p-8 shadow-clinical-lg">
          {/* Simulated Search Bar */}
          <div className="rounded-2xl border border-clinical-200 bg-white p-4 sm:p-5 shadow-clinical-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-vital-50 flex items-center justify-center text-vital-600 shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-medium text-clinical-400 block uppercase tracking-wider">
                Natural Language Health Query
              </span>
              <p className="text-base sm:text-lg font-semibold text-clinical-950 truncate">
                {current.question}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-vital-50 border border-vital-200 text-xs font-medium text-vital-700 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-vital-500" />
              <span>AI Synthesized & Cited</span>
            </div>
          </div>

          {/* Response Container */}
          <div className="mt-6 rounded-2xl border border-clinical-200 bg-white p-6 sm:p-8 space-y-6">
            {/* Top metadata row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-clinical-100 text-xs text-clinical-500">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-clinical-100 font-semibold text-clinical-700">
                  {current.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-clinical-400" />
                  {current.dateRange}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>3 Clinical Documents Cross-Referenced</span>
              </div>
            </div>

            {/* Answer Synthesis */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-vital-600">
                DrGodly Synthesized Answer
              </h3>
              <p className="text-base sm:text-lg text-clinical-900 leading-relaxed font-normal">
                {current.summary}
              </p>
            </div>

            {/* Key Insights bullets */}
            <div className="p-4 rounded-xl bg-clinical-50/70 border border-clinical-200/80 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-700 flex items-center gap-1.5">
                <ClipboardList className="w-3.5 h-3.5 text-vital-600" />
                Key Record Highlights
              </span>
              <ul className="space-y-2">
                {current.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-clinical-700">
                    <CheckCircle2 className="w-4 h-4 text-vital-500 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics cards if available */}
            {current.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-clinical-200 bg-clinical-50/40 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-clinical-500 block">{m.label}</span>
                      <span className="text-base font-bold text-clinical-950">{m.value}</span>
                    </div>
                    {m.change && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 ${
                        m.trend === "down"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : m.trend === "up"
                          ? "bg-sky-50 text-sky-700 border border-sky-200"
                          : "bg-clinical-100 text-clinical-700"
                      }`}>
                        {m.trend === "down" && <TrendingDown className="w-3 h-3" />}
                        {m.trend === "up" && <TrendingUp className="w-3 h-3" />}
                        {m.change}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Citations Footer */}
            <div className="pt-4 border-t border-clinical-100">
              <span className="text-xs font-semibold text-clinical-500 uppercase tracking-wider block mb-3">
                Cited Source Documents
              </span>
              <div className="flex flex-wrap gap-2.5">
                {current.citations.map((cite, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-clinical-200 bg-clinical-50 hover:bg-white transition-colors text-xs text-clinical-700 shadow-clinical-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                    <span className="font-semibold text-clinical-900">{cite.docName}</span>
                    <span className="text-clinical-400">•</span>
                    <span className="text-clinical-500">{cite.provider}</span>
                    <span className="px-1.5 py-0.5 rounded bg-clinical-200/60 font-mono text-[10px] text-clinical-600">
                      {cite.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
