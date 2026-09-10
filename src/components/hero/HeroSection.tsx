"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Pill, 
  FlaskConical, 
  Activity, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

interface HeroSectionProps {
  onStartJourney?: () => void;
  onOpenQuickAssess?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartJourney,
  onOpenQuickAssess,
}) => {
  const handleStart = onStartJourney || onOpenQuickAssess;
  const [activeTab, setActiveTab] = useState<"connecting" | "insight">("insight");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-clinical-radial">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-clinical-grid opacity-50 pointer-events-none" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-vital-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Announcement Pill */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vital-50 border border-vital-200/80 text-vital-800 text-xs font-semibold mb-6 shadow-clinical-sm animate-in fade-in">
            <span className="flex h-2 w-2 rounded-full bg-vital-500 animate-ping" />
            <span>AI-Native Healthcare Platform</span>
            <span className="text-vital-300">•</span>
            <span>Prepares You for Care</span>
          </div>

          {/* Exact Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-clinical-950 max-w-4xl text-balance font-sans leading-[1.12]">
            Healthcare that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vital-700 via-vital-600 to-teal-500">
              knows your story
            </span>
            .
          </h1>

          {/* Exact Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-clinical-600 max-w-2xl leading-relaxed text-balance">
            DrGodly brings together your health history, AI-powered care intelligence, and real doctors — so every healthcare conversation starts with context.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Button
              variant="vital"
              size="lg"
              onClick={() => {
                analytics.trackHomepageCta("hero_primary", "Start Your Health Journey");
                if (handleStart) handleStart();
              }}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-base"
            >
              Start Your Health Journey
            </Button>

            <Link 
              href="/how-it-works" 
              className="w-full sm:w-auto"
              onClick={() => analytics.trackHomepageCta("hero_secondary", "See How It Works")}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base"
              >
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Exact Reassurance below */}
          <p className="mt-4 text-xs font-medium text-clinical-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vital-600" />
            <span>AI-powered. Doctor-connected. Privacy-first.</span>
          </p>
          <p className="mt-1.5 text-[11px] text-clinical-400 text-center">
            Assistive intelligence for healthcare preparation. Does not replace emergency medical services or clinical judgment.
          </p>
        </div>

        {/* HERO INTERACTION: SIMULATED PRODUCT PREVIEW */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-clinical-200/90 bg-white shadow-2xl shadow-clinical-950/10 overflow-hidden">
          {/* Top Interface Bar */}
          <div className="bg-clinical-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-clinical-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-vital-500/20 border border-vital-400/30 flex items-center justify-center text-vital-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-clinical-200">
                  DrGodly Health Intelligence Session
                </div>
                <div className="text-[11px] text-clinical-400">
                  Simulated Real-Time Clinical Intake
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("connecting")}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-semibold transition-all",
                  activeTab === "connecting"
                    ? "bg-clinical-800 text-white"
                    : "text-clinical-400 hover:text-clinical-200"
                )}
              >
                1. Context Review
              </button>
              <button
                onClick={() => setActiveTab("insight")}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-semibold transition-all",
                  activeTab === "insight"
                    ? "bg-vital-600 text-white shadow-sm"
                    : "text-clinical-400 hover:text-clinical-200"
                )}
              >
                2. Connected Insight
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* 1. Prompt */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-vital-100 text-vital-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                AI
              </div>
              <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200 text-sm font-medium text-clinical-900 max-w-xl">
                &ldquo;Hi. What would you like help with today?&rdquo;
              </div>
            </div>

            {/* 2. Patient Input */}
            <div className="flex items-start gap-3 justify-end">
              <div className="p-4 rounded-2xl bg-clinical-900 text-white text-sm font-medium max-w-xl text-right">
                &ldquo;I&apos;ve been feeling unusually tired for the past 3 weeks.&rdquo;
              </div>
              <div className="w-8 h-8 rounded-full bg-clinical-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                You
              </div>
            </div>

            {/* 3. Reviewing Context Banner */}
            <div className="p-3.5 rounded-xl bg-vital-500/10 border border-vital-500/20 text-xs font-medium text-vital-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-vital-600 animate-pulse shrink-0" />
              <span>DrGodly is reviewing your symptoms and health context...</span>
            </div>

            {/* 4. Displaying Contextual Information */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 flex items-center gap-1">
                  <FlaskConical className="w-3 h-3 text-vital-600" />
                  Blood Tests
                </span>
                <div className="font-semibold text-clinical-900">Serum K+: 3.3 mEq/L</div>
                <div className="text-[10px] text-clinical-500">Ferritin 18 ng/mL (Low-norm)</div>
              </div>

              <div className="p-3 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 flex items-center gap-1">
                  <Pill className="w-3 h-3 text-vital-600" />
                  Medications
                </span>
                <div className="font-semibold text-clinical-900">Hydrochlorothiazide</div>
                <div className="text-[10px] text-clinical-500">25mg daily for BP</div>
              </div>

              <div className="p-3 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-vital-600" />
                  Conditions
                </span>
                <div className="font-semibold text-clinical-900">Essential HTN</div>
                <div className="text-[10px] text-clinical-500">Diagnosed Nov 2023</div>
              </div>

              <div className="p-3 rounded-xl bg-clinical-50 border border-clinical-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-clinical-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-vital-600" />
                  Past Encounters
                </span>
                <div className="font-semibold text-clinical-900">Annual Wellness</div>
                <div className="text-[10px] text-clinical-500">6 months ago</div>
              </div>
            </div>

            {/* 5. Generated Insight Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-vital-500/10 via-vital-50/50 to-teal-500/10 border border-vital-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-vital-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-vital-600" />
                  Generated Health Intelligence Insight
                </span>
                <Badge variant="vital">Context Connected</Badge>
              </div>

              <p className="text-sm text-clinical-900 font-medium leading-relaxed">
                Your reported 3-week fatigue correlates with your active Hydrochlorothiazide medication and borderline potassium levels (3.3 mEq/L) on your last blood test. This pattern suggests mild diuretic-induced electrolyte depletion rather than simple lifestyle fatigue.
              </p>

              {/* Key Differentiator Banner */}
              <div className="pt-2 border-t border-vital-200/80 text-xs font-semibold text-vital-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                <span>
                  DrGodly doesn&apos;t just analyze what you say today. It can connect today&apos;s concern with your health history.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
