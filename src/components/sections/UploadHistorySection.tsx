"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  CheckCircle2,
  Lock,
  Sparkles,
  AlertCircle,
  Clock,
  Pill,
  Activity,
  FileCheck2,
  Calendar,
  HeartPulse,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type ProfileTab =
  | "conditions"
  | "medications"
  | "allergies"
  | "investigations"
  | "procedures"
  | "encounters"
  | "timeline";

interface UploadHistorySectionProps {
  onBuildProfile?: () => void;
}

export const UploadHistorySection: React.FC<UploadHistorySectionProps> = ({
  onBuildProfile,
}) => {
  // Demo Mode: 'quick' (Without Health History) vs 'personalized' (With Health History)
  const [demoMode, setDemoMode] = useState<"quick" | "personalized">("personalized");

  // Simulated Upload State
  const [uploadStep, setUploadStep] = useState<
    "idle" | "uploading" | "extracting" | "organizing" | "finding" | "ready"
  >("idle");

  const [activeProfileTab, setActiveProfileTab] = useState<ProfileTab>("conditions");

  const handleSimulateUpload = () => {
    setUploadStep("uploading");
    setTimeout(() => {
      setUploadStep("extracting");
      setTimeout(() => {
        setUploadStep("organizing");
        setTimeout(() => {
          setUploadStep("finding");
          setTimeout(() => {
            setUploadStep("ready");
          }, 700);
        }, 800);
      }, 900);
    }, 800);
  };

  const handleResetUpload = () => {
    setUploadStep("idle");
  };

  return (
    <section className="py-24 bg-clinical-50/70 border-t border-b border-clinical-200 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-vital-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-intel-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Contextual Clinical Intelligence</Badge>

          {/* Exact Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-clinical-950 font-serif leading-tight">
            The more context DrGodly has, the more useful it can be.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            When you experience a new symptom, your body isn&apos;t starting from scratch. Past labs, prior medications, and previous diagnoses provide the vital clues doctors look for.
          </p>

          {/* Empowering Non-Coercive Reassurance */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-clinical-200 text-xs font-semibold text-clinical-800 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-vital-600" />
            <span>&ldquo;You decide what DrGodly knows.&rdquo;</span>
          </div>
        </div>

        {/* PART 1: INTERACTIVE DEMO (TOGGLE & SIDE-BY-SIDE EXPERIENCE) */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Toggle Control */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-clinical-200 shadow-clinical-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-clinical-800 px-3">
              <Sparkles className="w-4 h-4 text-vital-600" />
              <span>Interactive Context Simulation:</span>
            </div>

            <div className="flex items-center gap-1.5 bg-clinical-100 p-1.5 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setDemoMode("quick")}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  demoMode === "quick"
                    ? "bg-white text-clinical-950 shadow-xs"
                    : "text-clinical-600 hover:text-clinical-900"
                }`}
              >
                Quick Answer
              </button>

              <button
                onClick={() => setDemoMode("personalized")}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  demoMode === "personalized"
                    ? "bg-vital-600 text-white shadow-xs"
                    : "text-clinical-600 hover:text-clinical-900"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Personalized with My History
              </button>
            </div>
          </div>

          {/* Dual Experience Side-by-Side Comparison Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Column 1: WITHOUT HEALTH HISTORY */}
            <div
              className={`rounded-3xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                demoMode === "quick"
                  ? "bg-white border-clinical-400 shadow-clinical-md ring-2 ring-clinical-900/5"
                  : "bg-white/70 border-clinical-200 opacity-80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                    Without Health History
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-clinical-100 text-clinical-700 text-xs font-semibold border border-clinical-200">
                    Limited context
                  </span>
                </div>

                {/* Patient Prompt */}
                <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200 mb-6">
                  <span className="text-[11px] font-bold text-clinical-400 uppercase tracking-wider block mb-1">
                    Patient says:
                  </span>
                  <p className="text-base font-semibold text-clinical-950 font-serif italic">
                    &ldquo;I&apos;ve been feeling tired.&rdquo;
                  </p>
                </div>

                {/* System capability description */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold text-clinical-800 block">
                    What DrGodly can do:
                  </span>
                  <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed">
                    DrGodly can ask questions and provide general context, but must start from zero with standard triage questions.
                  </p>
                </div>

                {/* Simulated General Dialogue */}
                <div className="p-4 rounded-2xl bg-clinical-50/60 border border-clinical-200/80 space-y-2 text-xs">
                  <div className="font-semibold text-clinical-900 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-clinical-500" />
                    <span>General Follow-up Inquiries</span>
                  </div>
                  <ul className="space-y-1.5 text-clinical-600 pl-4 list-disc">
                    <li>How long have you been feeling fatigued?</li>
                    <li>Are you getting at least 7–8 hours of sleep?</li>
                    <li>Have you started any new medications recently?</li>
                    <li>Do you have any known medical conditions?</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-clinical-100 text-xs text-clinical-500 flex items-center justify-between">
                <span>Isolated consultation</span>
                <span className="font-semibold text-clinical-700">Baseline triage only</span>
              </div>
            </div>

            {/* Column 2: WITH HEALTH HISTORY */}
            <div
              className={`rounded-3xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                demoMode === "personalized"
                  ? "bg-white border-vital-500 shadow-xl ring-2 ring-vital-500/15"
                  : "bg-white/70 border-clinical-200 opacity-80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-vital-700 font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-vital-600" />
                    With Health History
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-vital-50 text-vital-800 text-xs font-bold border border-vital-200">
                    More personalized context
                  </span>
                </div>

                {/* Patient Prompt */}
                <div className="p-4 rounded-2xl bg-vital-50/50 border border-vital-200 mb-6">
                  <span className="text-[11px] font-bold text-vital-800 uppercase tracking-wider block mb-1">
                    Patient says:
                  </span>
                  <p className="text-base font-semibold text-clinical-950 font-serif italic">
                    &ldquo;I&apos;ve been feeling tired.&rdquo;
                  </p>
                </div>

                {/* Additional context consideration pills */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold text-clinical-900 block">
                    DrGodly can additionally consider:
                  </span>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-vital-50/70 border border-vital-200 text-vital-950 font-medium flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>Previous lab results</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-vital-50/70 border border-vital-200 text-vital-950 font-medium flex items-center gap-1.5">
                      <Pill className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>Medications</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-vital-50/70 border border-vital-200 text-vital-950 font-medium flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>Previous diagnoses</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-vital-50/70 border border-vital-200 text-vital-950 font-medium flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>Allergies</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-vital-50/70 border border-vital-200 text-vital-950 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>Recent consultations</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-vital-50/70 border border-vital-200 text-vital-950 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>Health timeline</span>
                    </div>
                  </div>
                </div>

                {/* Animated Contextual Synthesis Callout */}
                <div className="p-4 rounded-2xl bg-vital-100/70 border border-vital-300 space-y-2 text-xs">
                  <div className="text-xs font-bold text-vital-950 uppercase tracking-wide flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-vital-700" />
                    <span>Cross-Temporal Correlation Generated</span>
                  </div>
                  <p className="text-vital-950 leading-relaxed">
                    &ldquo;DrGodly connected your current concern with information from your health history.&rdquo;
                  </p>
                </div>
              </div>

              {/* Example Pre-Visit Summary Highlight */}
              <div className="mt-6 pt-4 border-t border-vital-200 bg-vital-50/30 rounded-xl p-3 text-xs space-y-1.5">
                <span className="font-bold text-vital-900 block text-[11px] uppercase tracking-wider">
                  Example Pre-Visit Summary Ready for Doctor
                </span>
                <p className="text-clinical-800 leading-snug">
                  Current symptom: <strong>Fatigue</strong> • Relevant history: <strong>Previous microcytic anemia</strong> (Ferritin 18 ng/mL, 2024), <strong>Recent CBC</strong>, active <strong>Metformin ER</strong> regimen, and <strong>Previous normal TSH/free T4</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: BEAUTIFUL UPLOAD EXPERIENCE ("Build your health context") */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-3xl border-2 border-dashed border-vital-300 bg-white p-8 sm:p-12 shadow-clinical-md text-center space-y-6 hover:border-vital-500 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600 mx-auto">
              <UploadCloud className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-clinical-950">
                Build your health context
              </h3>
              <p className="mt-2 text-sm text-clinical-600 max-w-md mx-auto">
                Drag files here or choose documents from your device. Encrypted and accessible only with your explicit permission.
              </p>
            </div>

            {/* Supported file types */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-400 mr-1">
                Accepted File Types:
              </span>
              <span className="px-3 py-1 rounded-lg bg-clinical-50 border border-clinical-200 text-xs font-bold text-clinical-800 font-mono">
                PDF
              </span>
              <span className="px-3 py-1 rounded-lg bg-clinical-50 border border-clinical-200 text-xs font-bold text-clinical-800 font-mono">
                JPG
              </span>
              <span className="px-3 py-1 rounded-lg bg-clinical-50 border border-clinical-200 text-xs font-bold text-clinical-800 font-mono">
                PNG
              </span>
            </div>

            {/* Action Trigger & Progress State */}
            {uploadStep === "idle" && (
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="vital"
                  size="md"
                  onClick={handleSimulateUpload}
                  icon={<UploadCloud className="w-4 h-4" />}
                >
                  Choose files
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={onBuildProfile}
                >
                  Open Full Health Vault
                </Button>
              </div>
            )}

            {uploadStep !== "idle" && (
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-clinical-50 border border-clinical-200 text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-clinical-900">
                  <span className="uppercase tracking-wider font-mono">
                    Ingestion Pipeline
                  </span>
                  <span className="text-vital-700">
                    {uploadStep === "ready" ? "Complete" : "In Progress..."}
                  </span>
                </div>

                {/* Progress States Progression */}
                <div className="space-y-2 text-xs">
                  <div
                    className={`flex items-center gap-2 ${
                      uploadStep === "uploading"
                        ? "text-vital-700 font-bold"
                        : "text-clinical-700"
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        uploadStep !== "uploading" ? "text-vital-600" : "text-vital-400"
                      }`}
                    />
                    <span>Uploading...</span>
                  </div>

                  <div
                    className={`flex items-center gap-2 ${
                      uploadStep === "extracting"
                        ? "text-vital-700 font-bold"
                        : uploadStep === "uploading"
                        ? "text-clinical-400"
                        : "text-clinical-700"
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        uploadStep === "organizing" ||
                        uploadStep === "finding" ||
                        uploadStep === "ready"
                          ? "text-vital-600"
                          : "text-clinical-300"
                      }`}
                    />
                    <span>Extracting medical information...</span>
                  </div>

                  <div
                    className={`flex items-center gap-2 ${
                      uploadStep === "organizing"
                        ? "text-vital-700 font-bold"
                        : uploadStep === "finding" || uploadStep === "ready"
                        ? "text-clinical-700"
                        : "text-clinical-400"
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        uploadStep === "finding" || uploadStep === "ready"
                          ? "text-vital-600"
                          : "text-clinical-300"
                      }`}
                    />
                    <span>Organizing your health timeline...</span>
                  </div>

                  <div
                    className={`flex items-center gap-2 ${
                      uploadStep === "finding"
                        ? "text-vital-700 font-bold"
                        : uploadStep === "ready"
                        ? "text-clinical-700"
                        : "text-clinical-400"
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        uploadStep === "ready"
                          ? "text-vital-600"
                          : "text-clinical-300"
                      }`}
                    />
                    <span>Finding relevant context...</span>
                  </div>

                  {uploadStep === "ready" && (
                    <div className="pt-2 flex items-center justify-between border-t border-clinical-200">
                      <span className="text-vital-800 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-vital-600" /> Ready.
                      </span>
                      <button
                        onClick={handleResetUpload}
                        className="text-[11px] text-clinical-500 hover:text-clinical-800 underline"
                      >
                        Reset Demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PART 3: YOUR HEALTH PROFILE DISPLAY (With 7 structured sections) */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-white p-6 sm:p-10 shadow-clinical-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clinical-200 pb-6 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-400 font-mono block">
                Unified Electronic Record
              </span>
              <h3 className="text-2xl font-bold font-serif text-clinical-950">
                Your Health Profile
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-vital-50 text-vital-800 text-xs font-bold border border-vital-200">
                7 Clinical Modules Connected
              </span>
            </div>
          </div>

          {/* Tab Navigation for 7 Sections */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {(
              [
                { id: "conditions", label: "Conditions" },
                { id: "medications", label: "Medications" },
                { id: "allergies", label: "Allergies" },
                { id: "investigations", label: "Investigations" },
                { id: "procedures", label: "Procedures" },
                { id: "encounters", label: "Encounters" },
                { id: "timeline", label: "Health Timeline" },
              ] as { id: ProfileTab; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveProfileTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeProfileTab === tab.id
                    ? "bg-clinical-950 text-white border-clinical-900 shadow-xs"
                    : "bg-clinical-50 text-clinical-700 border-clinical-200 hover:bg-clinical-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 rounded-2xl bg-clinical-50/50 border border-clinical-200 min-h-[200px]">
            {activeProfileTab === "conditions" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Active & Historical Diagnoses
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-clinical-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-clinical-950">Essential Hypertension</span>
                      <span className="text-[11px] font-mono text-vital-700 bg-vital-50 px-2 py-0.5 rounded">ICD-10 I10</span>
                    </div>
                    <p className="text-xs text-clinical-500 mt-1">Diagnosed Nov 2022 • Controlled on monotherapy</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-clinical-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-clinical-950">Mild Microcytic Anemia</span>
                      <span className="text-[11px] font-mono text-vital-700 bg-vital-50 px-2 py-0.5 rounded">ICD-10 D50.9</span>
                    </div>
                    <p className="text-xs text-clinical-500 mt-1">Identified March 2024 • Low ferritin (18 ng/mL)</p>
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab === "medications" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Active Pharmacotherapy & Supplements
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-clinical-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-clinical-950">Metformin ER 500mg</span>
                      <span className="text-xs text-vital-700 font-semibold">Active Daily</span>
                    </div>
                    <p className="text-xs text-clinical-500 mt-1">1 tablet with evening meal • Glycemic regulation</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-clinical-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-clinical-950">Ferrous Bisglycinate 28mg</span>
                      <span className="text-xs text-vital-700 font-semibold">OTC Supplement</span>
                    </div>
                    <p className="text-xs text-clinical-500 mt-1">Taken with Vitamin C 500mg • Ferritin repletion</p>
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab === "allergies" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Verified Adverse Reactions & Contraindications
                </div>
                <div className="p-4 rounded-xl bg-white border border-amber-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-amber-900">Sulfonamide Antibiotics</span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-amber-50 text-amber-800 rounded border border-amber-200">
                      Moderate / Urticaria
                    </span>
                  </div>
                  <p className="text-xs text-clinical-600 mt-1">
                    Diffuse rash noted in 2019 following Bactrim administration. Automatic cross-check flags active for all thiazide derivatives.
                  </p>
                </div>
              </div>
            )}

            {activeProfileTab === "investigations" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Extracted Biomarkers & Lab Panels
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-clinical-200 text-xs">
                    <span className="text-clinical-500 block mb-1">Serum Ferritin</span>
                    <span className="text-sm font-bold font-mono text-clinical-950">18 ng/mL</span>
                    <span className="text-[10px] text-amber-600 block mt-0.5">Low-normal range</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-clinical-200 text-xs">
                    <span className="text-clinical-500 block mb-1">Serum Potassium</span>
                    <span className="text-sm font-bold font-mono text-clinical-950">3.3 mEq/L</span>
                    <span className="text-[10px] text-amber-600 block mt-0.5">Mildly low threshold</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-clinical-200 text-xs">
                    <span className="text-clinical-500 block mb-1">eGFR (Kidney Function)</span>
                    <span className="text-sm font-bold font-mono text-clinical-950">82 mL/min</span>
                    <span className="text-[10px] text-vital-700 block mt-0.5">Normal baseline</span>
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab === "procedures" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Surgical & Interventional History
                </div>
                <div className="p-4 rounded-xl bg-white border border-clinical-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-clinical-950">Laparoscopic Appendectomy</span>
                    <span className="text-xs text-clinical-500 font-mono">May 2017</span>
                  </div>
                  <p className="text-xs text-clinical-500 mt-1">St. Jude Medical Center • Uncomplicated recovery</p>
                </div>
              </div>
            )}

            {activeProfileTab === "encounters" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Clinical Visits Across Facilities
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-clinical-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-clinical-900 block">Annual Preventative Physical</span>
                      <span className="text-clinical-500 text-[11px]">Metropolitan Health Group • Dr. Marcus Vance</span>
                    </div>
                    <span className="font-mono text-clinical-400">Jan 2025</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-clinical-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-clinical-900 block">Urgent Care Evaluation</span>
                      <span className="text-clinical-500 text-[11px]">Downtown Express Clinic • Post-work stress</span>
                    </div>
                    <span className="font-mono text-clinical-400">Nov 2024</span>
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab === "timeline" && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-clinical-500 font-mono">
                  Chronological Synthesis
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-clinical-200 flex items-center gap-3">
                    <span className="font-mono font-bold text-vital-700 w-12 shrink-0">2024</span>
                    <p className="text-clinical-700">Annual metabolic panel established borderline glucose and low ferritin.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-clinical-200 flex items-center gap-3">
                    <span className="font-mono font-bold text-vital-700 w-12 shrink-0">2025</span>
                    <p className="text-clinical-700">Metformin initiation and cardiology Holter examination.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-clinical-200 flex items-center gap-3">
                    <span className="font-mono font-bold text-vital-700 w-12 shrink-0">2026</span>
                    <p className="text-clinical-700">Conversational intake connects fatigue to 24-month longitudinal trajectory.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* IMPORTANT NON-COERCIVE COMPLIANCE NOTICE */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-clinical-200 shadow-xs text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-800 uppercase tracking-wide">
            <UserCheck className="w-4 h-4 text-vital-600" />
            <span>Ethical Healthcare Disclosure</span>
          </div>

          {/* Exact required copy constraint */}
          <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed font-sans">
            &ldquo;More context can help DrGodly provide more relevant, personalized information and prepare better for a clinician conversation.&rdquo;
          </p>

          <p className="text-[11px] text-clinical-400">
            Uploading records does not replace physical examinations or clinical testing. All care decisions and formal diagnoses remain solely with licensed medical doctors.
          </p>
        </div>
      </div>
    </section>
  );
};

