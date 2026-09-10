"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Image as ImageIcon
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface UploadedDoc {
  id: string;
  name: string;
  size: string;
  type: string;
  status: "extracted" | "processing";
  extractedCount: number;
  tags: string[];
  findings: { label: string; value: string; status: "normal" | "optimal" | "flagged" }[];
}

const DEMO_DOCS: UploadedDoc[] = [
  {
    id: "doc-1",
    name: "Metabolic_Panel_Oct2024.pdf",
    size: "1.4 MB",
    type: "Lab Report (PDF)",
    status: "extracted",
    extractedCount: 14,
    tags: ["Comprehensive Metabolic", "LabCorp", "Routine"],
    findings: [
      { label: "HbA1c Glycemic Index", value: "5.6%", status: "optimal" },
      { label: "Fasting Blood Glucose", value: "92 mg/dL", status: "normal" },
      { label: "eGFR (Kidney Filtration)", value: "96 mL/min", status: "optimal" },
      { label: "Serum Creatinine", value: "0.88 mg/dL", status: "normal" },
    ],
  },
  {
    id: "doc-2",
    name: "Cardiology_Prescription.jpg",
    size: "2.8 MB",
    type: "Camera Scan / Rx",
    status: "extracted",
    extractedCount: 6,
    tags: ["Prescription", "Dr. Vance", "Cardiology"],
    findings: [
      { label: "Prescribed Drug", value: "Lisinopril 10mg", status: "normal" },
      { label: "Daily Frequency", value: "1x PO Daily (AM)", status: "normal" },
      { label: "Refills Remaining", value: "3 Refills", status: "normal" },
      { label: "Diagnosis Code", value: "I10 Essential HTN", status: "normal" },
    ],
  },
  {
    id: "doc-3",
    name: "Discharge_Summary_2023.pdf",
    size: "3.1 MB",
    type: "Hospital Record",
    status: "extracted",
    extractedCount: 19,
    tags: ["Inpatient Note", "General Surgery", "Clearance"],
    findings: [
      { label: "Primary Procedure", value: "Lap Appendectomy", status: "normal" },
      { label: "Allergy Flagged", value: "Amoxicillin (Urticaria)", status: "flagged" },
      { label: "Post-Op Course", value: "Uncomplicated", status: "optimal" },
      { label: "Discharge Status", value: "Full Recovery", status: "optimal" },
    ],
  },
];

interface PatientRecordUploadShowcaseProps {
  onOpenHealthProfile?: () => void;
}

export const PatientRecordUploadShowcase: React.FC<PatientRecordUploadShowcaseProps> = ({
  onOpenHealthProfile,
}) => {
  const [selectedDoc, setSelectedDoc] = useState<UploadedDoc>(DEMO_DOCS[0]);

  return (
    <section className="py-24 bg-clinical-50/60 border-t border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="clinical" icon={<UploadCloud className="w-3.5 h-3.5 text-vital-600" />}>
            Intelligent Document Ingestion
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Turn scattered medical documents into usable health context.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Drop in PDF lab reports, photos of prescriptions, discharge summaries, or vaccine cards. DrGodly reads through messy paperwork, extracts every critical biomarker, and builds your searchable timeline.
          </p>
        </div>

        {/* Interactive Ingestion Mockup */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Upload Zone & Document List (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Drag and Drop Box */}
            <div className="p-6 rounded-3xl border-2 border-dashed border-vital-300 bg-vital-50/40 text-center hover:bg-vital-50/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-vital-100 text-vital-700 flex items-center justify-center mx-auto mb-3 shadow-clinical-xs">
                <UploadCloud className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-clinical-950">
                Drag and drop your medical files
              </h4>
              <p className="text-xs text-clinical-500 mt-1">
                PDF, JPG, PNG, HEIC up to 50MB per file • 256-Bit Encrypted
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-vital-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Clinical OCR & Entity Extraction</span>
              </div>
            </div>

            {/* Document Cards */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-500 block px-1">
                Processed Records (Click to inspect extraction)
              </span>
              {DEMO_DOCS.map((doc) => {
                const isSelected = selectedDoc.id === doc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-white border-vital-500 shadow-clinical-sm ring-1 ring-vital-400"
                        : "bg-white/80 border-clinical-200 hover:border-clinical-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        doc.type.includes("JPG") ? "bg-amber-50 text-amber-600" : "bg-vital-50 text-vital-600"
                      }`}>
                        {doc.type.includes("JPG") ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs sm:text-sm font-bold text-clinical-950 truncate">
                          {doc.name}
                        </h5>
                        <p className="text-[11px] text-clinical-500 flex items-center gap-2">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.type}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {doc.extractedCount} values
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Real-Time Parsed Data Inspector (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl border border-clinical-200 bg-white p-6 sm:p-7 shadow-clinical-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-clinical-100 mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-vital-600 block">
                    Structured Clinical Extraction
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-clinical-950 truncate max-w-[260px] sm:max-w-none">
                    {selectedDoc.name}
                  </h4>
                </div>
                <Badge variant="clinical" className="text-[10px]">
                  Verified Entity Mapping
                </Badge>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedDoc.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-clinical-100 text-[11px] font-medium text-clinical-700 font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Extracted Values Table */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-500 block">
                  Extracted Biomarkers & Directives
                </span>
                {selectedDoc.findings.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-clinical-50 border border-clinical-150 flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-clinical-700">{f.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-clinical-950 font-mono">{f.value}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        f.status === "optimal"
                          ? "bg-emerald-100 text-emerald-800"
                          : f.status === "flagged"
                          ? "bg-rose-100 text-rose-800"
                          : "bg-vital-100 text-vital-800"
                      }`}>
                        {f.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingestion reassurance footer */}
            <div className="mt-6 pt-4 border-t border-clinical-100 space-y-3">
              <div className="flex items-center gap-2 text-xs text-clinical-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero model training on your uploaded records</span>
              </div>
              <Button
                variant="vital"
                size="sm"
                onClick={onOpenHealthProfile}
                className="w-full text-xs"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Upload Your Medical Records
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
