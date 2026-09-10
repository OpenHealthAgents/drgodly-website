"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  UploadCloud,
  FileCheck2,
  FileText,
  Stethoscope,
  Database,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface StepDetail {
  number: string;
  stepName: string;
  headline: string;
  subheadline: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  visualContent: {
    badge: string;
    title: string;
    items: string[];
  };
}

const STEPS_DATA: StepDetail[] = [
  {
    number: "01",
    stepName: "STEP 1",
    headline: "Tell DrGodly what's happening.",
    subheadline: "AI-powered conversational intake.",
    description:
      "Instead of filling out rigid, static 20-page clinic questionnaires, you simply describe what you are experiencing in plain language. DrGodly engages in an empathetic, adaptive clinical dialogue to uncover symptoms, duration, and red flags without form fatigue.",
    icon: <MessageSquare className="w-6 h-6 text-vital-600" />,
    tags: ["Adaptive Dialogue", "Symptom Surveillance", "Red-Flag Screening"],
    visualContent: {
      badge: "Clinical Intake In Progress",
      title: "Patient & AI Exchange",
      items: [
        "Patient: 'I've had severe fatigue and calf cramps for 3 weeks.'",
        "AI: 'Have you noticed dizziness when standing or changes in urination?'",
        "AI dynamically tailors next question based on reported timeline.",
      ],
    },
  },
  {
    number: "02",
    stepName: "STEP 2",
    headline: "Add your health context.",
    subheadline: "Upload medical records and build a longitudinal health profile.",
    description:
      "Your current symptom doesn't happen in a vacuum. Securely drag & drop prior lab reports, prescriptions, discharge summaries, or imaging tests. DrGodly unifies fragmented PDFs into your personal longitudinal health vault.",
    icon: <UploadCloud className="w-6 h-6 text-vital-600" />,
    tags: ["PDF / JPG / PNG Parser", "Zero-Knowledge Encryption", "Longitudinal Vault"],
    visualContent: {
      badge: "Multi-Format Ingestion",
      title: "Extracted Clinical Baselines",
      items: [
        "Metabolic Panel 2024 (Serum Ferritin: 18 ng/mL)",
        "Active Medications: Metformin ER 500mg, Hydrochlorothiazide 25mg",
        "Documented Allergen: Sulfa antibiotics (urticaria)",
      ],
    },
  },
  {
    number: "03",
    stepName: "STEP 3",
    headline: "DrGodly organizes your story.",
    subheadline: "AI extracts and structures relevant information.",
    description:
      "Unstructured medical notes are normalized into an interoperable clinical knowledge graph. DrGodly correlates past biomarker trajectories, dosage timelines, and previous surgical encounters with your immediate complaint.",
    icon: <FileCheck2 className="w-6 h-6 text-vital-600" />,
    tags: ["Knowledge Graph", "Biomarker Trends", "Temporal Mapping"],
    visualContent: {
      badge: "Synthesized Health Graph",
      title: "Cross-Temporal Correlation",
      items: [
        "Connected 2024 low ferritin baseline to 2026 subacute fatigue",
        "Identified potential drug-nutrient interaction (Metformin vs B12/Iron)",
        "Chronological HPI mapped across 24 consecutive months",
      ],
    },
  },
  {
    number: "04",
    stepName: "STEP 4",
    headline: "Get prepared.",
    subheadline: "DrGodly generates a pre-visit report.",
    description:
      "Before your doctor steps into the virtual exam room, DrGodly drafts an objective 10-point executive clinical briefing. You review what your doctor will see, ensuring you both enter the appointment aligned.",
    icon: <FileText className="w-6 h-6 text-vital-600" />,
    tags: ["60-Second Briefing", "10-Point Synthesis", "Patient Transparency"],
    visualContent: {
      badge: "Ready in 45 Seconds",
      title: "Executive Pre-Visit Summary",
      items: [
        "Chief Concern: Progressive fatigue & postural presyncope",
        "Pertinent Labs: K+ 3.3 mEq/L (3 mos prior), eGFR 82 mL/min",
        "Clinical Areas to Clarify & Red-Flag Clearance",
      ],
    },
  },
  {
    number: "05",
    stepName: "STEP 5",
    headline: "Talk to your doctor.",
    subheadline: "The doctor sees relevant context before and during the consultation.",
    description:
      "Meet your board-certified physician over encrypted high-definition telemedicine. With your pre-visit summary and context graph already on their screen, the doctor spends zero minutes asking repetitive intake questions and 100% of their time focused on your care.",
    icon: <Stethoscope className="w-6 h-6 text-vital-600" />,
    tags: ["HD Encrypted Video", "Zero Typing Friction", "Human-Centered Care"],
    visualContent: {
      badge: "Real-Time Telehealth Session",
      title: "Doctor Clinical Workspace",
      items: [
        "Doctor reviews pre-analyzed electrolyte trends prior to video start",
        "Full eye-contact discussion focused on symptom relief",
        "Real-time clinical decision support & guideline verification",
      ],
    },
  },
  {
    number: "06",
    stepName: "STEP 6",
    headline: "Keep your health story connected.",
    subheadline:
      "The consultation generates structured records, SOAP notes and longitudinal health information.",
    description:
      "Upon hang-up, DrGodly generates structured, compliant SOAP documentation for physician signature, updates your longitudinal health record, and feeds new insights into future AI conversations so you never start over again.",
    icon: <Database className="w-6 h-6 text-vital-600" />,
    tags: ["Ambient SOAP Notes", "Living Health Graph", "Continuous Care Thread"],
    visualContent: {
      badge: "EHR Sync Complete",
      title: "Post-Consultation Deliverables",
      items: [
        "Doctor-signed SOAP note pushed to health system EHR via FHIR",
        "Updated medication regimen & ordered repeat labs logged",
        "Living longitudinal timeline enriched for all future consultations",
      ],
    },
  },
];

