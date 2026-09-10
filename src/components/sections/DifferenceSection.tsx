import React from "react";
import { 
  Plus, 
  ArrowDown, 
  Sparkles, 
  FileText, 
  Pill, 
  History, 
  Activity, 
  Stethoscope 
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const DifferenceSection: React.FC = () => {
  return (
    <section className="py-24 bg-clinical-50/60 border-t border-b border-clinical-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">The DrGodly Difference</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Your health has a history.{" "}
            <span className="text-vital-600">Your AI should too.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Generic chatbots assess your symptoms in an isolated vacuum. DrGodly synthesizes your complete health story into unified clinical intelligence.
          </p>
        </div>

        {/* 3-Tier Pipeline Diagram */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Tier 1: The Inputs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-400 block mb-4 text-center sm:text-left">
              Step 1: Longitudinal Inputs Synthesized
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-clinical-900">
              <span className="px-4 py-2 rounded-xl bg-vital-50 border border-vital-200 flex items-center gap-1.5 text-vital-900">
                <Activity className="w-4 h-4 text-vital-600" />
                Symptoms
              </span>
              <Plus className="w-4 h-4 text-clinical-300" />

              <span className="px-4 py-2 rounded-xl bg-vital-50 border border-vital-200 flex items-center gap-1.5 text-vital-900">
                <History className="w-4 h-4 text-vital-600" />
                Medical History
              </span>
              <Plus className="w-4 h-4 text-clinical-300" />

              <span className="px-4 py-2 rounded-xl bg-vital-50 border border-vital-200 flex items-center gap-1.5 text-vital-900">
                <FileText className="w-4 h-4 text-vital-600" />
                Reports & Labs
              </span>
              <Plus className="w-4 h-4 text-clinical-300" />

              <span className="px-4 py-2 rounded-xl bg-vital-50 border border-vital-200 flex items-center gap-1.5 text-vital-900">
                <Pill className="w-4 h-4 text-vital-600" />
                Medications
              </span>
              <Plus className="w-4 h-4 text-clinical-300" />

              <span className="px-4 py-2 rounded-xl bg-vital-50 border border-vital-200 flex items-center gap-1.5 text-vital-900">
                <Stethoscope className="w-4 h-4 text-vital-600" />
                Previous Consultations
              </span>
            </div>
          </div>

          {/* Down Connector */}
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-vital-100 text-vital-700 flex items-center justify-center border border-vital-300 shadow-sm animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Tier 2: The Core Engine */}
          <div className="p-8 rounded-3xl bg-clinical-900 text-white shadow-xl text-center space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vital-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/20 text-vital-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Intelligent Synthesis Layer
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              DrGodly Health Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-clinical-300 max-w-lg mx-auto leading-relaxed">
              Proprietary clinical reasoning engine cross-checks pharmacological half-lives, longitudinal lab panels, and patient symptoms in real time.
            </p>
          </div>

          {/* Down Connector */}
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-vital-100 text-vital-700 flex items-center justify-center border border-vital-300 shadow-sm animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Tier 3: The Resulting Deliverables */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-clinical-200 shadow-clinical-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-400 block mb-4 text-center sm:text-left">
              Step 3: Tangible Clinical Outcomes
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-vital-50/50 border border-vital-200 space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-vital-700">For Patients</div>
                <div className="font-bold text-clinical-950 text-sm">Personalized Insights</div>
                <p className="text-xs text-clinical-600">Understand your lab patterns and symptoms in plain English.</p>
              </div>

              <div className="p-4 rounded-2xl bg-vital-50/50 border border-vital-200 space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-vital-700">For Clinicians</div>
                <div className="font-bold text-clinical-950 text-sm">Pre-Visit Report</div>
                <p className="text-xs text-clinical-600">60-second executive briefing ready before entering the call.</p>
              </div>

              <div className="p-4 rounded-2xl bg-vital-50/50 border border-vital-200 space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-vital-700">Together</div>
                <div className="font-bold text-clinical-950 text-sm">Better Doctor Conversation</div>
                <p className="text-xs text-clinical-600">Zero minutes wasted on repetitive clipboard questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
