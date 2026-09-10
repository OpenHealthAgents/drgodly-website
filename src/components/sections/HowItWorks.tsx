import React from "react";
import { 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Intake & Context Ingestion",
      role: "AI + Patient",
      desc: "Patients complete an adaptive conversational intake or ask a quick health question. DrGodly securely ingests previous lab panels, prescriptions, and discharge summaries to build a living clinical graph.",
      badgeText: "Zero Clipboard Friction",
      features: [
        "Adaptive symptom inquiry",
        "Encrypted PDF record parser",
        "Medication & allergy reconciliation"
      ]
    },
    {
      number: "02",
      title: "Clinical Synthesis & CDS",
      role: "AI Intelligence Engine",
      desc: "Before the physician enters the virtual exam room, DrGodly structures a 60-second executive briefing, cross-checks drug contraindications, and surfaces ranked differential diagnoses with peer-reviewed literature citations.",
      badgeText: "60-Second Briefing",
      features: [
        "Structured HPI timeline",
        "Evidence-backed differential diagnoses",
        "Clinical red-flag surveillance"
      ]
    },
    {
      number: "03",
      title: "Human Care & Instant Charting",
      role: "Doctor + Patient",
      desc: "The doctor and patient meet with 100% human focus—no typing, no frantic chart searching. Ambient listening automatically compiles compliant SOAP notes and pushes them directly into the hospital EHR upon physician approval.",
      badgeText: "Zero Pajama Charting",
      features: [
        "Full eye-contact consultations",
        "One-click compliant SOAP notes",
        "Instant prescription & lab orders"
      ]
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-clinical-50/50 border-t border-b border-clinical-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital" icon={<Sparkles className="w-3.5 h-3.5" />}>
            The 3-Step Healthcare Engine
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            How DrGodly Orchestrates Modern Healthcare
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            The intelligent layer between patients and doctors—orchestrating context before, during, and after every clinical encounter.
          </p>
        </div>

        {/* Workflow Steps Grid with Connecting Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-clinical-200 bg-white p-8 shadow-clinical-sm hover:shadow-clinical-md transition-all flex flex-col justify-between relative group"
            >
              {/* Step number watermark */}
              <div className="absolute top-6 right-6 font-mono text-4xl font-extrabold text-clinical-100 group-hover:text-vital-100 transition-colors pointer-events-none">
                {step.number}
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vital-700 bg-vital-50 px-2.5 py-1 rounded-md">
                  {step.role}
                </div>

                <h3 className="text-xl font-bold text-clinical-950">
                  {step.title}
                </h3>

                <p className="text-sm text-clinical-600 leading-relaxed">
                  {step.desc}
                </p>

                <div className="pt-4 border-t border-clinical-100 space-y-2">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-clinical-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-clinical-100/60 flex items-center justify-between text-xs text-clinical-500 font-medium">
                <span>Phase {step.number}</span>
                <span className="text-vital-700 font-semibold">{step.badgeText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
