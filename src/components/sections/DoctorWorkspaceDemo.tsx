"use client";

import React, { useState } from "react";
import { 
  Stethoscope, 
  FileText, 
  BrainCircuit, 
  Search, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldAlert,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { DOCTOR_WORKSPACE_DEMO } from "@/data/clinicalData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface DoctorWorkspaceDemoProps {
  onOpenDoctorDemo?: () => void;
}

export const DoctorWorkspaceDemo: React.FC<DoctorWorkspaceDemoProps> = ({
  onOpenDoctorDemo,
}) => {
  const [activeTab, setActiveTab] = useState<"previsit" | "cds" | "soap" | "emr">("previsit");
  const [copied, setCopied] = useState(false);
  const [activeEmrQuery, setActiveEmrQuery] = useState(0);

  const demo = DOCTOR_WORKSPACE_DEMO;

  const handleCopySoap = () => {
    const text = `SUBJECTIVE:\n${demo.soapNote.subjective}\n\nOBJECTIVE:\n${demo.soapNote.objective}\n\nASSESSMENT:\n${demo.soapNote.assessment}\n\nPLAN:\n${demo.soapNote.plan}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="doctor-demo" className="py-24 bg-clinical-50/70 relative border-t border-clinical-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Badge variant="clinical" icon={<Stethoscope className="w-3.5 h-3.5 text-vital-400" />}>
            For Physicians & Clinical Teams
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            The Clinical Command Center Built for{" "}
            <span className="text-vital-700">Zero Documentation Burnout</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Experience how DrGodly eliminates 2.5 hours of daily charting. Review concise pre-visit briefings, access cited decision support, and export compliant SOAP notes in seconds.
          </p>
        </div>

        {/* Workspace Shell */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-300/80 bg-white shadow-xl overflow-hidden">
          {/* Top Patient Bar */}
          <div className="bg-clinical-900 text-white p-4 sm:px-6 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-clinical-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-vital-600/20 border border-vital-400/30 flex items-center justify-center text-vital-400 font-bold text-sm">
                ER
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-base">
                    {demo.patient.name}
                  </span>
                  <span className="text-xs text-clinical-400 font-mono">
                    {demo.patient.mrn}
                  </span>
                  <span className="text-[11px] bg-vital-500/20 text-vital-300 px-2 py-0.5 rounded font-medium border border-vital-500/30">
                    {demo.patient.status}
                  </span>
                </div>
                <div className="text-xs text-clinical-300 mt-0.5">
                  {demo.patient.age}y {demo.patient.gender} • {demo.patient.primaryInsurance} • {demo.patient.visitType}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <div className="text-xs text-clinical-300 flex items-center gap-1.5 bg-clinical-800 px-3 py-1.5 rounded-lg border border-clinical-700">
                <Clock className="w-3.5 h-3.5 text-vital-400" />
                <span>Visit: <strong>{demo.patient.time}</strong></span>
              </div>
              <Button
                variant="vital"
                size="sm"
                onClick={onOpenDoctorDemo}
                className="text-xs py-1.5 px-3"
              >
                Join Video Call
              </Button>
            </div>
          </div>

          {/* Clinical Tabs Bar */}
          <div className="bg-clinical-100/80 border-b border-clinical-200 px-4 sm:px-6 flex overflow-x-auto gap-2 py-2.5">
            <button
              onClick={() => setActiveTab("previsit")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5",
                activeTab === "previsit"
                  ? "bg-white text-clinical-950 shadow-sm border border-clinical-200"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <FileText className="w-3.5 h-3.5 text-vital-600" />
              1. Pre-Visit Briefing (60s)
            </button>

            <button
              onClick={() => setActiveTab("cds")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5",
                activeTab === "cds"
                  ? "bg-white text-clinical-950 shadow-sm border border-clinical-200"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <BrainCircuit className="w-3.5 h-3.5 text-intel-600" />
              2. Decision Support (CDS)
            </button>

            <button
              onClick={() => setActiveTab("soap")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5",
                activeTab === "soap"
                  ? "bg-white text-clinical-950 shadow-sm border border-clinical-200"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              3. Automated SOAP Note
            </button>

            <button
              onClick={() => setActiveTab("emr")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5",
                activeTab === "emr"
                  ? "bg-white text-clinical-950 shadow-sm border border-clinical-200"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <Search className="w-3.5 h-3.5 text-clinical-700" />
              4. Conversational EMR Search
            </button>
          </div>

          {/* Workspace Body */}
          <div className="p-6 sm:p-8">
            {/* TAB 1: PRE-VISIT BRIEFING */}
            {activeTab === "previsit" && (
              <div className="space-y-6 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-clinical-500">
                    AI Clinical Intake Synthesis • Generated at 10:26 AM
                  </div>
                  <Badge variant="vital">Chart-Ready</Badge>
                </div>

                {/* Chief Complaint */}
                <div className="p-4 rounded-xl bg-vital-50/60 border border-vital-200">
                  <span className="text-xs font-bold text-vital-900 uppercase tracking-wide block mb-1">
                    Chief Complaint & Reason for Visit
                  </span>
                  <p className="text-sm font-semibold text-clinical-900">
                    {demo.preVisitSummary.chiefComplaint}
                  </p>
                </div>

                {/* Chronological HPI */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-clinical-700 uppercase tracking-wide block">
                    Structured HPI Timeline
                  </span>
                  <div className="space-y-2">
                    {demo.preVisitSummary.hpiTimeline.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-clinical-50 border border-clinical-200 text-xs text-clinical-800 flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-clinical-200 text-clinical-700 flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pertinent Positives & Negatives */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-clinical-200 shadow-sm space-y-1">
                    <span className="font-bold text-clinical-900">Active Regimen & Vitals</span>
                    <p className="text-clinical-600">{demo.preVisitSummary.pertinentHistory.medications}</p>
                    <p className="text-clinical-600 pt-1 font-mono">{demo.preVisitSummary.pertinentHistory.pastLabs}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
                    <span className="font-bold text-amber-900 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      Intake Triage Guardrail
                    </span>
                    <p className="text-amber-900/90 leading-relaxed">
                      {demo.preVisitSummary.intakeRedFlags}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CLINICAL DECISION SUPPORT */}
            {activeTab === "cds" && (
              <div className="space-y-6 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-clinical-950">
                      Ranked Differential Diagnoses & Evidence Rationale
                    </h3>
                    <p className="text-xs text-clinical-500">
                      Cross-referenced against patient medical history, pharmacology, and 2024 AHA/ACC guidelines.
                    </p>
                  </div>
                  <Badge variant="intel">Physician Review Required</Badge>
                </div>

                <div className="space-y-3">
                  {demo.clinicalDecisionSupport.map((cds, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-clinical-200 shadow-sm hover:border-intel-400 transition-all space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-intel-100 text-intel-800 font-mono text-xs font-bold">
                            {cds.confidence} Match
                          </span>
                          <span className="font-bold text-clinical-900 text-sm">
                            {cds.diagnosis}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 self-start sm:self-auto">
                          {cds.urgency}
                        </span>
                      </div>

                      <p className="text-xs text-clinical-700 leading-relaxed">
                        <strong className="text-clinical-900">Clinical Rationale: </strong>
                        {cds.rationale}
                      </p>

                      <div className="flex items-center gap-1 text-[11px] text-intel-700 bg-intel-50/70 p-2 rounded-lg border border-intel-100">
                        <ExternalLink className="w-3 h-3 shrink-0" />
                        <span><strong>Guideline Citation: </strong>{cds.guidelineCitation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: AUTOMATED SOAP NOTE */}
            {activeTab === "soap" && (
              <div className="space-y-5 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-clinical-950">
                      AI-Generated SOAP Note (Consultation Ready)
                    </h3>
                    <p className="text-xs text-clinical-500">
                      Generated from ambient consultation listening and structured pre-intake.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopySoap}
                    icon={copied ? <Check className="w-3.5 h-3.5 text-vital-600" /> : <Copy className="w-3.5 h-3.5" />}
                    className="text-xs"
                  >
                    {copied ? "Copied to Clipboard!" : "Copy SOAP Note"}
                  </Button>
                </div>

                <div className="p-5 rounded-2xl bg-clinical-900 text-clinical-100 font-mono text-xs leading-relaxed space-y-4 shadow-inner">
                  <div>
                    <span className="text-vital-400 font-bold block mb-1">SUBJECTIVE:</span>
                    <p className="text-clinical-300 font-sans text-xs">{demo.soapNote.subjective}</p>
                  </div>
                  <div>
                    <span className="text-vital-400 font-bold block mb-1">OBJECTIVE:</span>
                    <p className="text-clinical-300 font-sans text-xs">{demo.soapNote.objective}</p>
                  </div>
                  <div>
                    <span className="text-vital-400 font-bold block mb-1">ASSESSMENT:</span>
                    <p className="text-clinical-300 font-sans text-xs whitespace-pre-line">{demo.soapNote.assessment}</p>
                  </div>
                  <div>
                    <span className="text-vital-400 font-bold block mb-1">PLAN:</span>
                    <p className="text-clinical-300 font-sans text-xs whitespace-pre-line">{demo.soapNote.plan}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-clinical-500">
                  <span>Push directly to Epic, Cerner, or AthenaHealth via FHIR bridge.</span>
                  <span className="text-vital-700 font-semibold">ICD-10 & CPT Verified</span>
                </div>
              </div>
            )}

            {/* TAB 4: CONVERSATIONAL EMR SEARCH */}
            {activeTab === "emr" && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <h3 className="text-base font-bold text-clinical-950">
                    Conversational EMR Search
                  </h3>
                  <p className="text-xs text-clinical-500">
                    Query 5 years of scanned charts, external PDFs, and lab panels in natural language.
                  </p>
                </div>

                {/* Sample query buttons */}
                <div className="flex flex-wrap gap-2">
                  {demo.emrSearchSamples.map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveEmrQuery(idx)}
                      className={cn(
                        "text-xs px-3 py-1.5 rounded-lg border transition-all text-left",
                        activeEmrQuery === idx
                          ? "bg-clinical-900 text-white border-clinical-900 shadow-sm"
                          : "bg-white text-clinical-700 border-clinical-200 hover:bg-clinical-50"
                      )}
                    >
                      &ldquo;{sample.query}&rdquo;
                    </button>
                  ))}
                </div>

                {/* Search result display */}
                <div className="p-5 rounded-2xl bg-clinical-50 border border-clinical-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-clinical-900">
                    <Search className="w-4 h-4 text-vital-600" />
                    Query: &ldquo;{demo.emrSearchSamples[activeEmrQuery].query}&rdquo;
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-clinical-200 text-xs text-clinical-800 leading-relaxed font-sans shadow-sm">
                    {demo.emrSearchSamples[activeEmrQuery].result}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-clinical-500">
                    <span>Source: Quest Diagnostics (2022-2023) + St. Jude Hospital discharge summary</span>
                    <span className="text-vital-700 font-medium">Confidence: 99.8%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Doctor CTA Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-clinical-600 mb-4">
            Are you a physician or medical director tired of spending nights charting?
          </p>
          <Button
            variant="vital"
            size="md"
            onClick={onOpenDoctorDemo}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule a 15-Minute Clinical Walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
};
