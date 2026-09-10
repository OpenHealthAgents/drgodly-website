"use client";

import React, { useState } from "react";
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  Sparkles,
  Calendar,
  Pill,
  FileText,
  BrainCircuit,
  FileEdit,
  CheckCircle2,
  Maximize2
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { analytics } from "@/lib/analytics";

type TelehealthSidebarTab =
  | "ai_summary"
  | "timeline"
  | "medications"
  | "reports"
  | "copilot"
  | "notes";

export const SimulatedTelemedicine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TelehealthSidebarTab>("ai_summary");
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);

  React.useEffect(() => {
    analytics.trackVideoPlayed("telemedicine_consult_simulation");
  }, []);

  return (
    <div className="rounded-3xl border border-clinical-200 bg-clinical-950 text-white shadow-clinical-2xl overflow-hidden flex flex-col max-w-6xl mx-auto">
      {/* Telemedicine Top Room Bar */}
      <div className="bg-clinical-900 px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              DrGodly Encrypted Telehealth Consult • Room #DG-7429
            </h3>
            <p className="text-[11px] text-clinical-400">
              Dr. Emily Vance, MD & Maya K. • 12:48 Elapsed • WebRTC End-to-End Encrypted
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="clinical" className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-[10px]">
            HD 1080p • 24ms Latency
          </Badge>
          <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-clinical-300">
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Workspace Split View: Left (Dual Video) & Right (Clinical Intelligence Drawer) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
        {/* LEFT PANE: DUAL VIDEO FEED (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between space-y-4 border-r border-white/10 bg-clinical-950">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 items-stretch">
            {/* Doctor Video Tile */}
            <div className="rounded-2xl bg-clinical-900 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-between relative z-10">
                <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-vital-300 border border-white/10">
                  Doctor Video (Host)
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Simulated Doctor Camera */}
              <div className="my-auto text-center py-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vital-600 to-vital-400 mx-auto flex items-center justify-center font-serif text-xl font-bold shadow-xl ring-2 ring-white/20 mb-2">
                  EV
                </div>
                <h4 className="text-xs font-bold text-white flex items-center justify-center gap-1">
                  <span>Dr. Emily Vance, MD</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-vital-400" />
                </h4>
                <p className="text-[10px] text-clinical-400">Internal Medicine • License #MD-48192</p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] text-clinical-400 pt-1">
                <span>Mic: Active (Krisp AI)</span>
                <span className="font-mono text-emerald-400">60 FPS</span>
              </div>
            </div>

            {/* Patient Video Tile */}
            <div className="rounded-2xl bg-clinical-900 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-between relative z-10">
                <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-clinical-300 border border-white/10">
                  Patient Video
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Simulated Patient Camera */}
              <div className="my-auto text-center py-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-clinical-700 to-clinical-800 mx-auto flex items-center justify-center font-serif text-xl font-bold text-white shadow-xl ring-2 ring-white/10 mb-2">
                  MK
                </div>
                <h4 className="text-xs font-bold text-white">Maya K. (Patient)</h4>
                <p className="text-[10px] text-clinical-400">San Francisco, CA • Mobile App Client</p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] text-clinical-400 pt-1">
                <span>Ambient Note Sync: On</span>
                <span className="font-mono text-emerald-400">Low Jitter</span>
              </div>
            </div>
          </div>

          {/* Live Transcript / Captioning Bar */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-clinical-300 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-vital-400 shrink-0 mt-0.5" />
            <p className="italic">
              <strong className="text-vital-300 not-italic">Dr. Vance:</strong> &ldquo;Maya, your Lisinopril adherence has been excellent, and given the lack of red flags, we can focus on ergonomic screen strain.&rdquo;
            </p>
          </div>

          {/* In-Call Controls Toolbar */}
          <div className="p-3 rounded-2xl bg-clinical-900 border border-white/10 flex items-center justify-center gap-4">
            <button
              onClick={() => setMicActive(!micActive)}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                micActive ? "bg-white/10 hover:bg-white/20 text-white" : "bg-rose-600 text-white"
              }`}
            >
              {micActive ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setVideoActive(!videoActive)}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                videoActive ? "bg-white/10 hover:bg-white/20 text-white" : "bg-rose-600 text-white"
              }`}
            >
              {videoActive ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </button>
            <button className="px-6 h-11 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-2 text-xs font-bold transition-all shadow-lg">
              <PhoneOff className="w-4 h-4" />
              <span>End Call</span>
            </button>
          </div>
        </div>

        {/* RIGHT PANE: CLINICAL INTELLIGENCE WORKSPACE (5 cols) */}
        <div className="lg:col-span-5 bg-clinical-900/60 flex flex-col justify-between p-4 sm:p-5">
          <div>
            {/* 6 Sub-Tab Navigation Bar */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 mb-4 text-[11px]">
              <button
                onClick={() => setActiveTab("ai_summary")}
                className={`py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                  activeTab === "ai_summary" ? "bg-vital-600 text-white font-bold" : "text-clinical-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>AI Summary</span>
              </button>
              <button
                onClick={() => setActiveTab("timeline")}
                className={`py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                  activeTab === "timeline" ? "bg-vital-600 text-white font-bold" : "text-clinical-400 hover:text-white"
                }`}
              >
                <Calendar className="w-3 h-3" />
                <span>Timeline</span>
              </button>
              <button
                onClick={() => setActiveTab("medications")}
                className={`py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                  activeTab === "medications" ? "bg-vital-600 text-white font-bold" : "text-clinical-400 hover:text-white"
                }`}
              >
                <Pill className="w-3 h-3" />
                <span>Meds</span>
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                  activeTab === "reports" ? "bg-vital-600 text-white font-bold" : "text-clinical-400 hover:text-white"
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>Reports</span>
              </button>
              <button
                onClick={() => setActiveTab("copilot")}
                className={`py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                  activeTab === "copilot" ? "bg-vital-600 text-white font-bold" : "text-clinical-400 hover:text-white"
                }`}
              >
                <BrainCircuit className="w-3 h-3" />
                <span>Copilot</span>
              </button>
              <button
                onClick={() => setActiveTab("notes")}
                className={`py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1 ${
                  activeTab === "notes" ? "bg-vital-600 text-white font-bold" : "text-clinical-400 hover:text-white"
                }`}
              >
                <FileEdit className="w-3 h-3" />
                <span>Notes</span>
              </button>
            </div>

            {/* TAB CONTENTS */}
            <div className="space-y-3 text-xs">
              {/* 1. AI SUMMARY */}
              {activeTab === "ai_summary" && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-vital-400">Pre-Visit Synthesis</span>
                    <span className="text-[10px] font-mono text-emerald-400">Ready in 60s</span>
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    Maya K. (38F) presents with 4-day bilateral tension-type headache escalating at 4 PM with screen exposure. History of mild HTN controlled on Lisinopril 10mg.
                  </p>
                  <div className="pt-2 border-t border-white/10 space-y-1 text-clinical-300">
                    <p>• Today&apos;s BP: 122/78 mmHg (optimal)</p>
                    <p>• Oct 2024 HbA1c: 5.6% (normal)</p>
                    <p>• Penicillin allergy flagged (urticaria)</p>
                  </div>
                </div>
              )}

              {/* 2. TIMELINE */}
              {activeTab === "timeline" && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-vital-400">Patient Longitudinal History</span>
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="font-mono text-[10px] text-clinical-400">Oct 18, 2024</span>
                      <p className="font-bold text-white">LabCorp Metabolic Draw</p>
                      <span className="text-[10px] text-emerald-400">HbA1c 5.6% • eGFR 96</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="font-mono text-[10px] text-clinical-400">Aug 22, 2024</span>
                      <p className="font-bold text-white">Dr. Vance Telehealth Follow-up</p>
                      <span className="text-[10px] text-clinical-300">Renewed Lisinopril 10mg</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. MEDICATIONS */}
              {activeTab === "medications" && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-vital-400">Active Regimen & Adherence</span>
                  <div className="p-2.5 rounded-xl bg-vital-500/10 border border-vital-400/20 space-y-1">
                    <div className="flex justify-between font-bold text-white">
                      <span>Lisinopril 10mg PO</span>
                      <span className="text-vital-400">Daily (AM)</span>
                    </div>
                    <p className="text-[10px] text-clinical-300">Rx #98234-CVS • 96% Adherence score</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between font-bold text-white">
                      <span>Vitamin D3 2,000 IU</span>
                      <span className="text-clinical-400">OTC Daily</span>
                    </div>
                    <p className="text-[10px] text-clinical-300">Normalized from 22 to 48 ng/mL</p>
                  </div>
                </div>
              )}

              {/* 4. REPORTS */}
              {activeTab === "reports" && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-vital-400">Source Lab Records</span>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-white text-xs">LabCorp_Metabolic_Oct2024.pdf</h5>
                      <span className="text-[10px] text-clinical-400">2.1 MB • Signed by Dr. S. Jenkins</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-[10px] h-7 px-2 border-white/20 text-white">
                      View PDF
                    </Button>
                  </div>
                </div>
              )}

              {/* 5. COPILOT */}
              {activeTab === "copilot" && (
                <div className="p-4 rounded-2xl bg-vital-500/10 border border-vital-400/30 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-vital-300">Clinical Decision Support</span>
                    <span className="text-[9px] font-mono bg-vital-500/30 text-vital-200 px-1.5 py-0.2 rounded">Non-Autonomous</span>
                  </div>
                  <p className="text-white text-xs leading-relaxed">
                    Primary differential: <strong>Digital Asthenopia / Tension Cephalalgia (78%)</strong>. Secondary: Hypertensive Variability (12%).
                  </p>
                  <p className="text-[11px] text-vital-200">
                    Suggested question: &ldquo;Do you notice relief within 20 minutes of stepping away from computer monitors?&rdquo;
                  </p>
                </div>
              )}

              {/* 6. NOTES */}
              {activeTab === "notes" && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-vital-400">Live Ambient Note Draft</span>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px] text-clinical-200 leading-relaxed">
                    S: 38F reports 4d bilateral retro-orbital tension headache, afternoon escalation with dual monitor usage. Negative red flags.
                    <br />
                    O: BP 122/78 mmHg, Alert & Oriented x4.
                    <br />
                    A: Tension-type headache (G44.209); Screen asthenopia.
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-clinical-400">
            <span>HIPAA BAA Active</span>
            <span className="text-vital-400 font-mono">FHIR Stream Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};
