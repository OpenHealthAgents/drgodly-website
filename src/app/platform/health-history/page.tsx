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
import { SimulatedHealthProfile, SimulatedRecordUpload } from "@/components/product-mockups";
import { 
  GitMerge, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

export default function HealthHistoryPage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

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
            <span className="text-clinical-900 font-semibold">Longitudinal Health History</span>
          </div>

          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<GitMerge className="w-3.5 h-3.5" />}>
              Capability 08 • Longitudinal Continuity
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              A Unified Living Story that{" "}
              <span className="text-vital-600">Travels with You for Life</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Your symptoms are only part of the story. DrGodly connects the dots between your past blood tests, chronic medications, surgical history, and family baseline.
            </p>

            <div className="pt-2 flex justify-center">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setHealthProfileOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Secure Health Profile
              </Button>
            </div>
          </div>

          {/* High-Fidelity Interactive Health Profile */}
          <div className="mt-16">
            <SimulatedHealthProfile />
          </div>

          {/* Record Ingestion Pipeline */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-vital-600 block mb-1">
                Zero Data Entry
              </span>
              <h2 className="text-2xl font-bold text-clinical-950">
                How Records Flow Into Your Unified Profile
              </h2>
            </div>
            <SimulatedRecordUpload />
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
