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
import { SimulatedAiIntake } from "@/components/product-mockups";
import { 
  ClipboardCheck, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight
} from "lucide-react";

import { analytics } from "@/lib/analytics";

export default function AiIntakePage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

  React.useEffect(() => {
    analytics.trackFeatureView("ai_intake");
  }, []);

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-clinical-500 mb-6">
            <Link href="/" className="hover:text-clinical-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/platform" className="hover:text-clinical-900">Platform</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-clinical-900 font-semibold">AI-Powered Patient Intake</span>
          </div>

          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<ClipboardCheck className="w-3.5 h-3.5" />}>
              Capability 01 • Patient Preparation
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Adaptive Clinical Intake that Replaces{" "}
              <span className="text-vital-600">Clipboard Friction</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Replace tedious 20-page paper clipboards with an empathetic, conversational clinical dialogue. It dynamically follows up on symptoms, onset, and severity—synthesizing lay descriptions into structured medical history.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setQuickAssessOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Experience Live Intake
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
              >
                Request Clinician Demo
              </Button>
            </div>
          </div>

          {/* High-Fidelity Simulated AI Intake Product Interface */}
          <div className="mt-16">
            <SimulatedAiIntake />
          </div>

          {/* 3 Value Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-clinical-200 space-y-2">
              <Clock className="w-6 h-6 text-vital-600 mb-2" />
              <h3 className="font-bold text-clinical-950 text-base">75% Faster Intake</h3>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Patients complete adaptive questioning in under 3 minutes on their smartphone before the appointment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-clinical-200 space-y-2">
              <ShieldCheck className="w-6 h-6 text-vital-600 mb-2" />
              <h3 className="font-bold text-clinical-950 text-base">Red-Flag Surveillance</h3>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Immediately escalates severe neurological deficits, chest pain, or emergency flags to 911 guidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-clinical-200 space-y-2">
              <MessageSquare className="w-6 h-6 text-vital-600 mb-2" />
              <h3 className="font-bold text-clinical-950 text-base">Structured Terminology</h3>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Converts colloquial descriptions (&ldquo;pounding temples&rdquo;) into standardized SNOMED CT and ICD-10 medical terminology.
              </p>
            </div>
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
