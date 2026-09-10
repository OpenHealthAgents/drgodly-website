"use client";

import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Wifi
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface TelemedicineSectionProps {
  onTalkToDoctor?: () => void;
}

export const TelemedicineSection: React.FC<TelemedicineSectionProps> = ({
  onTalkToDoctor,
}) => {
  return (
    <section className="py-24 bg-clinical-50/60 border-t border-b border-clinical-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Contextual Telehealth Consultations</Badge>

          {/* Exact Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            When you need a doctor, the doctor already has the context.
          </h2>

          <div className="mt-4 space-y-1">
            <p className="text-base sm:text-lg font-semibold text-vital-700">
              Less time collecting information. More time caring for the patient.
            </p>
            <p className="text-sm text-clinical-600">
              No staring at computer screens typing notes. Consultations are focused entirely on human healing.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              variant="vital"
              size="lg"
              onClick={onTalkToDoctor}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to a Doctor
            </Button>
          </div>
        </div>

        {/* Telemedicine Full Interface Mockup */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-800 bg-clinical-950 text-white shadow-2xl overflow-hidden">
          {/* Top Session Status */}
          <div className="p-4 sm:px-6 bg-clinical-900 border-b border-clinical-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-300 font-mono">
                Active Telehealth Consultation • ID #TEL-9940
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-vital-400 font-mono">
              <Wifi className="w-3.5 h-3.5" />
              <span>1080p Encrypted TLS 1.3</span>
            </div>
          </div>

          {/* Video & Clinical Split Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Col: Patient & Doctor Video feeds (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Doctor Video Box */}
              <div className="relative rounded-2xl bg-clinical-900 border border-clinical-800 aspect-video flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                <div className="w-20 h-20 rounded-full bg-vital-500/20 text-vital-400 font-bold text-2xl flex items-center justify-center border border-vital-400/30 mb-2">
                  SL
                </div>
                <div className="text-white font-bold text-base">Dr. Sarah Lin, MD</div>
                <div className="text-xs text-clinical-400">Board-Certified Internal Medicine</div>
                <span className="absolute bottom-3 left-3 bg-clinical-950/80 px-2.5 py-1 rounded-md text-[11px] font-mono text-vital-300 border border-clinical-800">
                  Doctor Video Feed
                </span>
              </div>

              {/* Patient Video Box */}
              <div className="p-4 rounded-xl bg-clinical-900 border border-clinical-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-clinical-800 text-clinical-200 font-bold text-xs flex items-center justify-center border border-clinical-700">
                    ER
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Elena Rostova (Patient Video)</div>
                    <div className="text-[11px] text-clinical-400">Home Video Link • San Francisco, CA</div>
                  </div>
                </div>
                <Badge variant="vital">Full Eye-Contact Active</Badge>
              </div>
            </div>

            {/* Right Col: Patient Summary, Timeline, Medications, Reports, AI Assistant (5 cols) */}
            <div className="lg:col-span-5 space-y-3 text-xs">
              {/* Patient Summary */}
              <div className="p-3.5 rounded-xl bg-clinical-900 border border-clinical-800 space-y-1">
                <span className="font-bold text-vital-400 text-[11px] uppercase tracking-wider block">
                  Patient Summary
                </span>
                <p className="text-clinical-200">
                  46yo female with HTN. Experiencing 3-wk fatigue & orthostatic presyncope.
                </p>
              </div>

              {/* Timeline */}
              <div className="p-3.5 rounded-xl bg-clinical-900 border border-clinical-800 space-y-1">
                <span className="font-bold text-vital-400 text-[11px] uppercase tracking-wider block">
                  Timeline
                </span>
                <p className="text-clinical-300">
                  Week 1 lethargy → Week 2 orthostatic dizziness → Week 3 calf cramps.
                </p>
              </div>

              {/* Medications & Relevant Reports */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-clinical-900 border border-clinical-800 space-y-1">
                  <span className="font-bold text-clinical-400 text-[10px] uppercase block">Medications</span>
                  <p className="text-white text-[11px] font-mono">HCTZ 25mg QD</p>
                  <p className="text-white text-[11px] font-mono">Metformin 500mg</p>
                </div>
                <div className="p-3 rounded-xl bg-clinical-900 border border-clinical-800 space-y-1">
                  <span className="font-bold text-clinical-400 text-[10px] uppercase block">Relevant Reports</span>
                  <p className="text-white text-[11px]">Serum K+: 3.3 mEq/L</p>
                  <p className="text-white text-[11px]">eGFR 82 mL/min</p>
                </div>
              </div>

              {/* AI Clinical Assistant Feed */}
              <div className="p-4 rounded-xl bg-vital-950/60 border border-vital-500/40 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-vital-300 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-vital-400" />
                  <span>AI Clinical Assistant</span>
                </div>
                <p className="text-clinical-200 text-[11px] leading-relaxed">
                  Silent listening active. Recommending check of orthostatic blood pressure and immediate repeat basic metabolic panel (BMP).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
