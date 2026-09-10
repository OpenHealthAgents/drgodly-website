"use client";

import React, { useState } from "react";
import {
  Lock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  ShieldCheck,
  Eye,
  EyeOff
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const PatientPersonalizedAiSection: React.FC = () => {
  const [includeVitals, setIncludeVitals] = useState(true);
  const [includeMeds, setIncludeMeds] = useState(true);
  const [includeLabs, setIncludeLabs] = useState(true);

  const contextLevel = (includeVitals ? 1 : 0) + (includeMeds ? 1 : 0) + (includeLabs ? 1 : 0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital" icon={<Sliders className="w-3.5 h-3.5" />}>
            Personalized Clinical AI
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Get answers with the context you choose to share.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Generic chatbots give vague, anxiety-inducing web search results. DrGodly uses only the verified medical context you grant permission to reference—giving you safe, personalized clarity while protecting your privacy.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/40 p-6 sm:p-8 shadow-clinical-md">
          {/* User Privacy Permission Controls */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-clinical-100">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-vital-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-950">
                  Patient Data Permission Sliders
                </h4>
              </div>
              <span className="text-xs text-clinical-500 font-medium">
                {contextLevel === 3 ? "Complete Context (Maximum Personalization)" : `${contextLevel} of 3 Context Sources Active`}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setIncludeVitals(!includeVitals)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                  includeVitals
                    ? "bg-vital-50/70 border-vital-400 text-vital-950 font-semibold"
                    : "bg-clinical-50/60 border-clinical-200 text-clinical-500 line-through"
                }`}
              >
                <span className="text-xs">Blood Pressure & Vitals</span>
                {includeVitals ? <Eye className="w-3.5 h-3.5 text-vital-600 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 text-clinical-400 shrink-0" />}
              </button>

              <button
                onClick={() => setIncludeMeds(!includeMeds)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                  includeMeds
                    ? "bg-vital-50/70 border-vital-400 text-vital-950 font-semibold"
                    : "bg-clinical-50/60 border-clinical-200 text-clinical-500 line-through"
                }`}
              >
                <span className="text-xs">Active Prescriptions (Lisinopril)</span>
                {includeMeds ? <Eye className="w-3.5 h-3.5 text-vital-600 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 text-clinical-400 shrink-0" />}
              </button>

              <button
                onClick={() => setIncludeLabs(!includeLabs)}
                className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                  includeLabs
                    ? "bg-vital-50/70 border-vital-400 text-vital-950 font-semibold"
                    : "bg-clinical-50/60 border-clinical-200 text-clinical-500 line-through"
                }`}
              >
                <span className="text-xs">Laboratory Panels (Oct 2024)</span>
                {includeLabs ? <Eye className="w-3.5 h-3.5 text-vital-600 shrink-0" /> : <EyeOff className="w-3.5 h-3.5 text-clinical-400 shrink-0" />}
              </button>
            </div>
          </div>

          {/* Side-by-Side Comparison Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Generic Response Panel */}
            <div className="rounded-2xl border border-clinical-200 bg-white p-6 shadow-clinical-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-clinical-100 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-clinical-500 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    Without Medical Context
                  </span>
                  <span className="text-[10px] font-mono text-clinical-500 bg-clinical-100 px-2 py-0.5 rounded">
                    Generic Web AI
                  </span>
                </div>

                <p className="text-xs font-medium text-clinical-500 mb-2 italic">
                  Patient asks: &ldquo;I&apos;ve had a throbbing headache behind my eyes for 4 days.&rdquo;
                </p>

                <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-150 text-xs sm:text-sm text-clinical-700 leading-relaxed space-y-2">
                  <p>
                    A headache behind the eyes could be caused by tension, dehydration, cluster headaches, migraine, sinus infections, or elevated intracranial pressure.
                  </p>
                  <p className="text-clinical-500">
                    Try drinking water, reducing caffeine, and taking over-the-counter ibuprofen. If symptoms worsen, consult a clinician.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-clinical-100 flex items-center gap-2 text-xs text-amber-700 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>Vague list of 6 causes. Misses NSAID risks and personal vitals.</span>
              </div>
            </div>

            {/* Personalized DrGodly Response Panel */}
            <div className="rounded-2xl border border-vital-400 bg-gradient-to-br from-white to-vital-50/30 p-6 shadow-clinical-sm flex flex-col justify-between ring-1 ring-vital-300">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-vital-200 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-vital-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-vital-600" />
                    With Your Chosen Health Context
                  </span>
                  <span className="text-[10px] font-mono text-vital-800 bg-vital-100 px-2 py-0.5 rounded font-semibold">
                    DrGodly Grounded
                  </span>
                </div>

                <p className="text-xs font-medium text-vital-900 mb-2 italic">
                  Patient asks: &ldquo;I&apos;ve had a throbbing headache behind my eyes for 4 days.&rdquo;
                </p>

                <div className="p-4 rounded-xl bg-vital-50/70 border border-vital-200 text-xs sm:text-sm text-clinical-900 leading-relaxed space-y-2 font-normal">
                  <p>
                    {includeVitals && includeMeds ? (
                      <>
                        Because your recent blood pressure readings are stable (<strong>122/78 mmHg</strong> on Lisinopril 10mg) and you report no fever or neck stiffness, this headache pattern correlates with <strong>digital eyestrain and tension</strong> rather than blood pressure rebound.
                      </>
                    ) : (
                      <>
                        Based on your reported 4-day progression and absence of fever, this pattern suggests tension or eyestrain.
                      </>
                    )}
                  </p>
                  <p className="text-vital-800 text-xs">
                    {includeLabs && (
                      <>
                        • Cross-referenced: Recent normal kidney panel rules out hydration filtration anomalies.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-vital-200 flex items-center gap-2 text-xs text-vital-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                <span>Grounded in your real physiology. Pre-formatted for your doctor visit.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-clinical-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero advertising profiling • No data sold • Encrypted with your personal master key</span>
          </div>
        </div>
      </div>
    </section>
  );
};
