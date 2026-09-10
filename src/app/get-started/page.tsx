"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { 
  Users, 
  Stethoscope, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

function GetStartedContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type");
  
  const [selectedRole, setSelectedRole] = useState<"patient" | "doctor">(
    initialType === "doctor" ? "doctor" : "patient"
  );

  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

  useEffect(() => {
    if (initialType === "doctor") {
      setSelectedRole("doctor");
      analytics.trackSignupStarted("doctor");
    } else {
      setSelectedRole("patient");
      analytics.trackSignupStarted("patient");
    }
  }, [initialType]);

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
            <Badge variant="vital" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Get Started with DrGodly
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Choose Your Path to{" "}
              <span className="text-vital-600">Smarter Healthcare</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Select whether you are joining as an individual or family seeking continuous care, or a clinician seeking zero-burden charting.
            </p>

            {/* Role Switcher Pill */}
            <div className="flex justify-center pt-2">
              <div className="inline-flex p-1.5 bg-clinical-200/70 rounded-2xl border border-clinical-300 shadow-sm max-w-md w-full">
                <button
                  onClick={() => setSelectedRole("patient")}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
                    selectedRole === "patient"
                      ? "bg-white text-clinical-950 shadow-clinical-sm"
                      : "text-clinical-600 hover:text-clinical-900"
                  )}
                >
                  <Users className="w-4 h-4 text-vital-600" />
                  <span>I am a Patient</span>
                </button>

                <button
                  onClick={() => setSelectedRole("doctor")}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
                    selectedRole === "doctor"
                      ? "bg-white text-clinical-950 shadow-clinical-sm"
                      : "text-clinical-600 hover:text-clinical-900"
                  )}
                >
                  <Stethoscope className="w-4 h-4 text-vital-600" />
                  <span>I am a Doctor / Clinic</span>
                </button>
              </div>
            </div>
          </div>

          {/* DUAL PATH RENDER */}
          <div className="mt-16 max-w-4xl mx-auto">
            {selectedRole === "patient" ? (
              /* PATIENT CONVERSION PATH */
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-clinical-200 shadow-clinical-md space-y-8 animate-in fade-in">
                <div className="border-b border-clinical-100 pb-6 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-vital-700">
                    Patient Onboarding Track
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-clinical-950">
                    Your Complete Health Journey Starts Here
                  </h2>
                  <p className="text-sm text-clinical-600 leading-relaxed">
                    Choose how you want to begin. You can ask an immediate question or create your full encrypted health profile.
                  </p>
                </div>

                {/* Option Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Option 1: Quick Ask */}
                  <div className="p-6 rounded-2xl bg-clinical-50 border border-clinical-200 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-clinical-500 uppercase tracking-wider">
                        Option 1 • Instant
                      </span>
                      <h3 className="text-lg font-bold text-clinical-950">
                        Ask a Quick Question
                      </h3>
                      <p className="text-xs text-clinical-600 leading-relaxed">
                        Have a symptom right now? Get immediate first-pass triage without an upfront account.
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => {
                        analytics.trackAiDemoOpened("get_started_quick");
                        setQuickAssessOpen(true);
                      }}
                      className="w-full justify-center"
                    >
                      Ask Symptom Query
                    </Button>
                  </div>

                  {/* Option 2: Health Profile (Recommended) */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-vital-50/60 to-white border-2 border-vital-500 flex flex-col justify-between space-y-4 shadow-clinical-sm relative">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-vital-700 uppercase tracking-wider">
                          Option 2 • Recommended
                        </span>
                        <span className="text-[10px] font-bold bg-vital-600 text-white px-2 py-0.5 rounded-full">
                          Highest Insight
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-clinical-950">
                        Create Health Profile
                      </h3>
                      <p className="text-xs text-clinical-700 leading-relaxed font-medium">
                        Upload previous lab reports and prescriptions so DrGodly and your doctors can connect the dots.
                      </p>
                    </div>

                    <Button
                      variant="vital"
                      size="md"
                      onClick={() => {
                        analytics.trackHealthProfileCta("get_started_recommended");
                        setHealthProfileOpen(true);
                      }}
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full justify-center font-semibold"
                    >
                      Start Health Profile
                    </Button>
                  </div>
                </div>

                {/* 5-Step Funnel Milestones */}
                <div className="p-6 rounded-2xl bg-clinical-50 border border-clinical-100 space-y-3">
                  <span className="text-xs font-bold text-clinical-900 uppercase tracking-wide block">
                    What happens next in your care:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs text-clinical-600">
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>1. Intake:</strong> Adaptive conversation captures your symptoms.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>2. Synthesis:</strong> Labs & meds cross-checked by clinical AI.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>3. Doctor:</strong> Connect with a physician in &lt; 15 mins.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>4. Memory:</strong> Record stays connected for life.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* DOCTOR CONVERSION PATH */
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-clinical-200 shadow-clinical-md space-y-8 animate-in fade-in">
                <div className="border-b border-clinical-100 pb-6 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-vital-700">
                    Clinician & Practice Track
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-clinical-950">
                    Reclaim 2.5 Hours of Charting Every Day
                  </h2>
                  <p className="text-sm text-clinical-600 leading-relaxed">
                    Deploy AI-prepared intake, instant SOAP note generation, and conversational EMR search into your private clinic or hospital system.
                  </p>
                </div>

                {/* 2 Doctor Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-clinical-50 border border-clinical-200 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-clinical-500 uppercase tracking-wider">
                        Private Practice / Solo MD
                      </span>
                      <h3 className="text-lg font-bold text-clinical-950">
                        14-Day Clinical Pilot
                      </h3>
                      <p className="text-xs text-clinical-600 leading-relaxed">
                        Test automated SOAP notes and pre-visit briefings with your own patient encounters.
                      </p>
                    </div>

                    <Button
                      variant="vital"
                      size="md"
                      onClick={() => setDoctorDemoOpen(true)}
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full justify-center"
                    >
                      Request Solo Pilot
                    </Button>
                  </div>

                  <div className="p-6 rounded-2xl bg-clinical-900 text-white flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-vital-400 uppercase tracking-wider">
                        Enterprise & Health Systems
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        FHIR EHR Integration
                      </h3>
                      <p className="text-xs text-clinical-300 leading-relaxed">
                        Connect with Epic, Cerner, or AthenaHealth with full BAA coverage and custom clinical protocols.
                      </p>
                    </div>

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setDoctorDemoOpen(true)}
                      className="w-full justify-center text-clinical-950"
                    >
                      Schedule Enterprise Briefing
                    </Button>
                  </div>
                </div>

                {/* Doctor Funnel Milestones */}
                <div className="p-6 rounded-2xl bg-clinical-50 border border-clinical-100 space-y-3">
                  <span className="text-xs font-bold text-clinical-900 uppercase tracking-wide block">
                    The Clinician Workflow:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs text-clinical-600">
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>1. Intake:</strong> Adaptive questions capture patient history.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>2. 60s Report:</strong> Pre-visit briefing ready before call.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>3. Copilot:</strong> Cited differential diagnoses on screen.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-clinical-200">
                      <strong>4. 1-Click Note:</strong> Compliant SOAP pushed to EHR.
                    </div>
                  </div>
                </div>
              </div>
            )}
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

export default function GetStartedPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-clinical-50 flex items-center justify-center">Loading...</div>}>
      <GetStartedContent />
    </React.Suspense>
  );
}
