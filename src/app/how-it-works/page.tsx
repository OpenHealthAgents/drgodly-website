"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SixStepEngineSection } from "@/components/sections/SixStepEngineSection";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";

export default function HowItWorksPage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-28 pb-20">
        {/* The 6-Step Clinical Journey & Visual Flow Pipeline */}
        <SixStepEngineSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Dual Path Comparison Box */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patient Experience Journey */}
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-vital-50 text-vital-700 text-xs font-bold uppercase tracking-wider">
                  Patient Journey
                </span>
              </div>
              <h3 className="text-2xl font-bold text-clinical-950">
                Never Repeat Your Medical History Again
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                From the moment you begin, DrGodly creates a continuous thread across your healthcare encounters:
              </p>

              <div className="space-y-3 pt-2 text-xs text-clinical-700">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-vital-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                  <span><strong>Discover & Ask:</strong> Quick symptom query or instant health triage with zero barrier.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-vital-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                  <span><strong>Build Health Vault:</strong> Securely link past lab PDFs, active prescriptions, and prior surgeries.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-vital-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                  <span><strong>Context-Aware Consult:</strong> Meet a doctor in &lt; 15 mins who has already digested your baseline.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-vital-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">4</span>
                  <span><strong>Longitudinal Care:</strong> Follow-ups and specialist visits inherit the same accurate backstory.</span>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/patients">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    Explore Patient Benefits
                  </Button>
                </Link>
              </div>
            </div>

            {/* Doctor Experience Journey */}
            <div className="p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-clinical-100 text-clinical-800 text-xs font-bold uppercase tracking-wider">
                  Clinician Journey
                </span>
              </div>
              <h3 className="text-2xl font-bold text-clinical-950">
                Zero Pajama Charting & Pure Patient Focus
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed">
                Doctors reclaim their evenings and practice medicine with full eye contact:
              </p>

              <div className="space-y-3 pt-2 text-xs text-clinical-700">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-clinical-900 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                  <span><strong>60s Pre-Chart Briefing:</strong> Review prioritized HPI, pertinent history, and red flags before entering.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-clinical-900 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                  <span><strong>Ambient Telemedicine:</strong> Conduct visit naturally while AI listens and verifies drug contraindications.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-clinical-900 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                  <span><strong>1-Click SOAP Note:</strong> Fully compliant note generated upon hang-up; edit and sign in 30 seconds.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-clinical-50 border border-clinical-100">
                  <span className="w-5 h-5 rounded-full bg-clinical-900 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">4</span>
                  <span><strong>FHIR EHR Push:</strong> Automatically updates Epic, Cerner, or AthenaHealth with zero copy-pasting.</span>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/doctors">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    Explore Physician Hub
                  </Button>
                </Link>
              </div>
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
