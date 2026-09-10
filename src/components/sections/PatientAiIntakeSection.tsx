"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  User,
  CheckCircle2,
  Clock,
  ShieldCheck,
  HeartPulse,
  Send,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Scenario {
  id: string;
  name: string;
  patientPrompt: string;
  aiResponse: string;
  patientFollowUp: string;
  aiSynthesis: string;
  extractedContext: {
    chiefComplaint: string;
    onset: string;
    pertinentNegative: string;
    matchedRx: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "headache",
    name: "Headache & Fatigue",
    patientPrompt: "I've been having this dull throbbing headache behind both eyes for 4 days, and I feel unusually fatigued by late afternoon.",
    aiResponse: "I understand how draining that is. Because your records note mild hypertension and screen-intensive work, could you tell me: is the pain worse with bright lights, and have you noticed any neck stiffness, fever, or changes in vision?",
    patientFollowUp: "Bright computer monitors make it sharper by 3 PM, but no fever, vision changes, or neck stiffness.",
    aiSynthesis: "Thank you. I have structured your 4-day symptom progression, ruled out acute red flags (no photophobia/stiffness), correlated your Lisinopril 10mg morning schedule, and drafted a focused pre-briefing for your doctor.",
    extractedContext: {
      chiefComplaint: "Bilateral retro-orbital tension headache",
      onset: "4 days (afternoon escalation)",
      pertinentNegative: "Negative for fever, visual aura, nuchal rigidity",
      matchedRx: "Correlated w/ Lisinopril 10mg PO Daily",
    },
  },
  {
    id: "cough",
    name: "Lingering Cough",
    patientPrompt: "I got over a mild cold 10 days ago, but I still have this dry hacking cough that keeps waking me up at night.",
    aiResponse: "Lingering post-viral coughs can be very disruptive. Are you having any shortness of breath when walking up stairs, wheezing, or bringing up colored phlegm?",
    patientFollowUp: "No phlegm—it's completely dry. Breathing is fine during the day, just dry throat tickle when lying flat in bed.",
    aiSynthesis: "Understood. I've noted a classic post-viral nocturnal tracheobronchial sensitivity pattern with zero exertional dyspnea, cross-referenced your allergy history (allergic rhinitis), and prepared targeted options for your physician to review.",
    extractedContext: {
      chiefComplaint: "Nocturnal dry post-infectious cough",
      onset: "10 days post-viral recovery",
      pertinentNegative: "Negative for exertional dyspnea, sputum, hemoptysis",
      matchedRx: "Noted seasonal allergic rhinitis history",
    },
  },
  {
    id: "stomach",
    name: "Digestive Discomfort",
    patientPrompt: "I get this burning fullness in my upper stomach about 45 minutes after dinner, especially if I eat later than 8 PM.",
    aiResponse: "That discomfort can really interfere with sleep. Does the burning radiate up toward your throat or chest, and have you noticed relief after taking any antacids or drinking water?",
    patientFollowUp: "It burns right below the breastbone. Warm water helps slightly, but lying down makes it worse.",
    aiSynthesis: "Got it. I've logged this post-prandial reflux pattern, noted the positional worsening when supine, verified you take no NSAIDs that could irritate gastric mucosa, and structured this for your doctor's immediate evaluation.",
    extractedContext: {
      chiefComplaint: "Post-prandial epigastric pyrosis / GERD-like symptom",
      onset: "Post-dinner (~45m), worse when supine",
      pertinentNegative: "Zero NSAID usage, no dysphagia or black stools",
      matchedRx: "Dietary & meal-timing triggers flagged",
    },
  },
];

interface PatientAiIntakeSectionProps {
  onOpenQuickAssess?: () => void;
}

