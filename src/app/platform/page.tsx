"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { 
  ClipboardCheck, 
  FileText, 
  Video, 
  BrainCircuit, 
  FileCheck2, 
  Database, 
  SearchCode, 
  GitMerge, 
  ArrowRight,
  Cpu,
  UploadCloud,
  Sparkles
} from "lucide-react";
import {
  SimulatedAiIntake,
  SimulatedHealthProfile,
  SimulatedRecordUpload,
  SimulatedPreVisitReport,
  SimulatedTelemedicine,
  SimulatedClinicalCopilot,
  SimulatedSoapNotes,
  SimulatedAiNativeEmr,
  SimulatedEmrSearch
} from "@/components/product-mockups";
import { cn } from "@/lib/utils";

export default function PlatformIndexPage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);
  const [activeMockup, setActiveMockup] = useState<
    | "intake"
    | "profile"
    | "upload"
    | "previsit"
    | "telemedicine"
    | "copilot"
    | "soap"
    | "emr"
    | "search"
  >("intake");

  const showcaseTabs = [
    { id: "intake", label: "01 AI Intake", icon: <ClipboardCheck className="w-3.5 h-3.5" /> },
    { id: "profile", label: "02 Health Profile", icon: <GitMerge className="w-3.5 h-3.5" /> },
    { id: "upload", label: "03 Record Upload", icon: <UploadCloud className="w-3.5 h-3.5" /> },
    { id: "previsit", label: "04 Pre-Visit Report", icon: <FileText className="w-3.5 h-3.5" /> },
    { id: "telemedicine", label: "05 Telemedicine", icon: <Video className="w-3.5 h-3.5" /> },
    { id: "copilot", label: "06 Clinical Copilot", icon: <BrainCircuit className="w-3.5 h-3.5" /> },
    { id: "soap", label: "07 SOAP Notes", icon: <FileCheck2 className="w-3.5 h-3.5" /> },
    { id: "emr", label: "08 AI-Native EMR", icon: <Database className="w-3.5 h-3.5" /> },
    { id: "search", label: "09 EMR Search", icon: <SearchCode className="w-3.5 h-3.5" /> },
  ] as const;

  const capabilities = [
    {
      num: "01",
      title: "AI-Powered Patient Intake",
      desc: "Adaptive conversational intake replacing 20-page clipboards. Synthesizes patient descriptions into structured clinical terms.",
      href: "/platform/ai-intake",
      icon: <ClipboardCheck className="w-5 h-5 text-vital-600" />,
      tag: "Preparation"
    },
    {
      num: "02",
      title: "Pre-Visit Clinical Intelligence",
      desc: "A 60-second executive clinical briefing with chronological HPI, medication regimen, and red-flag surveillance ready before the visit.",
      href: "/platform/pre-visit-intelligence",
      icon: <FileText className="w-5 h-5 text-vital-600" />,
      tag: "Synthesis"
    },
    {
      num: "03",
      title: "AI-Assisted Telemedicine",
      desc: "High-definition consultations with ambient clinical listening, surfacing contraindications and patient history live on screen.",
      href: "/platform/telemedicine",
      icon: <Video className="w-5 h-5 text-vital-600" />,
      tag: "Care Delivery"
    },
    {
      num: "04",
      title: "Clinical Decision Support",
      desc: "Evidence-backed differential diagnoses cross-checked with 2024 UpToDate & ACC/AHA guidelines and drug interaction warnings.",
      href: "/platform/clinical-decision-support",
      icon: <BrainCircuit className="w-5 h-5 text-vital-600" />,
      tag: "Safety"
    },
    {
      num: "05",
      title: "AI-Generated SOAP Notes",
      desc: "Instant compliant documentation generated seconds after the video call, complete with ICD-10 and CPT billing codes.",
      href: "/platform/soap-notes",
      icon: <FileCheck2 className="w-5 h-5 text-vital-600" />,
      tag: "Documentation"
    },
    {
      num: "06",
      title: "AI-Native EMR",
      desc: "Structured as a knowledge graph for comprehension rather than a billing database. Sub-second interlinking of disparate records.",
      href: "/platform/emr",
      icon: <Database className="w-5 h-5 text-vital-600" />,
      tag: "Infrastructure"
    },
    {
      num: "07",
      title: "Conversational EMR Search",
      desc: "Ask plain questions across 5 years of scanned charts, external PDFs, and lab panels with direct citation page numbers.",
      href: "/platform/emr-search",
      icon: <SearchCode className="w-5 h-5 text-vital-600" />,
      tag: "Retrieval"
    },
    {
      num: "08",
      title: "Longitudinal Health History",
      desc: "A unified, living story of patient health that travels with them for life across clinics and specialists without repeated testing.",
      href: "/platform/health-history",
      icon: <GitMerge className="w-5 h-5 text-vital-600" />,
      tag: "Continuity"
    },
  ];

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<Cpu className="w-3.5 h-3.5" />}>
              The DrGodly Operating System
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              An Integrated Clinical Architecture for{" "}
              <span className="text-vital-600">Modern Medicine</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              DrGodly replaces fragmented point solutions with an end-to-end intelligent platform. Explore each of our 8 modular capabilities below:
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/get-started">
                <Button variant="vital" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Getting Started
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
              >
                Schedule Provider Demo
              </Button>
            </div>
          </div>

          {/* Interactive Master Software Showcase */}
          <div className="mt-16 bg-white border border-clinical-200 rounded-3xl p-6 sm:p-8 shadow-clinical-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-clinical-100 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="vital" icon={<Sparkles className="w-3 h-3" />}>
                    Interactive Clinical Suite
                  </Badge>
                  <span className="text-xs font-mono text-clinical-400">9 Production Interfaces</span>
                </div>
                <h2 className="text-2xl font-bold text-clinical-950">
                  Experience the Living Software
                </h2>
                <p className="text-xs text-clinical-600 mt-1">
                  Toggle through each layer of the DrGodly clinical operating system. Every mockup is fully interactive.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link href={
                  activeMockup === "intake" ? "/platform/ai-intake" :
                  activeMockup === "profile" ? "/platform/health-history" :
                  activeMockup === "upload" ? "/platform/health-history" :
                  activeMockup === "previsit" ? "/platform/pre-visit-intelligence" :
                  activeMockup === "telemedicine" ? "/platform/telemedicine" :
                  activeMockup === "copilot" ? "/platform/clinical-decision-support" :
                  activeMockup === "soap" ? "/platform/soap-notes" :
                  activeMockup === "emr" ? "/platform/emr" :
                  "/platform/emr-search"
                }>
                  <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    View Dedicated Page
                  </Button>
                </Link>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-4 no-scrollbar border-b border-clinical-100 mb-6">
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMockup(tab.id as typeof activeMockup)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all",
                    activeMockup === tab.id
                      ? "bg-clinical-900 text-white shadow-sm"
                      : "bg-clinical-50 text-clinical-700 hover:bg-clinical-100 hover:text-clinical-950"
                  )}
                >
                  <span className={activeMockup === tab.id ? "text-vital-400" : "text-clinical-500"}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Showcase Stage */}
            <div className="transition-all duration-300">
              {activeMockup === "intake" && <SimulatedAiIntake />}
              {activeMockup === "profile" && <SimulatedHealthProfile />}
              {activeMockup === "upload" && <SimulatedRecordUpload />}
              {activeMockup === "previsit" && <SimulatedPreVisitReport />}
              {activeMockup === "telemedicine" && <SimulatedTelemedicine />}
              {activeMockup === "copilot" && <SimulatedClinicalCopilot />}
              {activeMockup === "soap" && <SimulatedSoapNotes />}
              {activeMockup === "emr" && <SimulatedAiNativeEmr />}
              {activeMockup === "search" && <SimulatedEmrSearch />}
            </div>
          </div>

          {/* Section Divider & 8 Capabilities Title */}
          <div className="mt-24 text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-vital-600 block mb-1">
              Modular Capabilities
            </span>
            <h2 className="text-3xl font-bold text-clinical-950">
              Deep Dives by Capability
            </h2>
            <p className="text-sm text-clinical-600 mt-2">
              Explore the architectural specifications and clinical trial data for each core module.
            </p>
          </div>

          {/* 8 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.href}
                className="p-7 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm hover:shadow-clinical-md hover:border-vital-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {cap.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-clinical-400">
                      {cap.num}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-vital-700 mb-1">
                    {cap.tag}
                  </div>

                  <h3 className="text-lg font-bold text-clinical-950 mb-2 group-hover:text-vital-800 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-clinical-600 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-clinical-100">
                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-vital-700 hover:text-vital-800 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure guarantee banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-clinical-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-vital-400">
                Interoperability Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineered for FHIR HL7 and Seamless EHR Sync
              </h3>
              <p className="text-sm text-clinical-300 leading-relaxed">
                Whether deployed in a solo private clinic or a multi-hospital regional health system, DrGodly integrates seamlessly with Epic Systems, Oracle Cerner, and AthenaHealth.
              </p>
            </div>

            <Button
              variant="vital"
              size="lg"
              onClick={() => setDoctorDemoOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request FHIR Integration Specs
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      <QuickAssessModal
        isOpen={quickAssessOpen}
        onClose={() => setQuickAssessOpen(false)}
        onUpgradeToProfile={() => setHealthProfileOpen(true)}
      />

      <HealthProfileModal
        isOpen={healthProfileOpen}
        onClose={() => setHealthProfileOpen(false)}
      />

      <DoctorDemoModal
        isOpen={doctorDemoOpen}
        onClose={() => setDoctorDemoOpen(false)}
      />
    </div>
  );
}
