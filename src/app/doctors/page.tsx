"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DoctorWorkflowTriPhaseSection } from "@/components/sections/DoctorWorkflowTriPhaseSection";
import { DoctorProductShowcaseSection } from "@/components/sections/DoctorProductShowcaseSection";
import { ClinicalCalculator } from "@/components/sections/ClinicalCalculator";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import {
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileCheck,
  Sparkles,
  Award,
  Users
} from "lucide-react";

import { analytics } from "@/lib/analytics";

export default function DoctorsPage() {
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);

  React.useEffect(() => {
    analytics.trackDoctorPageView();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-28 sm:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pb-28">
          {/* Subtle background ambient glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-vital-100 via-clinical-50/40 to-transparent -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Value Proposition Badge */}
            <div className="inline-flex mb-6">
              <Badge variant="clinical" icon={<Stethoscope className="w-4 h-4 text-vital-500" />}>
                Spend less time collecting and documenting. Spend more time practicing medicine.
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-clinical-950 font-serif leading-[1.12] max-w-4xl mx-auto">
              Your AI copilot for{" "}
              <span className="text-vital-600 italic">every consultation.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-clinical-600 leading-relaxed max-w-3xl mx-auto font-normal">
              DrGodly turns patient conversations, medical history and clinical context into structured intelligence — before, during and after the visit.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="vital"
                size="lg"
                onClick={() => {
                  analytics.trackDemoCta("doctors_hero");
                  setDoctorDemoOpen(true);
                }}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-base shadow-clinical-md"
              >
                Request a Demo
              </Button>
              <a href="#workflow" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  See the Doctor Workflow
                </Button>
              </a>
            </div>

            {/* Trust markers */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-medium text-clinical-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-vital-600" />
                <span>HIPAA & HITECH Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-clinical-500" />
                <span>Zero-Retention Model Training</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-vital-600" />
                <span>FHIR / HL7 EHR Interoperability</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-clinical-500" />
                <span>Physician-Supervised Architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW TRI-PHASE SECTION (BEFORE, DURING, AFTER) */}
        <DoctorWorkflowTriPhaseSection />

        {/* 7 CORE CLINICAL PRODUCT CAPABILITIES MOCKUPS */}
        <DoctorProductShowcaseSection />

        {/* KEY ETHICAL GUARDRAIL / DOCTOR-IN-THE-LOOP SECTION */}
        <section className="py-20 bg-clinical-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-vital-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-clinical-900/60 backdrop-blur-md shadow-2xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 border border-vital-400/30 text-vital-300 text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Physician Autonomy & Clinical Governance
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium leading-snug text-white max-w-3xl mx-auto">
                &ldquo;AI handles the cognitive and administrative preparation. <span className="text-vital-400 underline decoration-vital-500/40 underline-offset-8">You remain in control</span> of clinical decisions.&rdquo;
              </blockquote>

              <p className="mt-6 text-sm sm:text-base text-clinical-300 max-w-2xl mx-auto leading-relaxed">
                DrGodly is engineered with strict deterministic guardrails. Every AI suggestion, differential diagnosis, and laboratory synthesis cites primary medical evidence and patient records. The attending physician always exercises independent medical judgement.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vital-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Full Provenance</h4>
                    <p className="text-xs text-clinical-400 mt-1">Every AI recommendation is linked directly to primary clinic notes or peer-reviewed literature.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vital-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Zero Autonomous Orders</h4>
                    <p className="text-xs text-clinical-400 mt-1">No medication, test, or treatment plan is ever dispatched without explicit physician review and electronic signature.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vital-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Audit & Explainability</h4>
                    <p className="text-xs text-clinical-400 mt-1">Complete immutable logging of all reasoning trees for clinical risk governance and peer review.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE ROI & TIME SAVINGS CALCULATOR */}
        <section id="calculator" className="py-20 bg-clinical-50/50 border-b border-clinical-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClinicalCalculator onOpenDoctorDemo={() => setDoctorDemoOpen(true)} />
          </div>
        </section>

        {/* FINAL CLOSING CTA SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-clinical-900 via-clinical-950 to-vital-950 text-white border border-clinical-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 border border-vital-400/30 text-vital-300 text-xs font-semibold mb-6">
                <Users className="w-3.5 h-3.5" />
                Designed for Medical Groups & Solo Practices
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Bring AI Into Your Practice
              </h2>

              <p className="mt-4 text-base sm:text-lg text-clinical-300 max-w-2xl mx-auto leading-relaxed">
                Join forward-thinking clinicians saving over 2 hours every day on administrative documentation while elevating diagnostic context and patient satisfaction.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="vital"
                  size="lg"
                  onClick={() => setDoctorDemoOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-clinical-lg"
                >
                  Request a Demo
                </Button>
                <a href="mailto:clinicians@drgodly.com" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
                    Contact Clinical Operations
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-xs text-clinical-400">
                Setup takes under 15 minutes. Compatible with Epic, Cerner, AthenaHealth, and standalone practice workflows.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <DoctorDemoModal
        isOpen={doctorDemoOpen}
        onClose={() => setDoctorDemoOpen(false)}
      />

      <QuickAssessModal
        isOpen={quickAssessOpen}
        onClose={() => setQuickAssessOpen(false)}
        onUpgradeToProfile={() => setHealthProfileOpen(true)}
      />

      <HealthProfileModal
        isOpen={healthProfileOpen}
        onClose={() => setHealthProfileOpen(false)}
      />
    </div>
  );
}