export const PatientAiIntakeSection: React.FC<PatientAiIntakeSectionProps> = ({
  onOpenQuickAssess,
}) => {
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0]);

  return (
    <section className="py-24 bg-clinical-50/50 border-t border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="clinical" icon={<Bot className="w-3.5 h-3.5 text-vital-600" />}>
            Conversational AI Intake
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Just talk. DrGodly knows what to ask.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Forget 20-page clipboard packets filled with confusing medical jargon. Simply explain how you feel in everyday language. DrGodly asks adaptive clinical follow-ups and organizes your story for the doctor.
          </p>
        </div>

        {/* Scenario Selectors */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-2xl mx-auto">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScenario(s)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeScenario.id === s.id
                  ? "bg-clinical-900 text-white shadow-clinical-sm"
                  : "bg-white text-clinical-600 border border-clinical-200 hover:bg-clinical-50"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Interactive Dual-Panel Mockup */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chat Stream (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-clinical-200 bg-white p-5 sm:p-7 shadow-clinical-md flex flex-col justify-between min-h-[480px]">
            <div>
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-clinical-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-vital-50 border border-vital-200 flex items-center justify-center text-vital-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-clinical-950 text-sm">DrGodly Clinical Guide</h3>
                    <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Listening & Context Verification
                    </p>
                  </div>
                </div>
                <Badge variant="neutral" className="text-[10px]">
                  Zero Jargon Intake
                </Badge>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* User Message 1 */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-vital-600 text-white p-3.5 shadow-clinical-xs leading-relaxed">
                    {activeScenario.patientPrompt}
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-clinical-100 flex items-center justify-center text-clinical-600 shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI Response 1 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-vital-100 flex items-center justify-center text-vital-700 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-clinical-50 border border-clinical-200 text-clinical-800 p-3.5 leading-relaxed">
                    {activeScenario.aiResponse}
                  </div>
                </div>

                {/* User Follow-up */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-vital-600 text-white p-3.5 shadow-clinical-xs leading-relaxed">
                    {activeScenario.patientFollowUp}
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-clinical-100 flex items-center justify-center text-clinical-600 shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI Synthesis */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-vital-100 flex items-center justify-center text-vital-700 shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-vital-50/70 border border-vital-200 text-clinical-900 p-3.5 leading-relaxed font-medium">
                    <span className="text-vital-700 font-bold block text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Context Extracted & Synthesized
                    </span>
                    {activeScenario.aiSynthesis}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom input simulation */}
            <div className="mt-6 pt-4 border-t border-clinical-100 flex items-center gap-2">
              <div className="flex-1 bg-clinical-50 border border-clinical-200 rounded-xl px-4 py-2.5 text-xs text-clinical-400 flex items-center justify-between">
                <span>Describe additional symptoms or ask a question...</span>
                <Clock className="w-3.5 h-3.5 text-clinical-300" />
              </div>
              <Button
                variant="vital"
                size="sm"
                className="h-10 px-4"
                onClick={onOpenQuickAssess}
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Live Clinical Entity Extraction (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-clinical-200 bg-clinical-900 text-white p-6 sm:p-7 shadow-clinical-lg space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-vital-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-200">
                  Live Structured Briefing
                </h4>
              </div>
              <span className="text-[11px] font-mono text-vital-400 bg-vital-500/20 px-2 py-0.5 rounded">
                Physician View
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-vital-400 block">
                  Identified Chief Complaint
                </span>
                <p className="text-sm font-semibold text-white">
                  {activeScenario.extractedContext.chiefComplaint}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-clinical-400 block">
                  Onset & Aggravating Factors
                </span>
                <p className="text-xs text-clinical-200">
                  {activeScenario.extractedContext.onset}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-clinical-400 block">
                  Pertinent Negatives (Triage Safety)
                </span>
                <p className="text-xs text-clinical-200">
                  {activeScenario.extractedContext.pertinentNegative}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-clinical-400 block">
                  Cross-Referenced Health Record
                </span>
                <p className="text-xs text-clinical-200">
                  {activeScenario.extractedContext.matchedRx}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-vital-300">
                <ShieldCheck className="w-4 h-4 text-vital-400" />
                <span>Ready for your doctor in 60 seconds</span>
              </div>
              <Button
                variant="vital"
                size="sm"
                className="w-full text-xs"
                onClick={onOpenQuickAssess}
                icon={<Zap className="w-3.5 h-3.5" />}
              >
                Try Conversational Intake Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
