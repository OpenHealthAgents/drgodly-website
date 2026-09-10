"use client";

import React, { useState } from "react";
import {
  Bot,
  User,
  AlertTriangle,
  Sparkles,
  Send,
  FileCheck2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Tag,
  RefreshCw
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Message {
  id: string;
  sender: "ai" | "patient";
  text: string;
  time: string;
  chips?: string[];
  isWarning?: boolean;
}

export const SimulatedAiIntake: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [totalSteps] = useState<number>(4);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      sender: "ai",
      text: "Hi Maya, I'm your DrGodly clinical assistant. I see from your health record that you're currently taking Lisinopril 10mg daily for blood pressure. What symptoms would you like help with today?",
      time: "10:14 AM",
    },
    {
      id: "m2",
      sender: "patient",
      text: "I've been feeling unusually tired for the past 3 weeks, and lately I'm getting dull headaches behind my eyes by late afternoon.",
      time: "10:15 AM",
      chips: ["Fatigue: 3 weeks", "Retro-orbital headache", "Late afternoon onset"],
    },
    {
      id: "m3",
      sender: "ai",
      text: "Thank you for sharing that context. To help your doctor prepare: Have you noticed any blurred vision, nausea, fever, or neck stiffness with these headaches?",
      time: "10:15 AM",
    },
    {
      id: "m4",
      sender: "patient",
      text: "No fever, vision changes, or neck stiffness. But bright computer monitors definitely make the headache sharper toward 4 PM.",
      time: "10:16 AM",
      chips: ["No fever", "No vision changes", "No neck stiffness", "Screen-aggravated"],
    },
    {
      id: "m5",
      sender: "ai",
      text: "Understood. That points toward tension and digital eyestrain rather than an acute intracranial issue. Are you taking any other over-the-counter pain medications, and when was your last blood pressure reading?",
      time: "10:17 AM",
    },
  ]);

  const activeChips = [
    { label: "Chief Concern", val: "Tension / Retro-orbital Headache", color: "bg-vital-50 text-vital-800 border-vital-200" },
    { label: "Duration", val: "3 Weeks Escalating", color: "bg-clinical-100 text-clinical-800 border-clinical-200" },
    { label: "Active Rx", val: "Lisinopril 10mg PO AM", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
    { label: "Safety Triage", val: "Red Flags Negative", color: "bg-sky-50 text-sky-800 border-sky-200" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg: Message = {
      id: `m-${Date.now()}`,
      sender: "patient",
      text: inputVal,
      time: "10:18 AM",
      chips: ["Self-reported: " + inputVal.slice(0, 20)],
    };

    setMessages((prev) => [
      ...prev,
      newMsg,
      {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: "Thank you, Maya. I have compiled all these details into your structured pre-visit report for Dr. Emily Vance to review before you connect.",
        time: "10:18 AM",
      },
    ]);
    setInputVal("");
    setCurrentStep(4);
  };

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-4xl mx-auto">
      {/* Top Application Bar */}
      <div className="bg-clinical-950 text-white px-5 py-3.5 flex items-center justify-between border-b border-clinical-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-vital-500 flex items-center justify-center text-white shadow-clinical-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold tracking-wide uppercase text-white">
                DrGodly AI Intake Assistant
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[11px] text-clinical-400">
              Patient: Maya K. • Clinical Protocol: Adaptive Primary Care Triage
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="clinical" className="bg-white/10 text-vital-300 border-white/20 text-[10px]">
            Live Intake Protocol
          </Badge>
        </div>
      </div>

      {/* Progress Indicator Bar */}
      <div className="bg-clinical-50 px-5 py-2.5 border-b border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-clinical-700">
            Step {currentStep} of {totalSteps}: Clinical Assessment & Context Correlation
          </span>
          <span className="text-[11px] font-mono text-vital-700 bg-vital-100 px-2 py-0.5 rounded font-bold">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full sm:w-48 h-2 bg-clinical-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-vital-600 transition-all duration-500 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Active Context Chips Bar */}
      <div className="bg-white px-5 py-2.5 border-b border-clinical-150 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-400 shrink-0 flex items-center gap-1">
          <Tag className="w-3 h-3 text-vital-600" />
          Live Extracted Context:
        </span>
        {activeChips.map((chip, idx) => (
          <span
            key={idx}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium shrink-0 flex items-center gap-1.5 ${chip.color}`}
          >
            <span className="font-semibold">{chip.label}:</span>
            <span>{chip.val}</span>
          </span>
        ))}
      </div>

      {/* Emergency Warning Banner State */}
      <div className="bg-amber-50/90 border-b border-amber-200 px-5 py-2.5 flex items-start sm:items-center gap-2.5 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
        <div className="flex-1">
          <strong>Emergency Surveillance Active:</strong> If you experience sudden &ldquo;thunderclap&rdquo; headache, loss of consciousness, speech difficulty, or severe chest pain, call 911 immediately.
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded shrink-0">
          Red Flag Ruleset v4.2
        </span>
      </div>

      {/* Main Chat Stream / Summary View */}
      <div className="p-5 sm:p-6 bg-clinical-50/30 flex-1 min-h-[380px] max-h-[500px] overflow-y-auto space-y-4">
        {showSummary ? (
          /* Generated Summary View */
          <div className="rounded-2xl border border-vital-300 bg-white p-6 shadow-clinical-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-clinical-200">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-vital-600" />
                <h4 className="text-sm font-bold text-clinical-950 uppercase tracking-wide">
                  AI-Generated Pre-Visit Intake Summary
                </h4>
              </div>
              <button
                onClick={() => setShowSummary(false)}
                className="text-xs text-vital-600 hover:text-vital-800 font-medium flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Return to Chat
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-vital-700 block">
                  Chief Concern & Timeline
                </span>
                <p className="text-clinical-900 font-medium">
                  3-week history of fatigue and 4-day escalating bilateral retro-orbital headaches. Worse late afternoon with screen exposure.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 block">
                  Red Flag Surveillance
                </span>
                <p className="text-emerald-700 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Negative for fever, visual disturbances, nuchal rigidity, or focal deficits.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 block">
                  Medication Reconciliation
                </span>
                <p className="text-clinical-900 font-medium">
                  Active Lisinopril 10mg PO AM (adherence verified 96%). No current NSAID overuse.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 block">
                  Suggested Physician Focus
                </span>
                <p className="text-clinical-900 font-medium">
                  Evaluation of digital eyestrain / tension cephalalgia vs. hypertensive variability. Review workplace ergonomics.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-clinical-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <ShieldCheck className="w-4 h-4" />
                Validated for Attending Physician Transmission
              </span>
              <span className="font-mono text-[11px]">Ready for Video Room</span>
            </div>
          </div>
        ) : (
          /* Chat Stream */
          <>
            {messages.map((m) => {
              const isAi = m.sender === "ai";
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${isAi ? "justify-start" : "justify-end"}`}
                >
                  {isAi && (
                    <div className="w-8 h-8 rounded-xl bg-vital-100 border border-vital-200 flex items-center justify-center text-vital-700 shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[85%] sm:max-w-[75%] space-y-1.5 ${isAi ? "items-start" : "items-end"}`}>
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-clinical-xs ${
                        isAi
                          ? "bg-white border border-clinical-200 text-clinical-900 rounded-tl-sm"
                          : "bg-vital-600 text-white rounded-tr-sm font-medium"
                      }`}
                    >
                      {m.text}
                    </div>

                    {m.chips && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5 justify-end">
                        {m.chips.map((c, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-vital-100 text-vital-800 font-mono text-[10px] font-semibold"
                          >
                            ✓ {c}
                          </span>
                        ))}
                      </div>
                    )}

                    <span className="text-[10px] text-clinical-400 block px-1">
                      {m.time}
                    </span>
                  </div>

                  {!isAi && (
                    <div className="w-8 h-8 rounded-xl bg-clinical-900 text-white flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Summary Generation Quick Action & Chat Input Bar */}
      <div className="p-4 bg-white border-t border-clinical-200 space-y-3">
        {/* Quick action bar */}
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowSummary(!showSummary)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-vital-50 border border-vital-200 text-xs font-semibold text-vital-800 hover:bg-vital-100 transition-colors shadow-clinical-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-vital-600" />
            <span>{showSummary ? "Back to Active Chat" : "Generate Pre-Visit Summary Now"}</span>
          </button>

          <span className="text-[11px] text-clinical-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Intake duration: 2m 45s
          </span>
        </div>

        {/* Input form */}
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type your response (e.g., 'Last BP was 122/78 this morning')..."
            className="flex-1 bg-clinical-50 border border-clinical-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-clinical-900 placeholder:text-clinical-400 focus:outline-none focus:ring-2 focus:ring-vital-500 focus:bg-white transition-all"
          />
          <Button
            type="submit"
            variant="vital"
            size="sm"
            className="h-10 px-4"
            disabled={!inputVal.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
