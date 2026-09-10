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
import { SimulatedPreVisitReport } from "@/components/product-mockups";
import { 
  FileText, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

export default function PreVisitIntelligencePage() {
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
            <span className="text-clinical-900 font-semibold">Pre-Visit Intelligence</span>
          </div>

          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<FileText className="w-3.5 h-3.5" />}>
              Capability 02 • Clinical Synthesis
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              A 60-Second Executive Clinical Briefing{" "}
              <span className="text-vital-600">Before You Join</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Never enter an exam room or video consultation blind. DrGodly synthesizes the patient&apos;s chief complaint, longitudinal lab trends, and active medications into an objective pre-visit report.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Provider Walkthrough
              </Button>
              <Link href="/doctors">
                <Button variant="outline" size="lg">
                  Explore Doctor Hub
                </Button>
              </Link>
            </div>
          </div>

          {/* High-Fidelity Interactive Pre-Visit Report Mockup */}
          <div className="mt-16">
            <SimulatedPreVisitReport />
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
