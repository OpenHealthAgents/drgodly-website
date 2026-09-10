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
  ShieldCheck, 
  Lock, 
  UserCheck, 
  ArrowRight,
  Database
} from "lucide-react";

export default function SecurityPage() {
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
            <Badge variant="vital" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Clinical Trust & Governance
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Security & Compliance at the{" "}
              <span className="text-vital-600">Core of Every Byte</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              We treat protected health information (PHI) with uncompromising clinical rigor. Learn how our multi-layered encryption, zero-retention AI pipelines, and human-in-the-loop safeguards safeguard your care.
            </p>

            <div className="pt-2 flex justify-center">
              <Button
                variant="vital"
                size="lg"
                onClick={() => setDoctorDemoOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Enterprise Compliance Dossier
              </Button>
            </div>
          </div>

          {/* Detailed Security Architecture Matrix */}
          <div className="mt-20 space-y-12 max-w-4xl mx-auto">
            {/* Section 1 */}
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Zero-Retention AI Infrastructure
                  </h3>
                  <div className="text-xs text-vital-700 font-semibold">
                    Private Health Records Never Train Public Models
                  </div>
                </div>
              </div>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Under strict enterprise agreements with our compute and AI infrastructure providers, any patient data, symptom description, or uploaded clinical document processed by DrGodly is completely isolated. Zero training retention is contractually enforced: data is processed ephemerally in memory and never stored or retained for model training.
              </p>
            </div>

            {/* Section 2 */}
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Comprehensive Administrative & Technical Safeguards
                  </h3>
                  <div className="text-xs text-vital-700 font-semibold">
                    Rigorous Healthcare Security Architecture
                  </div>
                </div>
              </div>
              <p className="text-sm text-clinical-600 leading-relaxed">
                DrGodly is architected around the strictest physical, technical, and administrative data confidentiality principles. We implement encrypted data isolation, automated access revocation, least-privilege engineering access, and tamper-resistant audit logs to maintain confidential care relationships between patients and licensed healthcare providers.
              </p>
            </div>

            {/* Section 3 */}
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Physician-in-the-Loop Clinical Safeguards
                  </h3>
                  <div className="text-xs text-vital-700 font-semibold">
                    AI Never Replaces Doctor Discretion
                  </div>
                </div>
              </div>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Our product philosophy is strictly architected: AI does the preparation, doctors do the care. DrGodly never issues unilateral medical diagnoses, changes drug regimens, or signs clinical charts. Every differential diagnosis, clinical summary, and SOAP note requires verification and explicit approval by a licensed human physician.
              </p>
            </div>

            {/* Section 4 */}
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-clinical-950">
                    Patient Data Sovereignty
                  </h3>
                  <div className="text-xs text-vital-700 font-semibold">
                    You Own Your Health Narrative
                  </div>
                </div>
              </div>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Patients have the unalienable right to export their complete longitudinal health history at any time in industry-standard FHIR JSON or C-CDA XML format. Account deletion results in cryptographic shredding of all associated records across our database clusters.
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
