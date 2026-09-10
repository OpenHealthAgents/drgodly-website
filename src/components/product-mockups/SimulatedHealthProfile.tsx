"use client";

import React, { useState } from "react";
import {
  User,
  HeartPulse,
  Pill,
  ShieldAlert,
  Scissors,
  FlaskConical,
  Users,
  Compass,
  Calendar,
  Lock,
  Download,
  Share2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type ProfileTab =
  | "overview"
  | "conditions"
  | "medications"
  | "allergies"
  | "procedures"
  | "investigations"
  | "family"
  | "social"
  | "timeline";

export const SimulatedHealthProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>("overview");

  const tabs: { id: ProfileTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: "overview", label: "Demographics & Vitals", icon: <User className="w-4 h-4" /> },
    { id: "conditions", label: "Conditions", icon: <HeartPulse className="w-4 h-4" />, badge: "2" },
    { id: "medications", label: "Medications", icon: <Pill className="w-4 h-4" />, badge: "2 Active" },
    { id: "allergies", label: "Allergies", icon: <ShieldAlert className="w-4 h-4" />, badge: "2 Flags" },
    { id: "procedures", label: "Procedures", icon: <Scissors className="w-4 h-4" /> },
    { id: "investigations", label: "Investigations", icon: <FlaskConical className="w-4 h-4" />, badge: "Oct 2024" },
    { id: "family", label: "Family History", icon: <Users className="w-4 h-4" /> },
    { id: "social", label: "Social History", icon: <Compass className="w-4 h-4" /> },
    { id: "timeline", label: "Health Timeline", icon: <Calendar className="w-4 h-4" /> },
  ];

  return (
    <div className="rounded-3xl border border-clinical-200 bg-white shadow-clinical-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
      {/* Top Patient Master Banner */}
      <div className="bg-clinical-950 text-white p-6 border-b border-clinical-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-vital-600 to-vital-400 text-white font-serif font-bold text-xl flex items-center justify-center shadow-clinical-sm ring-2 ring-white/10">
              MK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-serif text-white">Maya K.</h3>
                <span className="px-2 py-0.5 rounded-md bg-vital-500/20 text-vital-300 font-mono text-xs border border-vital-400/30">
                  MRN: DG-94820-24
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-clinical-300 mt-1">
                <span>38 y/o Female • DOB: Apr 12, 1986</span>
                <span>•</span>
                <span>Blood: A+ Rh Positive</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3" />
                  Encrypted Health Vault Active
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Button variant="outline" size="sm" className="text-xs text-white border-white/20 hover:bg-white/10" icon={<Share2 className="w-3.5 h-3.5" />}>
              Share Key
            </Button>
            <Button variant="vital" size="sm" className="text-xs" icon={<Download className="w-3.5 h-3.5" />}>
              Export FHIR
            </Button>
          </div>
        </div>
      </div>

      {/* Tab Navigation Rail */}
      <div className="bg-clinical-50 border-b border-clinical-200 px-4 flex items-center gap-1 overflow-x-auto scrollbar-none py-1.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-white text-clinical-950 shadow-clinical-xs border border-clinical-200 font-bold"
                  : "text-clinical-600 hover:text-clinical-900 hover:bg-white/50"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-medium ${
                  isActive ? "bg-vital-100 text-vital-800" : "bg-clinical-200 text-clinical-700"
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Tab Content View */}
      <div className="p-6 sm:p-8 min-h-[420px] bg-white">
        {/* TAB 1: OVERVIEW / DEMOGRAPHICS */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-500 block">Blood Pressure</span>
                <p className="text-lg font-bold text-clinical-950 mt-1 font-mono">122/78 mmHg</p>
                <span className="text-[10px] text-emerald-600 font-medium">Optimal w/ Lisinopril</span>
              </div>
              <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-500 block">Resting Heart Rate</span>
                <p className="text-lg font-bold text-clinical-950 mt-1 font-mono">68 bpm</p>
                <span className="text-[10px] text-clinical-500">Normal Sinus</span>
              </div>
              <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-500 block">BMI & Weight</span>
                <p className="text-lg font-bold text-clinical-950 mt-1 font-mono">23.4 (64 kg)</p>
                <span className="text-[10px] text-emerald-600 font-medium">Healthy Weight Range</span>
              </div>
              <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-clinical-500 block">HbA1c Glycemic</span>
                <p className="text-lg font-bold text-clinical-950 mt-1 font-mono">5.6%</p>
                <span className="text-[10px] text-vital-700 font-medium">Oct 18, 2024 (Normal)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl border border-clinical-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900 flex items-center gap-2">
                  <User className="w-4 h-4 text-vital-600" />
                  Demographics & Primary Care Attribution
                </h4>
                <div className="space-y-2 text-xs text-clinical-700">
                  <div className="flex justify-between py-1 border-b border-clinical-100">
                    <span className="text-clinical-500">Legal Name:</span>
                    <span className="font-semibold text-clinical-950">Maya Kristina Chen</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-clinical-100">
                    <span className="text-clinical-500">Preferred Language:</span>
                    <span className="font-semibold text-clinical-950">English (US)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-clinical-100">
                    <span className="text-clinical-500">Primary Care Physician:</span>
                    <span className="font-semibold text-vital-700">Dr. Sarah Jenkins, MD (Summit Health)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-clinical-100">
                    <span className="text-clinical-500">Emergency Contact:</span>
                    <span className="font-semibold text-clinical-950">David Chen (Spouse) • (555) 382-9912</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-clinical-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Health Profile Completeness (94%)
                </h4>
                <p className="text-xs text-clinical-600 leading-relaxed">
                  Your record is actively structured across 8 clinical domains. Both your primary care team and consulting telemedicine physicians can review full context instantaneously.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[11px] font-semibold">
                    ✓ Verified Pharmacy Feed
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[11px] font-semibold">
                    ✓ Connected LabCorp / Quest
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-vital-50 text-vital-800 font-mono text-[11px] font-semibold">
                    ✓ Wearable Vitals Synced
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONDITIONS */}
        {activeTab === "conditions" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-clinical-200 bg-clinical-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-clinical-950 text-sm">Essential (Primary) Hypertension</h4>
                  <Badge variant="clinical" className="text-[10px]">ICD-10: I10</Badge>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Controlled</span>
                </div>
                <p className="text-xs text-clinical-600 mt-1">
                  Diagnosed Nov 2022 by Dr. Sarah Jenkins. Stable on Lisinopril 10mg PO Daily. Home BP log averages 122/78 mmHg.
                </p>
              </div>
              <span className="text-[11px] font-mono text-clinical-500 shrink-0">Onset: 2 Years Ago</span>
            </div>

            <div className="p-5 rounded-2xl border border-clinical-200 bg-clinical-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-clinical-950 text-sm">Seasonal Allergic Rhinitis</h4>
                  <Badge variant="clinical" className="text-[10px]">ICD-10: J30.2</Badge>
                  <span className="px-2 py-0.5 rounded-full bg-clinical-200 text-clinical-800 text-[10px] font-semibold">Intermittent</span>
                </div>
                <p className="text-xs text-clinical-600 mt-1">
                  Pollen and tree triggers in Spring. Controlled with over-the-counter Cetirizine 10mg PRN.
                </p>
              </div>
              <span className="text-[11px] font-mono text-clinical-500 shrink-0">Childhood Onset</span>
            </div>
          </div>
        )}

        {/* TAB 3: MEDICATIONS */}
        {activeTab === "medications" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-vital-300 bg-vital-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-clinical-950 text-base">Lisinopril 10 mg Oral Tablet</h4>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Active Rx</span>
                </div>
                <p className="text-xs text-clinical-600">
                  Sig: Take 1 tablet by mouth daily in the morning for blood pressure. Prescribed by Dr. Marcus Vance.
                </p>
                <div className="flex items-center gap-3 text-[11px] text-vital-800 font-mono pt-1">
                  <span>Refills: 3 remaining</span>
                  <span>•</span>
                  <span>Last Refill: Aug 10, 2024 (CVS Pharmacy #4821)</span>
                </div>
              </div>
              <Badge variant="vital" className="text-[10px] shrink-0">96% Adherence</Badge>
            </div>

            <div className="p-5 rounded-2xl border border-clinical-200 bg-clinical-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-clinical-950 text-base">Vitamin D3 (Cholecalciferol) 2,000 IU</h4>
                  <span className="px-2 py-0.5 rounded-full bg-clinical-200 text-clinical-800 text-[10px] font-semibold">OTC Supplement</span>
                </div>
                <p className="text-xs text-clinical-600">
                  Sig: 1 softgel daily with meal. Initiated following Nov 2023 insufficiency (22 ng/mL). Successfully normalized to 48 ng/mL.
                </p>
              </div>
              <span className="text-[11px] font-mono text-clinical-500 shrink-0">Daily Morning Regimen</span>
            </div>
          </div>
        )}

        {/* TAB 4: ALLERGIES */}
        {activeTab === "allergies" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-rose-300 bg-rose-50/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-rose-950 text-sm">Penicillins / Amoxicillin</h4>
                  <span className="px-2 py-0.5 rounded-full bg-rose-200 text-rose-800 text-[10px] font-bold uppercase">Severe Contraindication</span>
                </div>
                <p className="text-xs text-rose-900 leading-relaxed">
                  Manifested as widespread pruritic urticaria (hives) 48 hours into oral course during pre-op in 2017. Avoid all beta-lactam class derivatives unless skin-tested.
                </p>
                <span className="text-[10px] font-mono text-rose-700 block pt-1">Diagnosed: St. Jude Medical • 2017</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-amber-950 text-sm">Natural Rubber Latex</h4>
                  <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-semibold">Contact Allergy</span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Localized erythematous dermatitis from surgical gloves or medical tape. Non-latex gloves required for all exams.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: PROCEDURES */}
        {activeTab === "procedures" && (
          <div className="p-5 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-vital-600" />
                <h4 className="font-bold text-clinical-950 text-sm">Laparoscopic Appendectomy</h4>
                <Badge variant="clinical" className="text-[10px]">CPT: 44970</Badge>
              </div>
              <span className="text-xs font-mono text-clinical-500">May 19, 2018</span>
            </div>
            <p className="text-xs text-clinical-600 leading-relaxed">
              Performed by Dr. Thomas Cole, FACS at St. Jude Medical Center for acute non-perforated appendicitis. Three-port laparoscopic approach with uneventful recovery. Pathology confirmed benign acute appendicitis.
            </p>
          </div>
        )}

        {/* TAB 6: INVESTIGATIONS */}
        {activeTab === "investigations" && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-clinical-200 bg-white space-y-3 shadow-clinical-xs">
              <div className="flex items-center justify-between border-b border-clinical-100 pb-2">
                <div>
                  <h4 className="font-bold text-clinical-950 text-sm">Comprehensive Metabolic & Glycemic Panel</h4>
                  <span className="text-[11px] text-clinical-500">LabCorp Diagnostics • Ref #98234-LC</span>
                </div>
                <span className="text-xs font-mono text-vital-700 bg-vital-50 px-2 py-0.5 rounded font-bold">Oct 18, 2024</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-clinical-50">
                  <span className="text-[10px] text-clinical-500 block">HbA1c</span>
                  <span className="font-bold text-clinical-950">5.6%</span>
                  <span className="text-[10px] text-emerald-600 block">Normal (&lt;5.7%)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-clinical-50">
                  <span className="text-[10px] text-clinical-500 block">Fasting Glucose</span>
                  <span className="font-bold text-clinical-950">92 mg/dL</span>
                  <span className="text-[10px] text-emerald-600 block">Optimal</span>
                </div>
                <div className="p-2.5 rounded-xl bg-clinical-50">
                  <span className="text-[10px] text-clinical-500 block">eGFR Filtration</span>
                  <span className="font-bold text-clinical-950">96 mL/min</span>
                  <span className="text-[10px] text-emerald-600 block">&gt;60 Normal</span>
                </div>
                <div className="p-2.5 rounded-xl bg-clinical-50">
                  <span className="text-[10px] text-clinical-500 block">LDL Cholesterol</span>
                  <span className="font-bold text-clinical-950">112 mg/dL</span>
                  <span className="text-[10px] text-vital-700 block">-26 vs 2023</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: FAMILY HISTORY */}
        {activeTab === "family" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500">Maternal Line</span>
              <h4 className="font-bold text-clinical-950 text-sm">Mother (Age 68, Living)</h4>
              <p className="text-xs text-clinical-700">Type 2 Diabetes Mellitus (Diagnosed at age 52, managed on Metformin).</p>
            </div>
            <div className="p-5 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500">Paternal Line</span>
              <h4 className="font-bold text-clinical-950 text-sm">Father (Age 71, Living)</h4>
              <p className="text-xs text-clinical-700">Coronary Artery Disease & Hypertension (Stent placed at age 64).</p>
            </div>
          </div>
        )}

        {/* TAB 8: SOCIAL HISTORY */}
        {activeTab === "social" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500">Tobacco / Nicotine</span>
              <h5 className="font-bold text-clinical-950 text-sm">Never Smoker</h5>
              <p className="text-xs text-clinical-600">Zero lifetime tobacco or vape exposure.</p>
            </div>
            <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500">Alcohol Intake</span>
              <h5 className="font-bold text-clinical-950 text-sm">Occasional / Social</h5>
              <p className="text-xs text-clinical-600">1–2 standard drinks per month.</p>
            </div>
            <div className="p-4 rounded-2xl border border-clinical-200 bg-clinical-50/50 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500">Activity & Sleep</span>
              <h5 className="font-bold text-clinical-950 text-sm">7,400 Steps • 6.8h Sleep</h5>
              <p className="text-xs text-clinical-600">Desk employment; daily walking habit.</p>
            </div>
          </div>
        )}

        {/* TAB 9: TIMELINE */}
        {activeTab === "timeline" && (
          <div className="relative pl-6 border-l-2 border-vital-200 space-y-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-vital-600 ring-4 ring-vital-100" />
              <div className="text-xs text-clinical-500 font-mono">Oct 18, 2024</div>
              <h5 className="font-bold text-clinical-950 text-sm">Comprehensive Metabolic Panel</h5>
              <p className="text-xs text-clinical-600">HbA1c 5.6%, LDL 112 mg/dL, Vitamin D normalized to 48 ng/mL.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-clinical-400" />
              <div className="text-xs text-clinical-500 font-mono">Aug 22, 2024</div>
              <h5 className="font-bold text-clinical-950 text-sm">Telemedicine Consultation w/ Dr. Emily Vance</h5>
              <p className="text-xs text-clinical-600">90-day BP review: verified 122/78 mmHg. Renewed Lisinopril 10mg.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-clinical-400" />
              <div className="text-xs text-clinical-500 font-mono">Jun 14, 2023</div>
              <h5 className="font-bold text-clinical-950 text-sm">Cardiology Consult w/ Dr. Marcus Vance</h5>
              <p className="text-xs text-clinical-600">Transitioned to Lisinopril 10mg from HCTZ.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
