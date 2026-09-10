import React from "react";
import Link from "next/link";
import { 
  Activity, 
  ShieldCheck, 
  Lock, 
  HeartHandshake, 
  ArrowUpRight 
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-clinical-950 text-clinical-300 border-t border-clinical-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand & positioning banner */}
        <div className="pb-12 border-b border-clinical-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-vital-500/20 border border-vital-500/40 flex items-center justify-center text-vital-400">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                DrGodly
              </span>
            </Link>
            <p className="text-clinical-300 text-base max-w-lg leading-relaxed">
              The AI-native healthcare platform that connects your health history, 
              AI intelligence, and human doctors.
            </p>
            <div className="p-3.5 rounded-xl bg-clinical-900/90 border border-clinical-800 text-xs text-clinical-300">
              <strong className="text-vital-400">Core Philosophy: </strong>
              AI does the preparation. Doctors do the care. Patients get a better healthcare experience.
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-clinical-900/60 border border-clinical-800/80">
              <ShieldCheck className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-white font-semibold text-sm">HIPAA-Ready</div>
              <div className="text-xs text-clinical-400 mt-1">Full BAA coverage & cryptographic audit logs</div>
            </div>
            <div className="p-4 rounded-xl bg-clinical-900/60 border border-clinical-800/80">
              <Lock className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-white font-semibold text-sm">Zero-Retention AI</div>
              <div className="text-xs text-clinical-400 mt-1">Private records are never used for public training</div>
            </div>
            <div className="p-4 rounded-xl bg-clinical-900/60 border border-clinical-800/80 col-span-2 sm:col-span-1">
              <HeartHandshake className="w-5 h-5 text-vital-400 mb-2" />
              <div className="text-white font-semibold text-sm">Doctor-in-Loop</div>
              <div className="text-xs text-clinical-400 mt-1">AI assists with synthesis; MDs make clinical care calls</div>
            </div>
          </div>
        </div>

        {/* Links matrix matching IA */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
          {/* Col 1: Platform Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-400">
              Platform Architecture
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/platform" className="hover:text-white transition-colors font-medium text-vital-400">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link href="/platform/ai-intake" className="hover:text-white transition-colors">
                  AI Patient Intake
                </Link>
              </li>
              <li>
                <Link href="/platform/pre-visit-intelligence" className="hover:text-white transition-colors">
                  Pre-Visit Intelligence
                </Link>
              </li>
              <li>
                <Link href="/platform/telemedicine" className="hover:text-white transition-colors">
                  Telemedicine Consults
                </Link>
              </li>
              <li>
                <Link href="/platform/clinical-decision-support" className="hover:text-white transition-colors">
                  Clinical Decision Support
                </Link>
              </li>
              <li>
                <Link href="/platform/soap-notes" className="hover:text-white transition-colors">
                  AI SOAP Notes
                </Link>
              </li>
              <li>
                <Link href="/platform/emr" className="hover:text-white transition-colors">
                  AI-Native EMR
                </Link>
              </li>
              <li>
                <Link href="/platform/emr-search" className="hover:text-white transition-colors">
                  Conversational EMR Search
                </Link>
              </li>
              <li>
                <Link href="/platform/health-history" className="hover:text-white transition-colors">
                  Health History Vault
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions & Workflows */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-400">
              Audiences & Flows
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/patients" className="hover:text-white transition-colors">
                  For Patients
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors">
                  For Doctors & MDs
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="hover:text-white transition-colors font-medium text-vital-400">
                  Get Started Flow
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="hover:text-white transition-colors">
                  Portal Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-400">
              Company & Learning
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About DrGodly
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources & Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ Knowledgebase
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-400">
              Trust & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  HIPAA BAA Agreement
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Zero-Retention AI
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Data Sovereignty
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinician Hub */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clinical-400">
              Provider Network
            </h4>
            <div className="p-4 rounded-xl bg-clinical-900 border border-clinical-800 space-y-2 text-xs">
              <div className="text-white font-medium">Licensed Clinician?</div>
              <p className="text-clinical-400">
                Join board-certified doctors practicing with zero pajama-time charting.
              </p>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1 text-vital-400 hover:text-vital-300 font-semibold pt-1"
              >
                Clinician Hub <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Emergency Medical Disclaimer & Detailed Regulatory Safety Notice */}
        <div className="pt-8 border-t border-clinical-800 text-xs text-clinical-400 space-y-4">
          <div className="p-4 rounded-xl bg-clinical-900 border border-clinical-800 space-y-2 text-[11px] leading-relaxed">
            <div className="text-red-300 font-bold flex items-center gap-1.5">
              <span>MEDICAL EMERGENCY NOTICE</span>
            </div>
            <p className="text-clinical-300">
              DrGodly is not an emergency response provider. If you are experiencing a life-threatening medical emergency, acute chest pressure, sudden numbness or paralysis, severe shortness of breath, or uncontrollable bleeding, please immediately call 911 (or your local emergency services) or visit the nearest emergency facility.
            </p>
            <div className="pt-1 border-t border-clinical-800 text-clinical-400">
              <strong className="text-clinical-200">Clinical Scope & AI Transparency: </strong>
              DrGodly AI assists with healthcare information synthesis and clinical preparation. All diagnoses, treatment regimens, and clinical care decisions are made by licensed human physicians. AI outputs are assistive tools for clinical decision support and should be reviewed appropriately by qualified medical professionals.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-clinical-400">
            <div>
              © {new Date().getFullYear()} DrGodly Health Technologies, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-xs">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy & Patient Rights
              </Link>
              <Link href="/security" className="hover:text-white transition-colors">
                Security Architecture
              </Link>
              <Link href="/security" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
