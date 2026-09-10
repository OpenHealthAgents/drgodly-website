"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  Cpu,
  CheckCircle2,
  FileCheck2,
  Database,
  ArrowRight,
  ShieldCheck,
  FileText,
  Sparkles,
  Check,
  RefreshCw,
  Eye
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { analytics } from "@/lib/analytics";

type UploadStep = "upload" | "extract" | "review" | "confirm" | "complete";

export const SimulatedRecordUpload: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<UploadStep>("upload");

  const steps: { id: UploadStep; label: string; stepNum: string; icon: React.ReactNode }[] = [
    { id: "upload", label: "Upload", stepNum: "01", icon: <UploadCloud className="w-4 h-4" /> },
    { id: "extract", label: "Extract", stepNum: "02", icon: <Cpu className="w-4 h-4" /> },
    { id: "review", label: "Review", stepNum: "03", icon: <Eye className="w-4 h-4" /> },
    { id: "confirm", label: "Confirm", stepNum: "04", icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: "complete", label: "Add to Profile", stepNum: "05", icon: <Database className="w-4 h-4" /> },
  ];

  const extractedItems = [
    { test: "Glycated Hemoglobin (HbA1c)", value: "5.6%", refRange: "< 5.7%", status: "Optimal", confidence: "99.8%" },
    { test: "Fasting Plasma Glucose", value: "92 mg/dL", refRange: "70 - 99 mg/dL", status: "Normal", confidence: "99.4%" },
    { test: "Estimated GFR (CKD-EPI)", value: "96 mL/min", refRange: "> 60 mL/min", status: "Optimal", confidence: "99.1%" },
    { test: "Serum Creatinine", value: "0.88 mg/dL", refRange: "0.50 - 1.10 mg/dL", status: "Normal", confidence: "99.6%" },
    { test: "Total Cholesterol", value: "184 mg/dL", refRange: "< 200 mg/dL", status: "Normal", confidence: "98.9%" },
  ];

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Top Title & Step Indicator */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono text-vital-400 uppercase tracking-wider block mb-1">
              Automated Document Pipeline
            </span>
            <h3 className="text-xl font-bold font-serif text-white">
              Medical Record Ingestion Engine
            </h3>
            <p className="text-xs text-clinical-400 mt-0.5">
              Target Profile: Maya K. (MRN: DG-94820-24) • FHIR Resource Generator
            </p>
          </div>

          <Badge variant="clinical" className="bg-white/10 text-vital-300 border-white/20 text-xs self-start sm:self-auto">
            Zero Training Guarantee
          </Badge>
        </div>

        {/* 5-Step Pipeline Breadcrumb */}
        <div className="mt-6 grid grid-cols-5 gap-2 pt-4 border-t border-white/10 text-center text-xs">
          {steps.map((s, idx) => {
            const stepOrder: UploadStep[] = ["upload", "extract", "review", "confirm", "complete"];
            const currentIdx = stepOrder.indexOf(currentStep);
            const isDone = currentIdx > idx;
            const isCurrent = currentStep === s.id;

            return (
              <button
                key={s.id}
                onClick={() => setCurrentStep(s.id)}
                className={`p-2.5 rounded-xl transition-all flex flex-col items-center justify-center gap-1.5 ${
                  isCurrent
                    ? "bg-vital-600 text-white font-bold shadow-clinical-xs"
                    : isDone
                    ? "bg-white/10 text-vital-300 font-semibold hover:bg-white/15"
                    : "bg-white/5 text-clinical-400 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-1 text-[10px] font-mono">
                  {isDone ? <Check className="w-3 h-3 text-emerald-400" /> : <span>{s.stepNum}</span>}
                </div>
                <span className="text-[11px] sm:text-xs truncate max-w-[80px] sm:max-w-none">
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Step Content Area */}
      <div className="p-6 sm:p-8 min-h-[440px] bg-clinical-50/30 flex flex-col justify-between">
        {/* STEP 1: UPLOAD */}
        {currentStep === "upload" && (
          <div className="space-y-6 my-auto">
            <div className="p-8 sm:p-12 rounded-3xl border-2 border-dashed border-vital-300 bg-white text-center hover:bg-vital-50/30 transition-all max-w-2xl mx-auto shadow-clinical-xs">
              <div className="w-16 h-16 rounded-2xl bg-vital-50 border border-vital-200 text-vital-600 flex items-center justify-center mx-auto mb-4 shadow-clinical-sm">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-clinical-950">
                Drop your lab reports, prescriptions, or clinical summaries
              </h4>
              <p className="text-xs text-clinical-500 mt-2 max-w-md mx-auto leading-relaxed">
                Supports PDF, JPG, PNG scans, and camera phone captures up to 50MB. All files are encrypted before processing.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="vital"
                  size="md"
                  onClick={() => {
                    analytics.trackUploadStarted(1);
                    setCurrentStep("extract");
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Select Sample: LabCorp_Oct2024.pdf
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-clinical-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                256-Bit TLS & At-Rest Encryption
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-vital-600" />
                99.4% Entity Recognition Accuracy
              </span>
            </div>
          </div>
        )}

        {/* STEP 2: EXTRACT */}
        {currentStep === "extract" && (
          <div className="space-y-6 max-w-3xl mx-auto my-auto w-full">
            <div className="p-6 rounded-3xl border border-clinical-200 bg-white shadow-clinical-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-clinical-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-vital-100 text-vital-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-clinical-950">LabCorp_Metabolic_Panel_Oct2024.pdf</h4>
                    <p className="text-[11px] text-clinical-500">2.1 MB • 2 Pages • Optical Character Recognition (OCR)</p>
                  </div>
                </div>
                <Badge variant="vital" className="text-[10px]">
                  Extracting Entities...
                </Badge>
              </div>

              {/* Progress animation simulation */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-clinical-700">
                  <span>Parsing Table Structure & Reference Ranges</span>
                  <span className="font-mono text-vital-700">85% Complete</span>
                </div>
                <div className="w-full h-2.5 bg-clinical-100 rounded-full overflow-hidden">
                  <div className="h-full bg-vital-600 rounded-full w-[85%] animate-pulse" />
                </div>
              </div>

              {/* Live parser log lines */}
              <div className="p-4 rounded-xl bg-clinical-950 text-clinical-300 font-mono text-xs space-y-1.5">
                <p className="text-emerald-400">✓ Page 1 parsed: Patient name matching &ldquo;Maya K.&rdquo; (DOB: 1986-04-12)</p>
                <p className="text-emerald-400">✓ Detected 14 laboratory analytes with LOINC terminology codes</p>
                <p className="text-vital-400">⚡ Extracting HbA1c value: 5.6% (Reference Range: &lt; 5.7%)</p>
                <p className="text-vital-400">⚡ Extracting eGFR value: 96 mL/min/1.73m² (Normal renal filtration)</p>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  variant="vital"
                  size="sm"
                  onClick={() => setCurrentStep("review")}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Proceed to Review
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW */}
        {currentStep === "review" && (
          <div className="space-y-6 max-w-4xl mx-auto w-full">
            <div className="rounded-2xl border border-clinical-200 bg-white p-6 shadow-clinical-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-clinical-100">
                <div>
                  <h4 className="text-sm font-bold text-clinical-950">
                    Review Extracted Biomarkers
                  </h4>
                  <p className="text-xs text-clinical-500">
                    Inspect each extracted test value before writing to your medical record.
                  </p>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  5 Items Ready for Approval
                </span>
              </div>

              {/* Table of extracted values */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-clinical-200 text-clinical-500 uppercase text-[10px] font-bold">
                      <th className="py-2.5 px-3">Analyte / Biomarker</th>
                      <th className="py-2.5 px-3">Extracted Result</th>
                      <th className="py-2.5 px-3">Reference Range</th>
                      <th className="py-2.5 px-3">Interpretation</th>
                      <th className="py-2.5 px-3 text-right">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clinical-100">
                    {extractedItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-clinical-50/60 transition-colors">
                        <td className="py-3 px-3 font-semibold text-clinical-950">{item.test}</td>
                        <td className="py-3 px-3 font-mono font-bold text-vital-700">{item.value}</td>
                        <td className="py-3 px-3 font-mono text-clinical-500">{item.refRange}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            item.status === "Optimal"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-vital-100 text-vital-800"
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-mono text-right text-emerald-600 font-semibold">
                          {item.confidence}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-4 border-t border-clinical-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep("upload")}
                  className="text-xs text-clinical-500 hover:text-clinical-700 font-medium"
                >
                  Cancel & Re-Upload
                </button>
                <Button
                  variant="vital"
                  size="sm"
                  onClick={() => setCurrentStep("confirm")}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Verify & Confirm Data
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRM */}
        {currentStep === "confirm" && (
          <div className="space-y-6 max-w-2xl mx-auto my-auto w-full">
            <div className="p-8 rounded-3xl border border-clinical-200 bg-white shadow-clinical-md text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-vital-100 text-vital-700 flex items-center justify-center mx-auto shadow-clinical-xs">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-clinical-950">
                  Confirm Ingestion to Maya K.&apos;s Profile
                </h4>
                <p className="text-xs text-clinical-600 mt-1 max-w-md mx-auto leading-relaxed">
                  These 5 laboratory values will be appended to your longitudinal health graph and formatted into FHIR Observation resources.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-clinical-500">Source Document:</span>
                  <span className="font-semibold text-clinical-950">LabCorp_Metabolic_Oct2024.pdf</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-clinical-500">Document Date:</span>
                  <span className="font-semibold text-clinical-950">October 18, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-clinical-500">Diagnostic Facility:</span>
                  <span className="font-semibold text-clinical-950">LabCorp San Francisco Diagnostic Center</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-clinical-500">Ordering Physician:</span>
                  <span className="font-semibold text-vital-700">Dr. Sarah Jenkins, MD</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentStep("review")}
                  className="w-full sm:w-auto text-xs"
                >
                  Back to Review
                </Button>
                <Button
                  variant="vital"
                  size="md"
                  onClick={() => {
                    analytics.trackUploadCompleted(1);
                    setCurrentStep("complete");
                  }}
                  icon={<CheckCircle2 className="w-4 h-4" />}
                  className="w-full sm:w-auto text-xs"
                >
                  Commit to Health Profile
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: ADD TO PROFILE (COMPLETE) */}
        {currentStep === "complete" && (
          <div className="space-y-6 max-w-2xl mx-auto my-auto w-full text-center">
            <div className="p-8 sm:p-10 rounded-3xl border border-emerald-300 bg-emerald-50/40 shadow-clinical-md space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-clinical-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-800 uppercase font-bold tracking-wider block">
                  Ingestion Complete
                </span>
                <h4 className="text-xl font-bold font-serif text-clinical-950 mt-1">
                  Added to Maya K.&apos;s Living Health Profile
                </h4>
                <p className="text-xs text-clinical-600 mt-2 max-w-md mx-auto leading-relaxed">
                  5 biomarkers have been permanently committed to your encrypted record. Your next telemedicine consultation with Dr. Vance will automatically reference these findings.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="vital"
                  size="sm"
                  onClick={() => setCurrentStep("upload")}
                  icon={<RefreshCw className="w-3.5 h-3.5" />}
                  className="text-xs"
                >
                  Upload Another Document
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
