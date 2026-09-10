"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { SimulatedAiNativeEmr } from "@/components/product-mockups";
import { 
  Database, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

export default function EmrPage() {
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);

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
            <span className="text-clinical-900 font-semibold">AI-Native EMR</span>
          </div>

          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<Database className="w-3.5 h-3.5" />}>
              Capability 06 • Infrastructure
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              An EMR Structured for Intelligence,{" "}
              <span className="text-vital-600">Not Just Billing</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Legacy EMRs are billing databases disguised as medical records. DrGodly structures patient data as a dynamic knowledge graph—interlinking lab histories, imaging reports, clinician notes, and specialist consults into an intuitive timeline.
            </p>

            <div className="pt-2 flex justify-center">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Enterprise EMR Briefing
              </Button>
            </div>
          </div>

          {/* High-Fidelity Interactive AI-Native EMR Mockup */}
          <div className="mt-16">
            <SimulatedAiNativeEmr />
          </div>

          {/* Knowledge Graph Graphic */}
          <div className="mt-16 max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-white p-8 shadow-clinical-md space-y-6">
            <h3 className="text-lg font-bold text-clinical-950 border-b border-clinical-100 pb-3">
              The Living Clinical Knowledge Graph
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-vital-50/60 border border-vital-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-vital-800">Biomarker Trajectories</span>
                <p className="text-xs text-clinical-700 leading-relaxed">
                  Interlinks serum potassium, HbA1c, and eGFR data points over 4 years into continuous trend lines.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-clinical-50 border border-clinical-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-800">Pharmacological Mapping</span>
                <p className="text-xs text-clinical-700 leading-relaxed">
                  Maps active prescriptions against metabolic half-lives and historical adverse drug events.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-intel-50/60 border border-intel-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-intel-800">Specialist Notes</span>
                <p className="text-xs text-clinical-700 leading-relaxed">
                  Synthesizes cardiology, endocrinology, and primary care encounters into a singular clinical narrative.
                </p>
              </div>
            </div>
          </div>
        </div>
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
