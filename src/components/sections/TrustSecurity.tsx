import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  FileCheck, 
  UserCheck, 
  ArrowRight,
  Database
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const TrustSecurity: React.FC = () => {
  const securityPillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-vital-500" />,
      title: "Healthcare Confidentiality Architecture",
      desc: "Architected around strict healthcare data confidentiality principles, with dedicated tenant isolation and granular access governance.",
    },
    {
      icon: <Lock className="w-6 h-6 text-vital-500" />,
      title: "Zero-Retention AI Mandate",
      desc: "Contractual zero-data-retention agreements with LLM infrastructure partners. Your private medical history is NEVER used to train public models.",
    },
    {
      icon: <Server className="w-6 h-6 text-vital-500" />,
      title: "AES-256 & TLS 1.3 Encryption",
      desc: "Patient charts, lab documents, and audio streams are encrypted end-to-end at rest with AES-256 and during transmission via TLS 1.3.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-vital-500" />,
      title: "Strict Physician-in-the-Loop",
      desc: "AI produces clinical synthesis and drafts documentation. Only licensed attending physicians can sign notes, prescribe medications, or confirm diagnoses.",
    },
    {
      icon: <Database className="w-6 h-6 text-vital-500" />,
      title: "Full Data Sovereignty",
      desc: "Patients and health systems maintain total ownership. One-click export of complete longitudinal charts in standard FHIR / C-CDA XML format.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-vital-500" />,
      title: "Immutable Audit Trails",
      desc: "Every record query, clinical briefing generation, and doctor review event is timestamped and recorded in cryptographically verifiable audit logs.",
    },
  ];

  return (
    <section id="security" className="py-24 bg-clinical-950 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vital-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="clinical" icon={<ShieldCheck className="w-3.5 h-3.5 text-vital-400" />}>
            Clinical Governance & Trust
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Engineered for the Highest Standards of Medical Privacy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-300 leading-relaxed">
            Healthcare data requires uncompromised security. DrGodly is architected from the ground up to protect patient confidentiality and physician autonomy.
          </p>
        </div>

        {/* 6 Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-clinical-900/80 border border-clinical-800 hover:border-vital-500/40 transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-vital-500/10 border border-vital-500/30 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-clinical-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security Deep Dive Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-clinical-900 via-clinical-900/90 to-vital-950/40 border border-clinical-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              Need to review our SOC2 Type II report or execute a BAA?
            </h4>
            <p className="text-sm text-clinical-300 max-w-xl">
              Our clinical compliance team provides enterprise security dossiers, penetration test summaries, and custom risk assessments.
            </p>
          </div>
          <Link href="/security">
            <Button
              variant="vital"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Read Security Architecture
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
