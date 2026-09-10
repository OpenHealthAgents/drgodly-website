"use client";

import React, { useState } from "react";
import { 
  ClipboardCheck, 
  FileText, 
  Video, 
  BrainCircuit, 
  FileCheck2, 
  Database, 
  SearchCode, 
  GitMerge, 
  Sparkles,
  Layers
} from "lucide-react";
import { PLATFORM_FEATURES } from "@/data/features";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-vital-600" />,
  FileText: <FileText className="w-5 h-5 text-vital-600" />,
  Video: <Video className="w-5 h-5 text-vital-600" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-vital-600" />,
  FileCheck2: <FileCheck2 className="w-5 h-5 text-vital-600" />,
  Database: <Database className="w-5 h-5 text-vital-600" />,
  SearchCode: <SearchCode className="w-5 h-5 text-vital-600" />,
  GitMerge: <GitMerge className="w-5 h-5 text-vital-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-vital-600" />,
};

export const FeatureGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "patients" | "doctors" | "enterprise">("all");

  const filteredFeatures = PLATFORM_FEATURES.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "patients") return item.audience === "patients" || item.audience === "both";
    if (activeFilter === "doctors") return item.audience === "doctors" || item.audience === "both";
    if (activeFilter === "enterprise") return item.audience === "enterprise" || item.audience === "both" || item.audience === "doctors";
    return true;
  });

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="vital" icon={<Layers className="w-3.5 h-3.5" />}>
            The 9 Core Pillars
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            AI-Native Architecture Designed for Whole-Person Care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Every layer of DrGodly is designed to replace fragmented healthcare tools with an intelligent, cohesive clinical infrastructure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-clinical-100 rounded-xl border border-clinical-200 text-xs font-semibold">
            {(
              [
                { id: "all", label: "All 9 Capabilities" },
                { id: "patients", label: "Patient Intelligence" },
                { id: "doctors", label: "Clinical & Doctor Tools" },
                { id: "enterprise", label: "Enterprise & EMR" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg transition-all",
                  activeFilter === tab.id
                    ? "bg-white text-clinical-950 shadow-sm"
                    : "text-clinical-600 hover:text-clinical-900"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl border border-clinical-200/80 bg-white p-7 shadow-clinical-sm hover:shadow-clinical-md hover:border-vital-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-vital-50 border border-vital-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[feat.iconName] || <Sparkles className="w-5 h-5 text-vital-600" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-clinical-400">
                    {feat.number}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-vital-700 mb-1">
                  {feat.tag}
                </div>

                <h3 className="text-lg font-bold text-clinical-950 mb-2 group-hover:text-vital-800 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed mb-4">
                  {feat.fullDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-clinical-100 flex items-center justify-between text-xs font-medium">
                <span className="text-clinical-500">Metric Impact:</span>
                <span className="text-vital-700 font-bold bg-vital-50 px-2 py-0.5 rounded">
                  {feat.clinicalMetric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
