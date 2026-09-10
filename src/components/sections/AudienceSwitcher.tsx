"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Stethoscope, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface AudienceSwitcherProps {
  onOpenQuickAssess?: () => void;
  onOpenHealthProfile?: () => void;
  onOpenDoctorDemo?: () => void;
}

export const AudienceSwitcher: React.FC<AudienceSwitcherProps> = ({
  onOpenQuickAssess,
  onOpenHealthProfile,
  onOpenDoctorDemo,
}) => {
  const [activeAudience, setActiveAudience] = useState<"patients" | "doctors" | "organizations">("patients");

  const audienceContent = {
    patients: {
      badge: "For Patients & Families",
      title: "Healthcare that finally remembers your story.",
      subtitle: "Never repeat your entire medical history again. Experience seamless doctor visits where your physician already knows your context.",
      benefits: [
        { title: "Zero Wait-Room Clipboard Burden", desc: "Adaptive conversational intake replaces 20 pages of paper forms." },
        { title: "Continuity Across Encounters", desc: "Past blood panels, surgeries, and prescriptions stay connected in your secure health vault." },
        { title: "Plain-English Lab Explanations", desc: "Understand what your results mean without overwhelming medical jargon." },
        { title: "15-Minute Telehealth Access", desc: "Connect with board-certified physicians who are already briefed on your story." }
      ],
      ctaText: "Start Your Health Profile",
      ctaAction: onOpenHealthProfile,
      ctaSecondaryText: "Ask a Quick Question",
      ctaSecondaryAction: onOpenQuickAssess,
      learnMoreHref: "/patients",
      stats: [
        { value: "< 15 min", label: "Average wait to see an MD" },
        { value: "100%", label: "Encrypted data sovereignty" },
        { value: "4.9/5", label: "Patient satisfaction score" }
      ]
    },
    doctors: {
      badge: "For Attending Physicians & Clinicians",
      title: "Practice medicine again. Let AI do the charting.",
      subtitle: "Eliminate pajama-time EHR documentation. Enter telehealth visits with concise clinical summaries, cited decision support, and 1-click SOAP notes.",
      benefits: [
        { title: "60-Second Pre-Visit Briefings", desc: "Prioritized HPI, pertinent history, and red flags ready before you join the call." },
        { title: "Instant Ambient SOAP Notes", desc: "Automated note generation with ICD-10 & CPT billing code alignment." },
        { title: "Clinical Decision Support", desc: "Differential diagnoses cross-referenced against 2024 UpToDate & ACC guidelines." },
        { title: "Conversational EMR Search", desc: "Query years of legacy PDF records in plain English in under 3 seconds." }
      ],
      ctaText: "Schedule Clinician Demo",
      ctaAction: onOpenDoctorDemo,
      ctaSecondaryText: "Explore Doctor Command Center",
      ctaSecondaryAction: onOpenDoctorDemo,
      learnMoreHref: "/doctors",
      stats: [
        { value: "2.5 hrs", label: "Daily documentation time saved" },
        { value: "81%", label: "Reduction in chart-close time" },
        { value: "Zero", label: "Compromise on clinical liability" }
      ]
    },
    organizations: {
      badge: "For Health Systems, Clinics & Employers",
      title: "Scalable AI infrastructure for modern healthcare delivery.",
      subtitle: "Deploy intelligent clinical workflows, automated documentation, and longitudinal patient intelligence across your enterprise.",
      benefits: [
        { title: "FHIR HL7 Bidirectional Sync", desc: "Plugs seamlessly into Epic, Cerner, AthenaHealth, and modern cloud EHRs." },
        { title: "Physician Retention & Burnout Relief", desc: "Slash clinician documentation fatigue and reduce turnover rates across departments." },
        { title: "Enterprise Governance & Security", desc: "SOC2 Type II audited, BAA-backed, with zero third-party LLM data retention." },
        { title: "Higher Throughput & Revenue", desc: "Improve patient visit capacity by 35% without adding clinical headcount." }
      ],
      ctaText: "Request Enterprise Consultation",
      ctaAction: onOpenDoctorDemo,
      ctaSecondaryText: "View Security Architecture",
      ctaSecondaryAction: undefined,
      learnMoreHref: "/organizations",
      stats: [
        { value: "35%", label: "Increase in clinic throughput" },
        { value: "100%", label: "Encrypted data isolation" },
        { value: "4.2x", label: "Estimated first-year ROI" }
      ]
    }
  };

  const current = audienceContent[activeAudience];

  return (
    <section id="audiences" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Audience Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-clinical-100/80 rounded-2xl border border-clinical-200 shadow-sm max-w-xl w-full">
            <button
              onClick={() => setActiveAudience("patients")}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
                activeAudience === "patients"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <Users className="w-4 h-4 text-vital-600" />
              <span>For Patients</span>
            </button>

            <button
              onClick={() => setActiveAudience("doctors")}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
                activeAudience === "doctors"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <Stethoscope className="w-4 h-4 text-vital-600" />
              <span>For Doctors</span>
            </button>

            <button
              onClick={() => setActiveAudience("organizations")}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
                activeAudience === "organizations"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <Building2 className="w-4 h-4 text-vital-600" />
              <span>For Health Systems</span>
            </button>
          </div>
        </div>

        {/* Audience Content Display */}
        <div className="rounded-3xl border border-clinical-200 bg-gradient-to-b from-clinical-50/50 to-white p-8 sm:p-12 shadow-clinical-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="vital">{current.badge}</Badge>
              <h3 className="text-3xl sm:text-4xl font-bold text-clinical-950 tracking-tight leading-tight">
                {current.title}
              </h3>
              <p className="text-base text-clinical-600 leading-relaxed max-w-xl">
                {current.subtitle}
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {current.benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-clinical-200 shadow-sm space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-clinical-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>{b.title}</span>
                    </div>
                    <p className="text-xs text-clinical-500 pl-6 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button
                  variant="vital"
                  size="md"
                  onClick={current.ctaAction}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {current.ctaText}
                </Button>
                <Link href={current.learnMoreHref}>
                  <Button variant="outline" size="md">
                    Explore Dedicated {activeAudience === "patients" ? "Patient" : activeAudience === "doctors" ? "Physician" : "Enterprise"} Hub
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-clinical-900 text-white shadow-xl space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-vital-400">
                  Impact Metrics
                </div>

                <div className="space-y-4">
                  {current.stats.map((st, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60 flex items-center justify-between">
                      <span className="text-xs text-clinical-300 font-medium">
                        {st.label}
                      </span>
                      <span className="text-xl font-bold text-white font-mono">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-clinical-800 flex items-center justify-between text-xs text-clinical-400">
                  <span>Audited clinical outcomes</span>
                  <span className="text-vital-400 font-semibold">Verified 2024-2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
