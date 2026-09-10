"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Stethoscope 
} from "lucide-react";

export default function AboutPage() {
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
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<Heart className="w-3.5 h-3.5" />}>
              Our Purpose & People
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Rebuilding Healthcare Around{" "}
              <span className="text-vital-600">Memory & Empathy</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              DrGodly was founded by physicians and clinical AI researchers who grew exhausted watching doctors spend more time typing than looking patients in the eye.
            </p>
          </div>

          {/* Core Philosophy Manifesto */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-clinical-900 text-white max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-vital-400">
              The DrGodly Manifesto
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-relaxed">
              &ldquo;AI does the preparation. Doctors do the care. Patients get a better healthcare experience.&rdquo;
            </h2>
            <p className="text-sm text-clinical-300 leading-relaxed">
              We do not believe in replacing human doctors with automated chatbots. Medical nuance, empathy, and ethical responsibility belong in human hands. Our mission is to handle the overwhelming cognitive load of chart digging, document parsing, and documentation so physicians can return to the art of healing.
            </p>
          </div>

          {/* Clinical Leadership & Values */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-7 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-clinical-950 text-lg">Physician-Led Design</h3>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Every workflow, pre-visit summary, and decision support prompt is validated by our practicing clinical advisory board.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-clinical-950 text-lg">Absolute Confidentiality</h3>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Zero third-party LLM data retention. Private health records are encrypted at rest and in transit.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-clinical-950 text-lg">Care Continuity</h3>
              <p className="text-xs text-clinical-600 leading-relaxed">
                Patients own their continuous health story across clinics, hospital networks, and specialties.
              </p>
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

      <DoctorDemoModal
        isOpen={doctorDemoOpen}
        onClose={() => setDoctorDemoOpen(false)}
      />
    </div>
  );
}
