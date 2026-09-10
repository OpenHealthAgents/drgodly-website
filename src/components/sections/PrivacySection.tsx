"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileKey2,
  CheckCircle2,
  ArrowRight,
  Server,
  UserCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const PrivacySection: React.FC = () => {
  return (
    <section className="py-24 bg-clinical-50/60 border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Privacy and Security by Design</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Your health data belongs to you.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Healthcare trust is sacred. DrGodly is architected from the database layer up with zero-knowledge encryption, explicit patient consent, and comprehensive auditability.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Encryption */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200/80 shadow-clinical-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-700">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-clinical-950">
              Zero-Exposure Encryption
            </h4>
            <p className="text-xs text-clinical-600 leading-relaxed">
              AES-256 encryption at rest and TLS 1.3 in transit. Patient record data is cryptographically isolated using dedicated key management per account.
            </p>
          </div>

          {/* Pillar 2: Patient Consent */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200/80 shadow-clinical-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-700">
              <UserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-clinical-950">
              Granular Consent Controls
            </h4>
            <p className="text-xs text-clinical-600 leading-relaxed">
              You choose exactly which clinical documents and notes are shared with each doctor. Revoke physician or specialist access anytime in one click.
            </p>
          </div>

          {/* Pillar 3: No Public Training */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200/80 shadow-clinical-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-700">
              <EyeOff className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-clinical-950">
              Zero Model Training on PHI
            </h4>
            <p className="text-xs text-clinical-600 leading-relaxed">
              Your sensitive medical records and consultation audio are never used to train public foundational AI models. Your personal health narrative stays private.
            </p>
          </div>

          {/* Pillar 4: Multi-Factor Auth */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200/80 shadow-clinical-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-700">
              <FileKey2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-clinical-950">
              Strict Multi-Factor Authentication
            </h4>
            <p className="text-xs text-clinical-600 leading-relaxed">
              FIDO2 WebAuthn, hardware key support, and biometric passkeys ensure only authenticated patients and verified licensed practitioners can enter.
            </p>
          </div>

          {/* Pillar 5: Immutable Audit Logs */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200/80 shadow-clinical-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-700">
              <Server className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-clinical-950">
              Immutable Access Audit Trail
            </h4>
            <p className="text-xs text-clinical-600 leading-relaxed">
              Every query, chart view, and record export creates a tamper-resistant timestamped audit entry, visible directly inside your patient security dashboard.
            </p>
          </div>

          {/* Pillar 6: Clinical Governance */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200/80 shadow-clinical-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-clinical-950">
              Physician Oversight Always
            </h4>
            <p className="text-xs text-clinical-600 leading-relaxed">
              DrGodly AI prepares and organizes, but licensed clinicians maintain ultimate oversight and sign off on all prescriptions, diagnoses, and care plans.
            </p>
          </div>
        </div>

        {/* Regulatory Posture and Compliance Badges Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-clinical-400">
              Regulatory Alignment
            </span>
            <div className="text-sm sm:text-base font-bold text-clinical-950">
              Designed with healthcare privacy and security in mind.
            </div>
            <p className="text-xs text-clinical-500 max-w-xl">
              Architected to align with international healthcare data protection frameworks, sovereign compliance standards, and modern digital health interoperability.
            </p>
          </div>

          {/* Extensible Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-3 py-1.5 rounded-xl border border-clinical-200 bg-clinical-50 text-xs font-semibold text-clinical-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" /> AES-256 / TLS 1.3
            </span>
            <span className="px-3 py-1.5 rounded-xl border border-clinical-200 bg-clinical-50 text-xs font-semibold text-clinical-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" /> Zero-Retention AI
            </span>
            <span className="px-3 py-1.5 rounded-xl border border-clinical-200 bg-clinical-50 text-xs font-semibold text-clinical-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" /> Patient-Controlled Access
            </span>
            <span className="px-3 py-1.5 rounded-xl border border-clinical-200 bg-clinical-50 text-xs font-semibold text-clinical-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" /> Tamper-Proof Audit Trail
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-bold text-vital-700">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1 hover:text-vital-800 transition-colors"
          >
            Read Patient Privacy & Data Rights Policy <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="hidden sm:inline text-clinical-300">•</span>
          <Link
            href="/security"
            className="inline-flex items-center gap-1 hover:text-vital-800 transition-colors"
          >
            Technical Security Architecture <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
