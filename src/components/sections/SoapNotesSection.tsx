"use client";

import React, { useState } from "react";
import { 
  FileCheck2, 
  ArrowDown, 
  Copy, 
  Check, 
  Edit3, 
  CheckCircle2,
  PenTool
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { DOCTOR_WORKSPACE_DEMO } from "@/data/clinicalData";

export const SoapNotesSection: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [signed, setSigned] = useState(false);

  const initialSoap = DOCTOR_WORKSPACE_DEMO.soapNote;
  const [soap, setSoap] = useState(initialSoap);

  const handleCopy = () => {
    const text = `S:\n${soap.subjective}\n\nO:\n${soap.objective}\n\nA:\n${soap.assessment}\n\nP:\n${soap.plan}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-clinical-50/60 border-t border-b border-clinical-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Ambient Documentation</Badge>

          {/* Exact Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Stop documenting from scratch.
          </h2>

          {/* Exact Messaging */}
          <p className="mt-3 text-2xl font-bold text-vital-700 font-sans tracking-tight">
            Review. Edit. Sign.
          </p>

          <p className="mt-3 text-base text-clinical-600 leading-relaxed max-w-xl mx-auto">
            DrGodly captures ambient consultation dialogue and transforms it into a structured, specialty-tailored SOAP note within seconds of hanging up.
          </p>
        </div>

        {/* Conversation to SOAP Note Transformation */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Top: Consultation Conversation */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200 shadow-clinical-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-400 block">
              Live Consultation Audio Stream
            </span>
            <p className="text-xs sm:text-sm text-clinical-700 italic">
              &ldquo;Elena, looking at your potassium levels from November and the cramps you describe, let&apos;s stop the Hydrochlorothiazide and switch to Lisinopril 10mg. I&apos;m also ordering a repeat BMP panel today...&rdquo;
            </p>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-vital-100 text-vital-700 flex items-center justify-center border border-vital-300 shadow-sm animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom: AI-Generated SOAP Note with Editing Controls */}
          <div className="rounded-3xl border border-clinical-300 bg-white shadow-xl overflow-hidden">
            <div className="p-4 sm:px-6 bg-clinical-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-vital-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-clinical-200">
                  AI-Generated SOAP Note (Editable)
                </span>
              </div>

              {/* Editing Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-3 py-1 rounded-lg bg-clinical-800 hover:bg-clinical-700 text-xs font-semibold text-clinical-200 flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditing ? "Done Editing" : "Edit Note"}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="px-3 py-1 rounded-lg bg-clinical-800 hover:bg-clinical-700 text-xs font-semibold text-clinical-200 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-vital-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>

                <button
                  onClick={() => setSigned(true)}
                  disabled={signed}
                  className="px-3 py-1 rounded-lg bg-vital-600 hover:bg-vital-700 text-xs font-semibold text-white flex items-center gap-1 transition-colors disabled:opacity-60"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>{signed ? "Signed & Pushed" : "Sign Note"}</span>
                </button>
              </div>
            </div>

            {/* Note Body (S, O, A, P) */}
            <div className="p-6 sm:p-8 font-mono text-xs space-y-4 text-clinical-900 leading-relaxed bg-clinical-50/30">
              <div>
                <span className="font-bold text-vital-700 text-sm block mb-1">S (Subjective):</span>
                {isEditing ? (
                  <textarea
                    rows={2}
                    value={soap.subjective}
                    onChange={(e) => setSoap({ ...soap, subjective: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-clinical-300 font-sans text-xs bg-white"
                  />
                ) : (
                  <p className="font-sans text-clinical-800">{soap.subjective}</p>
                )}
              </div>

              <div>
                <span className="font-bold text-vital-700 text-sm block mb-1">O (Objective):</span>
                {isEditing ? (
                  <textarea
                    rows={2}
                    value={soap.objective}
                    onChange={(e) => setSoap({ ...soap, objective: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-clinical-300 font-sans text-xs bg-white"
                  />
                ) : (
                  <p className="font-sans text-clinical-800">{soap.objective}</p>
                )}
              </div>

              <div>
                <span className="font-bold text-vital-700 text-sm block mb-1">A (Assessment):</span>
                {isEditing ? (
                  <textarea
                    rows={2}
                    value={soap.assessment}
                    onChange={(e) => setSoap({ ...soap, assessment: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-clinical-300 font-sans text-xs bg-white"
                  />
                ) : (
                  <p className="font-sans text-clinical-800 whitespace-pre-line">{soap.assessment}</p>
                )}
              </div>

              <div>
                <span className="font-bold text-vital-700 text-sm block mb-1">P (Plan):</span>
                {isEditing ? (
                  <textarea
                    rows={3}
                    value={soap.plan}
                    onChange={(e) => setSoap({ ...soap, plan: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-clinical-300 font-sans text-xs bg-white"
                  />
                ) : (
                  <p className="font-sans text-clinical-800 whitespace-pre-line">{soap.plan}</p>
                )}
              </div>
            </div>

            {signed && (
              <div className="p-3 bg-vital-100 border-t border-vital-200 text-center text-xs text-vital-900 font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vital-700" />
                <span>Digitally signed by Attending Physician • Pushed to EHR via FHIR HL7 bridge</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