// Visual Pipeline Node Data
const PIPELINE_NODES = [
  { label: "Patient", sub: "Starts with concern", color: "bg-clinical-900 text-white" },
  { label: "AI Intake", sub: "Adaptive conversational inquiry", color: "bg-vital-50 text-vital-900 border-vital-200" },
  { label: "Health Context", sub: "Unified past records & labs", color: "bg-vital-50 text-vital-900 border-vital-200" },
  { label: "AI Pre-Visit Intelligence", sub: "60-second synthesized briefing", color: "bg-vital-100 text-vital-950 border-vital-300 font-bold" },
  { label: "Doctor", sub: "100% focused human clinical care", color: "bg-clinical-900 text-white" },
  { label: "SOAP / EMR", sub: "Ambient structured documentation", color: "bg-vital-50 text-vital-900 border-vital-200" },
  { label: "Longitudinal Health Record", sub: "Persistent cross-encounter graph", color: "bg-vital-50 text-vital-900 border-vital-200" },
  { label: "Future AI Conversations", sub: "Always starts with complete backstory", color: "bg-vital-600 text-white" },
];

export const SixStepEngineSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Concept Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="vital">End-to-End Clinical Architecture</Badge>

          {/* Central Concept Headline */}
          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            From health history to intelligent care.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-clinical-600 max-w-2xl mx-auto leading-relaxed">
            Follow the complete clinical journey from the moment you log a symptom to post-visit electronic record synchronization.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VISUAL PIPELINE FLOW (One of the strongest visual elements of the website) */}
        {/* ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-24 rounded-3xl border border-clinical-200 bg-clinical-50/50 p-6 sm:p-12 shadow-clinical-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-vital-700 block mb-2">
              Visual Healthcare Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-clinical-950">
              The Continuous Health Intelligence Loop
            </h3>
            <p className="text-xs sm:text-sm text-clinical-600 mt-2">
              Notice how care never terminates at a consultation. Every interaction feeds into a continuous, compounding clinical loop.
            </p>
          </div>

          {/* Vertical Pipeline Flow with Connectors */}
          <div className="max-w-md mx-auto space-y-2 relative">
            {PIPELINE_NODES.map((node, i) => (
              <React.Fragment key={i}>
                <div
                  className={`p-4 rounded-2xl border shadow-xs flex items-center justify-between transition-all duration-200 hover:scale-[1.02] ${node.color}`}
                >
                  <div>
                    <div className="text-sm font-bold">{node.label}</div>
                    <div className="text-[11px] opacity-80">{node.sub}</div>
                  </div>
                  <div className="text-xs font-mono font-bold opacity-60">
                    0{i + 1}
                  </div>
                </div>

                {/* Connector Arrow Down between nodes */}
                {i < PIPELINE_NODES.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-4 h-4 text-vital-600 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6-STEP IN-DEPTH DETAILED JOURNEY */}
        {/* ========================================================================= */}
        <div className="space-y-16 lg:space-y-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-clinical-400 font-bold">
              In-Depth Walkthrough
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-clinical-950 font-serif mt-1">
              The 6-Step Clinical Journey
            </h3>
          </div>

          {/* Interactive Steps Progression List */}
          <div className="space-y-12">
            {STEPS_DATA.map((step, idx) => (
              <div
                key={idx}
                id={`step-${idx + 1}`}
                onMouseEnter={() => setActiveStepIndex(idx)}
                className={`rounded-3xl border transition-all duration-300 p-6 sm:p-10 ${
                  activeStepIndex === idx
                    ? "bg-white border-vital-400 shadow-xl ring-2 ring-vital-500/10"
                    : "bg-clinical-50/40 border-clinical-200"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Step Details & Narrative (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center font-mono font-extrabold text-vital-800 text-sm">
                        {step.number}
                      </span>
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-vital-700 bg-vital-50 px-2.5 py-1 rounded-md border border-vital-200">
                        {step.stepName}
                      </span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-bold font-serif text-clinical-950">
                      {step.headline}
                    </h4>

                    <p className="text-sm sm:text-base font-semibold text-vital-700">
                      {step.subheadline}
                    </p>

                    <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed max-w-xl">
                      {step.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {step.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-clinical-100 text-clinical-800 text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Simulated Artifact (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-clinical-200 bg-white p-5 sm:p-6 shadow-clinical-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-clinical-100 pb-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-clinical-400">
                          Live Pipeline Output
                        </span>
                        <Badge variant="vital">{step.visualContent.badge}</Badge>
                      </div>

                      <div className="font-bold text-xs sm:text-sm text-clinical-950">
                        {step.visualContent.title}
                      </div>

                      <div className="space-y-2 text-xs">
                        {step.visualContent.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-100 text-clinical-800 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-vital-600 mt-0.5 shrink-0" />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Closing Call to Action */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-clinical-950 text-white text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 text-vital-300 text-xs font-bold uppercase tracking-wider border border-vital-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Seamless Digital Healthcare
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold font-serif text-white max-w-2xl mx-auto">
            Experience the 6-step care journey firsthand.
          </h3>

          <p className="text-xs sm:text-sm text-clinical-300 max-w-xl mx-auto leading-relaxed">
            Whether you are a patient seeking answers with context or a physician wanting to practice medicine without charting burdens, DrGodly connects the dots.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/get-started?type=patient">
              <Button variant="vital" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Start as a Patient
              </Button>
            </Link>
            <Link href="/get-started?type=doctor">
              <Button
                variant="outline"
                size="lg"
                className="border-clinical-700 text-white hover:bg-clinical-900"
              >
                For Clinicians & Clinics
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
