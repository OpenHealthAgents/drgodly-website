import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const PreVisitReportSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Executive Clinical Synthesis</Badge>

          {/* Exact Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Walk into your appointment already prepared.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Eliminate frantic pre-charting. DrGodly synthesizes patient conversations and longitudinal records into a clear 60-second clinical briefing before the visit begins.
          </p>
        </div>

        {/* Transformation Progression Flow */}
        <div className="max-w-5xl mx-auto mb-16 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[700px] text-xs font-bold text-clinical-800">
            <div className="px-3.5 py-2 rounded-xl bg-clinical-100 border border-clinical-200">
              1. Patient Conversation
            </div>
            <ArrowRight className="w-4 h-4 text-vital-600 shrink-0" />

            <div className="px-3.5 py-2 rounded-xl bg-clinical-100 border border-clinical-200">
              2. AI Intake
            </div>
            <ArrowRight className="w-4 h-4 text-vital-600 shrink-0" />

            <div className="px-3.5 py-2 rounded-xl bg-clinical-100 border border-clinical-200">
              3. Health History
            </div>
            <ArrowRight className="w-4 h-4 text-vital-600 shrink-0" />

            <div className="px-3.5 py-2 rounded-xl bg-clinical-100 border border-clinical-200">
              4. Relevant Records
            </div>
            <ArrowRight className="w-4 h-4 text-vital-600 shrink-0" />

            <div className="px-3.5 py-2 rounded-xl bg-vital-100 text-vital-900 border border-vital-300 font-extrabold shadow-sm">
              5. AI Pre-Visit Report
            </div>
            <ArrowRight className="w-4 h-4 text-vital-600 shrink-0" />

            <div className="px-3.5 py-2 rounded-xl bg-clinical-900 text-white font-extrabold shadow-sm">
              6. Doctor
            </div>
          </div>
        </div>

        {/* Complete Simulated Clinical Report (All 10 required items) */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-clinical-300/90 bg-clinical-50/40 p-6 sm:p-10 shadow-clinical-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-clinical-200 pb-4">
            <div>
              <span className="text-xs font-bold text-clinical-400 uppercase tracking-wider block">
                Executive Pre-Visit Clinical Briefing
              </span>
              <h3 className="text-lg font-bold text-clinical-950">
                Patient: Elena Rostova (46yo F) • MRN #DG-884219
              </h3>
            </div>
            <Badge variant="vital">Ready in 45 Seconds</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* 1. Chief Concern */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                1. Chief Concern
              </span>
              <p className="text-clinical-700">Subacute fatigue, postural dizziness, and bilateral calf cramps x 3 weeks.</p>
            </div>

            {/* 2. Timeline */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                2. Symptom Timeline
              </span>
              <p className="text-clinical-700">Wk 1: Mid-day lethargy → Wk 2: Dizziness upon standing (~15s) → Wk 3: Nocturnal calf twitches.</p>
            </div>

            {/* 3. History of Present Illness */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1 md:col-span-2">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                3. History of Present Illness (HPI)
              </span>
              <p className="text-clinical-700 leading-relaxed">
                46yo female reports 3-week onset of progressive fatigue and orthostatic presyncope upon standing from seated desk work. Calf fasciculations noted nocturnally. Denies syncope, angina, palpitations, dyspnea, or focal motor weakness.
              </p>
            </div>

            {/* 4. Relevant Medical History */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                4. Relevant Medical History
              </span>
              <p className="text-clinical-700">Essential Hypertension (dx Nov 2022), Pre-diabetes (HbA1c 5.8%).</p>
            </div>

            {/* 5. Current Medications */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                5. Current Medications
              </span>
              <p className="text-clinical-700">Hydrochlorothiazide 25mg PO QD, Metformin 500mg PO BID.</p>
            </div>

            {/* 6. Allergies */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                6. Documented Allergies
              </span>
              <p className="text-clinical-700 font-semibold text-amber-700">Sulfa antibiotics (Urticaria/rash in 2019).</p>
            </div>

            {/* 7. Relevant Investigations */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] block">
                7. Relevant Investigations (Labs)
              </span>
              <p className="text-clinical-700">Serum K+: 3.3 mEq/L (3 mos prior), eGFR 82 mL/min, HbA1c 5.8%.</p>
            </div>

            {/* 8. Risk Indicators */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1 md:col-span-2">
              <span className="font-bold text-amber-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                8. Risk Indicators & Red Flags
              </span>
              <p className="text-amber-950 leading-relaxed">
                Zero acute neurological or coronary red flags. High risk of drug-induced hypokalemia secondary to active Thiazide diuretic therapy combined with postural blood pressure drop.
              </p>
            </div>

            {/* 9. Questions to Clarify */}
            <div className="p-4 rounded-xl bg-white border border-clinical-200 space-y-1">
              <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-vital-600" />
                9. Questions to Clarify
              </span>
              <p className="text-clinical-700 leading-relaxed">
                1. Inquire if dietary sodium or fluid intake has decreased. 2. Verify home blood pressure readings upon rising.
              </p>
            </div>

            {/* 10. Suggested Clinical Considerations */}
            <div className="p-4 rounded-xl bg-vital-50/70 border border-vital-200 space-y-1">
              <span className="font-bold text-vital-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" />
                10. Areas for Clinical Consideration
              </span>
              <p className="text-clinical-700 leading-relaxed">
                Consider stat Basic Metabolic Panel (BMP) to recheck potassium; consider switching to ACE inhibitor or ARB monotherapy.
              </p>
            </div>
          </div>

          {/* Mandatory Disclaimer */}
          <div className="p-3.5 rounded-xl bg-clinical-100 text-clinical-600 text-[11px] leading-relaxed border border-clinical-200">
            <strong>Clinical Disclaimer: </strong>
            AI-generated pre-visit intelligence is designed to support clinicians and reduce documentation burden. It does not replace professional clinical judgment, physical examination, or diagnostic responsibility.
          </div>
        </div>
      </div>
    </section>
  );
};
