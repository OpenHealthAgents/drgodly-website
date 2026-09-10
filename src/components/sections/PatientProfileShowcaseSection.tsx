"use client";

import React from "react";
import {
  UserCheck,
  Pill,
  ShieldAlert,
  Activity,
  Heart,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PatientProfileShowcaseSectionProps {
  onOpenHealthProfile?: () => void;
}

export const PatientProfileShowcaseSection: React.FC<PatientProfileShowcaseSectionProps> = ({
  onOpenHealthProfile,
}) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital" icon={<UserCheck className="w-3.5 h-3.5" />}>
            Unified Health Profile
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-serif text-clinical-950 tracking-tight leading-tight">
            Keep your health history organized.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Your medical history shouldn&apos;t live in scattered mental notes, old emails, or crumpled clinic receipts. DrGodly organizes your conditions, medications, allergies, and lifestyle context into one encrypted, portable profile.
          </p>
        </div>

        {/* Interactive Profile Dashboard Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/50 p-6 sm:p-8 shadow-clinical-md">
          {/* Top Patient Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-clinical-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-vital-500 to-vital-700 text-white flex items-center justify-center font-serif text-xl font-bold shadow-clinical-sm">
                MK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-clinical-950">Maya K. (Age 38)</h3>
                  <span className="px-2 py-0.5 rounded-full bg-vital-100 text-vital-800 text-[11px] font-semibold">
                    Profile Complete 94%
                  </span>
                </div>
                <p className="text-xs text-clinical-500 flex items-center gap-1.5 mt-0.5">
                  <Lock className="w-3 h-3 text-clinical-400" />
                  <span>Encrypted Zero-Knowledge Health Record • Last updated 4 days ago</span>
                </p>
              </div>
            </div>

            <Button
              variant="vital"
              size="sm"
              onClick={onOpenHealthProfile}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="self-start sm:self-auto text-xs"
            >
              Update My Profile
            </Button>
          </div>

          {/* Profile Categories Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Active Medications */}
            <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-vital-600">
                  <Pill className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900">
                    Active Medications
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-clinical-500 bg-clinical-100 px-1.5 py-0.5 rounded">
                  2 Prescriptions
                </span>
              </div>
              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clinical-950">Lisinopril</span>
                    <span className="text-[11px] font-medium text-vital-600">10 mg Daily</span>
                  </div>
                  <p className="text-[10px] text-clinical-500 mt-0.5">For blood pressure • Oral tab, AM</p>
                </div>
                <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clinical-950">Vitamin D3</span>
                    <span className="text-[11px] font-medium text-vital-600">2,000 IU Daily</span>
                  </div>
                  <p className="text-[10px] text-clinical-500 mt-0.5">OTC supplement • Oral softgel</p>
                </div>
              </div>
            </div>

            {/* Documented Allergies */}
            <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldAlert className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900">
                    Documented Allergies
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                  Critical Safety
                </span>
              </div>
              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-xl bg-rose-50/50 border border-rose-200/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clinical-950">Penicillins / Amoxicillin</span>
                    <span className="text-[10px] font-semibold text-rose-700">Moderate Hives</span>
                  </div>
                  <p className="text-[10px] text-clinical-500 mt-0.5">Reaction: Urticaria (Diagnosed 2017)</p>
                </div>
                <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clinical-950">Latex Products</span>
                    <span className="text-[10px] font-medium text-amber-700">Mild Contact Rash</span>
                  </div>
                  <p className="text-[10px] text-clinical-500 mt-0.5">Localized contact dermatitis</p>
                </div>
              </div>
            </div>

            {/* Ongoing Conditions */}
            <div className="p-5 rounded-2xl bg-white border border-clinical-200 shadow-clinical-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sky-600">
                  <Activity className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-clinical-900">
                    Clinical Conditions
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-clinical-500 bg-clinical-100 px-1.5 py-0.5 rounded">
                  Active Care
                </span>
              </div>
              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clinical-950">Mild Essential HTN</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">Controlled</span>
                  </div>
                  <p className="text-[10px] text-clinical-500 mt-0.5">Dx: 2022 • Target BP &lt; 130/80</p>
                </div>
                <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clinical-950">Seasonal Rhinitis</span>
                    <span className="text-[10px] font-semibold text-clinical-600">Intermittent</span>
                  </div>
                  <p className="text-[10px] text-clinical-500 mt-0.5">Pollen triggers in Spring/Autumn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Surgeries & Lifestyle Context */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-2xl bg-white border border-clinical-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-vital-50 text-vital-600 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-400 block">Surgical & Past History</span>
                  <p className="text-xs font-semibold text-clinical-900">Laparoscopic Appendectomy (2018, No complications)</p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-vital-500" />
            </div>

            <div className="p-4 rounded-2xl bg-white border border-clinical-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-vital-50 text-vital-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-400 block">Lifestyle & Vitals</span>
                  <p className="text-xs font-semibold text-clinical-900">Avg 7,400 steps/day • Non-smoker • Sleep avg 6.9h</p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-vital-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
