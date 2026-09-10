"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PatientAiIntakeSection } from "@/components/sections/PatientAiIntakeSection";
import { PatientProfileShowcaseSection } from "@/components/sections/PatientProfileShowcaseSection";
import { PatientRecordUploadShowcase } from "@/components/sections/PatientRecordUploadShowcase";
import { PatientPersonalizedAiSection } from "@/components/sections/PatientPersonalizedAiSection";
import { PatientTelemedicineSection } from "@/components/sections/PatientTelemedicineSection";
import { PatientLongitudinalTimelineSection } from "@/components/sections/PatientLongitudinalTimelineSection";
import { PatientConversationalSearchSection } from "@/components/sections/PatientConversationalSearchSection";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Lock,
  HeartPulse,
  Users,
  CheckCircle2
} from "lucide-react";

export default function PatientsPage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-28 sm:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pb-28">
          {/* Ambient background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-vital-100 via-clinical-50/40 to-transparent -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Audience Badge */}
            <div className="inline-flex mb-6">
              <Badge variant="vital" icon={<HeartPulse className="w-3.5 h-3.5 text-vital-600" />}>
                For Patients & Families
              </Badge>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-clinical-950 font-serif leading-[1.12] max-w-4xl mx-auto">
              Your health story.{" "}
              <span className="text-vital-600 italic">Finally connected.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-clinical-600 leading-relaxed max-w-3xl mx-auto font-normal">
              DrGodly brings your symptoms, medical history, reports and healthcare conversations together to help you prepare for better care.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setHealthProfileOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-base shadow-clinical-md"
              >
                Start My Health Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setQuickAssessOpen(true)}
                icon={<Sparkles className="w-4 h-4 text-vital-600" />}
                iconPosition="left"
                className="w-full sm:w-auto text-base"
              >
                Ask DrGodly a Question
              </Button>
            </div>

            {/* Reassurance Trust Markers */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-medium text-clinical-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-vital-600" />
                <span>256-Bit Encrypted Health Vault</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-clinical-500" />
                <span>Board-Certified Human Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-vital-600" />
                <span>You Own & Control Your Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinical-500" />
                <span>No Insurance Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: AI INTAKE ("Just talk. DrGodly knows what to ask.") */}
        <PatientAiIntakeSection onOpenQuickAssess={() => setQuickAssessOpen(true)} />

        {/* SECTION 2: YOUR HEALTH PROFILE ("Keep your health history organized.") */}
        <PatientProfileShowcaseSection onOpenHealthProfile={() => setHealthProfileOpen(true)} />

        {/* SECTION 3: UPLOAD YOUR RECORDS ("Turn scattered medical documents into usable health context.") */}
        <PatientRecordUploadShowcase onOpenHealthProfile={() => setHealthProfileOpen(true)} />

        {/* SECTION 4: PERSONALIZED AI ("Get answers with the context you choose to share.") */}
        <PatientPersonalizedAiSection />

        {/* SECTION 5: TELEMEDICINE ("When you need a doctor, arrive prepared.") */}
        <PatientTelemedicineSection onOpenConsult={() => setQuickAssessOpen(true)} />

        {/* SECTION 6: YOUR LONGITUDINAL HEALTH RECORD ("Your health shouldn't reset every time you see a new doctor.") */}
        <PatientLongitudinalTimelineSection />

        {/* SECTION 7: CONVERSATIONAL HEALTH SEARCH (Demonstrating the 4 exact queries) */}
        <PatientConversationalSearchSection />

        {/* SECTION 8: CLOSING CTA */}
        <section className="py-24 bg-clinical-50/50 border-t border-clinical-200 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-clinical-900 via-clinical-950 to-vital-950 text-white border border-clinical-800 shadow-2xl relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 border border-vital-400/30 text-vital-300 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Intelligent Healthcare Experience
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Stop repeating your health story. Start building it.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-clinical-300 max-w-2xl mx-auto leading-relaxed">
                Connect your past records, get answers grounded in your real biology, and consult with doctors who already know your story from the moment you join.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="vital"
                  size="lg"
                  onClick={() => setHealthProfileOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-clinical-lg"
                >
                  Start My Health Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setQuickAssessOpen(true)}
                  className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
                >
                  Ask DrGodly a Question
                </Button>
              </div>

              <p className="mt-6 text-xs text-clinical-400">
                Free to start • HIPAA compliant • Download or delete your records at any time.
              </p>
            </div>
          </div>
        </section>
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
    </div>
  );
}

