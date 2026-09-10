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
  Check, 
  ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [pricingAudience, setPricingAudience] = useState<"patients" | "clinicians">("patients");
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
            <Badge variant="vital">Transparent Pricing</Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Invest in Healthcare that{" "}
              <span className="text-vital-600">Knows Your Story</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Clear, straightforward plans for individuals, families, independent physicians, and healthcare organizations.
            </p>

            {/* Switcher */}
            <div className="flex justify-center pt-2">
              <div className="inline-flex p-1.5 bg-clinical-200/60 rounded-2xl border border-clinical-300">
                <button
                  onClick={() => setPricingAudience("patients")}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all",
                    pricingAudience === "patients"
                      ? "bg-white text-clinical-950 shadow-sm"
                      : "text-clinical-600 hover:text-clinical-900"
                  )}
                >
                  For Patients & Families
                </button>
                <button
                  onClick={() => setPricingAudience("clinicians")}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all",
                    pricingAudience === "clinicians"
                      ? "bg-white text-clinical-950 shadow-sm"
                      : "text-clinical-600 hover:text-clinical-900"
                  )}
                >
                  For Doctors & Practices
                </button>
              </div>
            </div>
          </div>

          {/* PATIENT TIERS */}
          {pricingAudience === "patients" && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-in fade-in">
              {/* Tier 1 */}
              <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-clinical-500">
                    Option A
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Quick Start
                  </h3>
                  <div className="text-3xl font-extrabold text-clinical-950">
                    Free
                  </div>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    Instant AI-powered symptom questions and first-pass triage.
                  </p>

                  <div className="pt-4 border-t border-clinical-100 space-y-2.5 text-xs text-clinical-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Immediate question intake</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>No sign-up or paperwork</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Emergency triage red-flag alerts</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setQuickAssessOpen(true)}
                  className="w-full justify-center"
                >
                  Try Quick Question
                </Button>
              </div>

              {/* Tier 2: Highly Recommended */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-vital-50/50 via-white to-vital-50/30 border-2 border-vital-500 shadow-clinical-lg flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-vital-700">
                      Option B • Most Popular
                    </div>
                    <span className="text-[11px] font-bold bg-vital-600 text-white px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Personal Health Profile
                  </h3>
                  <div className="text-3xl font-extrabold text-clinical-950">
                    Free Forever
                  </div>
                  <p className="text-xs text-clinical-700 leading-relaxed font-medium">
                    Connect previous labs, prescriptions, and medical history so DrGodly can connect the dots.
                  </p>

                  <div className="pt-4 border-t border-vital-200 space-y-2.5 text-xs text-clinical-800 font-medium">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Longitudinal health vault</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Context-aware AI symptom analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Automatic drug interaction checks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Pre-visit briefing for your doctor</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="vital"
                  size="md"
                  onClick={() => setHealthProfileOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center text-sm font-semibold"
                >
                  Start Your Health Profile
                </Button>
              </div>

              {/* Tier 3: Telehealth Visit */}
              <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-clinical-500">
                    Care Delivery
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Doctor Telehealth Visit
                  </h3>
                  <div className="text-3xl font-extrabold text-clinical-950">
                    $45 <span className="text-xs font-normal text-clinical-500">or Insurance Co-pay</span>
                  </div>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    Live video consultation with a board-certified physician who already knows your story.
                  </p>

                  <div className="pt-4 border-t border-clinical-100 space-y-2.5 text-xs text-clinical-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Consultations in &lt; 15 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Prescriptions sent to local pharmacy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Follow-up care coordination</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setHealthProfileOpen(true)}
                  className="w-full justify-center"
                >
                  Book Doctor Consultation
                </Button>
              </div>
            </div>
          )}

          {/* CLINICIAN TIERS */}
          {pricingAudience === "clinicians" && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-in fade-in">
              <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-clinical-500">
                    Independent Clinician
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Solo Practitioner
                  </h3>
                  <div className="text-3xl font-extrabold text-clinical-950">
                    $149 <span className="text-xs font-normal text-clinical-500">/ month</span>
                  </div>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    For individual doctors wanting to eliminate night-time EHR charting.
                  </p>

                  <div className="pt-4 border-t border-clinical-100 space-y-2.5 text-xs text-clinical-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>AI-Generated Pre-Visit Briefings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Instant Ambient SOAP Note Generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Clinical Decision Support (CDS)</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setDoctorDemoOpen(true)}
                  className="w-full justify-center"
                >
                  Start 14-Day Free Trial
                </Button>
              </div>

              {/* Group Practice */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-clinical-50 via-white to-clinical-50 border-2 border-clinical-900 shadow-clinical-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-vital-700">
                    Group Clinics
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Practice Network
                  </h3>
                  <div className="text-3xl font-extrabold text-clinical-950">
                    $249 <span className="text-xs font-normal text-clinical-500">/ provider / mo</span>
                  </div>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    For multi-specialty practices and outpatient groups wanting shared patient histories.
                  </p>

                  <div className="pt-4 border-t border-clinical-100 space-y-2.5 text-xs text-clinical-800">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>All Solo features included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>FHIR HL7 EMR Bridge (Athena, eCW)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Multi-provider scheduling & handoffs</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="vital"
                  size="md"
                  onClick={() => setDoctorDemoOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center text-sm font-semibold"
                >
                  Schedule Practice Demo
                </Button>
              </div>

              {/* Enterprise */}
              <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-clinical-500">
                    Health Systems & Hospitals
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Enterprise
                  </h3>
                  <div className="text-3xl font-extrabold text-clinical-950">
                    Custom
                  </div>
                  <p className="text-xs text-clinical-600 leading-relaxed">
                    Custom Epic/Cerner deep integration, dedicated BAA, and single-tenant cloud deployment.
                  </p>

                  <div className="pt-4 border-t border-clinical-100 space-y-2.5 text-xs text-clinical-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Full Epic / Cerner EHR integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Enterprise BAA & SOC2 audit rights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Dedicated clinical engineering support</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setDoctorDemoOpen(true)}
                  className="w-full justify-center"
                >
                  Contact Enterprise Sales
                </Button>
              </div>
            </div>
          )}
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
