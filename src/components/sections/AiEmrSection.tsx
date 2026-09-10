import React from "react";
import { Search, Sparkles, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const AiEmrSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">AI-Native Electronic Medical Records</Badge>

          {/* Exact Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Your medical record should be searchable like the rest of your life.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Stop digging through fragmented PDFs. DrGodly transforms unstructured medical archives into a conversational knowledge graph that answers clinical questions instantly.
          </p>
        </div>

        {/* EMR + Conversational Search Mockup */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-clinical-300 bg-clinical-50/50 p-6 sm:p-10 shadow-clinical-md space-y-6">
          {/* Top Search Input */}
          <div className="p-4 rounded-2xl bg-white border border-clinical-200 shadow-sm flex items-center gap-3">
            <Search className="w-5 h-5 text-vital-600 shrink-0" />
            <div className="flex-1 text-xs sm:text-sm font-semibold text-clinical-900">
              Doctor Query: &ldquo;Show me every episode of elevated blood pressure over the last 18 months.&rdquo;
            </div>
            <Badge variant="vital">Instant Query</Badge>
          </div>

          {/* AI Conversational Response */}
          <div className="p-6 rounded-2xl bg-white border border-clinical-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-vital-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-vital-600" />
              <span>Found 7 relevant encounters across 4 clinical facilities:</span>
            </div>

            {/* Timeline and Evidence */}
            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-bold text-clinical-900">Nov 14, 2024: 154/92 mmHg</span>
                  <span className="text-clinical-500">• Urgent Care Visit (Work stress exacerbation)</span>
                </div>
                <span className="text-[11px] font-mono text-vital-700 bg-vital-50 px-2 py-0.5 rounded">Source: UrgentCare_Discharge.pdf (p. 2)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-bold text-clinical-900">May 22, 2024: 148/88 mmHg</span>
                  <span className="text-clinical-500">• Annual Physical (Dr. Marcus Vance)</span>
                </div>
                <span className="text-[11px] font-mono text-vital-700 bg-vital-50 px-2 py-0.5 rounded">Source: PrimaryCare_Encounter_2024.pdf (p. 1)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-clinical-500 shrink-0" />
                  <span className="font-bold text-clinical-900">Jan 10, 2024: 142/86 mmHg</span>
                  <span className="text-clinical-500">• Cardiology Telehealth Follow-up</span>
                </div>
                <span className="text-[11px] font-mono text-vital-700 bg-vital-50 px-2 py-0.5 rounded">Source: Cardio_Clinic_Notes.pdf (p. 4)</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-clinical-500 flex items-center justify-between border-t border-clinical-100">
              <span>Remaining 4 home BP recordings correlated from patient-uploaded health logs.</span>
              <span className="text-vital-700 font-semibold">Evidence Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
