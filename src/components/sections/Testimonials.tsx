"use client";

import React, { useState } from "react";
import { Quote, Stethoscope, HeartHandshake } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "doctor" | "patient">("all");

  const filtered = TESTIMONIALS.filter((t) => {
    if (filter === "all") return true;
    if (filter === "doctor") return t.category === "doctor" || t.category === "organization";
    if (filter === "patient") return t.category === "patient";
    return true;
  });

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="vital" icon={<HeartHandshake className="w-3.5 h-3.5" />}>
            Verified Perspectives
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            Trusted by Attending Physicians & Patients Alike
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Real stories from doctors who reclaimed their evenings and patients who finally felt understood.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-clinical-100 rounded-xl border border-clinical-200 text-xs font-semibold">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "px-4 py-1.5 rounded-lg transition-all",
                filter === "all"
                  ? "bg-white text-clinical-950 shadow-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              All Stories
            </button>
            <button
              onClick={() => setFilter("doctor")}
              className={cn(
                "px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5",
                filter === "doctor"
                  ? "bg-white text-clinical-950 shadow-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              <Stethoscope className="w-3.5 h-3.5 text-vital-600" />
              Doctors & CMOs
            </button>
            <button
              onClick={() => setFilter("patient")}
              className={cn(
                "px-4 py-1.5 rounded-lg transition-all",
                filter === "patient"
                  ? "bg-white text-clinical-950 shadow-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              Patients & Families
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl border border-clinical-200 bg-clinical-50/40 hover:bg-white hover:border-vital-500/30 hover:shadow-clinical-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-vital-50 border border-vital-200 text-vital-800 text-[11px] font-bold">
                    {t.highlight}
                  </div>
                  <Quote className="w-6 h-6 text-clinical-300 shrink-0" />
                </div>

                <p className="text-sm text-clinical-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-clinical-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clinical-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {t.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-clinical-950 flex items-center gap-1">
                    {t.author}
                  </div>
                  <div className="text-xs text-clinical-500">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-clinical-400 font-medium">
                    {t.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
