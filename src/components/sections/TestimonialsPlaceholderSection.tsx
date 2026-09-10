"use client";

import React from "react";
import { User, Stethoscope, Building2, Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const TestimonialsPlaceholderSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-clinical-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="vital">Real Clinical Impact</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Trusted by patients, loved by clinicians.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            See how continuous health intelligence transforms care delivery for individuals, medical providers, and healthcare institutions.
          </p>
        </div>

        {/* 3 Structured Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Patient */}
          <div className="rounded-3xl border border-clinical-200 bg-clinical-50/40 p-8 flex flex-col justify-between hover:border-vital-300 transition-all shadow-clinical-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-vital-100 text-vital-700 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <Badge variant="vital">Patient Experience</Badge>
              </div>

              <Quote className="w-8 h-8 text-vital-300 opacity-70" />

              <p className="text-sm sm:text-base text-clinical-800 leading-relaxed font-serif italic">
                &ldquo;For the first time in ten years of managing Hashimoto&apos;s, I didn&apos;t have to bring a binder of lab reports. The doctor read my AI synthesis before opening the video call and immediately focused on adjusting my medication.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-clinical-200/80 mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-clinical-200 flex items-center justify-center text-xs font-bold text-clinical-800 font-mono">
                SR
              </div>
              <div>
                <div className="text-xs font-bold text-clinical-950">Sarah R.</div>
                <div className="text-[11px] text-clinical-500">Chronic Autoimmune Patient • California</div>
              </div>
            </div>
          </div>

          {/* Card 2: Doctor */}
          <div className="rounded-3xl border border-clinical-900 bg-clinical-950 p-8 flex flex-col justify-between text-white shadow-clinical-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-vital-500/20 text-vital-300 border border-vital-400/30 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-vital-500/20 text-vital-300 border border-vital-400/30">
                  Physician Perspective
                </span>
              </div>

              <Quote className="w-8 h-8 text-vital-400 opacity-60" />

              <p className="text-sm sm:text-base text-clinical-100 leading-relaxed font-serif italic">
                &ldquo;DrGodly cut my pajama-time charting by two hours every single day. The pre-visit report gives me a 60-second synthesis of 3 years of records, and the ambient SOAP note needs only quick tweaks before I sign it.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-clinical-800 mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-clinical-800 border border-clinical-700 flex items-center justify-center text-xs font-bold text-vital-300 font-mono">
                DR
              </div>
              <div>
                <div className="text-xs font-bold text-white">Dr. Elena Rostova, MD</div>
                <div className="text-[11px] text-clinical-400">Board-Certified Internal Medicine • New York</div>
              </div>
            </div>
          </div>

          {/* Card 3: Healthcare Organization */}
          <div className="rounded-3xl border border-clinical-200 bg-clinical-50/40 p-8 flex flex-col justify-between hover:border-vital-300 transition-all shadow-clinical-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-vital-100 text-vital-700 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <Badge variant="vital">Clinical Practice</Badge>
              </div>

              <Quote className="w-8 h-8 text-vital-300 opacity-70" />

              <p className="text-sm sm:text-base text-clinical-800 leading-relaxed font-serif italic">
                &ldquo;Implementing DrGodly across our 18-physician telehealth group increased visit throughput by 24% while patient satisfaction scores rose to 98%. It is the standard for modern telemedicine infrastructure.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-clinical-200/80 mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-clinical-200 flex items-center justify-center text-xs font-bold text-clinical-800 font-mono">
                MC
              </div>
              <div>
                <div className="text-xs font-bold text-clinical-950">MetroHealth Virtual Care</div>
                <div className="text-[11px] text-clinical-500">Multi-Specialty Clinic Network • Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
