"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Trash2, 
  FileKey2, 
  Server, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle,
  Download,
  ChevronRight,
  ArrowRight
} from "lucide-react";

export default function PrivacyPage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);

  const sections = [
    {
      id: "patient-control",
      title: "1. Patient-Controlled Health Information & Consent",
      icon: <UserCheck className="w-5 h-5 text-vital-600" />,
      content:
        "Every record, lab result, and symptom description in DrGodly belongs strictly to the patient. You retain explicit, granular control over what information is visible to clinicians. No healthcare professional can inspect your history without your active, affirmative consent, and you can revoke individual clinician access permissions instantly via your account security dashboard."
    },
    {
      id: "secure-auth",
      title: "2. Secure Authentication & Identity Verification",
      icon: <FileKey2 className="w-5 h-5 text-vital-600" />,
      content:
        "Access to DrGodly accounts requires robust multi-factor authentication (MFA), including support for WebAuthn, FIDO2 hardware tokens, and biometric device authentication. Doctor accounts undergo mandatory National Provider Identifier (NPI) verification and state medical license credentialing before gaining platform access."
    },
    {
      id: "encryption",
      title: "3. Cryptographic Data Protection & Key Management",
      icon: <Lock className="w-5 h-5 text-vital-600" />,
      content:
        "All data at rest is encrypted using military-grade Advanced Encryption Standard (AES-256) with unique cryptographic envelope keys per tenant. All communications between your device, our servers, and video consultation feeds operate across Transport Layer Security (TLS 1.3) with strict forward secrecy and HTTP Strict Transport Security (HSTS)."
    },
    {
      id: "access-controls",
      title: "4. Role-Based Data Access Controls & Least Privilege",
      icon: <ShieldCheck className="w-5 h-5 text-vital-600" />,
      content:
        "Our engineering infrastructure strictly adheres to the principle of least privilege. Internal engineers cannot view unencrypted patient health records. Technical access to underlying infrastructure requires hardware-backed authentication, ephemeral access approvals, and time-bounded sessions."
    },
    {
      id: "auditability",
      title: "5. Comprehensive Audit Logging & Traceability",
      icon: <Server className="w-5 h-5 text-vital-600" />,
      content:
        "Every viewing, edit, export, or transmission of protected health data is recorded in an immutable, append-only audit trail. Patients can request a complete disclosure log of every individual and clinical entity that has viewed any segment of their records."
    },
    {
      id: "retention-deletion",
      title: "6. Data Retention, Export & Cryptographic Deletion",
      icon: <Trash2 className="w-5 h-5 text-vital-600" />,
      content:
        "You have the right to request the complete deletion of your account and medical history at any time. Upon verified deletion request, personal data is cryptographically shredded across all active production storage systems within 30 days, subject only to mandatory clinical record retention laws that may apply to completed clinical encounters."
    },
    {
      id: "document-security",
      title: "7. Clinical Document Ingestion Security",
      icon: <Download className="w-5 h-5 text-vital-600" />,
      content:
        "Uploaded laboratory panels, discharge summaries, and external clinic PDFs are scanned for malware within isolated sandbox environments prior to processing. OCR extraction takes place in isolated memory environments without caching unencrypted binary payloads to insecure shared storage."
    },
    {
      id: "ai-processing",
      title: "8. AI Processing & Zero-Retention Architecture",
      icon: <EyeOff className="w-5 h-5 text-vital-600" />,
      content:
        "DrGodly AI processes patient narratives and medical documents solely for the purpose of organizing context and generating clinical decision support during your consultation. Patient health records are NEVER used to train public or foundational third-party AI models. We enforce zero-retention data policies with our dedicated compute partners."
    },
    {
      id: "clinician-access",
      title: "9. Doctor-Led Care & Clinical Decision Support Safeguards",
      icon: <CheckCircle2 className="w-5 h-5 text-vital-600" />,
      content:
        "DrGodly is an intelligence and documentation tool designed to support patients and clinicians. It does not issue autonomous diagnoses, order prescriptions independently, or substitute for physician clinical judgment. A licensed human doctor leads every encounter, reviews pre-visit summaries, and retains ultimate authority over patient diagnosis and treatment."
    }
  ];

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-clinical-500 mb-6">
            <Link href="/" className="hover:text-clinical-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-clinical-900 font-semibold">Privacy Policy & Patient Data Rights</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="vital" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              Patient Rights & Security Standards
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Privacy and Trust by Design
            </h1>
            <p className="text-base sm:text-lg text-clinical-600 max-w-2xl mx-auto leading-relaxed">
              DrGodly is designed to support patients and clinicians while maintaining the highest technical standards of data isolation, explicit consent, and healthcare security.
            </p>
            <div className="text-xs text-clinical-500 pt-2 font-mono">
              Last Updated: September 2026 • Version 2.4
            </div>
          </div>

          {/* Persistent Medical & Regulatory Safety Notice */}
          <div className="mb-12 p-6 rounded-2xl bg-clinical-900 text-white border border-clinical-800 space-y-3 shadow-clinical-md">
            <div className="flex items-center gap-2 text-vital-400 font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Healthcare Safety & Clinical Scope Notice</span>
            </div>
            <p className="text-xs text-clinical-300 leading-relaxed">
              DrGodly provides AI-powered healthcare intelligence designed to organize and contextualize medical information. AI outputs are assistive tools for clinical decision support and patient preparation; they do not replace emergency medical care or professional clinical judgment. If you are experiencing emergency symptoms (e.g. acute chest pain, shortness of breath, sudden numbness), please immediately contact local emergency services (911).
            </p>
          </div>

          {/* 9 Privacy Topics Accordion/Cards */}
          <div className="space-y-6">
            {sections.map((sec) => (
              <Card key={sec.id} variant="solid" elevation="sm" className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center shrink-0">
                    {sec.icon}
                  </div>
                  <h2 className="text-lg font-bold text-clinical-950">
                    {sec.title}
                  </h2>
                </div>
                <p className="text-sm text-clinical-700 leading-relaxed pl-0 sm:pl-13">
                  {sec.content}
                </p>
              </Card>
            ))}
          </div>

          {/* Patient Data Rights Actions */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-md text-center space-y-4">
            <h3 className="text-xl font-bold text-clinical-950">
              Exercise Your Patient Privacy Rights
            </h3>
            <p className="text-xs sm:text-sm text-clinical-600 max-w-xl mx-auto leading-relaxed">
              You may request an export of your longitudinal clinical record or submit a data deletion request at any time through your account portal or by contacting our dedicated data protection officer.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact">
                <Button variant="vital" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Contact Privacy & Legal Team
                </Button>
              </Link>
              <Link href="/security">
                <Button variant="outline" size="md">
                  View Technical Security Architecture
                </Button>
              </Link>
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
    </div>
  );
}
