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
import { SimulatedTelemedicine } from "@/components/product-mockups";
import { 
  Video, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

export default function TelemedicinePage() {
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
            <span className="text-clinical-900 font-semibold">AI-Assisted Telemedicine</span>
          </div>

          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<Video className="w-3.5 h-3.5" />}>
              Capability 03 • Care Delivery
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Telemedicine with 100% Eye Contact &{" "}
              <span className="text-vital-600">Zero Typing</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              High-definition clinical video consultations backed by silent ambient listening. As the patient speaks, DrGodly verifies claims against past records and highlights potential drug interactions live.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/get-started?type=patient">
                <Button variant="vital" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Consult a Doctor in &lt; 15 Mins
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
              >
                Clinician Platform Demo
              </Button>
            </div>
          </div>

          {/* High-Fidelity Interactive Telemedicine Interface */}
          <div className="mt-16">
            <SimulatedTelemedicine />
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
