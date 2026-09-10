"use client";

import React, { useState } from "react";
import {
  Edit3,
  CheckCircle2,
  Copy,
  Check,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const SimulatedSoapNotes: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [subjective, setSubjective] = useState<string>(
    "Maya K., a 38-year-old female with known history of mild essential hypertension on Lisinopril 10mg PO Daily, presents for evaluation of a 4-day history of bilateral retro-orbital headaches. Pain is characterized as dull and throbbing, rated 4/10 upon waking and escalating to 7/10 by late afternoon (~4:00 PM). Symptoms correlate with prolonged computer display work (10h/day) and work-related fatigue. Denies photophobia aura, nausea, vomiting, fever, or nuchal rigidity. No relief with OTC acetaminophen. Home blood pressure logged this morning was 122/78 mmHg."
  );

  const [objective, setObjective] = useState<string>(
    "Vitals: BP 122/78 mmHg (seated, right arm), HR 68 bpm (regular sinus), Temp 98.4°F, SpO2 99% on room air, BMI 23.4.\nGeneral: Well-nourished, alert and oriented x4 in no acute distress.\nHEENT: Normocephalic, atraumatic. Pupils equal, round, reactive to light (PERRL). Extraocular movements intact (EOMI) without nystagmus. Mild tenderness to bilateral trapezius and suboccipital musculature upon palpation.\nNeurological: Cranial nerves II-XII grossly intact. No focal motor or sensory deficits. Gait normal."
  );

  const [assessment, setAssessment] = useState<string>(
    "1. Tension-type headache, unspecified (ICD-10: G44.209) — Primary etiology, consistent with bilateral distribution, lack of migrainous features, and afternoon asthenopia.\n2. Digital eye strain / asthenopia (ICD-10: H53.149) — Aggravating contributor secondary to prolonged screen exposure.\n3. Essential (primary) hypertension (ICD-10: I10) — Stable, well-controlled on current ACE-inhibitor regimen."
  );

  const [plan, setPlan] = useState<string>(
    "1. Non-Pharmacologic / Ergonomics: Implement the 20-20-20 screen rule (every 20 minutes, look at an object 20 feet away for 20 seconds). Optimize monitor eye-level distance and consider blue-light filtration lenses. Hydration target: 2.5L daily.\n2. Pharmacotherapy: Trial Naproxen 375mg PO BID with food PRN at early onset of afternoon headache (max 3 consecutive days to prevent medication-overuse headache). Avoid daily NSAID reliance.\n3. Hypertension Maintenance: Continue Lisinopril 10mg PO once daily in morning. Maintain twice-weekly home BP log in DrGodly health vault.\n4. Preventive Follow-Up: Schedule routine optometrist refraction examination to rule out uncorrected astigmatism. Return to clinic in 4 weeks or sooner if red-flag symptoms arise.\nCPT Code: 99213 (Office/Outpatient Established, Level 3 E/M)."
  );

  const handleCopy = () => {
    const fullNote = `SUBJECTIVE:\n${subjective}\n\nOBJECTIVE:\n${objective}\n\nASSESSMENT:\n${assessment}\n\nPLAN:\n${plan}`;
    navigator.clipboard.writeText(fullNote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Top Application Bar */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-semibold uppercase tracking-wider">
                Ambient AI Scribe v5.2
              </span>
              <span className="text-xs text-clinical-400 font-mono">Generated in 8.4 seconds</span>
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Clinical SOAP Encounter Note
            </h3>
            <p className="text-xs text-clinical-300 mt-0.5">
              Encounter: Telehealth Consult #DG-7429 • Attending: Dr. Emily Vance, MD • Patient: Maya K.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs text-white border-white/20 hover:bg-white/10"
              icon={<Edit3 className="w-3.5 h-3.5" />}
            >
              {isEditing ? "Exit Edit Mode" : "Edit Sections"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="text-xs text-white border-white/20 hover:bg-white/10"
              icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            >
              {copied ? "Copied" : "Copy Note"}
            </Button>
            <Button
              variant="vital"
              size="sm"
              className="text-xs"
              icon={<CheckCircle2 className="w-3.5 h-3.5" />}
            >
              Sign & Push to EHR
            </Button>
          </div>
        </div>

        {/* Coding badges bar */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs">
          <span className="text-clinical-400 font-mono">Billable Codes:</span>
          <span className="px-2.5 py-1 rounded-md bg-vital-500/20 text-vital-300 border border-vital-400/30 font-mono font-bold text-[11px]">
            CPT: 99213 (Outpatient E/M)
          </span>
          <span className="px-2.5 py-1 rounded-md bg-vital-500/20 text-vital-300 border border-vital-400/30 font-mono font-bold text-[11px]">
            ICD-10: G44.209 (Tension Headache)
          </span>
          <span className="px-2.5 py-1 rounded-md bg-vital-500/20 text-vital-300 border border-vital-400/30 font-mono font-bold text-[11px]">
            ICD-10: I10 (Essential HTN)
          </span>
        </div>
      </div>

      {/* Main SOAP Container with 4 Editable Sections */}
      <div className="p-6 sm:p-8 space-y-6 bg-clinical-50/30">
        {/* S - SUBJECTIVE */}
        <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vital-700 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vital-100 text-vital-800 flex items-center justify-center font-bold text-xs">
                S
              </span>
              Subjective (HPI & Patient Report)
            </h4>
            <span className="text-[10px] font-mono text-clinical-400">
              {isEditing ? "Editing Active" : "Ambient Transcribed"}
            </span>
          </div>

          {isEditing ? (
            <textarea
              value={subjective}
              onChange={(e) => setSubjective(e.target.value)}
              rows={4}
              className="w-full p-3 rounded-xl border border-vital-300 bg-vital-50/20 text-xs sm:text-sm text-clinical-900 focus:outline-none focus:ring-2 focus:ring-vital-500 font-sans leading-relaxed"
            />
          ) : (
            <p className="text-xs sm:text-sm text-clinical-800 leading-relaxed font-normal">
              {subjective}
            </p>
          )}
        </div>

        {/* O - OBJECTIVE */}
        <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vital-700 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vital-100 text-vital-800 flex items-center justify-center font-bold text-xs">
                O
              </span>
              Objective (Vitals & Physical Exam Findings)
            </h4>
            <span className="text-[10px] font-mono text-clinical-400">
              {isEditing ? "Editing Active" : "Verified In-Call"}
            </span>
          </div>

          {isEditing ? (
            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              rows={4}
              className="w-full p-3 rounded-xl border border-vital-300 bg-vital-50/20 text-xs sm:text-sm text-clinical-900 focus:outline-none focus:ring-2 focus:ring-vital-500 font-sans leading-relaxed font-mono"
            />
          ) : (
            <div className="text-xs sm:text-sm text-clinical-800 leading-relaxed whitespace-pre-line font-mono bg-clinical-50/50 p-3.5 rounded-xl border border-clinical-150">
              {objective}
            </div>
          )}
        </div>

        {/* A - ASSESSMENT */}
        <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vital-700 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vital-100 text-vital-800 flex items-center justify-center font-bold text-xs">
                A
              </span>
              Assessment (Clinical Diagnoses)
            </h4>
            <span className="text-[10px] font-mono text-emerald-600 font-semibold">ICD-10 Cross-Checked</span>
          </div>

          {isEditing ? (
            <textarea
              value={assessment}
              onChange={(e) => setAssessment(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl border border-vital-300 bg-vital-50/20 text-xs sm:text-sm text-clinical-900 focus:outline-none focus:ring-2 focus:ring-vital-500 font-sans leading-relaxed"
            />
          ) : (
            <div className="text-xs sm:text-sm text-clinical-900 leading-relaxed whitespace-pre-line font-medium">
              {assessment}
            </div>
          )}
        </div>

        {/* P - PLAN */}
        <div className="p-5 rounded-2xl bg-white border border-vital-300 bg-vital-50/20 shadow-clinical-xs space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vital-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vital-600 text-white flex items-center justify-center font-bold text-xs">
                P
              </span>
              Plan & Orders (Interventions, Rx, Follow-Up)
            </h4>
            <span className="text-[10px] font-mono text-vital-800 font-semibold">Patient Summary Synced</span>
          </div>

          {isEditing ? (
            <textarea
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              rows={5}
              className="w-full p-3 rounded-xl border border-vital-300 bg-white text-xs sm:text-sm text-clinical-900 focus:outline-none focus:ring-2 focus:ring-vital-500 font-sans leading-relaxed"
            />
          ) : (
            <div className="text-xs sm:text-sm text-clinical-900 leading-relaxed whitespace-pre-line">
              {plan}
            </div>
          )}
        </div>

        {/* Doctor Electronic Signature Stamp */}
        <div className="p-4 rounded-2xl bg-white border border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-clinical-600">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-vital-600" />
            <span>
              Electronically signed: <strong>Dr. Emily Vance, MD (NPI: #1849204819)</strong> • Oct 24, 2024 at 10:32 AM
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            FHIR DocumentReference Validated
          </span>
        </div>
      </div>
    </div>
  );
};
