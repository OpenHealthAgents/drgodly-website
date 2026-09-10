"use client";

import React from "react";
import {
  History,
  Calendar,
  Stethoscope,
  HeartPulse,
  Download,
  Share2,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface TimelineEvent {
  date: string;
  year: string;
  title: string;
  category: string;
  provider: string;
  summary: string;
  tags: string[];
  status: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: "Oct 18, 2024",
    year: "2024",
    title: "Annual Wellness & Comprehensive Metabolic Panel",
    category: "Preventive Care / Labs",
    provider: "Dr. Sarah Jenkins, MD • LabCorp Diagnostics",
    summary: "HbA1c 5.6% (Optimal, down from 5.7%). Normal renal filtration (eGFR 96 mL/min). Vitamin D normalized to 48 ng/mL.",
    tags: ["HbA1c: 5.6%", "LDL: 112 mg/dL", "eGFR: 96 mL/min"],
    status: "Latest Record",
  },
  {
    date: "Aug 22, 2024",
    year: "2024",
    title: "Cardiometabolic Telemedicine Review",
    category: "Telehealth Consult",
    provider: "Dr. Emily Vance, MD • DrGodly Virtual Care",
    summary: "Evaluated 90-day home blood pressure logs. Average 122/78 mmHg. Confirmed Lisinopril 10mg maintenance with no adverse side effects.",
    tags: ["Lisinopril 10mg PO", "BP: 122/78", "SOAP Generated"],
    status: "Verified",
  },
  {
    date: "Jun 14, 2023",
    year: "2023",
    title: "Cardiovascular Specialization Consult",
    category: "Specialist Consult",
    provider: "Dr. Marcus Vance, FACC • Metro Cardiology",
    summary: "Transitioned pharmacotherapy from HCTZ to Lisinopril 10mg following mild hypokalemia. Established target blood pressure < 130/80.",
    tags: ["Rx Change: Lisinopril", "ECG: Normal Sinus", "Echocardiogram: WNL"],
    status: "Resolved",
  },
  {
    date: "Nov 12, 2022",
    year: "2022",
    title: "Initial Mild Hypertension Screening",
    category: "Primary Care Encounter",
    provider: "Dr. Sarah Jenkins, MD • Summit Health",
    summary: "Routine checkup identified baseline BP 136/88. Initiated dietary sodium restrictions, 7,000 steps daily protocol, and initial HCTZ trial.",
    tags: ["Baseline HTN", "Lifestyle Plan", "Lipid Baseline: 138"],
    status: "Historic Baseline",
  },
  {
    date: "May 19, 2018",
    year: "2018",
    title: "Laparoscopic Appendectomy",
    category: "Inpatient Surgery",
    provider: "Dr. Thomas Cole, FACS • St. Jude Medical Center",
    summary: "Uncomplicated surgical appendectomy for acute appendicitis. Discharged day 2. Penicillin allergy (urticaria) identified during pre-op triage.",
    tags: ["Surgical Cure", "Amoxicillin Allergy Flagged", "Discharged Stable"],
    status: "Archived",
  },
];

export const PatientLongitudinalTimelineSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital" icon={<History className="w-3.5 h-3.5" />}>
            Longitudinal Health Record
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Your health shouldn&apos;t reset every time you see a new doctor.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Whether you switch clinics, visit a cardiologist, or need urgent care while traveling, your health narrative moves with you. A living, compounding timeline that gets smarter with every visit.
          </p>
        </div>

        {/* Compounding Timeline Architecture Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/50 p-6 sm:p-8 shadow-clinical-md">
          {/* Header Stats Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-clinical-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vital-100 text-vital-700 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-clinical-950">
                  Continuous Care Graph
                </h4>
                <p className="text-xs text-clinical-500">
                  3 Clinics • 4 Physicians • 12 Lab Panels • 1 Continuous Story
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs" icon={<Share2 className="w-3.5 h-3.5" />}>
                Share w/ Doctor
              </Button>
              <Button variant="outline" size="sm" className="text-xs" icon={<Download className="w-3.5 h-3.5" />}>
                Export Record
              </Button>
            </div>
          </div>

          {/* Chronological Spine */}
          <div className="mt-8 relative pl-6 sm:pl-8 border-l-2 border-vital-200 space-y-8 ml-2 sm:ml-4">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Node Dot on spine */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white transition-transform group-hover:scale-125 ${
                  idx === 0 ? "bg-vital-600 ring-4 ring-vital-100" : "bg-clinical-400"
                }`} />

                {/* Event Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs group-hover:border-vital-300 group-hover:shadow-clinical-sm transition-all space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-vital-700 bg-vital-50 px-2 py-0.5 rounded border border-vital-200 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="text-[11px] font-semibold text-clinical-500">
                        {event.category}
                      </span>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full self-start sm:self-auto ${
                      idx === 0
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-clinical-100 text-clinical-700"
                    }`}>
                      {event.status}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-sm sm:text-base font-bold text-clinical-950">
                      {event.title}
                    </h5>
                    <p className="text-xs text-clinical-500 flex items-center gap-1.5 mt-0.5">
                      <Stethoscope className="w-3 h-3 text-clinical-400" />
                      <span>{event.provider}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-clinical-700 leading-relaxed">
                    {event.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {event.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-clinical-50 border border-clinical-150 text-[11px] font-mono text-clinical-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Portability Guarantee Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-vital-50/80 border border-vital-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-vital-950">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
              <span>
                <strong>Zero Lock-In:</strong> Your record conforms to USCDI & FHIR R4 international health data interoperability standards.
              </span>
            </div>
            <div className="flex items-center gap-1 font-semibold text-vital-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portable for Life</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
