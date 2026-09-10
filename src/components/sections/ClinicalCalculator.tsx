"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

interface ClinicalCalculatorProps {
  onOpenDoctorDemo?: () => void;
}

export const ClinicalCalculator: React.FC<ClinicalCalculatorProps> = ({
  onOpenDoctorDemo,
}) => {
  const [numDoctors, setNumDoctors] = useState(3);
  const [patientsPerDay, setPatientsPerDay] = useState(18);
  const [chartMinutesPerPatient, setChartMinutesPerPatient] = useState(14);

  // DrGodly reduces charting & pre-chart time by ~75%
  const currentDailyChartHoursPerDoc = (patientsPerDay * chartMinutesPerPatient) / 60;
  const drgodlyDailyChartHoursPerDoc = currentDailyChartHoursPerDoc * 0.25;
  const hoursSavedPerDocPerDay = currentDailyChartHoursPerDoc - drgodlyDailyChartHoursPerDoc;
  const hoursSavedPerWeekPractice = hoursSavedPerDocPerDay * 5 * numDoctors;
  
  // Standard physician hourly administrative opportunity cost ~$160/hr
  const annualPracticeSavings = hoursSavedPerWeekPractice * 48 * 160;
  
  // Additional patient visit capacity enabled per doctor per week
  const extraVisitCapacityPerWeek = Math.round((hoursSavedPerDocPerDay * 5) / 0.35);

  return (
    <section id="calculator" className="py-24 bg-white relative border-t border-clinical-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital" icon={<Calculator className="w-3.5 h-3.5" />}>
            Clinical Time & ROI Estimator
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            Calculate How Much Time DrGodly Gives Back to Your Practice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Physicians spend up to 2 hours of &ldquo;pajama-time&rdquo; charting for every hour of patient care. See your practice&apos;s recovery potential:
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl border border-clinical-200 bg-clinical-50/40 p-6 sm:p-10 shadow-clinical-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Sliders Form */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-clinical-900">
                  <span>Number of Physicians / Providers</span>
                  <span className="text-vital-700 font-mono text-base bg-vital-50 px-2.5 py-0.5 rounded border border-vital-200">
                    {numDoctors} {numDoctors === 1 ? "Physician" : "Physicians"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={numDoctors}
                  onChange={(e) => setNumDoctors(Number(e.target.value))}
                  className="w-full h-2 bg-clinical-200 rounded-lg appearance-none cursor-pointer accent-vital-600"
                />
                <div className="flex justify-between text-[11px] text-clinical-400">
                  <span>Solo Practitioner</span>
                  <span>Mid-Size Practice (30 MDs)</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-clinical-900">
                  <span>Average Patient Encounters / Day / MD</span>
                  <span className="text-vital-700 font-mono text-base bg-vital-50 px-2.5 py-0.5 rounded border border-vital-200">
                    {patientsPerDay} Visits
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="35"
                  value={patientsPerDay}
                  onChange={(e) => setPatientsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-clinical-200 rounded-lg appearance-none cursor-pointer accent-vital-600"
                />
                <div className="flex justify-between text-[11px] text-clinical-400">
                  <span>8 visits</span>
                  <span>35 visits</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-clinical-900">
                  <span>Current Pre-charting & SOAP Time / Visit</span>
                  <span className="text-vital-700 font-mono text-base bg-vital-50 px-2.5 py-0.5 rounded border border-vital-200">
                    {chartMinutesPerPatient} Mins
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="25"
                  value={chartMinutesPerPatient}
                  onChange={(e) => setChartMinutesPerPatient(Number(e.target.value))}
                  className="w-full h-2 bg-clinical-200 rounded-lg appearance-none cursor-pointer accent-vital-600"
                />
                <div className="flex justify-between text-[11px] text-clinical-400">
                  <span>8 mins</span>
                  <span>25 mins</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-clinical-500 italic">
                * Based on verified clinical studies showing DrGodly drops charting duration from 14 mins to ~3 mins per patient encounter.
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6">
              <div className="p-7 rounded-2xl bg-clinical-900 text-white shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-clinical-800 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-vital-400">
                    Estimated Clinic Impact
                  </span>
                  <span className="text-xs text-clinical-300">Annual Projection</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
                    <Clock className="w-5 h-5 text-vital-400 mb-1" />
                    <div className="text-2xl font-bold font-mono text-white">
                      {Math.round(hoursSavedPerWeekPractice)} hrs
                    </div>
                    <div className="text-xs text-clinical-300 mt-0.5">
                      Weekly Practice Time Saved
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
                    <Clock className="w-5 h-5 text-teal-400 mb-1" />
                    <div className="text-2xl font-bold font-mono text-white">
                      {hoursSavedPerDocPerDay.toFixed(1)} hrs
                    </div>
                    <div className="text-xs text-clinical-300 mt-0.5">
                      Daily Savings per Physician
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
                    <DollarSign className="w-5 h-5 text-vital-400 mb-1" />
                    <div className="text-2xl font-bold font-mono text-white">
                      {formatCurrency(annualPracticeSavings)}
                    </div>
                    <div className="text-xs text-clinical-300 mt-0.5">
                      Annual Admin Value Recovered
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-clinical-800/80 border border-clinical-700/60">
                    <Users className="w-5 h-5 text-teal-400 mb-1" />
                    <div className="text-2xl font-bold font-mono text-white">
                      +{extraVisitCapacityPerWeek}
                    </div>
                    <div className="text-xs text-clinical-300 mt-0.5">
                      Capacity for Visits / MD / Wk
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="vital"
                    size="md"
                    onClick={onOpenDoctorDemo}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full justify-center text-sm font-semibold"
                  >
                    Schedule Clinical Pilot for Your Practice
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
