"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Cpu, 
  GitPullRequest 
} from "lucide-react";

export default function OrganizationsPage() {
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
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<Building2 className="w-3.5 h-3.5" />}>
              For Health Systems, Clinics & Digital Health Enterprises
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Scalable AI-Native Infrastructure for{" "}
              <span className="text-vital-600">Enterprise Healthcare</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Deploy intelligent patient intake, automated clinical documentation, and longitudinal health intelligence across your entire provider network.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Enterprise Briefing
              </Button>
            </div>
          </div>

          {/* 4 Pillars of Enterprise Transformation */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinical-950">
                Mitigate Provider Burnout & Turnover
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Documentation burden is the #1 driver of clinician turnover, costing health systems upwards of $500,000 per departing physician. DrGodly cuts charting time by 81%, keeping your top doctors engaged and fulfilled.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <GitPullRequest className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinical-950">
                Turnkey FHIR HL7 Integration
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Connect seamlessly with Epic, Cerner, AthenaHealth, and modern cloud EHRs. Bidirectional data sync ensures automated SOAP notes and pre-visit intake flow directly into your system of record.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinical-950">
                Scalable Telehealth Capacity
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Because intake and pre-charting are automated, clinical teams increase daily visit throughput by up to 35% without extending clinic hours or sacrificing diagnostic thoroughness.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinical-950">
                Enterprise HIPAA & BAA Security
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                SOC2 Type II compliant, zero third-party LLM data retention, single-tenant enterprise deployment options, and full Business Associate Agreements for complete compliance confidence.
              </p>
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
