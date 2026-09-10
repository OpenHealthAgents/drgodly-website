"use client";

import React from "react";
import Link from "next/link";
import {
  User,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  Activity,
  Search,
  Bot,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface SplitExperienceProps {
  onOpenQuickAssess?: () => void;
  onOpenDoctorDemo?: () => void;
}

export const SplitExperienceSection: React.FC<SplitExperienceProps> = ({
  onOpenQuickAssess,
  onOpenDoctorDemo,
}) => {
  return (
    <section className="py-24 bg-white border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Connected Care Ecosystem</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            One platform. Two experiences. One connected health journey.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            DrGodly pairs an intuitive, reassuring consumer health copilot for patients with a high-throughput, ambient intelligence command center for physicians.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Patient Experience Card */}
          <div className="rounded-3xl border border-clinical-200 bg-clinical-50/50 p-8 sm:p-10 flex flex-col justify-between hover:border-vital-300 transition-all shadow-clinical-sm">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-vital-100 border border-vital-200 flex items-center justify-center text-vital-700">
                  <User className="w-6 h-6" />
                </div>
                <Badge variant="vital">Patient Perspective</Badge>
              </div>

              <h3 className="text-2xl font-bold text-clinical-950 mb-3">
                For Patients
              </h3>
              <p className="text-sm text-clinical-600 leading-relaxed mb-6">
                A calm, intelligent healthcare sanctuary where your story is understood, your records are unified, and you never start from zero.
              </p>

              {/* Patient Features List */}
              <div className="space-y-3.5 mb-8">
                <div className="p-3.5 rounded-xl bg-white border border-clinical-200 flex items-start gap-3">
                  <Bot className="w-4 h-4 text-vital-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">AI Intake and Assessment</span>
                    <span className="text-xs text-clinical-500">Conversational, adaptive symptom check before the visit</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-clinical-200 flex items-start gap-3">
                  <Activity className="w-4 h-4 text-vital-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Living Health Profile</span>
                    <span className="text-xs text-clinical-500">Consolidated history, allergies, medications, and labs</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-clinical-200 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-vital-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Unified Medical Records</span>
                    <span className="text-xs text-clinical-500">Upload paper charts, PDFs, or photos with auto-extraction</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-clinical-200 flex items-start gap-3">
                  <Video className="w-4 h-4 text-vital-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">Contextual Telemedicine</span>
                    <span className="text-xs text-clinical-500">Video consultations with doctors who already reviewed your data</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-clinical-200 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-vital-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-clinical-900 block">AI Health Assistant</span>
                    <span className="text-xs text-clinical-500">Continuous post-visit explanations, reminders, and lab tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-clinical-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link href="/patients" className="text-xs font-bold text-clinical-900 hover:text-vital-700 flex items-center gap-1">
                Explore Patient Experience <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Button
                variant="vital"
                size="sm"
                onClick={onOpenQuickAssess}
              >
                Start Health Journey
              </Button>
            </div>
          </div>

          {/* Doctor Experience Card */}
          <div className="rounded-3xl border border-clinical-900 bg-clinical-950 p-8 sm:p-10 flex flex-col justify-between text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-vital-500/20 border border-vital-400/30 flex items-center justify-center text-vital-300">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-vital-500/20 text-vital-300 border border-vital-400/30">
                  Doctor Perspective
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                For Doctors
              </h3>
              <p className="text-sm text-clinical-300 leading-relaxed mb-6">
                Zero-friction clinical workflow. Walk into every appointment with a prepared patient, live decision support, and auto-generated SOAP documentation.
              </p>

              {/* Doctor Features List */}
              <div className="space-y-3.5 mb-8">
                <div className="p-3.5 rounded-xl bg-clinical-900/90 border border-clinical-800 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-vital-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Pre-Visit Clinical Summary</span>
                    <span className="text-xs text-clinical-400">Chief complaint, timeline, red flags, and extracted biomarkers</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900/90 border border-clinical-800 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-vital-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Live Clinical Copilot</span>
                    <span className="text-xs text-clinical-400">Real-time differential suggestions, guidelines, and drug interaction alerts</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900/90 border border-clinical-800 flex items-start gap-3">
                  <Activity className="w-4 h-4 text-vital-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Automated SOAP Notes</span>
                    <span className="text-xs text-clinical-400">Review, edit, and 1-click sign without typing from scratch</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900/90 border border-clinical-800 flex items-start gap-3">
                  <Search className="w-4 h-4 text-vital-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Conversational EMR Search</span>
                    <span className="text-xs text-clinical-400">Natural language queries across entire patient chart history</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-clinical-900/90 border border-clinical-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vital-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Doctor Control Always</span>
                    <span className="text-xs text-clinical-400">AI assists and drafts; the licensed clinician signs and prescribes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-clinical-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link href="/doctors" className="text-xs font-bold text-clinical-300 hover:text-vital-300 flex items-center gap-1">
                Explore Doctor Workspace <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="border-clinical-700 text-white hover:bg-clinical-900"
                onClick={onOpenDoctorDemo}
              >
                Request Doctor Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
